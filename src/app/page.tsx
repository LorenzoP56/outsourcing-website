import Hero from "@/components/sections/Home/Hero";
import Group from "@/components/sections/Home/Group";
import Servizi from "@/components/sections/Home/Servizi";
import Esternalizzare from "@/components/sections/Home/Esternalizzare";
import DomandeFrequenti from "@/components/layout/DomandeFrequenti";
import Form from "@/components/sections/Home/Form";
import Blog from "@/components/sections/Home/Blog";
import type { Metadata } from "next";
import { organizationSchema, localBusinessSchema, websiteSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Outsourcing e BPO Italia | Digital Back Office dal 1999 | Outsourcing Group",
  description: "Servizi di outsourcing e BPO per aziende italiane. Dal 1999 gestiamo Digital Back Office e Contact Center. Riduci i costi operativi fino al 40%.",
  alternates: {
    canonical: "https://www.osgdigitaleconomy.com",
  },
};

export default function Home() {
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
        dangerouslySetInnerHTML={jsonLdScript(websiteSchema)}
      />
      <Hero />
      <Group />
      <Servizi />
      <Esternalizzare />
      <Form />
      <DomandeFrequenti />
      <Blog />
    </>
  );
}
