import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConditionalSections from "@/components/layout/ConditionalSections";

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

  return (
    <>
      <Header />
      <main className="pt-28">{children}</main>
      <ConditionalSections />
      <Footer />
    </>
  );
}
