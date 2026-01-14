import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllSlugs, formatDate, stripHtml } from "@/lib/graph-ql/queries";
import { organizationSchema, generateBreadcrumbSchema, generateArticleSchema, jsonLdScript } from "@/lib/jsonld";
import { COLORS } from "@/lib/constants";

// ISR: rigenera la pagina ogni 60 secondi
export const revalidate = 60;

// Permette di generare nuove pagine on-demand per slug non pre-renderizzati
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Genera i parametri statici per pre-render
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Genera i metadata dinamici da Yoast SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Articolo non trovato | Outsourcing Group",
    };
  }

  const imageUrl = post.seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl;

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || stripHtml(post.excerpt),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.outsourcinggroup.it/blog/${slug}`,
    },
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || stripHtml(post.excerpt),
      url: `https://www.outsourcinggroup.it/blog/${slug}`,
      siteName: "Outsourcing Group",
      locale: "it_IT",
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
  const { slug } = await params;
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
      <section className="relative min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={post.featuredImage?.node?.sourceUrl || "/images/Blog/bgBlog.webp"}
          alt={post.featuredImage?.node?.altText || post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 py-16 max-w-4xl">
          {category && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
              style={{ backgroundColor: COLORS.BLUE, color: "white" }}
            >
              {category}
            </span>
          )}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {post.title}
          </h1>
          <time className="text-white/80 text-sm">{formattedDate}</time>
        </div>
      </section>

      {/* Content Section */}
      <article className="lg:px-32 lg:py-16 px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
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
              Torna al Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
