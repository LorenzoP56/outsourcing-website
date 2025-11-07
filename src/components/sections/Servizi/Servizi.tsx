import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Servizi() {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 gap-32 flex flex-col">
      
      <div className="flex flex-row gap-8">

        <Image src="/images/Servizi/servizi/1.png" alt="Servizio 1" width={500} height={500} className="w-[70%] h-auto" />
        
        <div className="flex flex-col flex-1 gap-8 w-[30%] justify-center items-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Customer care
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Assistenza clienti professionale tramite telefono, chat e ticketing, integrata con piattaforme CRM come Salesforce e Freshdesk. Un servizio scalabile, flessibile e in linea con l'identità del tuo brand.
            </p>
          </div>

          <Button href="#" className="self-start">
            Scopri di più
          </Button>

        </div>

      </div>

      <div className="flex flex-row-reverse gap-8">

        <Image src="/images/Servizi/servizi/2.png" alt="Servizio 2" width={500} height={500} className="w-[70%] h-auto" />
        
        <div className="flex flex-col flex-1 gap-8 w-[30%] justify-center items-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Data entry & data management
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Inserimento, pulizia e validazione dei dati con procedure controllate e strumenti digitali avanzati. Riduciamo errori, tempi e costi di gestione per database sempre aggiornati.           
            </p>
          </div>

          <Button href="#" className="self-start">
            Scopri di più
          </Button>

        </div>

      </div>

      <div className="flex flex-row gap-8">

        <Image src="/images/Servizi/servizi/3.png" alt="Servizio 3" width={500} height={500} className="w-[70%] h-auto" />
        
        <div className="flex flex-col flex-1 gap-8 w-[30%] justify-center items-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Attività di assistenza personalizzata agli utenti di servizi digitali
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Supporto diretto agli utenti finali per SPID, firma digitale, PEC e servizi online. Assistenza telefonica e via ticket con personale qualificato.
            </p>
          </div>

          <Button href="#" className="self-start">
            Scopri di più
          </Button>

        </div>

      </div>

      <div className="flex flex-row-reverse gap-8">

        <Image src="/images/Servizi/servizi/4.png" alt="Servizio 4" width={500} height={500} className="w-[70%] h-auto" />
        
        <div className="flex flex-col flex-1 gap-8 w-[30%] justify-center items-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Processi operativi e amministrativi
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Gestione di pratiche, codici cliente, riconciliazioni e attività amministrative ricorrenti. Trasformiamo procedure complesse in flussi semplici e misurabili, ottimizzando costi e performance.
            </p>
          </div>

          <Button href="#" className="self-start">
            Scopri di più
          </Button>

        </div>

      </div>

      <div className="flex flex-row gap-8">

        <Image src="/images/Servizi/servizi/5.png" alt="Servizio 5" width={500} height={500} className="w-[70%] h-auto" />
        
        <div className="flex flex-col flex-1 gap-8 w-[30%] justify-center items-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[40px] lg:leading-[40px] text-[24px] leading-[24px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Servizi di backoffice in outsourcing
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Gestione di funzioni "non core" e attività ripetitive in outsourcing. Ottimizzi costi e tempi, garantendo continuità e qualità operativa.            
            </p>
          </div>

          <Button href="#" className="self-start">
            Scopri di più
          </Button>

        </div>

      </div>

    </section>
  );
}