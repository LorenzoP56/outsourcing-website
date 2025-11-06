"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

const certificazioni = [
  {
    image: "/images/Home/desktop/certificazioni/1.png",
    title: "ISO 9001",
    description: "Certificazione di qualità per la gestione dei processi aziendali"
  },
  {
    image: "/images/Home/desktop/certificazioni/2.png",
    title: "eIDAS",
    description: "Conformità al regolamento europeo sulla protezione dei dati"
  },
  {
    image: "/images/Home/desktop/certificazioni/3.png",
    title: "GDPR",
    description: "Identificazione elettronica e servizi fiduciari per le transazioni"
  }
];

export default function Certificazioni() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificazioni.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificazioni.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16"
    >
      <h2 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        Certificazioni e sicurezza
      </h2>

      {/* Desktop: mostra tutte le card */}
      <div className="hidden lg:flex flex-row gap-8 justify-center items-center">
        {certificazioni.map((cert, index) => (
          <div key={index} className="flex flex-col gap-2 flex-1 justify-center items-center">
            <Image src={cert.image} alt={`Certificazione ${index + 1}`} width={100} height={100} className="w-[115px] h-[115px]" />
            <h3 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {cert.title}
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
              {cert.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: mostra una card alla volta con pulsanti */}
      <div className="lg:hidden flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 justify-center items-center px-4">
          <Image 
            src={certificazioni[currentIndex].image} 
            alt={`Certificazione ${currentIndex + 1}`} 
            width={100} 
            height={100} 
            className="w-[115px] h-[115px]" 
          />
          <h3 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            {certificazioni[currentIndex].title}
          </h3>
          <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
            {certificazioni[currentIndex].description}
          </p>
        </div>

        {/* Pulsanti di navigazione */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
            style={{ borderColor: COLORS.TEXT }}
            aria-label="Certificazione precedente"
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
            {certificazioni.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ 
                  backgroundColor: index === currentIndex ? COLORS.TEXT : '#D9D9D9'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
            style={{ borderColor: COLORS.TEXT }}
            aria-label="Certificazione successiva"
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