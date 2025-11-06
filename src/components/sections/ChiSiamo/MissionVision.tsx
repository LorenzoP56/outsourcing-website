import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section 
      className="lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 px-8 py-16"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Vision */}
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-row gap-6 items-center">
          <Image src="/images/ChiSiamo/missionVision/1.png" alt="Mission" width={30} height={30} className="w-[30px] h-[30px] object-contain" />
          <h2 
            className="lg:text-[32px] lg:leading-[32px] font-bold" 
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            Vision
          </h2>
        </div>
        <p className="text-base lg:text-lg leading-relaxed" style={{ color: COLORS.TEXT }}>
        Promuovere un modello di gestione digitale efficiente e sicuro, in cui aziende e Pubbliche Amministrazioni possano delegare con fiducia i processi operativi a professionisti qualificati.
        <br />
        <br />
        Vogliamo creare valore rendendo più semplici i processi, migliorando la produttività e la qualità complessiva dei servizi.        </p>
      </div>

      {/* Mission */}
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-row gap-6 items-center">
          <Image src="/images/ChiSiamo/missionVision/2.png" alt="Vision" width={30} height={30} className="w-[30px] h-[30px] object-contain" />
          <h2 
            className="lg:text-[32px] lg:leading-[32px] font-bold" 
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            Mission
          </h2>
        </div>
        <p className="text-base lg:text-lg leading-relaxed" style={{ color: COLORS.TEXT }}>
        Semplificare la gestione operativa di aziende e Pubbliche Amministrazioni garantendo qualità, precisione e conformità normativa.
        <br />
        <br />
        Dal 1999 mettiamo la nostra esperienza nel back office e nel customer care al servizio di chi vuole ridurre la complessità, migliorare la produttività interna e concentrarsi su ciò che davvero fa la differenza per il proprio business.        </p>
      </div>

    </section>
  );
} 