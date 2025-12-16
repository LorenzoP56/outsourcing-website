import { COLORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      className="min-h-[50vh] lg:px-32 lg:py-16 px-8 py-16 flex items-center justify-center"
    >
      <div className="flex flex-col w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[36px] leading-[36px] font-bold lg:text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Professionisti al passo con l’evoluzione del settore digitale
          </h1>
          <p className="lg:text-xl text-base lg:text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Dal 1999 affianchiamo le aziende con servizi digitali che evolvono costantemente, integrando tecnologie e competenze per garantire gestione operativa, qualità e compliance in un mercato in continua trasformazione.
          </p>
        </div>
      </div>
    </section>
  );
} 