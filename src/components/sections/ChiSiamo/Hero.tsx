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
};

export default function Hero() {
  return (
    <section
      className="min-h-[50vh] lg:px-32 lg:pt-16 px-8 pt-16 flex items-center justify-center"
    >
      <motion.div
        className="flex flex-col w-full h-full justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={itemVariants}
            className="lg:text-[56px] lg:leading-[56px] text-[36px] leading-[36px] font-bold lg:text-center"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            Professionisti al passo con l'evoluzione del settore digitale
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="lg:text-xl text-base lg:text-center"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            Dal 1999 affianchiamo le aziende con servizi digitali che evolvono costantemente, integrando tecnologie e competenze per garantire gestione operativa, qualità e compliance in un mercato in continua trasformazione.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
