"use client";

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
} as const;

export default function Hero() {
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
            variants={itemVariants}
            className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[48px] font-bold lg:text-center"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            I nostri servizi professionali di
            <br />
            Digital Back Office
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="lg:text-xl text-base"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            La trasformazione digitale richiede processi interni strutturati, dati affidabili e flussi operativi efficienti.
            I nostri servizi di Digital Back Office si basano su procedure standardizzate, ambienti di collaudo, controllo qualità e sistemi digitali che permettono un'elaborazione precisa e tracciata di ogni attività.
            Per supportare l'azienda nella gestione dei dati, nel monitoraggio dei flussi e nell'ottimizzazione dei processi, integriamo competenze operative, tecniche e analitiche.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
