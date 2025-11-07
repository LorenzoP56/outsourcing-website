import { COLORS } from "@/lib/constants";

export default function Valori() {
  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center" style={{ backgroundColor: '#D9D9D9' }}>
      
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="lg:text-[40px] lg:leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          I valori che ci guidano
        </h2>
        <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
          Diventare il punto di riferimento italiano per l'outsourcing del back office e del customer care digitale,
          <br/>
          favorendo una trasformazione digitale sicura e accessibile a tutte le organizzazioni.
        </p> 
      </div>

      <div className="flex flex-row gap-4 justify-center">

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Affidabilità & Trasparenza
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            I nostri processi sono certificati e conformi alle normative, per darti sicurezza completa.
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Flessibilità & Partnership
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Ci adattiamo a grandi aziende, PMI e PA, offrendo soluzioni su misura e white-label.          
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Innovazione & Competenza
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Investiamo nella formazione continua del team e nell’adozione di strumenti digitali che semplificano il lavoro, senza sostituire il valore dell’esperienza umana.
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-4 items-center p-8" style={{ backgroundImage: 'url(/images/ChiSiamo/valori/4.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '16px' }}>
          <h3 className="lg:text-[20px] lg:leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
            Sostenibilità & Etica
          </h3>
          <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
            Promuoviamo politiche ESG, codice etico e modelli 231, perché il business etico genera valore duraturo.
          </p>
        </div>
        
        
      </div>
      
    </section>
  );
}