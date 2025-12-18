import { COLORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-[70vh] lg:px-32 lg:py-16 px-8 py-16 flex flex-col gap-8 items-center justify-center" style={{ backgroundImage: 'url(/images/Contatti/bgHero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col w-full h-full justify-center gap-4">
        <h1 className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Contatti
        </h1>
        <p className="lg:text-xl text-base text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Rimani aggiornato sulle ultime novità in tema di outsourcing del back office digitale, customer care professionale e conformità normativa. Scopri strategie, best practice e soluzioni innovative per ottimizzare i tuoi processi aziendali.       
        </p>
      </div>
    </section>
  );
} 