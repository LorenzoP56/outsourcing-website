"use client";

import "./Valori.css";

import { COLORS } from "@/lib/constants";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem, scaleIn, staggerContainerSlow, motion } from "@/components/animations";

const valori = [
  {
    image: '/website_images/ChiSiamo/affidabilita-trasparenza-outsourcing-group.webp',
    title: 'Affidabilità & Trasparenza',
    description: 'I nostri processi sono certificati e conformi alle normative, per darti sicurezza completa.'
  },
  {
    image: '/website_images/ChiSiamo/chi-siamo-flessibilita-partnership-stretta-mano.jpg',
    title: 'Flessibilità & Partnership',
    description: 'Adattandoci a grandi aziende, PMI e PA, offriamo soluzioni su misura e white-label.'
  },
  {
    image: '/website_images/ChiSiamo/innovazione-competenza-outsourcing-group.webp',
    title: 'Innovazione & Competenza',
    description: 'Investiamo nella formazione continua del team e nell\'adozione di strumenti digitali che semplificano il lavoro, senza sostituire il valore dell\'esperienza umana.'
  },
  {
    image: '/website_images/ChiSiamo/assistenza-clienti-soddisfazione-outsourcing.jpg',
    title: 'Assistenza & Soddisfazione',
    description: 'Mettiamo il cliente al centro di ogni processo: rispondiamo con rapidità, precisione e un supporto umano e competente.'
  }
];

export default function Valori() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? valori.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === valori.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="xl:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center" style={{ backgroundColor: 'rgba(0, 96, 174, 0.1)' }}>
      
      <AnimatedSection>
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          I valori che trasferiamo ai nostri partner
        </h2>
      </AnimatedSection>

      {/* Desktop: mostra tutte le card */}
      <StaggerContainer variants={staggerContainerSlow} className="hidden lg:flex flex-row gap-4 justify-center">

        <StaggerItem variants={scaleIn} className="flex-1">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="valori-card-1 flex flex-col gap-4 items-start justify-center p-8 h-full rounded-[16px]"
            style={{ height: '300px' }}
          >
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Affidabilità & Trasparenza
            </h3>
            <p className="lg:text-md text-sm" style={{ color: COLORS.TEXT_WHITE }}>
              I nostri processi sono certificati e conformi alle normative, per darti sicurezza completa.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem variants={scaleIn} className="flex-1">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="valori-card-2 flex flex-col gap-4 items-start justify-center p-8 h-full rounded-[16px]"
            style={{ height: '300px' }}
          >
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Flessibilità & Partnership
            </h3>
            <p className="lg:text-md text-sm" style={{ color: COLORS.TEXT_WHITE }}>
              Adattandoci a grandi aziende, PMI e PA, offriamo soluzioni su misura e white-label.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem variants={scaleIn} className="flex-1">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="valori-card-3 flex flex-col gap-4 items-start justify-center p-8 h-full rounded-[16px]"
            style={{ height: '300px' }}
          >
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Innovazione & Competenza
            </h3>
            <p className="lg:text-md text-sm" style={{ color: COLORS.TEXT_WHITE }}>
              Investiamo nella formazione continua del team e nell'adozione di strumenti digitali che semplificano il lavoro, senza sostituire il valore dell'esperienza umana.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem variants={scaleIn} className="flex-1">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="valori-card-4 flex flex-col gap-4 items-start justify-center p-8 h-full rounded-[16px]"
            style={{ height: '300px' }}
          >
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Sostenibilità & Etica
            </h3>
            <p className="lg:text-md text-sm text-left" style={{ color: COLORS.TEXT_WHITE }}>
              Promuoviamo politiche ESG, codice etico e modelli 231, perché il business etico genera valore duraturo.
            </p>
          </motion.div>
        </StaggerItem>
      </StaggerContainer>

      {/* Mobile: mostra una card alla volta con pulsanti */}
      <AnimatedSection className="lg:hidden flex flex-col gap-8 items-center w-full">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="valori-card-mobile flex flex-col gap-4 items-center p-8 w-full rounded-[16px] justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(2,20,36,.65) 0%, rgba(13,84,145,.5) 50%, rgba(2,20,36,.65) 100%), url(${valori[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px'
          }}
        >
          <h3 className="text-[20px] leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            {valori[currentIndex].title}
          </h3>
          <p className="lg:text-md text-sm text-center" style={{ color: COLORS.TEXT_WHITE }}>
            {valori[currentIndex].description}
          </p>
        </motion.div>

        {/* Pulsanti di navigazione */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
            style={{ borderColor: COLORS.TEXT }}
            aria-label="Valore precedente"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke={COLORS.TEXT} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {valori.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ 
                  backgroundColor: index === currentIndex ? COLORS.TEXT : '#FFFFFF'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
            style={{ borderColor: COLORS.TEXT }}
            aria-label="Valore successivo"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke={COLORS.TEXT} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </AnimatedSection>

    </section>
  );
}