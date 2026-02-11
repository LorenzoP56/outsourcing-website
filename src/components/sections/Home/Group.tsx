"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";

const ITEM_KEYS = ["overload", "errors", "slowness", "costs", "noControl", "disorganization"] as const;

export default function Group() {
  const t = useTranslations('Home');
  const bold = (chunks: React.ReactNode) => <span className="font-bold">{chunks}</span>;

  return (
    <section
      className="min-h-auto xl:min-h-[100vh] flex lg:flex-row flex-col px-6 py-8 lg:px-32 lg:py-16 lg:items-center xl:gap-16 gap-12"
    >
      {/* Immagine mobile - full width */}
      <div className="flex justify-center items-center lg:hidden">
        <Image
          src="/website_images/Home/partner-outsourcing-affidabile-consulenza_mobile.webp"
          alt="Partner Outsourcing Group affianca il cliente nella gestione processi aziendali"
          width={659}
          height={437}
          className="h-auto object-cover object-center rounded-[16px]"
          sizes="100vw"
        />
      </div>

      {/* Immagine desktop */}
      <AnimatedSection variants={fadeInUp} className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <Image
          src="/website_images/Home/partner-outsourcing-affidabile-consulenza.webp"
          alt="Partner Outsourcing Group affianca il cliente nella gestione processi aziendali"
          width={800}
          height={600}
          className="object-cover rounded-[16px] max-h-[800px] w-auto"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </AnimatedSection>

      {/* Contenuto testuale */}
      <StaggerContainer className="flex flex-col lg:w-1/2 gap-6 lg:gap-8">
        <StaggerItem>
          <h2 className="text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            {t('group.title')}
          </h2>
        </StaggerItem>

        <StaggerItem>
          <p className="text-sm md:text-base" style={{ color: COLORS.TEXT }}>
            {t.rich('group.description1', { bold })}
            <br />
            <br />
            {t.rich('group.description2', { bold })}
          </p>
        </StaggerItem>

        <StaggerItem>
          <ul className="list-disc pl-5 text-sm md:text-base space-y-1" style={{ color: COLORS.TEXT }}>
            {ITEM_KEYS.map((key) => (
              <li key={key}>{t.rich(`group.items.${key}`, { bold })}</li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <p className="text-sm md:text-base" style={{ color: COLORS.TEXT }}>
            {t.rich('group.closing', { bold })}
          </p>
        </StaggerItem>
      </StaggerContainer>

    </section>
  );
}
