import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section 
      className="h-[90vh] lg:pl-32 lg:pr-0 lg:py-16"
      style={{
        backgroundImage: 'url(/images/Home/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col w-[40vw] h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[56px] leading-[56px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}>
            Soluzioni di back office
            che fanno crescere la tua azienda
          </h1>
          <p className="text-lg" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Affianchiamo aziende e Pubbliche Amministrazioni nella gestione delle attività <span className="font-bold">di back office</span> e customer care per servizi digitali.
            <br />
            <br />
            Ottimizziamo i tuoi processi aziendali con soluzioni innovative, <span className="font-bold">riduciamo tempi e costi garantendo continuità operativa</span> (lo facciamo come lo faresti tu) e <span className="font-bold">qualità del servizio</span>.
          </p>
        </div>

        <div className="flex gap-6">
          <Button href="/consulenza">
            Richiedi consulenza gratuita
          </Button>
          <Button 
            href="/servizi"
            style={{ backgroundColor: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
          >
            Scopri i servizi
          </Button>
        </div>
      </div>
    </section>
  );
} 