"use client";

import "./Affidati.css";

import Button from "@/components/ui/Button";
import { COLORS } from "@/lib/constants";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function AffidatiServizi() {
  const t = useTranslations('Affidati');
  const tForm = useTranslations('Form');
  const tCommon = useTranslations('Common');

  return (
    <section className="affidati-bg lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-8 px-8 py-16 items-center justify-center gap-16">

      <div className="flex flex-col gap-4 flex-1 justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          {t('title')}
        </h2>
        <p className="text-base text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          {t('description')}
          <br />
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-1 w-full justify-center items-center">
        <form className="flex flex-col gap-4 w-full" onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('name')}</label>
            <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('email')}</label>
            <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('company')}</label>
            <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('message')}</label>
            <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
            <label htmlFor="privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>
              {tForm.rich('privacyConsent', { link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link> })}
            </label>
          </div>
          <Button type="submit" className="w-[300px]">
            {tCommon('sendRequest')}
          </Button>
        </form>
      </div>

    </section>
  );
}
