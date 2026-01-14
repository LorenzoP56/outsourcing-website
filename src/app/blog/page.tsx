import Hero from "@/components/sections/Blog/Hero";
import Blog from "@/components/sections/Blog/Blog";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { getAllPosts, formatDate, stripHtml } from "@/lib/graph-ql/queries";

// ISR: rigenera la pagina ogni 60 secondi
export const revalidate = 60;

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

export default async function BlogPage() {
  // Fetch posts da WordPress
  const posts = await getAllPosts();

  // Trasforma i post nel formato atteso dal componente Blog
  const blogs = posts.map((post) => ({
    slug: post.slug,
    category: post.categories?.nodes?.[0]?.name?.toUpperCase() || "",
    title: post.title,
    description: stripHtml(post.excerpt),
    image: post.featuredImage?.node?.sourceUrl || "/images/Blog/blog/1.png",
    date: formatDate(post.date),
  }));

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
      <Blog posts={blogs} />
    </>
  );
}
