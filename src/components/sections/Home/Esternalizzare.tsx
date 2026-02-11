"use client";

import "./Esternalizzare.css";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, motion, scaleIn, staggerContainerSlow } from "@/components/animations";
import {useTranslations} from "next-intl";

const ITEM_KEYS = ["costs", "efficiency", "focus"] as const;
const ITEM_ICONS = [
  "/images/Home/desktop/esternalizzare/1.png",
  "/images/Home/desktop/esternalizzare/2.png",
  "/images/Home/desktop/esternalizzare/3.png",
] as const;
const ITEM_ICON_ALTS = [
  "Icona riduzione costi operativi outsourcing",
  "Icona efficienza e qualità professionale outsourcing",
  "Icona focus core business esternalizzazione",
] as const;

export default function Esternalizzare() {
  const t = useTranslations('Home');
  const tCommon = useTranslations('Common');

  return (
    <section
      className="xl:px-32 lg:px-24 lg:py-16"
    >
      <div className="esternalizzare-bg flex flex-col gap-8 lg:justify-center lg:items-center justify-start items-start lg:px-8 lg:py-12 gap-10 px-8 py-16 lg:rounded-[56px]">
        <AnimatedSection className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
            {t('esternalizzare.title')}
          </h2>
          <p className="text-md text-center text-[#2B2D2F] lg:text-[#FFFFFF]">
            {t('esternalizzare.description')}
          </p>
        </AnimatedSection>

        <StaggerContainer variants={staggerContainerSlow} className="flex flex-row lg:gap-16 gap-8 lg:px-16 lg:justify-center justify-start items-start lg:flex-row flex-col lg:flex-nowrap flex-wrap">
          {ITEM_KEYS.map((key, i) => (
            <StaggerItem key={key} variants={scaleIn} className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
              <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
                <Image src={ITEM_ICONS[i]} alt={ITEM_ICON_ALTS[i]} width={100} height={100} className="w-[70px] h-[70px]" />
                <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                  {t(`esternalizzare.items.${key}.title`)}
                </h3>
              </div>
              <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
                {t(`esternalizzare.items.${key}.description`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="flex gap-6 lg:flex-row flex-col justify-center items-center mx-auto w-full">
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/contatti"
              className="w-[300px]"
            >
              {tCommon('requestQuote')}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="/esternalizzazione"
              className="w-[300px]"
              style={{ background: 'white', color: COLORS.TEXT }}
            >
              {tCommon('discoverAdvantages')}
            </Button>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
