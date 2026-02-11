import Hero from "@/components/sections/Home/Hero";
import Group from "@/components/sections/Home/Group";
import Servizi from "@/components/sections/Home/Servizi";
import Esternalizzare from "@/components/sections/Home/Esternalizzare";
import DomandeFrequenti from "@/components/layout/DomandeFrequenti";
import Form from "@/components/sections/Home/Form";
import Blog from "@/components/sections/Home/Blog";
import type { Metadata } from "next";
import { organizationSchema, localBusinessSchema, websiteSchema, jsonLdScript } from "@/lib/jsonld";
import { getLatestPosts, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}`])),
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = await getLatestPosts(3);

  const blogPosts = posts.map(post => ({
    slug: post.slug,
    category: post.categories.nodes[0]?.name || '',
    title: post.title,
    description: stripHtml(post.excerpt),
    image: post.featuredImage?.node.sourceUrl || '/images/Home/desktop/blog/1.png',
    date: formatDate(post.date),
  }));

  return (
    <>
      <link
        rel="preload"
        href="/website_images/Home/servizi-outsourcing-italia2.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
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
      <Blog posts={blogPosts} />
    </>
  );
}
