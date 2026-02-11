"use client";

import { COLORS } from "@/lib/constants";
import { useState } from "react";
import {useTranslations} from "next-intl";

const eventKeys = ['80s90s', '98_99', '2005', '2011', '2013', '2016', '2018', '2023', 'today'] as const;

const eventSides: Record<string, 'left' | 'right'> = {
  '80s90s': 'right',
  '98_99': 'left',
  '2005': 'right',
  '2011': 'left',
  '2013': 'right',
  '2016': 'left',
  '2018': 'right',
  '2023': 'left',
  'today': 'right',
};

export default function LaNostraStoria() {
  const t = useTranslations('ChiSiamo');

  // State per tracciare quali elementi sono aperti (solo su mobile)
  // Tutti gli elementi sono aperti di default
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(eventKeys.map((_, i) => i)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="lg:px-32 lg:pb-16 flex flex-col gap-16 px-8 py-16 items-center justify-center">

      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>{t('storia.title')}</h2>

      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 hidden lg:block" style={{ backgroundColor: COLORS.BLUE }}></div>

        {/* Timeline events */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {eventKeys.map((key, index) => {
            const isOpen = openItems.has(index);
            const side = eventSides[key];
            const period = t(`storia.events.${key}.period`);
            return (
              <div
                key={index}
                className={`flex lg:flex-row flex-col gap-6 lg:gap-8 items-start ${
                  side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Date and content */}
                <div className={`flex-1 ${side === 'left' ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                  <div className={`flex flex-col gap-3 ${side === 'left' ? 'lg:items-end' : 'lg:items-start'} items-start`}>
                    <div className="flex items-center gap-2 lg:gap-0">
                      <button
                        onClick={() => toggleItem(index)}
                        className="lg:pointer-events-none text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded w-fit italic cursor-pointer lg:cursor-default"
                        style={{
                          background: COLORS.PRIMARY,
                          color: COLORS.TEXT_WHITE
                        }}
                        aria-label={t('storia.aria.showDetails', { period })}
                      >
                        {period}
                      </button>
                      <button
                        onClick={() => toggleItem(index)}
                        className="lg:hidden cursor-pointer"
                        style={{ color: COLORS.BLUE }}
                        aria-label={isOpen ? t('storia.aria.hideDetails', { period }) : t('storia.aria.openDetails', { period })}
                        aria-expanded={isOpen}
                      >
                        <span className="transition-transform duration-200 inline-block" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          ▼
                        </span>
                      </button>
                    </div>
                    <h3
                      className="text-xl lg:text-2xl font-bold"
                      style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
                    >
                      {t(`storia.events.${key}.title`)}
                    </h3>
                    <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
                      <p
                        className="text-sm lg:text-base leading-relaxed"
                        style={{ color: COLORS.TEXT }}
                      >
                        {t.rich(`storia.events.${key}.description`, {
                          strong: (chunks) => <strong>{chunks}</strong>
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline marker - only visible on desktop */}
                <div className="hidden lg:flex items-center justify-center w-8 h-8 flex-shrink-0 relative z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2"
                    style={{
                      backgroundColor: 'white',
                      borderColor: COLORS.BLUE
                    }}
                  ></div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
