"use client";

import "./Affidati.css";

import Button from "@/components/ui/Button";
import { COLORS } from "@/lib/constants";
import {useTranslations} from "next-intl";

export default function Affidati() {
  const t = useTranslations('Affidati');
  const tCommon = useTranslations('Common');

  return (
    <section className="affidati-bg lg:px-32 lg:py-16 flex flex-col gap-8 px-8 py-16 items-center justify-center">

      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
        {t('title')}
      </h2>

      <p className="text-base text-center" style={{ color: COLORS.TEXT_WHITE }}>
        {t('description')}
        <br />
        {t('subtitle')}
      </p>

      <div className="flex lg:flex-row flex-col gap-8 justify-center lg:items-stretch items-center">

        <div className="flex flex-col p-8 gap-8 w-[300px] items-center justify-start">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-[24px] leading-[24px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              {t('contact.title')}
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              {t('contact.description')}
            </p>
          </div>
          <Button href="tel:+393483483483" className="w-full">
            {tCommon('talkToConsultant')}
          </Button>
        </div>

        <div className="flex flex-col p-8 gap-8 w-[300px] items-center justify-start">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-[24px] leading-[24px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              {t('write.title')}
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              {t('write.description')}
            </p>
          </div>
          <Button href="mailto:info@osgdigitaleconomy.com" className="w-full" style={{ background: 'white', color: COLORS.TEXT }}>
            {tCommon('sendEmail')}
          </Button>
        </div>

      </div>

    </section>
  );
}
