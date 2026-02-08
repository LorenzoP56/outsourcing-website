import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {Link} from "@/i18n/navigation";
import { getPostBySlug, getAllSlugs, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { organizationSchema, generateBreadcrumbSchema, generateArticleSchema, jsonLdScript } from "@/lib/jsonld";
import { COLORS } from "@/lib/constants";
import ArticleHero from "@/components/sections/Blog/ArticleHero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// ISR: rigenera la pagina ogni 60 secondi
export const revalidate = 60;

// Permette di generare nuove pagine on-demand per slug non pre-renderizzati
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Genera i parametri statici per pre-render
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

const BASE_URL = "https://www.osgdigitaleconomy.com";

// Genera i metadata dinamici da Yoast SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    const t = await getTranslations({ locale, namespace: 'Blog' });
    return {
      title: t('meta.notFoundTitle'),
    };
  }

  const imageUrl = post.seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl;
  const ogLocale = locale === 'it' ? 'it_IT' : 'en_US';

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || stripHtml(post.excerpt),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/blog/${slug}`])),
    },
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || stripHtml(post.excerpt),
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      siteName: "Outsourcing Group",
      locale: ogLocale,
      type: "article",
      publishedTime: post.date,
      authors: ["Outsourcing Group"],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || stripHtml(post.excerpt),
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations('Common');

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = post.categories?.nodes?.[0]?.name || "";
  const formattedDate = formatDate(post.date);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.seo?.metaDesc || stripHtml(post.excerpt),
    slug: slug,
    date: post.date,
    image: post.featuredImage?.node?.sourceUrl,
    category: category,
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleSchema)}
      />

      {/* Hero Section con Featured Image */}
      <ArticleHero
        title={post.title}
        category={category}
        date={formattedDate}
        image={post.featuredImage?.node?.sourceUrl || "/images/Blog/bgBlog.webp"}
        imageAlt={post.featuredImage?.node?.altText || post.title}
      />

      {/* Content Section */}
      <article className="lg:px-32 lg:py-16 px-4 md:px-8 py-8 md:py-12 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg prose-pre:overflow-x-auto prose-pre:max-w-full [&_*]:max-w-full [&_iframe]:max-w-full [&_iframe]:w-full [&_img]:max-w-full [&_img]:h-auto"
            style={{ color: COLORS.TEXT }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: COLORS.BLUE }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {tCommon('backToBlog')}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
