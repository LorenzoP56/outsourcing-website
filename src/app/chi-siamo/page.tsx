import Hero from "@/components/sections/ChiSiamo/Hero";
import LaNostraStoria from "@/components/sections/ChiSiamo/LaNostraStoria";
import Costruiamo from "@/components/sections/ChiSiamo/Costruiamo";
import Valori from "@/components/sections/ChiSiamo/Valori";
import Team from "@/components/sections/ChiSiamo/Team";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Chi Siamo | 25 Anni di Esperienza in Digital Back Office",
  description: "Scopri Outsourcing Group: dal 1999 partner per servizi BPO e back office digitale. 25 anni di esperienza, partner di autorità di certificazione europea.",
  alternates: {
    canonical: "https://www.osgdigitaleconomy.com/chi-siamo",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Chi Siamo", url: "/chi-siamo" },
]);

export default function ChiSiamo() {
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

