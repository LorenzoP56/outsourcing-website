"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection } from "@/components/animations";
import { useTranslations } from "next-intl";
import { FileDown } from "lucide-react";
import LogoBadges from "./LogoBadges";

const DETAIL_KEYS = ["standard", "scope", "body", "number", "issued", "expiry"] as const;

const DOWNLOADS = [
  { key: "imq", file: "/documents/certificato-iso-9001-imq-outsourcing-group.pdf" },
  { key: "iqnet", file: "/documents/certificato-iqnet-outsourcing-group.pdf" },
] as const;

export default function Certificazioni() {
  const t = useTranslations("Certificazioni");
  const bold = (chunks: React.ReactNode) => <span className="font-bold">{chunks}</span>;

  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <AnimatedSection className="flex flex-col gap-4">
          <h1
            className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[40px] font-bold text-center"
            style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
          >
            {t("hero.title")}
          </h1>
          <p className="lg:text-xl text-base text-center" style={{ color: COLORS.TEXT }}>
            {t("hero.description")}
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
            <Image
              src="/website_images/Certificazioni/certificati-iso-9001-imq-iqnet-outsourcing-group.webp"
              alt={t("logos.certificatesAlt")}
              width={1080}
              height={1350}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center gap-6">
            <LogoBadges />
            <p className="text-sm text-center max-w-sm" style={{ color: COLORS.TEXT }}>
              {t("logos.caption")}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-4">
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t.rich("intro.paragraph1", { bold })}
          </p>
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t("intro.paragraph2")}
          </p>
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t.rich("intro.paragraph3", { bold })}
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-4">
          <h2
            className="lg:text-[40px] lg:leading-[40px] text-[28px] leading-[28px] font-bold"
            style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
          >
            {t("iso.title")}
          </h2>
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t("iso.paragraph1")}
          </p>
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t("iso.paragraph2")}
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-6">
          <h2
            className="lg:text-[40px] lg:leading-[40px] text-[28px] leading-[28px] font-bold"
            style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
          >
            {t("details.title")}
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 bg-gray-50 rounded-[16px] p-8">
            {DETAIL_KEYS.map((key) => (
              <div key={key} className="flex flex-col gap-1">
                <dt className="text-sm font-bold uppercase" style={{ color: COLORS.BLUE }}>
                  {t(`details.${key}Label`)}
                </dt>
                <dd className="text-base" style={{ color: COLORS.TEXT }}>
                  {t(`details.${key}Value`)}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-6">
          <h2
            className="lg:text-[40px] lg:leading-[40px] text-[28px] leading-[28px] font-bold"
            style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
          >
            {t("downloads.title")}
          </h2>
          <p className="text-base lg:text-lg" style={{ color: COLORS.TEXT }}>
            {t("downloads.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOWNLOADS.map(({ key, file }) => (
              <a
                key={key}
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[16px] border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <FileDown size={40} strokeWidth={1.5} color={COLORS.BLUE} className="shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold" style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}>
                    {t(`downloads.${key}.name`)}
                  </span>
                  <span className="text-sm" style={{ color: COLORS.TEXT }}>
                    {t(`downloads.${key}.info`)}
                  </span>
                  <span className="text-sm font-bold underline" style={{ color: COLORS.BLUE }}>
                    {t("downloads.cta")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
