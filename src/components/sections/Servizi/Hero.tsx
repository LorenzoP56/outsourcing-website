import { COLORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      className="min-h-[50vh] lg:px-32 lg:py-16 px-8 py-16 flex items-center justify-center"
    >
      <div className="flex flex-col w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-24">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            I nostri servizi professionali di
            <br/>
            Digital Back Office
          </h1>
          <p className="lg:text-xl text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>Gestiamo attività operative e digitali con precisione, continuità e conformità normativa.
            La trasformazione digitale richiede processi interni strutturati, dati affidabili e flussi operativi efficienti.
            I nostri servizi di Digital Back Office si basano su procedure standardizzate, ambienti di collaudo, controllo qualità e sistemi digitali che permettono un’elaborazione precisa e tracciata di ogni attività.
            Per supportare l’azienda nella gestione documentale, nel monitoraggio dei flussi e nell’ottimizzazione dei processi, integriamo competenze operative, tecniche e analitiche.
          </p>
        </div>
      </div>
    </section>
  );
} 