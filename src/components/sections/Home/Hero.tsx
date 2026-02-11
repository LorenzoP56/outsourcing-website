"use client";

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { motion } from "@/components/animations";
import {useTranslations} from 'next-intl';


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

const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function Hero() {
    const t = useTranslations('Home');
  return (
    <section
      className="min-h-[70vh] xl:min-h-[90vh] md:pl-16 lg:pl-32 lg:pr-0 lg:py-16 p-8 hero-bg flex items-center"
    >
      <motion.div
        className="flex flex-col lg:w-[50vw] w-full h-full justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={h1Variants}
            className="text-[32px] leading-[40px] min-[500px]:text-[40px] min-[500px]:leading-[48px] lg:text-[56px] lg:leading-[64px] font-bold"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {t.rich('hero.description', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
            <br />
            <br />
            {t.rich('hero.description2', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </motion.p>
        </div>

        <motion.div
          className="flex gap-6 lg:flex-row flex-col"
          variants={buttonContainerVariants}
        >
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="#form"
              className="lg:min-w-[300px]"
            >
              {t('hero.ctaContact')}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/servizi"
              className="lg:min-w-[300px]"
              style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
            >
              {t('hero.ctaServices')}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
