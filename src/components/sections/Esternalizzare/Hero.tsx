import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-[90vh] lg:px-32 lg:py-16 px-8 py-16 flex flex-col gap-8 items-center justify-center" style={{ backgroundImage: 'url(/images/Esternalizzare/bgHero.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col w-full h-full justify-center gap-4">
        <h1 className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Perché esternalizzare alcuni processi interni
        </h1>
        <p className="lg:text-xl text-base text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          L'outsourcing non è una semplice esternalizzazione di compiti, ma una strategia per rendere i processi più snelli, sicuri e sostenibili nel tempo. Esternalizzando libererai risorse per il core business, ridurrai i costi operativi, avrai accesso a competenze specializzate e potrai adattare facilmente la capacità alle variazioni della domanda.
          <br/>
          <br/>
          Migliore capacità operativa significa crescita della tua azienda.
        </p>
      </div>
      <Button href="/contatti">
        Inizia a delegare
      </Button>
    </section>
  );
} 