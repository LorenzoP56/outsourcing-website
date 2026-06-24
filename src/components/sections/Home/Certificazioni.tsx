"use client";

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, motion } from "@/components/animations";
import { useTranslations } from "next-intl";
import LogoBadges from "@/components/sections/Certificazioni/LogoBadges";

export default function Certificazioni() {
  const t = useTranslations("Certificazioni");

  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16">
      <div className="flex flex-col gap-10 items-center max-w-4xl mx-auto">
        <AnimatedSection className="flex flex-col gap-4">
          <h2
            className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center"
            style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
          >
            {t("homeStrip.title")}
          </h2>
          <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
            {t("homeStrip.description")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <LogoBadges />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button href="/certificazioni" className="w-[300px]">
              {t("homeStrip.cta")}
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
