import Hero from "@/components/sections/Esternalizzare/Hero";
import Motivi from "@/components/sections/Esternalizzare/Motivi";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Perché Esternalizzare? | Vantaggi Outsourcing BPO | Outsourcing Group",
  description: "Scopri i vantaggi dell'esternalizzazione: riduci i costi fino al 40%, aumenta efficienza e focus sul core business. Guida completa al BPO.",
  alternates: {
    canonical: "https://www.osgdigitaleconomy.com/esternalizzazione",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Perché Esternalizzare", url: "/esternalizzazione" },
]);

export default function Esternalizzare() {
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

