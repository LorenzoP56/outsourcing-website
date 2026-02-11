"use client";

import React, { useState } from "react";
import { COLORS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import {useTranslations} from "next-intl";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className="border rounded-2xl p-6 cursor-pointer transition-all duration-100 hover:shadow-md items-center justify-center"
      style={{ borderColor: COLORS.TEXT }}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-lg font-semibold flex-1" style={{ color: COLORS.TEXT_TITLE }}>
          {question}
        </h3>
        <Button
          onClick={onToggle}
          className="flex-shrink-0 w-8 h-8 !p-0 !min-w-0 text-2xl font-light transition-transform duration-300"
          style={{
            color: COLORS.TEXT,
            background: 'transparent',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          {isOpen ? "−" : "+"}
        </Button>
      </div>
      <div
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: COLORS.TEXT }}
          dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br>") }}
        />
      </div>
    </div>
  );
}

const FAQ_KEYS = ["q1", "q2", "q3", "q4"] as const;

export default function DomandeFrequenti() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('FAQ');
  const tCommon = useTranslations('Common');

  return (
    <section
      className="xl:px-32 lg:px-24 lg:py-16 flex flex-col lg:gap-16 gap-8 px-8 py-16"
    >
      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        {t('title')}
      </h2>


      <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 justify-center items-stretch">

        <div className="flex flex-col gap-4 w-full">
          {FAQ_KEYS.map((key, index) => (
            <FAQItem
              key={key}
              question={t(`questions.${key}.question`)}
              answer={t(`questions.${key}.answer`)}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div
          className="border rounded-3xl p-6 lg:p-8 flex flex-col justify-between w-full lg:min-w-[320px] lg:max-w-[350px] gap-8 lg:gap-0 overflow-hidden"
          style={{ borderColor: COLORS.TEXT }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-2xl"
            style={{ background: COLORS.PRIMARY }}
          >
            <FontAwesomeIcon
              icon={faComments}
              className="text-3xl"
              style={{ color: COLORS.TEXT_WHITE }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3
              className="text-xl font-bold"
              style={{ color: COLORS.TEXT_TITLE, fontFamily: 'var(--font-jost)' }}
            >
              {t('cta.title')}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.TEXT }}
            >
              {t('cta.description')}
            </p>
          </div>

          <Button
            href="/contatti"
            className="w-full text-center !min-w-0"
          >
            {tCommon('contactUs')}
          </Button>
        </div>

      </div>

    </section>
  );
}
