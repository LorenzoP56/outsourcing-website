"use client";

import { COLORS } from "@/lib/constants";
import { useState } from "react";

const valori = [
  {
    image: '/images/ChiSiamo/valori/1.png',
    title: 'Affidabilità & Trasparenza',
    description: 'I nostri processi sono certificati e conformi alle normative, per darti sicurezza completa.'
  },
  {
    image: '/images/ChiSiamo/valori/2.png',
    title: 'Flessibilità & Partnership',
    description: 'Ci adattiamo a grandi aziende, PMI e PA, offrendo soluzioni su misura e white-label.'
  },
  {
    image: '/images/ChiSiamo/valori/3.png',
    title: 'Innovazione & Competenza',
    description: 'Investiamo nella formazione continua del team e nell\'adozione di strumenti digitali che semplificano il lavoro, senza sostituire il valore dell\'esperienza umana.'
  },
  {
    image: '/images/ChiSiamo/valori/4.png',
    title: 'Sostenibilità & Etica',
    description: 'Promuoviamo politiche ESG, codice etico e modelli 231, perché il business etico genera valore duraturo.'
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
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center" style={{ backgroundColor: '#D9D9D9' }}>
      
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          I valori che ci guidano
        </h2>
        <p className="text-base text-center" style={{ color: COLORS.TEXT }}>
          Diventare il punto di riferimento italiano per l'outsourcing del back office e del customer care digitale,
          <br/>
          favorendo una trasformazione digitale sicura e accessibile a tutte le organizzazioni.
        </p> 
      </div>

      {/* Desktop: mostra tutte le card */}
      <div className="hidden lg:flex flex-row gap-4 justify-center">

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', height: '300px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Affidabilità & Trasparenza
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            I nostri processi sono certificati e conformi alle normative, per darti sicurezza completa.
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', height: '300px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Flessibilità & Partnership
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Ci adattiamo a grandi aziende, PMI e PA, offrendo soluzioni su misura e white-label.          
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', height: '300px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Innovazione & Competenza
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Investiamo nella formazione continua del team e nell'adozione di strumenti digitali che semplificano il lavoro, senza sostituire il valore dell'esperienza umana.
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/4.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px', height: '300px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Sostenibilità & Etica
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Promuoviamo politiche ESG, codice etico e modelli 231, perché il business etico genera valore duraturo.
          </p>
        </div>
      </div>

      {/* Mobile: mostra una card alla volta con pulsanti */}
      <div className="lg:hidden flex flex-col gap-8 items-center w-full">
        <div 
          className="flex flex-col gap-4 items-center p-8 w-full" 
          style={{ 
            backgroundImage: `url(${valori[currentIndex].image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            borderRadius: '16px',
            height: '300px'
          }}
        >
          <h3 className="text-[20px] leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            {valori[currentIndex].title}
          </h3>
          <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
            {valori[currentIndex].description}
          </p>
        </div>

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
      </div>
      
    </section>
  );
}