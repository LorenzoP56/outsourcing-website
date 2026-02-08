import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Asap, Jost } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "../globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConditionalSections from "@/components/layout/ConditionalSections";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-MSZNQ336" />
      <body className={`${asap.variable} ${jost.variable} ${asap.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="pt-28">{children}</main>
          <ConditionalSections />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
