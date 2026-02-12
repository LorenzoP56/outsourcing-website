import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, azienda, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Nome e email sono obbligatori." },
        { status: 400 }
      );
    }

    const brevoKey = process.env.BREVO_KEY;
    if (!brevoKey) {
      console.error("BREVO_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Errore di configurazione del server." },
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
        email,
        attributes: {
          NOME: name,
          AZIENDA: azienda || "",
          MEX: message || "",
        },
        listIds: [3],
        emailBlacklisted: false,
        smsBlacklisted: false,
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => null);
      console.error("Brevo API error:", brevoResponse.status, errorData);
      return NextResponse.json(
        { success: false, error: "Errore nell'invio dei dati. Riprova più tardi." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Errore del server. Riprova più tardi." },
      { status: 500 }
    );
  }
}
