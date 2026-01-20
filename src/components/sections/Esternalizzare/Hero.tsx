"use client";

import "./Hero.css";

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { motion } from "@/components/animations";

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

// Altri elementi: opacity + translateY
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export default function Hero() {
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
          Perché esternalizzare alcuni processi interni
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="lg:text-xl text-base text-center"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          L'outsourcing non è una semplice esternalizzazione di compiti, ma una strategia per rendere i processi più snelli, sicuri e sostenibili nel tempo.<br/><br/>Esternalizzando libererai risorse per il core business, ridurrai i costi operativi, avrai accesso a competenze specializzate e potrai adattare facilmente la capacità alle variazioni della domanda.
          <br/>
          <br/>
          Migliore capacità operativa significa crescita della tua azienda.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button href="/contatti">
          Inizia a delegare
        </Button>
      </motion.div>
    </section>
  );
} 