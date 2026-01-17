"use client";

import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { AnimatedSection, motion, fadeInLeft, fadeInRight } from "@/components/animations";

export default function Servizi() {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 lg:gap-32 gap-16 flex flex-col">
      {SERVICES.map((service, index) => (
        <div
          key={service.slug}
          className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
        >
          <AnimatedSection
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            className="lg:w-[55%] w-full"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={640}
              height={252}
              className="w-full object-cover object-center rounded-[16px]"
            />
          </AnimatedSection>

          <AnimatedSection
            variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
            className="flex flex-col flex-1 gap-8 lg:w-[40%] w-full justify-center items-center"
          >
            <div className="flex flex-col gap-4">
              <h3
                className="lg:text-[40px] lg:leading-[40px] text-[20px] leading-[20px] font-bold"
                style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
              >
                {service.name}
              </h3>
              <p className="text-base" style={{ color: COLORS.TEXT }}>
                {service.shortDescription.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== service.shortDescription.split("\n").length - 1 && <br />}
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
                Scopri di più
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      ))}
    </section>
  );
}
