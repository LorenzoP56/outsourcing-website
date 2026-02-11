import Hero from "@/components/sections/ChiSiamo/Hero";
import LaNostraStoria from "@/components/sections/ChiSiamo/LaNostraStoria";
import Costruiamo from "@/components/sections/ChiSiamo/Costruiamo";
import Valori from "@/components/sections/ChiSiamo/Valori";
import Team from "@/components/sections/ChiSiamo/Team";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ChiSiamo' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `${BASE_URL}/${locale}/chi-siamo`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/chi-siamo`])),
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Chi Siamo", url: "/chi-siamo" },
]);

export default async function ChiSiamo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)}
      />
      <Hero />
      <LaNostraStoria />
      <Costruiamo />
      <Valori />
      <Team />
    </>
  );
}

