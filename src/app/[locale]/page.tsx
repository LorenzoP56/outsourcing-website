import Hero from "@/components/sections/Home/Hero";
import dynamic from "next/dynamic";

const Group = dynamic(() => import("@/components/sections/Home/Group"));
const Servizi = dynamic(() => import("@/components/sections/Home/Servizi"));
const Esternalizzare = dynamic(() => import("@/components/sections/Home/Esternalizzare"));
const Form = dynamic(() => import("@/components/sections/Home/Form"));
const DomandeFrequenti = dynamic(() => import("@/components/layout/DomandeFrequenti"));
const Blog = dynamic(() => import("@/components/sections/Home/Blog"));
import type { Metadata } from "next";
import { organizationSchema, localBusinessSchema, websiteSchema, generateFAQSchema, jsonLdScript } from "@/lib/jsonld";
import { getLatestPosts, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://osgdigitaleconomy.com";

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
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${BASE_URL}/${locale}`,
      siteName: "Outsourcing Group",
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: "website",
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: 'FAQ' });
  const faqKeys = ["q1", "q2", "q3", "q4"] as const;
  const faqSchema = generateFAQSchema(
    faqKeys.map((key) => ({
      question: tFaq(`questions.${key}.question`),
      answer: tFaq(`questions.${key}.answer`),
    }))
  );

  const posts = await getLatestPosts(3);

  const blogPosts = posts.map(post => ({
    slug: post.slug,
    category: post.categories.nodes[0]?.name || '',
    title: post.title,
    description: stripHtml(post.excerpt),
    image: post.featuredImage?.node.sourceUrl || '/website_images/Home/placeholder_blog_outsourcing_padova.webp',
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
        media="(min-width: 1024px)"
      />
      <link
        rel="preload"
        href="/website_images/Home/bgBlog.webp"
        as="image"
        type="image/webp"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema)}
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
