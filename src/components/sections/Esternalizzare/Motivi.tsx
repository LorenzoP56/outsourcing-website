"use client";

import "./Motivi.css";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem, staggerContainerSlow, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";

export default function Motivi() {
  const t = useTranslations('Esternalizzazione');

  return (
    <section className="xl:px-32 lg:px-16 lg:py-32 px-8 py-16 flex flex-col lg:gap-40 gap-16">

      <div className="flex lg:flex-row flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center relative lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/trasformare-costi-fissi-in-dati-misurabili-outsourcing.webp" alt="Analisi dei dati e monitoraggio delle performance per trasformare i costi fissi in dati misurabili tramite outsourcing"
          width={1160} height={894} className="rounded-[16px] lg:max-h-[600px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {t('motivi.costs.title')}
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              {t('motivi.costs.description1')}
              <br />
              <br />
              {t.rich('motivi.costs.description2', { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.costs.items.personnel')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.costs.items.flexibility')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.costs.items.training')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.costs.items.skills')}
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

      <div className="flex lg:flex-row-reverse flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/dati-sicuri-velocita-processi-digitali-outsourcing.webp"
          alt="Gestione sicura dei dati aziendali e velocizzazione dei processi digitali grazie ai servizi di outsourcing operativo" width={1160} height={894} className="rounded-[16px] lg:max-h-[600px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {t('motivi.security.title')}
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              {t.rich('motivi.security.description1', { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
              <br />
              <br />
              {t('motivi.security.description2')}
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.security.items.compliance')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.security.items.speed')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.security.items.errors')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.security.items.traceability')}
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

      <div className="flex lg:flex-row flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/problem-solving-gestione-criticita-operativa-outsourcing.webp"
          alt="Team di outsourcing impegnato nel problem solving e nella gestione delle criticità operative aziendali" width={1160} height={894} className="rounded-[16px] lg:max-h-[600px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {t('motivi.problemSolving.title')}
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              {t('motivi.problemSolving.description1')}
              <br />
              <br />
              {t.rich('motivi.problemSolving.description2', { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
              <br />
              {t('motivi.problemSolving.description3')}
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.problemSolving.items.exceptions')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.problemSolving.items.interruptions')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.problemSolving.items.bottlenecks')}
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                {t('motivi.problemSolving.items.quality')}
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}
