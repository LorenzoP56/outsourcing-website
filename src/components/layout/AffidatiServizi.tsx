"use client";

import "./Affidati.css";

import Button from "@/components/ui/Button";
import { COLORS } from "@/lib/constants";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import { motion } from "@/components/animations";
import { useContactForm } from "@/hooks/useContactForm";

export default function AffidatiServizi() {
  const t = useTranslations('Affidati');
  const tForm = useTranslations('Form');
  const tCommon = useTranslations('Common');
  const { formData, loading, success, error, handleChange, handleSubmit } = useContactForm();

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
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/20 border border-green-400 rounded-md p-6 text-center w-full"
          >
            <p className="text-white text-lg font-semibold">{tForm('successMessage')}</p>
          </motion.div>
        ) : (
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="affidati-name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('name')}</label>
              <input type="text" id="affidati-name" name="name" required value={formData.name} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="affidati-email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('email')}</label>
              <input type="email" id="affidati-email" name="email" required value={formData.email} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="affidati-azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('company')}</label>
              <input type="text" id="affidati-azienda" name="azienda" value={formData.azienda} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="affidati-message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('message')}</label>
              <textarea id="affidati-message" name="message" value={formData.message} onChange={handleChange} className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="affidati-privacy" name="privacy" required className="mt-1" />
              <label htmlFor="affidati-privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>
                {tForm.rich('privacyConsent', { link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link> })}
              </label>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-sm"
              >
                {error}
              </motion.p>
            )}
            <Button type="submit" className="w-[300px]" disabled={loading}>
              {loading ? tForm('sending') : tCommon('sendRequest')}
            </Button>
          </form>
        )}
      </div>

    </section>
  );
}
