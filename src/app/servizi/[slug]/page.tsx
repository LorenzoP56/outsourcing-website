import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/ServiziDetail/Hero";
import Funzionalita from "@/components/sections/ServiziDetail/Funzionalita";
import Vantaggi from "@/components/sections/ServiziDetail/Vantaggi";
import ServiceContent from "@/components/sections/ServiziDetail/ServiceContent";
import { organizationSchema, generateBreadcrumbSchema, generateServiceSchema, jsonLdScript } from "@/lib/jsonld";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servizio non trovato",
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.outsourcinggroup.it/servizi/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Servizi", url: "/servizi" },
    { name: service.name, url: `/servizi/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.metaDescription,
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
      <Hero title={service.name} description={service.detailDescription} bgHero={service.headerImage} />
      <Funzionalita functionalityTitle={service.functionalityTitle} functionalitySubtitle={service.functionalitySubtitle} grid={service.grid} functionality={service.functionality} />
      <Vantaggi advantagesTitle={service.advantagesTitle} advantages={service.advantages} />
      <ServiceContent detailedContent={service.detailedContent} />
    </>
  );
}

