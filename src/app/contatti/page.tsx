import Hero from "@/components/sections/Contatti/Hero";
import Form from "@/components/sections/Contatti/Form";
import type { Metadata } from "next";
import { organizationSchema, localBusinessSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Richiedi una consulenza gratuita | Outsourcing Group",
  description: "Richiedi una consulenza gratuita sui nostri servizi di outsourcing. Preventivo personalizzato per Back Office, Contact Center, BPO. Risposta in 24h.",
  alternates: {
    canonical: "https://www.outsourcinggroup.it/contatti",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contatti", url: "/contatti" },
]);

export default function Contatti() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(localBusinessSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)}
      />
      <Hero />
      <Form />
    </>
  );
}

