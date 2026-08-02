import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { COLORS } from "@/lib/constants";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import type { ServiceDetail } from "@/sanity/lib/types";

const BASE_URL = "https://osgdigitaleconomy.com";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const { data } = await sanityFetch({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug },
    stega: false,
  });
  const service = data as ServiceDetail | null;

  if (!service) return {};

  const title = service.seo?.metaTitle || service.title;
  const description = service.seo?.metaDescription || service.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/negozio/${slug}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}/negozio/${slug}`])),
        "x-default": `${BASE_URL}/it/negozio/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/negozio/${slug}`,
      siteName: "Outsourcing Group",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Negozio" });

  const { data: serviceData } = await sanityFetch({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug },
  });

  const service = serviceData as ServiceDetail | null;

  if (!service) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Negozio", url: "/negozio" },
    { name: service.title, url: `/negozio/${slug}` },
  ]);

  const imageUrl = service.image ? urlForImage(service.image).width(1000).height(500).url() : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)} />

      <section className="xl:px-32 lg:px-16 px-8 pt-16 pb-8 flex flex-col gap-6">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={service.title}
            width={1000}
            height={500}
            className="w-full max-h-[400px] object-cover rounded-[16px]"
            priority
          />
        )}

        <h1
          className="lg:text-[40px] lg:leading-[40px] text-[28px] leading-[28px] font-bold"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
        >
          {service.title}
        </h1>

        {service.shortDescription && (
          <p className="text-lg" style={{ color: COLORS.TEXT }}>
            {service.shortDescription}
          </p>
        )}

        {Array.isArray(service.description) && service.description.length > 0 && (
          <div className="prose max-w-none" style={{ color: COLORS.TEXT }}>
            <PortableText value={service.description as never} />
          </div>
        )}

        {service.requiredDocuments && service.requiredDocuments.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold" style={{ color: COLORS.TEXT_TITLE }}>
              Documenti richiesti
            </h2>
            <ul className="list-disc list-inside" style={{ color: COLORS.TEXT }}>
              {service.requiredDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-xl font-bold" style={{ color: COLORS.TEXT_TITLE }}>
            Varianti disponibili
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.variants.map((variant) => (
              <div
                key={variant._key}
                className="flex flex-col gap-2 p-6 rounded-[16px] border border-black/10"
              >
                <span className="font-bold" style={{ color: COLORS.TEXT_TITLE }}>
                  {variant.label}
                </span>
                <span className="text-lg font-semibold" style={{ color: COLORS.BLUE }}>
                  {variant.price.amount} {variant.price.currency}
                  {variant.price.billingPeriod === "annual" ? t("annual") : ` ${t("oneTime")}`}
                </span>
                {variant.durationMonths && (
                  <span className="text-sm" style={{ color: COLORS.TEXT }}>
                    Validità: {variant.durationMonths} mesi
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
