'use client'

import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Form() {
  return (
    <section 
      id="form"
      className="lg:px-32 lg:py-16 px-8 py-16"
      style={{
        backgroundImage: 'url(/images/Home/desktop/bgForm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex lg:flex-row flex-col w-full h-full justify-between lg:gap-16 gap-8">

        <div className="flex flex-col gap-4 flex-1 justify-center items-start">
          <h2 className="lg:text-[40px] lg:leading-[50px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Affidati ad un partner operativo di fiducia
          </h2>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
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
              <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Nome e Cognome</label>
              <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Email</label>
              <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Azienda</label>
              <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Messaggio</label>
              <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px]" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
              <label htmlFor="privacy" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>
                Accetto l'<a href="/privacy" className="underline" target="_blank" rel="noopener noreferrer">informativa sulla privacy</a>
              </label>
            </div>
            <Button type="submit" className="w-[300px]">
              Invia la tua richiesta
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}