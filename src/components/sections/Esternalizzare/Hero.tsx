"use client";

import "./Hero.css";

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
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
  const t = useTranslations('Esternalizzazione');
  const tCommon = useTranslations('Common');

  return (
    <section className="esternalizzare-hero-bg xl:min-h-[90vh] lg:min-h-[70vh] lg:px-32 lg:py-16 px-8 py-16 flex flex-col gap-8 items-center justify-center">
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
        <motion.p
          variants={itemVariants}
          className="lg:text-xl text-base text-center"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          {t('hero.description1')}<br/><br/>{t('hero.description2')}
          <br/>
          <br/>
          {t('hero.description3')}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button href="/contatti">
          {tCommon('startDelegating')}
        </Button>
      </motion.div>
    </section>
  );
}
