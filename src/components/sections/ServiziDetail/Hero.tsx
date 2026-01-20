"use client";

import { COLORS } from "@/lib/constants";
import { motion } from "@/components/animations";

interface HeroProps {
  title: string;
  description: string;
  bgHero?: string;
}

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

export default function Hero({ title, description, bgHero }: HeroProps) {
  const backgroundImage = `linear-gradient(135deg, rgba(2,20,36,.85) 0%, rgba(13,84,145,.5) 50%, rgba(2,20,36,.85) 100%), url(/${bgHero}.webp)`;

  return (
    <section
      className="lg:px-32 lg:py-24 px-8 py-16 flex flex-col gap-4 min-h-[60vh] justify-center"
      style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: '50% 25%', backgroundRepeat: 'no-repeat' }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        <motion.h1
          variants={h1Variants}
          className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-left"
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg lg:text-xl"
          style={{ color: COLORS.TEXT_WHITE }}
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
