import Hero from "@/components/sections/Esternalizzare/Hero";
import Motivi from "@/components/sections/Esternalizzare/Motivi";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Esternalizzazione' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `${BASE_URL}/${locale}/esternalizzazione`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/esternalizzazione`])),
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Perché Esternalizzare", url: "/esternalizzazione" },
]);

export default async function Esternalizzare({ params }: { params: Promise<{ locale: string }> }) {
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
      <Motivi />
    </>
  );
}

