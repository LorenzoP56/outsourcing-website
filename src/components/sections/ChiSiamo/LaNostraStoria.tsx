import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function LaNostraStoria() {
  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center">
      
      <h2 className="lg:text-[40px] lg:leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>La nostra storia</h2>
    
      <div className="flex flex-row gap-8 justify-between items-start">

        <div className="flex flex-col flex-1 gap-8 items-center justify-center">
          <Image src="/images/ChiSiamo/storia/1.png" alt="La nostra storia" width={500} height={500} className="w-[100px] h-auto" />
          <div className="flex flex-col gap-2">
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>1999 - 2000</h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
              Avvio delle prime attività di protocollazione e archiviazione digitale per il sistema camerale.
            </p>
          </div>
          
        </div>

        <Image src="/images/ChiSiamo/storia/divider.png" alt="La nostra storia" width={100} height={100} className="w-[100px] h-auto self-center" />

        <div className="flex flex-col flex-1 gap-8 items-center justify-center">
          <Image src="/images/ChiSiamo/storia/2.png" alt="La nostra storia" width={500} height={500} className="w-[100px] h-auto" />
          <div className="flex flex-col gap-2">
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>2001 - 2004</h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
              Sviluppo di percorsi formativi aziendali con IFOA, in ambito HR, GDO e programmazione.
            </p>
          </div>
          
        </div>

        <Image src="/images/ChiSiamo/storia/divider.png" alt="La nostra storia" width={100} height={100} className="w-[100px] h-auto self-center" />

        <div className="flex flex-col flex-1 gap-8 items-center justify-center">
          <Image src="/images/ChiSiamo/storia/3.png" alt="La nostra storia" width={500} height={500} className="w-[100px] h-auto" />
          <div className="flex flex-col gap-2">
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>dal 2011</h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
              Collaborazioni continuative di back office nell'ambito dei servizi digitali (PEC, firma/identità digitale) e assistenza telefonica agli utenti finali per una delle principali Autorità di Certificazione europee.
            </p>
          </div>
          
        </div>

        <Image src="/images/ChiSiamo/storia/divider.png" alt="La nostra storia" width={100} height={100} className="w-[100px] h-auto self-center" />

        <div className="flex flex-col flex-1 gap-8 items-center justify-center">
          <Image src="/images/ChiSiamo/storia/4.png" alt="La nostra storia" width={500} height={500} className="w-[100px] h-auto" />
          <div className="flex flex-col gap-2">
            <h3 className="lg:text-[20px] lg:leading-[20px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>2025</h3>
            <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
              Avvio del percorso di certificazione ISO 9001, a conferma dell'impegno verso la qualità e il miglioramento continuo.
            </p>
          </div>
          
        </div>

      </div>
    
    </section>
  );
}