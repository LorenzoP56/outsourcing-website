"use client";

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
            Soluzioni professionali di Digital Back Office per supportare la crescita della tua azienda nell'era dell'IA
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            Gestiamo le attività di <span className="font-bold">Back Office</span> e <span className="font-bold">Contact Center</span> esternalizzabili, con una forte specializzazione nell'assistenza ai clienti.
            <br />
            <br />
            Ottimizziamo i tuoi processi aziendali di Back Office <span className="font-bold">riducendo tempi e costi, garantendo continuità operativa</span> e <span className="font-bold">qualità del servizio</span>.
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
              Contattaci
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/servizi"
              className="lg:min-w-[300px]"
              style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
            >
              Scopri i nostri servizi
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
