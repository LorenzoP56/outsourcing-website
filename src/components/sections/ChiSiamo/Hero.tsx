import { COLORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      className="min-h-[50vh] lg:pl-32 lg:pr-0 lg:py-16 px-8 py-16 flex items-center justify-center"
    >
      <div className="flex flex-col w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Professionisti al servizio 
            <br />
            della trasformazione digitale
          </h1>
          <p className="text-lg text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Dal 1999 al tuo fianco per digitalizzare e semplificare il back office e il customer care, con affidabilità e sicurezza.
          </p>
        </div>
      </div>
    </section>
  );
} 