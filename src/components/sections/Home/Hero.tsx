import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="min-h-[90vh] lg:pl-32 lg:pr-0 lg:py-16 p-8 hero-bg flex items-center"
    >
      <div className="flex flex-col lg:w-[40vw] w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[40px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}>
            Soluzioni professionali di Digital Back Office che fanno crescere la tua azienda
          </h1>
          <p className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Gestiamo le attività di <span className="font-bold">Back Office</span> e <span className="font-bold">Contact Center</span> per servizi digitali e siamo specializzati nell’assistenza ai clienti.
          <br />
          <br />
          Ottimizziamo i tuoi processi aziendali di Back Office <span className="font-bold">riducendo tempi e costi, garantendo continuità operativa e qualità del servizio.</span>
          </p>
        </div>

        <div className="flex gap-6 lg:flex-row flex-col">
          <Button 
            href="#form"
            className="w-[300px]"
          >
            Contattaci
          </Button>
          <Button 
            href="/servizi"
            className="w-[300px]"
            style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
          >
            Scopri i nostri servizi
          </Button>
        </div>

        <Image src="/images/Home/mobile/bgHero.webp" alt="Hero" width={500} height={500} className="w-full h-auto lg:hidden block" />
      </div>
    </section>
  );
} 