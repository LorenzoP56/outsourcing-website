import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Esternalizzare() {
  return (
    <section 
      className="lg:px-32 lg:py-16"
    >
      <div className="flex flex-col gap-8 justify-center items-center lg:px-8 lg:py-12 gap-10" style={{ backgroundImage: 'url(/images/Home/esternalizzare.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '56px' }}>
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Perché esternalizzare con Outsourcing Group
          </h2>
          <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
            Scopri come possiamo ottimizzare i tuoi processi aziendali e aumentare l'efficienza.
          </p>
        </div>

        <div className="flex flex-row gap-16 px-16 justify-center items-center">

          <div className="flex flex-col gap-4 flex-1 justify-center items-center">
            <Image src="/images/Home/esternalizzare/1.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
            <h3 className="text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Risparmio di tempo
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              Eliminiamo le attività ripetitive, liberando risorse per il tuo core business.
            </p>
          </div>

          <div className="flex flex-col gap-4 flex-1 justify-center items-center">
            <Image src="/images/Home/esternalizzare/2.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
            <h3 className="text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
             Competenze specializzate
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              Team di esperti pronti a supportare ogni esigenza aziendale.
            </p>
          </div>

          <div className="flex flex-col gap-4 flex-1 justify-center items-center">
            <Image src="/images/Home/esternalizzare/3.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
            <h3 className="text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
              Tecnologie all'avanguardia
            </h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
              Soluzioni digitali che semplificano e accelerano i processi.
            </p>
          </div>

        </div>

        <div className="flex gap-6">
          <Button href="/consulenza">
            Richiedi preventivo
          </Button>
          <Button href="/contatti" style={{ backgroundColor: 'white', color: COLORS.TEXT}}>
            Contattaci
          </Button>
        </div>
        
      </div>
    </section>
  );
} 