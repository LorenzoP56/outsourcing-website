import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Esternalizzare() {
  return (
    <section 
      className="lg:px-32 lg:py-16"
    >
      <div className="flex flex-col gap-8 lg:justify-center lg:items-center justify-start items-start lg:px-8 lg:py-12 gap-10 px-8 py-16 lg:rounded-[56px] lg:bg-[url(/images/Home/desktop/esternalizzare.webp)] lg:bg-cover lg:bg-center lg:bg-no-repeat">
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
            Perché esternalizzare con Outsourcing Group
          </h2>
          <p className="text-md text-center text-[#2B2D2F] lg:text-[#FFFFFF]">
            Scopri come possiamo ottimizzare i tuoi processi aziendali e aumentare l'efficienza.
          </p>
        </div>

        <div className="flex flex-row lg:gap-16 gap-8 lg:px-16 lg:justify-center justify-start items-start lg:flex-row flex-col lg:flex-nowrap flex-wrap">

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/1.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Riduzione dei costi operativi
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Esternalizzando, l'azienda elimina spese fisse (personale, formazione, software, infrastruttura, postazioni, turnazioni) e le trasforma in costi variabili, pagando solo ciò che usa.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/2.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Efficienza e qualità professionale
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Ogni processo è gestito da personale già formato.Il servizio è scalabile in base ai picchi operativi.L'azienda può così alzare la qualità del servizio ai clienti e abbattere errori, ritardi e inefficienze interne.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-1 w-full lg:justify-center lg:items-center items-start">
            <div className="flex lg:flex-col flex-row gap-4 lg:justify-center items-center">
              <Image src="/images/Home/desktop/esternalizzare/3.png" alt="Card 1" width={100} height={100} className="w-[70px] h-[70px]" />
              <h3 className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]" style={{ fontFamily: 'var(--font-jost)' }}>
                Focus totale sul core business
              </h3>
            </div>
            <p className="text-md lg:text-center text-left text-[#2B2D2F] lg:text-[#FFFFFF]">
              Delegando Digital Back Office & Contact Center, l'azienda libera tempo e risorse per ciò che fa crescere davvero il business.
            </p>
          </div>

        </div>

        <div className="flex gap-6 lg:flex-row flex-col justify-center items-center mx-auto w-full">
          <Button 
            href="#" 
            className="w-[300px]"
          >
            Richiedi preventivo
          </Button>
          <Button 
            href="/contatti" 
            className="w-[300px]"
            style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
          >
            Contattaci
          </Button>
        </div>
        
      </div>
    </section>
  );
} 