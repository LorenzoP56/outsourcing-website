import Hero from "@/components/sections/Blog/Hero";
import Blog from "@/components/sections/Blog/Blog";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { getAllPosts, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { COLORS } from "@/lib/constants";

// ISR: rigenera la pagina ogni 60 secondi
export const revalidate = 60;

const BASE_URL = "https://osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    ...(locale === 'en' && {
      robots: { index: false, follow: false },
    }),
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        ...Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/blog`])),
        'x-default': `${BASE_URL}/it/blog`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${BASE_URL}/${locale}/blog`,
      siteName: "Outsourcing Group",
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: "website",
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

  // EN: show coming soon — do not fetch Italian posts
  if (locale === 'en') {
    const t = await getTranslations({ locale, namespace: 'Blog' });
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
        />
        <Hero />
        <section className="lg:px-32 lg:py-24 px-8 py-16 text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT }}
            >
              {t('comingSoon.title')}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: COLORS.TEXT }}>
              {t('comingSoon.description')}
            </p>
            <Link
              href="/blog"
              locale="it"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: COLORS.BLUE }}
            >
              {t('comingSoon.cta')}
            </Link>
          </div>
        </section>
      </>
    );
  }

  // IT: fetch posts da WordPress
  const posts = await getAllPosts();

  const blogs = posts.map((post) => ({
    slug: post.slug,
    category: post.categories?.nodes?.[0]?.name?.toUpperCase() || "",
    title: post.title,
    description: stripHtml(post.excerpt),
    image: post.featuredImage?.node?.sourceUrl || "/website_images/Home/placeholder_blog_outsourcing_padova.webp",
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
