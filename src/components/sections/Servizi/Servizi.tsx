"use client";

import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { AnimatedSection, motion, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";

export default function Servizi() {
  const t = useTranslations('Servizi');
  const tCommon = useTranslations('Common');

  return (
    <section className="xl:px-32 lg:px-16 lg:pt-8 lg:pb-48 px-8 py-16 lg:gap-32 gap-16 flex flex-col">
      {SERVICES.map((service, index) => (
        <div
          key={service.slug}
          className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
        >
          <AnimatedSection
            variants={fadeInUp}
            className="lg:w-[55%] w-full flex items-center justify-center"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={800}
              height={340}
              className="w-full object-cover object-center rounded-[16px]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </AnimatedSection>

          <AnimatedSection
            variants={fadeInUp}
            className="flex flex-col flex-1 gap-8 lg:w-[40%] w-full justify-center items-center"
          >
            <div className="flex flex-col gap-4">
              <h3
                className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold"
                style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
              >
                {t(`details.${service.slug}.name`)}
              </h3>
              <p className="text-base" style={{ color: COLORS.TEXT }}>
                {t(`details.${service.slug}.shortDescription`).split("\n").map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    {i !== t(`details.${service.slug}.shortDescription`).split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="lg:self-start self-center"
            >
              <Button href={`/servizi/${service.slug}`} className="w-fit">
                {tCommon('discoverMore')}
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      ))}
    </section>
  );
}
