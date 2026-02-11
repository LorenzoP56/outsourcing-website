"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";

export default function Team() {
  const t = useTranslations('ChiSiamo');

  return (
    <section
      className="xl:px-32 lg:px-24 lg:py-16 flex lg:flex-row flex-col xl:gap-4 gap-16 lg:gap-16 px-8 py-16 items-center justify-center"
    >
      <AnimatedSection variants={fadeInUp} className="flex lg:flex-1 w-full justify-center items-center relative">
        <div className="relative w-full aspect-square max-w-lg">
          <Image
            src="/website_images/ChiSiamo/team-outsourcing-group-professionisti.jpg"
            alt="Competenza tecnologica e innovazione nei processi digitali - Outsourcing Group"
            fill
            className="object-cover h-[80vh] w-auto aspect-[5/7] flex w-[40%] rounded-[16px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection variants={fadeInUp} className="flex flex-col flex-1 h-full justify-center gap-8">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          {t('team.title')}
        </h2>
        <p className="text-base" style={{ color: COLORS.TEXT }}>

          {t.rich('team.description1', { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
          <br />
          <br />
          {t.rich('team.description2', { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
          <br />
          <br />
          {t('team.description3')}
        </p>
      </AnimatedSection>

    </section>
  );
}
