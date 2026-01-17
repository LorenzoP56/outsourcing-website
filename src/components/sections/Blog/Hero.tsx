"use client";

import "./Hero.css";

import { COLORS } from "@/lib/constants";
import { motion } from "@/components/animations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

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
};

export default function Hero() {
  return (
    <section className="blog-hero-bg lg:min-h-[90vh] min-h-[70vh] lg:px-32 lg:py-16 px-8 py-16 flex flex-col gap-8 items-center justify-center">
      <motion.div
        className="flex flex-col w-full h-full justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          Blog
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="lg:text-xl text-base text-center"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          Review sulle ultime novità in tema di outsourcing del back office digitale, customer care professionale e conformità normativa. Scopri strategie, best practice e soluzioni innovative per ottimizzare i tuoi processi aziendali.
        </motion.p>
      </motion.div>
    </section>
  );
} 