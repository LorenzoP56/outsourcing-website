"use client";

import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard, staggerContainerSlow } from "@/components/animations";
import {useTranslations} from "next-intl";

const SERVICE_IMAGES = [
  "/website_images/Home/assistenza-help-desk-utenti-outsourcing.jpg",
  "/website_images/Home/contact-center-in-outsourcing.jpg",
  "/website_images/Home/digital-back-office-outsourcing.webp",
  "/website_images/Home/gestione-operativa-dati-cliente-outsourcing.webp",
  "/website_images/Home/data-management-outsourcing-group.webp",
  "/website_images/Home/training-aziendale-strumenti-digitali-online.jpg",
] as const;

const SERVICE_ALTS = [
  "Supporto tecnico help desk per attivazioni e configurazioni strumenti digitali",
  "Contact center in outsourcing per gestione clienti e supporto vendite",
  "Gestione processi digitali back office con postazione professionale in outsourcing",
  "Gestione operativa dati cliente in outsourcing",
  "Team data management analizza dati aziendali su monitor - Outsourcing Group",
  "Sessione di training aziendale online su strumenti digitali - Outsourcing Group",
] as const;

export default function Servizi() {
  const t = useTranslations('Home');
  const tServizi = useTranslations('Servizi');

  const renderCard = (index: number) => (
    <StaggerItem key={SERVICES[index].slug} className="flex-1 w-full">
      <Link href={`/servizi/${SERVICES[index].slug}`} className="h-full block">
        <AnimatedCard className="flex flex-col cursor-pointer shadow-lg rounded-[16px] overflow-hidden bg-white h-full">
          <Image
            src={SERVICE_IMAGES[index]}
            alt={SERVICE_ALTS[index]}
            width={500}
            height={210}
            className="w-full h-[210px] object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="flex flex-col gap-3 p-5 flex-grow">
            <h3 className="lg:text-[24px] lg:leading-[28px] text-[20px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {tServizi(`details.${SERVICES[index].slug}.name`)}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT }}>
              {tServizi(`details.${SERVICES[index].slug}.shortDescription`)}
            </p>
          </div>
        </AnimatedCard>
      </Link>
    </StaggerItem>
  );

  return (
    <section
      className="xl:min-h-[100vh] min-h-[70vh] lg:px-16 xl:px-32 lg:py-16 flex flex-col gap-8 p-8"
    >
      <AnimatedSection>
        <h2 className="text-[40px] leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          {t('servizi.title')}
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
          {t('servizi.description')}
        </p>
      </AnimatedSection>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8 justify-between items-stretch">
        {renderCard(0)}
        {renderCard(1)}
        {renderCard(2)}
      </StaggerContainer>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8 justify-center items-stretch">
        {renderCard(3)}
        {renderCard(4)}
        {renderCard(5)}
      </StaggerContainer>

    </section>
  );
}
