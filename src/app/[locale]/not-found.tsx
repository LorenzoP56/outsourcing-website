"use client";

import { COLORS } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "@/components/animations";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="lg:px-32 lg:py-24 px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        className="flex flex-col items-center gap-6 max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[120px] leading-[1] lg:text-[180px] font-bold select-none"
          style={{
            fontFamily: "var(--font-jost)",
            background: COLORS.PRIMARY,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-[24px] leading-[30px] lg:text-[32px] lg:leading-[38px] font-bold"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base lg:text-lg"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT }}
        >
          {t("subtitle")}
          <br />
          {t("description")}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="mt-2 inline-flex items-center justify-center px-8 py-4 rounded-[16px] text-[18px] leading-[18px] font-bold text-white min-w-[240px]"
            style={{
              background: COLORS.PRIMARY,
              fontFamily: "var(--font-jost)",
            }}
          >
            {t("backToHome")}
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <p
            className="text-sm font-medium"
            style={{ color: COLORS.TEXT }}
          >
            {t("orTry")}
          </p>
          <div className="flex gap-4">
            <Link
              href="/servizi"
              className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "#208AE4" }}
            >
              {t("services")}
            </Link>
            <span style={{ color: COLORS.TEXT }}>|</span>
            <Link
              href="/contatti"
              className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "#208AE4" }}
            >
              {t("contact")}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
