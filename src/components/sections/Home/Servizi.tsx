"use client";

import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard, fadeInUp, staggerContainerSlow } from "@/components/animations";

export default function Servizi() {
  return (
    <section
      className="min-h-[100vh] lg:px-32 lg:py-16 flex flex-col gap-8 p-8"
    >
      <AnimatedSection>
        <h2 className="text-[40px] leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          I nostri servizi
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
          Scopri come possiamo aiutare la tua azienda con servizi su misura.
        </p>
      </AnimatedSection>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8 justify-between items-stretch">
        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[0].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/assistenza-help-desk-utenti-outsourcing.jpg"
                alt="Supporto tecnico help desk per attivazioni e configurazioni strumenti digitali"
                width={500}
                height={500}
                className="h-[210px] w-full object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[0].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[0].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>

        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[1].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/contact-center-in-outsourcing.jpg"
                alt="Contact center in outsourcing per gestione clienti e supporto vendite"
                width={500}
                height={500}
                className="w-full h-[210px] object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[1].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[1].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>

        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[2].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/digital-back-office-outsourcing.jpg"
                alt="Gestione processi digitali back office con postazione professionale in outsourcing"
                width={500}
                height={500}
                className="w-full h-[210px] object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[2].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[2].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>
      </StaggerContainer>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8 justify-center items-stretch">
        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[3].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/gestione-operativa-dati-cliente-outsourcing.jpg"
                alt="Gestione operativa dati cliente in outsourcing"
                width={500}
                height={500}
                className="w-full h-[210px] object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[3].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[3].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>

        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[4].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/data-management-outsourcing-group.jpg"
                alt="Team data management analizza dati aziendali su monitor - Outsourcing Group"
                width={500}
                height={500}
                className="w-full h-[210px] object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[4].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[4].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>

        <StaggerItem className="flex-1 w-full">
          <Link href={`/servizi/${SERVICES[5].slug}`} className="h-full block">
            <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
              <Image
                src="/website_images/Home/training-aziendale-strumenti-digitali-online.jpg"
                alt="Sessione di training aziendale online su strumenti digitali - Outsourcing Group"
                width={500}
                height={500}
                className="w-full h-[210px] object-cover object-center"
              />
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                  {SERVICES[5].name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
                  {SERVICES[5].serviceDescription}
                </p>
              </div>
            </AnimatedCard>
          </Link>
        </StaggerItem>
      </StaggerContainer>

    </section>
  );
}
