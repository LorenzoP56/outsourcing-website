import Button from "@/components/ui/Button";
import { COLORS } from "@/lib/constants";

export default function AffidatiServizi() {
  return (
    <section className="lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-8 px-8 py-16 items-center justify-center gap-16" style={{ backgroundImage: 'url(/images/ChiSiamo/bgAffidati.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Affidati ad un partner operativo di fiducia
        </h2>
        <p className="text-base text-center lg:text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Scopri come Outsourcing Group può liberarti dalla burocrazia digitale e garantirti conformità e qualità.
          <br />
          Contattaci per una consulenza personalizzata.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-1 w-full justify-center items-center">
        <form className="flex flex-col gap-4 w-full" onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Nome e Cognome</label>
            <input type="text" id="name" name="name" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Email</label>
            <input type="email" id="email" name="email" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="azienda" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Azienda</label>
            <input type="text" id="azienda" name="azienda" className="bg-white rounded-md p-3 text-gray-800 border border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lg:text-md text-[16px] leading-[16px]" style={{ color: COLORS.TEXT_WHITE }}>Messaggio</label>
            <textarea id="message" name="message" className="bg-white rounded-md p-3 text-gray-800 min-h-[120px] border border-gray-300" />
          </div>
          <Button type="submit" className="w-[300px]">
            Invia la tua richiesta
          </Button>
        </form>
      </div>

    </section>
  );
}