'use client';

import * as React from 'react';
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, fadeInUp, motion } from "@/components/animations";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import { useContactForm } from "@/hooks/useContactForm";

export default function Form() {
  const t = useTranslations('Contatti');
  const tForm = useTranslations('Form');
  const tCommon = useTranslations('Common');
  const { formData, loading, success, error, handleChange, handleSubmit } = useContactForm();

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
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-400 rounded-md p-6 text-center"
          >
            <p className="text-green-700 text-lg font-semibold">{tForm('successMessage')}</p>
          </motion.div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="contatti-name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('name')}</label>
              <input type="text" id="contatti-name" name="name" required value={formData.name} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contatti-email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('email')}</label>
              <input type="email" id="contatti-email" name="email" required value={formData.email} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contatti-azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('company')}</label>
              <input type="text" id="contatti-azienda" name="azienda" value={formData.azienda} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contatti-message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>{tForm('message')}</label>
              <textarea id="contatti-message" name="message" value={formData.message} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="contatti-privacy" name="privacy" required className="mt-1" />
              <label htmlFor="contatti-privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>
                {tForm.rich('privacyConsent', { link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link> })}
              </label>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                {error}
              </motion.p>
            )}
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button type="submit" className="w-full lg:w-[300px]" disabled={loading}>
                {loading ? tForm('sending') : tCommon('sendRequest')}
              </Button>
            </motion.div>
          </form>
        )}
      </AnimatedSection>
    </motion.div>
  );
}
