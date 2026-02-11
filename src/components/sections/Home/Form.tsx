'use client'

import "./Form.css";

import {Link} from "@/i18n/navigation";
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, motion, fadeInUp } from "@/components/animations";
import {useTranslations} from "next-intl";

export default function Form() {
  const t = useTranslations('Home');
  const tForm = useTranslations('Form');

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
          <form className="flex flex-col gap-4" onSubmit={(e) => {
            e.preventDefault();
          }}>
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('name')}</label>
              <motion.input
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                type="text"
                id="name"
                name="name"
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
              <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('email')}</label>
              <motion.input
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                type="email"
                id="email"
                name="email"
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
              <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('company')}</label>
              <motion.input
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                type="text"
                id="azienda"
                name="azienda"
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
              <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>{tForm('message')}</label>
              <motion.textarea
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(32, 138, 228, 0.3)" }}
                id="message"
                name="message"
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
              <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
              <label htmlFor="privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>
                {tForm.rich('privacyConsent', {
                  link: (chunks) => <Link href="/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">{chunks}</Link>
                })}
              </label>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button type="submit" className="w-[300px]">
                {tForm('submit')}
              </Button>
            </motion.div>
          </form>
        </AnimatedSection>

      </div>
    </section>
  );
}
