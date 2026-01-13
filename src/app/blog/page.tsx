import Hero from "@/components/sections/Blog/Hero";
import Blog from "@/components/sections/Blog/Blog";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog Outsourcing | News su BPO e Back Office | Outsourcing Group",
  description: "Blog su outsourcing e BPO: articoli su customer care, esternalizzazione processi, GDPR e best practices. Aggiornamenti per decision maker.",
  alternates: {
    canonical: "https://www.outsourcinggroup.it/blog",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
]);

export default function BlogPage() {
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
      <Blog />
    </>
  );
}

