'use client';

import * as React from 'react';
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatedSection, fadeInLeft, fadeInRight, motion } from "@/components/animations";

export default function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex lg:flex-row flex-col gap-4 lg:mx-32 lg:-mt-24 -mt-8 bg-white p-12 lg:w-[80%] lg:mx-auto lg:shadow-lg gap-8"
      style={{ borderRadius: '16px' }}
    >
      <AnimatedSection variants={fadeInLeft} className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold lg:text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Affidati ad un partner operativo di fiducia
          </h2>
          <p className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Scopri come Outsourcing Group può liberarti dalla burocrazia digitale e garantirti conformità e qualità.
            <br />
            Contattaci per una consulenza personalizzata.
          </p>
        </div>
        <div className='flex flex-col gap-2 p-4' style={{ backgroundImage: 'url(/images/Contatti/imgForm.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',borderRadius: '16px' }}>
          <h3 className="text-white font-bold text-xl">
            Disponibilità
          </h3>
          <div>
            <h3 className="text-white font-bold text-xl">
              Lunedì - Venerdì
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
              09:00 - 19:00
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">
              Sabato e Domenica
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
              supporto attivabile su necessità operative o progetti dedicati
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection variants={fadeInRight} className="flex flex-col gap-4 flex-1">
        <form className="flex flex-col gap-4" onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>Nome e Cognome</label>
            <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>Email</label>
            <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>Azienda</label>
            <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT }}>Messaggio</label>
            <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
          </div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" className="w-[300px]">
              Invia la tua richiesta
            </Button>
          </motion.div>
        </form>
      </AnimatedSection>
    </motion.div>
  );
}