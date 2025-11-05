'use client'

import { COLORS } from "@/lib/constants";

export default function Form() {
  return (
    <section 
      id="form"
      className="lg:px-32 lg:py-16"
      style={{
        backgroundImage: 'url(/images/Home/bgForm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-row w-full h-full justify-center gap-16">

        <div className="flex flex-col gap-4 flex-1 justify-center items-center">
          <h2 className="text-[40px] leading-[50px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
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
              <label htmlFor="name" className="text-md" style={{ color: COLORS.TEXT_WHITE }}>Nome e Cognome</label>
              <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-md" style={{ color: COLORS.TEXT_WHITE }}>Email</label>
              <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="azienda" className="text-md" style={{ color: COLORS.TEXT_WHITE }}>Azienda</label>
              <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-md" style={{ color: COLORS.TEXT_WHITE }}>Messaggio</label>
              <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px]" />
            </div>
            <button type="submit" className="px-8 py-4 text-lg font-bold rounded-[24px] inline-block w-fit" style={{ backgroundColor: COLORS.PRIMARY, color: COLORS.TEXT_WHITE, fontFamily: 'var(--font-jost)' }}>
              Invia la tua richiesta
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}