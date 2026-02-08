import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/ServiziDetail/Hero";
import Funzionalita from "@/components/sections/ServiziDetail/Funzionalita";
import Vantaggi from "@/components/sections/ServiziDetail/Vantaggi";
import ServiceContent from "@/components/sections/ServiziDetail/ServiceContent";
import { organizationSchema, generateBreadcrumbSchema, generateServiceSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.osgdigitaleconomy.com";

interface ServicePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  const t = await getTranslations({ locale, namespace: 'Servizi' });

  if (!service) {
    return {
      title: t('meta.notFoundTitle'),
    };
  }

  return {
    title: t(`details.${slug}.name`),
    description: t(`details.${slug}.serviceDescription`),
    alternates: {
      canonical: `${BASE_URL}/${locale}/servizi/${service.slug}`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/servizi/${service.slug}`])),
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const t = await getTranslations('Servizi');

  // Build functionality array: icons from SERVICES, text from translations
  const functionality = service.functionality.map((item, index) => {
    const key = `details.${slug}.functionality.item${index + 1}`;
    const hasTitle = 'title' in item;
    return {
      icon: item.icon,
      ...(hasTitle ? {
        title: t(`${key}.title`),
        description: t(`${key}.description`),
      } : {
        description: t(key),
      }),
    };
  });

  // Build advantages array: text from translations
  const advantages = service.advantages.map((item, index) => {
    const key = `details.${slug}.advantages.item${index + 1}`;
    const hasTitle = 'title' in item;
    return hasTitle ? {
      title: t(`${key}.title`),
      description: t(`${key}.description`),
    } : {
      description: t(key),
    };
  });

  // Build detailedContent: image from SERVICES, text from translations
  // Use t.raw() because paragraphs contain HTML tags (<strong>) rendered via dangerouslySetInnerHTML
  const paragraphs = service.detailedContent.paragraphs.map((_, index) =>
    t.raw(`details.${slug}.detailedContent.p${index + 1}`)
  );

  const detailedContent = {
    title: t(`details.${slug}.detailedContentTitle`),
    image: service.detailedContent.image,
    paragraphs,
  };

  const serviceName = t(`details.${slug}.name`);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Servizi", url: "/servizi" },
    { name: serviceName, url: `/servizi/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: serviceName,
    description: t(`details.${slug}.serviceDescription`),
    slug: service.slug,
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema)}
      />
      <Hero title={serviceName} description={t(`details.${slug}.detailDescription`)} bgHero={service.headerImage} />
      <Funzionalita functionalityTitle={t(`details.${slug}.functionalityTitle`)} functionalitySubtitle={t(`details.${slug}.functionalitySubtitle`)} grid={service.grid} functionality={functionality} />
      <Vantaggi advantagesTitle={t(`details.${slug}.advantagesTitle`)} advantages={advantages} />
      <ServiceContent detailedContent={detailedContent} />
    </>
  );
}

