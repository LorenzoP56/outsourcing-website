import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { COLORS } from "@/lib/constants";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import type { ServiceListItem, Price } from "@/sanity/lib/types";

const BASE_URL = "https://osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Negozio" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/negozio`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}/negozio`])),
        "x-default": `${BASE_URL}/it/negozio`,
      },
    },
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      url: `${BASE_URL}/${locale}/negozio`,
      siteName: "Outsourcing Group",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Negozio", url: "/negozio" },
]);

function formatPrice(price: Price | undefined, t: Awaited<ReturnType<typeof getTranslations>>) {
  if (!price) return null;
  const suffix = price.billingPeriod === "annual" ? t("annual") : ` ${t("oneTime")}`;
  return `${price.amount} ${price.currency}${suffix}`;
}

export default async function NegozioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Negozio" });

  const { data: services } = await sanityFetch({
    query: SERVICES_QUERY,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)} />

      <section className="xl:px-32 lg:px-16 px-8 pt-16 pb-8 flex flex-col gap-4 text-center items-center">
        <h1
          className="lg:text-[48px] lg:leading-[48px] text-[32px] leading-[32px] font-bold"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
        >
          {t("hero.title")}
        </h1>
        <p className="text-base max-w-2xl" style={{ color: COLORS.TEXT }}>
          {t("hero.description")}
        </p>
      </section>

      <section className="xl:px-32 lg:px-16 lg:pb-32 px-8 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(services as ServiceListItem[]).length === 0 && (
          <p className="col-span-full text-center" style={{ color: COLORS.TEXT }}>
            {t("empty")}
          </p>
        )}

        {(services as ServiceListItem[]).map((service) => {
          const priceLabel = formatPrice(service.startingPrice, t);
          const imageUrl = service.image ? urlForImage(service.image).width(600).height(340).url() : null;

          return (
            <Link
              key={service._id}
              href={`/negozio/${service.slug.current}`}
              className="flex flex-col rounded-[16px] overflow-hidden border border-black/5 hover:shadow-lg transition-shadow"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={service.title}
                  width={600}
                  height={340}
                  className="w-full h-[200px] object-cover"
                />
              )}
              <div className="flex flex-col gap-2 p-6">
                <h2
                  className="text-[22px] leading-[26px] font-bold"
                  style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
                >
                  {service.title}
                </h2>
                {service.shortDescription && (
                  <p className="text-sm" style={{ color: COLORS.TEXT }}>
                    {service.shortDescription}
                  </p>
                )}
                {priceLabel && (
                  <p className="text-sm font-semibold mt-2" style={{ color: COLORS.BLUE }}>
                    {t("startingFrom")} {priceLabel}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
