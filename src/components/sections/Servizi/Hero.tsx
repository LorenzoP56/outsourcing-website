import { COLORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      className="min-h-[50vh] lg:px-32 lg:py-16 px-8 py-16 flex items-center justify-center"
    >
      <div className="flex flex-col w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            I nostri servizi di
            <br />
            outsourcing digitale
          </h1>
          <p className="lg:text-xl text-base text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>Gestiamo attività operative e digitali con precisione, continuità e conformità normativa.
            Gestiamo attività operative e digitali con precisione, continuità e conformità normativa.
            Dal back office ai servizi digitali, affianchiamo i team aziendali per rendere i processi più efficienti e scalabili.
          </p>
        </div>
      </div>
    </section>
  );
} 