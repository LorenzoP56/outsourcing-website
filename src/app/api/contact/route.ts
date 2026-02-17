import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

function sanitize(input: string): string {
  return input.trim().replace(/<[^>]*>/g, "");
}

// Simple in-memory rate limiting (per IP, resets on server restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 submissions per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, errorCode: "RATE_LIMITED" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, azienda, message, privacy, website } = body;

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (website) {
      // Silently accept to not reveal the honeypot
      return NextResponse.json({ success: true });
    }

    // Required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, errorCode: "MISSING_FIELDS" },
        { status: 400 }
      );
    }

    // Privacy consent
    if (!privacy) {
      return NextResponse.json(
        { success: false, errorCode: "PRIVACY_REQUIRED" },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, errorCode: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { success: false, errorCode: "INPUT_TOO_LONG" },
        { status: 400 }
      );
    }
    if (azienda && azienda.length > MAX_COMPANY_LENGTH) {
      return NextResponse.json(
        { success: false, errorCode: "INPUT_TOO_LONG" },
        { status: 400 }
      );
    }
    if (message && message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, errorCode: "INPUT_TOO_LONG" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name);
    const sanitizedAzienda = sanitize(azienda || "");
    const sanitizedMessage = sanitize(message || "");

    const brevoKey = process.env.BREVO_KEY;
    if (!brevoKey) {
      console.error("BREVO_KEY is not configured");
      return NextResponse.json(
        { success: false, errorCode: "SERVER_ERROR" },
        { status: 500 }
      );
    }

    const brevoResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": brevoKey,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        attributes: {
          NOME: sanitizedName,
          AZIENDA: sanitizedAzienda,
          MEX: sanitizedMessage,
        },
        listIds: [3],
        emailBlacklisted: false,
        smsBlacklisted: false,
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => null);
      console.error("Brevo API error:", brevoResponse.status, errorData);
      return NextResponse.json(
        { success: false, errorCode: "SEND_ERROR" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, errorCode: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
