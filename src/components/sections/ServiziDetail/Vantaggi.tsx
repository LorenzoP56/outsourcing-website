"use client";

import { COLORS } from "@/lib/constants";
import { useState } from "react";

interface AdvantageItem {
  title?: string
  description: string;
}

interface VantaggiProps {
  advantagesTitle: string;
  advantages: AdvantageItem[];
}

export default function Vantaggi({ advantagesTitle, advantages }: VantaggiProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? advantages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 bg-white">
      <div className="flex flex-col gap-12">
        <h2 
          className="lg:text-[48px] lg:leading-[48px] text-[32px] leading-[40px] font-bold text-center" 
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
        >
          {advantagesTitle}
        </h2>

        {/* Desktop: mostra tutte le card */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg py-8 px-4 shadow-lg flex flex-col items-center justify-centerh-full gap-4"
            >
              <h3 
                className="font-bold text-xl text-center"
                style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
              >
                {advantages[currentIndex].title}
              </h3>
              <p className="text-base" style={{ color: COLORS.TEXT }}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: mostra una card alla volta con pulsanti */}
        <div className="lg:hidden flex flex-col gap-8 items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full">
            <div className="flex flex-col gap-4">
              <h3 className="text-base" style={{ color: COLORS.TEXT }}>
                {advantages[currentIndex].title}
              </h3>
              <p className="text-base" style={{ color: COLORS.TEXT }}>
                {advantages[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Pulsanti di navigazione */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ borderColor: COLORS.TEXT }}
              aria-label="Vantaggio precedente"
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
              {advantages.map((_, index) => (
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
              aria-label="Vantaggio successivo"
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
      </div>
    </section>
  );
}

