"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem, scaleIn, staggerContainerSlow } from "@/components/animations";

interface FunctionalityItem {
  icon: string;
  title?: string;
  description: string;
}

interface FunzionalitaProps {
  functionalityTitle: string;
  functionalitySubtitle: string;
  grid: boolean;
  functionality: FunctionalityItem[];
}

export default function Funzionalita({ functionalityTitle, functionalitySubtitle, grid, functionality }: FunzionalitaProps) {
  return (
    <section className="xl:px-32 lg:px-16 lg:py-16 px-8 py-16 bg-white">
      <div className="flex flex-col gap-12">

        <AnimatedSection>
          <h2
            className="lg:text-[48px] lg:leading-[56px] text-[32px] leading-[40px] font-bold text-center"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {functionalityTitle}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-base lg:text-lg mx-auto" style={{ color: COLORS.TEXT }}>
            {functionalitySubtitle}
          </p>
        </AnimatedSection>

        {grid ? (
          <StaggerContainer variants={staggerContainerSlow} className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {functionality.map((item, index) => (
              <StaggerItem
                key={index}
                variants={scaleIn}
                className="flex shadow-lg lg:px-8 lg:py-4 px-4 py-2 gap-4 items-center rounded-2xl"
              >
                <Image src={item.icon} alt={`Icona ${item.title || item.description}`} width={100} height={100} className="object-contain lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]" />
                <p
                  className="flex-1 text-base"
                  style={{ fontFamily: 'var(--font-asap)', color: COLORS.TEXT }}
                >
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <StaggerContainer variants={staggerContainerSlow} className="grid lg:grid-cols-5 grid-cols-1 xl:mt-8 lg:mt-4">
            {functionality.map((item, index) => (
              <StaggerItem
                key={index}
                variants={scaleIn}
                className="flex flex-col xl:px-8 lg:py-4 px-4 py-2 gap-4 items-center rounded-2xl"
              >
                <Image src={item.icon} alt={`Icona ${item.title || item.description}`} width={100} height={100} className="object-contain lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]" />
                <h3
                  className="font-bold text-xl text-center"
                  style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
                >
                  {item.title}
                </h3>
                <p
                  className="flex-1 text-base text-center"
                  style={{ fontFamily: 'var(--font-asap)', color: COLORS.TEXT }}
                >
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
