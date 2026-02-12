'use client'

import "./Form.css";

import {Link} from "@/i18n/navigation";
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, motion, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";
import { useContactForm } from "@/hooks/useContactForm";

export default function Form() {
  const t = useTranslations('Home');
  const tForm = useTranslations('Form');
  const { formData, loading, success, error, handleChange, handleSubmit } = useContactForm();

  return (
    <section
      id="form"
      className="form-bg lg:px-32 lg:py-16 px-8 py-16"
    >
      <div className="flex lg:flex-row flex-col w-full h-full justify-between lg:gap-16 gap-8">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 flex-1 justify-center items-start">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            {t('form.title')}
          </h2>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            {t('form.description')}
            <br />
            {t('form.ctaText')}
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 flex-1">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border border-green-400 rounded-md p-6 text-center"
            >
              <p className="text-white text-lg font-semibold">{tForm('successMessage')}</p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="home-name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('name')}</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                  type="text"
                  id="home-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white rounded-md p-3 text-gray-800 transition-all"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="home-email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('email')}</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                  type="email"
                  id="home-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white rounded-md p-3 text-gray-800 transition-all"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="home-azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('company')}</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                  type="text"
                  id="home-azienda"
                  name="azienda"
                  value={formData.azienda}
                  onChange={handleChange}
                  className="bg-white rounded-md p-3 text-gray-800 transition-all"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="home-message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('message')}</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                  id="home-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] transition-all"
                />
              </motion.div>
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <input type="checkbox" id="home-privacy" name="privacy" required className="mt-1" />
                <label htmlFor="home-privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>
                  {tForm.rich('privacyConsent', {
                    link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link>
                  })}
                </label>
              </motion.div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-300 text-sm"
                >
                  {error}
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button type="submit" className="w-[300px]" disabled={loading}>
                  {loading ? tForm('sending') : tForm('submit')}
                </Button>
              </motion.div>
            </form>
          )}
        </AnimatedSection>

      </div>
    </section>
  );
}
