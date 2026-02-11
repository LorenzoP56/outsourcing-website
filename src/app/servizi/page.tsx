import Hero from "@/components/sections/Servizi/Hero";
import Servizi from "@/components/sections/Servizi/Servizi";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Servizi BPO e Outsourcing Back Office | Outsourcing Group",
  description: "Servizi BPO professionali: Contact Center, Digital Back Office, Data Management e Training. Esternalizza i processi aziendali e riduci i costi.",
  alternates: {
    canonical: "https://www.osgdigitaleconomy.com/servizi",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Servizi", url: "/servizi" },
]);

export default function ServiziPage() {
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
      <Servizi />
    </>
  );
}

