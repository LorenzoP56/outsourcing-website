import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function Certificazioni() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex flex-col gap-16 "
    >
      <h2 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        Certificazioni e sicurezza
      </h2>

      <div className="flex flex-row gap-8 justify-center items-center">

        <div className="flex flex-col gap-2 flex-1 justify-center items-center">
          <Image src="/images/Home/certificazioni/1.png" alt="Certificazione 1" width={100} height={100} className="w-[115px] h-[115px]" />
          <h3 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            ISO 9001
          </h3>
          <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
            Certificazione di qualità per la gestione dei processi aziendali
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1 justify-center items-center">
          <Image src="/images/Home/certificazioni/2.png" alt="Certificazione 1" width={100} height={100} className="w-[115px] h-[115px]" />
          <h3 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            eIDAS
          </h3>
          <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
            Conformità al regolamento europeo sulla protezione dei dati
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1 justify-center items-center">
          <Image src="/images/Home/certificazioni/3.png" alt="Certificazione 1" width={100} height={100} className="w-[115px] h-[115px]" />
          <h3 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            GDPR
          </h3>
          <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
            Identificazione elettronica e servizi fiduciari per le transazioni
          </p>
        </div>

      </div>

    </section>
  );
} 