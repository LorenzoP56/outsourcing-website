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
  const t = useTranslations('Contatti');

  return (
    <section className="min-h-[70vh] lg:px-32 lg:py-16 px-8 py-16 flex flex-col gap-8 items-center justify-center" style={{ backgroundImage: 'url(/website_images/Contatti/bgHero.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <motion.div
        className="flex flex-col w-full h-full justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={h1Variants}
          className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          {t('hero.title')}
        </motion.h1>
      </motion.div>
    </section>
  );
}
