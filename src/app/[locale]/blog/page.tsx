import Hero from "@/components/sections/Blog/Hero";
import Blog from "@/components/sections/Blog/Blog";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { getAllPosts, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// ISR: rigenera la pagina ogni 60 secondi
export const revalidate = 60;

const BASE_URL = "https://www.osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/blog`])),
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
]);

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

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
