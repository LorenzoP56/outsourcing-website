import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/ServiziDetail/Hero";
import Funzionalita from "@/components/sections/ServiziDetail/Funzionalita";
import Vantaggi from "@/components/sections/ServiziDetail/Vantaggi";
import ServiceContent from "@/components/sections/ServiziDetail/ServiceContent";

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
    title: `${service.name} | Outsourcing`,
    description: service.detailDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero title={service.name} description={service.detailDescription} bgHero={service.headerImage} />
      <Funzionalita functionalityTitle={service.functionalityTitle} functionalitySubtitle={service.functionalitySubtitle} functionality={service.functionality} />
      <Vantaggi advantages={service.advantages} />
      <ServiceContent detailedContent={service.detailedContent} />
    </>
  );
}

