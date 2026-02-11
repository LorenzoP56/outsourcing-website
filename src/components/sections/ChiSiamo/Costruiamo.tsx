"use client";

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, motion } from "@/components/animations";
import {useTranslations} from "next-intl";

export default function Costruiamo() {
  const t = useTranslations('ChiSiamo');
  const tCommon = useTranslations('Common');

  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center" style={{ backgroundImage: 'url(/website_images/ChiSiamo/bgCostruiamo.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <AnimatedSection className="flex flex-col gap-8 items-center justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          {t('costruiamo.title')}
        </h2>
        <p className="text-base text-center" style={{ color: COLORS.TEXT_WHITE }}>
          {t('costruiamo.description')}
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
          <Button href="/contatti">
            {tCommon('requestInfo')}
          </Button>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
