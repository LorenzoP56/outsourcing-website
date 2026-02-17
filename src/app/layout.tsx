import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Asap, Jost } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const isProduction = process.env.ENABLE_INDEXING === "true";

const asap = Asap({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-asap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Outsourcing",
  description: "Outsourcing Website",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  ...(!isProduction && {
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  }),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <GoogleTagManager gtmId="GTM-MSZNQ336" />
      <body className={`${asap.variable} ${jost.variable} ${asap.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
