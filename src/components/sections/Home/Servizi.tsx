import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function Servizi() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex flex-col gap-8 "
    >
      <h2 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        I nostri servizi
      </h2>

      <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
        Scopri come possiamo aiutare la tua azienda con servizi su misura.
      </p>

      <div className="flex flex-row gap-8 justify-between items-center">
        <div className="flex flex-col flex-1 gap-8">
          <Image 
            src="/images/Home/servizi/1.png" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-4"> 
            <h3 className="text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Customer care
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Servizio clienti professionale e multicanale a supporto di ogni esigenza.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-8">
          <Image 
            src="/images/Home/servizi/2.png" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-4"> 
            <h3 className="text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Data management
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Gestione sicura e organizzata di tutti i tuoi dati aziendali con backup automatici e accesso controllato.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-8">
          <Image 
            src="/images/Home/servizi/3.png" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-4"> 
            <h3 className="text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Assistenza personalizzata
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Riduciamo tempi e complessità con un supporto professionale agli utenti digitali.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-8 w-[calc((100%-4rem)/3)]">
          <Image 
            src="/images/Home/servizi/4.png" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-4"> 
            <h3 className="text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Processi amministrativi
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Ottimizzazione dei processi amministrativi per ridurre costi e tempi di gestione.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-[calc((100%-4rem)/3)]">
          <Image 
            src="/images/Home/servizi/5.png" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-4"> 
            <h3 className="text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Servizi di backoffice in outsourcing
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Archiviazione, catalogazione e recupero rapido di documenti cartacei e digitali in formato certificato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 