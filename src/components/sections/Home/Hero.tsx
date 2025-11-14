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
            Soluzioni di back office
            che fanno crescere la tua azienda
          </h1>
          <p className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Affianchiamo aziende e Pubbliche Amministrazioni nella gestione delle attività <span className="font-bold">di back office</span> e customer care per servizi digitali.
            <br />
            <br />
            Ottimizziamo i tuoi processi aziendali con soluzioni innovative, <span className="font-bold">riduciamo tempi e costi garantendo continuità operativa</span> (lo facciamo come lo faresti tu) e <span className="font-bold">qualità del servizio</span>.
          </p>
        </div>

        <div className="flex gap-6 lg:flex-row flex-col">
          <Button 
            href="#form"
            className="w-[300px]"
            style={{ border: '2px solid transparent' }}
          >
            Richiedi consulenza gratuita
          </Button>
          <Button 
            href="/servizi"
            className="w-[300px]"
            style={{ backgroundColor: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
          >
            Scopri i servizi
          </Button>
        </div>

        <Image src="/images/Home/mobile/hero.png" alt="Hero" width={500} height={500} className="w-full h-auto lg:hidden block" />
      </div>
    </section>
  );
} 