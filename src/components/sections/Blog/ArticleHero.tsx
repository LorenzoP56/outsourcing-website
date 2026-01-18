"use client";

import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { motion } from "@/components/animations";

interface ArticleHeroProps {
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export default function ArticleHero({ title, category, date, image, imageAlt }: ArticleHeroProps) {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="relative z-10 text-center px-8 py-16 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {category && (
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-semibold uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
            style={{ backgroundColor: COLORS.BLUE, color: "white" }}
          >
            {category}
          </motion.span>
        )}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {title}
        </motion.h1>
        <motion.time variants={itemVariants} className="text-white/80 text-sm">
          {date}
        </motion.time>
      </motion.div>
    </section>
  );
}
