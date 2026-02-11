"use client";

import { COLORS } from "@/lib/constants";
import { motion } from "@/components/animations";
import {useTranslations} from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// H1 sempre visibile per LCP veloce, solo leggero translateY
const h1Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

// Altri elementi: solo translateY (no opacity per LCP veloce)
const itemVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export default function Hero() {
  const t = useTranslations('Servizi');

  return (
    <section
      className="min-h-[50vh] lg:px-32 lg:py-16 px-8 pt-16 flex items-center justify-center"
    >
      <motion.div
        className="flex flex-col w-full h-full justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:gap-24 gap-8">
          <motion.h1
            variants={h1Variants}
            className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[48px] font-bold lg:text-center"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {t('hero.titleLine1')}
            <br />
            {t('hero.titleLine2')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="lg:text-xl text-base"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {t('hero.description1')}
            {' '}
            {t('hero.description2')}
            {' '}
            {t('hero.description3')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
