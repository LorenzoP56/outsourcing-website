'use client';

import * as React from 'react';
import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Form() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 mx-32 lg:-mt-24 -mt-8 bg-white p-8 w-[80%] mx-auto shadow-lg gap-8" style={{ borderRadius: '16px' }}>
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Affidati ad un partner operativo di fiducia
        </h2>
        <p className="text-base text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Scopri come Outsourcing Group può liberarti dalla burocrazia digitale e garantirti conformità e qualità.
          <br />
          Contattaci per una consulenza personalizzata.
        </p>
      </div>
      <div className="flex flex-col gap-4 flex-1">
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
          <Button type="submit" className="w-[300px]">
            Invia la tua richiesta
          </Button>
        </form>
      </div>
    </div>
  );
}