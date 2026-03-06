import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://consent.cookiebot.com https://consentcdn.cookiebot.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://consentcdn.cookiebot.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob: https://consentcdn.cookiebot.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://api.brevo.com https://outscourcing.marketingrent.it https://consent.cookiebot.com https://consentcdn.cookiebot.com; frame-src 'self' https://www.google.com https://www.googletagmanager.com https://consentcdn.cookiebot.com; base-uri 'self'; form-action 'self'" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "outscourcing.marketingrent.it",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: securityHeaders,
    },
  ],
};

export default withNextIntl(nextConfig);

