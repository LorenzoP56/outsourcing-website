'use client';

import * as React from 'react';
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, fadeInUp, motion } from "@/components/animations";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function Form() {
  const t = useTranslations('Contatti');
  const tForm = useTranslations('Form');
  const tCommon = useTranslations('Common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex lg:flex-row flex-col gap-4 lg:mx-32 lg:-mt-24 -mt-8 bg-white p-12 lg:w-[80%] lg:mx-auto lg:shadow-lg gap-8"
      style={{ borderRadius: '16px' }}
    >
      <AnimatedSection variants={fadeInUp} className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold lg:text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            {t('form.title')}
          </h2>
          <p className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            {t('form.description')}
            <br />
            {t('form.ctaPhone')} <a href="tel:+390498701855" style={{color: COLORS.BLUE}}>049 870 1855</a>
          </p>
        </div>
        <div className='flex flex-col gap-2 p-4' style={{ backgroundImage: 'url(/website_images/Contatti/imgForm.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',borderRadius: '16px' }}>
          <h3 className="text-white font-bold text-xl">
            {t('form.availability')}
          </h3>
          <div>
            <h3 className="text-white font-bold text-xl">
              {t('form.weekdays')}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
              {t('form.weekdaysHours')}
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">
              {t('form.weekend')}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
              {t('form.weekendNote')}
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 flex-1">
        <form className="flex flex-col gap-4" onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('name')}</label>
            <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('email')}</label>
            <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('company')}</label>
            <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('message')}</label>
            <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
            <label htmlFor="privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>
              {tForm.rich('privacyConsent', { link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link> })}
            </label>
          </div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" className="w-full lg:w-[300px]">
              {tCommon('sendRequest')}
            </Button>
          </motion.div>
        </form>
      </AnimatedSection>
    </motion.div>
  );
}
