import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Costruiamo() {
  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center gap-16" style={{ backgroundImage: 'url(/images/ChiSiamo/bgCostruiamo.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          Costruiamo insieme la soluzione più adatta alla tua azienda
        </h2>
        <p className="text-base text-center" style={{ color: COLORS.TEXT_WHITE }}>
          Ogni azienda ha esigenze diverse. Ascoltiamo le tue necessità e analizziamo insieme il modo più efficace per esternalizzare i processi e migliorare la gestione operativa.
        </p>
      </div>
      <Button href="/contatti">
        Richiedi informazioni
      </Button>
    </section>
  );
}