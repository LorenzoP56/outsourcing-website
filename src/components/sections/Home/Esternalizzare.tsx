import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Esternalizzare() {
  return (
    <section 
      className="lg:px-32 lg:py-16"
    >
      <div className="flex flex-col gap-8 lg:justify-center lg:items-center justify-start items-start lg:px-8 lg:py-12 gap-10 px-8 py-16 lg:rounded-[56px]" style={{ backgroundImage: 'url(/images/Home/desktop/esternalizzare.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Perché esternalizzare con Outsourcing Group
          </h2>
          <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
            Scopri come possiamo ottimizzare i tuoi processi aziendali e aumentare l'efficienza.
          </p>
        </div>

        <div className="flex flex-row gap-16 lg:px-16 lg:justify-center lg:items-center justify-start items-start lg:flex-row flex-col lg:flex-nowrap flex-wrap">

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/1.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
                Risparmio di tempo
              </h3>
            </div>
            <p className="text-md lg:text-center text-left" style={{ color: COLORS.TEXT_WHITE }}>
              Eliminiamo le attività ripetitive, liberando risorse per il tuo core business.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/2.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
                Competenze specializzate
              </h3>
            </div>
            <p className="text-md lg:text-center text-left" style={{ color: COLORS.TEXT_WHITE }}>
              Team di esperti pronti a supportare ogni esigenza aziendale.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/3.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
                Tecnologie all'avanguardia
              </h3>
            </div>
            <p className="text-md lg:text-center text-left" style={{ color: COLORS.TEXT_WHITE }}>
              Soluzioni digitali che semplificano e accelerano i processi.
            </p>items-start
          </div>

        </div>

        <div className="flex gap-6 lg:flex-row flex-col justify-center items-center mx-auto w-full">
          <Button href="#" className="w-full lg:w-auto">
            Richiedi preventivo
          </Button>
          <Button href="/contatti" className="w-full lg:w-auto" style={{ backgroundColor: 'white', color: COLORS.TEXT}}>
            Contattaci
          </Button>
        </div>
        
      </div>
    </section>
  );
} 