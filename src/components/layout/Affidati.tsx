import Button from "@/components/ui/Button";
import { COLORS } from "@/lib/constants";

export default function Affidati() {
  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-8 px-8 py-16 items-center justify-center" style={{ backgroundImage: 'url(/images/ChiSiamo/bgAffidati.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      
      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
        Affidati ad un partner operativo di fiducia
      </h2>

      <p className="text-base text-center" style={{ color: COLORS.TEXT_WHITE }}>
        Scopri come Outsourcing Group può liberarti dalla burocrazia digitale e garantirti conformità e qualità.
        <br />
        Contattaci per una consulenza personalizzata.
      </p>

      <div className="flex lg:flex-row flex-col gap-8 justify-center items-center">

        <div className="flex flex-col p-8 gap-8 w-[300px] items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-[24px] leading-[24px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Contattaci
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              Un consulente dedicato ti aiuterà a comprendere come ottimizzare i tuoi processi di back office.
            </p>
          </div>
          <Button href="tel:+393483483483" className="w-full">
            Parla con un consulente
          </Button>
        </div>

        <div className="flex flex-col p-8 gap-8 w-[300px] items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-[24px] leading-[24px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Scrivici
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              Il nostro team ti risponderà rapidamente per approfondire le esigenze della tua azienda.
            </p>
          </div>
          <Button href="mailto:info@osgdigitaleconomy.com" className="w-full" style={{ background: 'white', color: COLORS.TEXT }}>
            Invia email
          </Button>
        </div>

      </div>

    </section>
  );
}