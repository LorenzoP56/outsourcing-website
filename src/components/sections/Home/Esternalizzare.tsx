"use client";

import "./Esternalizzare.css";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, motion, scaleIn, staggerContainerSlow } from "@/components/animations";

export default function Esternalizzare() {
  return (
    <section
      className="xl:px-32 lg:px-24 lg:py-16"
    >
      <div className="esternalizzare-bg flex flex-col gap-8 lg:justify-center lg:items-center justify-start items-start lg:px-8 lg:py-12 gap-10 px-8 py-16 lg:rounded-[56px]">
        <AnimatedSection className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
            Perché esternalizzare con Outsourcing Group
          </h2>
          <p className="text-md text-center text-[#2B2D2F] lg:text-[#FFFFFF]">
            Scopri come possiamo ottimizzare i tuoi processi aziendali e aumentare l'efficienza.
          </p>
        </AnimatedSection>

        <StaggerContainer variants={staggerContainerSlow} className="flex flex-row lg:gap-16 gap-8 lg:px-16 lg:justify-center justify-start items-start lg:flex-row flex-col lg:flex-nowrap flex-wrap">

          <StaggerItem variants={scaleIn} className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/1.png" alt="Icona riduzione costi operativi outsourcing" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Riduzione dei costi operativi
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Esternalizzando, l'azienda elimina spese fisse (personale, formazione, software, infrastruttura, postazioni, turnazioni) e le trasforma in costi variabili, pagando solo ciò che usa.
            </p>
          </StaggerItem>

          <StaggerItem variants={scaleIn} className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/2.png" alt="Icona efficienza e qualità professionale outsourcing" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Efficienza e qualità professionale
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Ogni processo è gestito da personale già formato. Il servizio è scalabile in base ai picchi operativi. L'azienda può così alzare la qualità del servizio ai clienti e abbattere errori, ritardi e inefficienze interne.
            </p>
          </StaggerItem>

          <StaggerItem variants={scaleIn} className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/3.png" alt="Icona focus core business esternalizzazione" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Focus totale sul core business
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Delegando Digital Back Office & Contact Center, l'azienda libera tempo e risorse per ciò che fa crescere davvero il business.
            </p>
          </StaggerItem>

        </StaggerContainer>

        <AnimatedSection delay={0.4} className="flex gap-6 lg:flex-row flex-col justify-center items-center mx-auto w-full">
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/contatti"
              className="w-[300px]"
            >
              Richiedi un preventivo gratuito
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/esternalizzazione"
              className="w-[300px]"
              style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
            >
              Scopri i vantaggi
            </Button>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
