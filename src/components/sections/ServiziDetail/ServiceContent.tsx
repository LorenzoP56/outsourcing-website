"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, fadeInLeft, fadeInRight } from "@/components/animations";

interface DetailedContent {
  title: string;
  image: string;
  paragraphs: string[];
}

interface ServiceContentProps {
  detailedContent: DetailedContent;
}

export default function ServiceContent({ detailedContent }: ServiceContentProps) {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 bg-white">
      <div className="flex lg:flex-row flex-col gap-12 items-center">
        <AnimatedSection variants={fadeInLeft} className="lg:w-1/2 w-full">
          <Image
            src={detailedContent.image}
            alt={detailedContent.title}
            width={600}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </AnimatedSection>

        <AnimatedSection variants={fadeInRight} className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2
            className="lg:text-[40px] lg:leading-[48px] text-[28px] leading-[36px] font-bold"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {detailedContent.title}
          </h2>

          <div className="flex flex-col gap-4">
            {detailedContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed"
                style={{ color: COLORS.TEXT, fontFamily: 'var(--font-asap)' }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
