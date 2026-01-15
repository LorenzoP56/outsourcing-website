'use client'

import { COLORS } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard, motion, staggerContainerSlow } from "@/components/animations";

export default function Blog() {
  return (
    <section
      className="lg:px-32 lg:py-16 flex flex-col gap-8 px-8 py-16"
      style={{
        backgroundImage: 'url(/images/Home/desktop/bgBlog.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <AnimatedSection>
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Leggi i nostri ultimi articoli
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
          Aggiornamenti e consigli pratici per migliorare la gestione digitale nella tua organizzazione.
        </p>
      </AnimatedSection>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8">

        <StaggerItem className="flex-1">
          <AnimatedCard className="flex flex-col gap-4 bg-white overflow-hidden" style={{ borderRadius: '16px' }}>
            <Image src="/images/Home/desktop/blog/1.png" alt="Blog 1" width={500} height={500} className="w-full h-auto" />
            <div className="flex flex-col gap-2 px-8 py-4">
              <span style={{ color: COLORS.TEXT, fontSize: '10px', fontWeight: 600 }}>
                BACKOFFICE COMMERCIALE
              </span>
              <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Ottimizzazione dei processi di backoffice per aumentare l'efficienza
              </h3>
              <p className="text-md" style={{ color: COLORS.TEXT }}>
                Strategie innovative per digitalizzare e automatizzare le attività…
              </p>
              <time dateTime="2025-10-03" style={{ color: COLORS.TEXT, fontSize: '10px' }}>
                3 ottobre 2025
              </time>
            </div>
          </AnimatedCard>
        </StaggerItem>

        <StaggerItem className="flex-1">
          <AnimatedCard className="flex flex-col gap-4 bg-white overflow-hidden" style={{ borderRadius: '16px' }}>
            <Image src="/images/Home/desktop/blog/2.png" alt="Blog 2" width={500} height={500} className="w-full h-auto" />
            <div className="flex flex-col gap-2 px-8 py-4">
              <span style={{ color: COLORS.TEXT, fontSize: '10px', fontWeight: 600 }}>
                CUSTOMER CARE
              </span>
              <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Customer care multicanale: soddisfare le esigenze dei clienti moderni
              </h3>
              <p className="text-md" style={{ color: COLORS.TEXT }}>
                Come costruire un servizio clienti efficace attraverso tutti i canali…
              </p>
              <time dateTime="2025-09-30" style={{ color: COLORS.TEXT, fontSize: '10px' }}>
                30 settembre 2025
              </time>
            </div>
          </AnimatedCard>
        </StaggerItem>

        <StaggerItem className="flex-1">
          <AnimatedCard className="flex flex-col gap-4 bg-white overflow-hidden" style={{ borderRadius: '16px' }}>
            <Image src="/images/Home/desktop/blog/3.png" alt="Blog 3" width={500} height={500} className="w-full h-auto" />
            <div className="flex flex-col gap-2 px-8 py-4">
              <span style={{ color: COLORS.TEXT, fontSize: '10px', fontWeight: 600 }}>
                CONFORMITÀ NORMATIVA
              </span>
              <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                GDPR e protezione dei dati: come garantire la conformità aziendale
              </h3>
              <p className="text-md" style={{ color: COLORS.TEXT }}>
                Le migliori pratiche per gestire la privacy dei dati e rispettare...
              </p>
              <time dateTime="2025-10-05" style={{ color: COLORS.TEXT, fontSize: '10px' }}>
                5 ottobre 2025
              </time>
            </div>
          </AnimatedCard>
        </StaggerItem>

      </StaggerContainer>

      <AnimatedSection delay={0.5}>
        <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="mx-auto w-[300px]">
          <Button href="/blog" className="w-full" style={{ background: COLORS.TEXT_WHITE, color: COLORS.TEXT }}>
            Leggi altri articoli
          </Button>
        </motion.div>
      </AnimatedSection>

    </section>
  );
}
