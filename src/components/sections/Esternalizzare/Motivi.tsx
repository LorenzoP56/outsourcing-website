import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function Motivi() {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 flex flex-col lg:gap-32 gap-16">

      <div className="flex lg:flex-row flex-col lg:gap-24 gap-8">

        <div className="flex flex-1 flex-col gap-4 items-center justify-center">
          <Image src="/images/Esternalizzare/motivi/1.png" alt="Motivo 1" width={100} height={100} className="w-full h-auto" />
        </div>
        
        <div className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Trasforma i costi fissi in risultati misurabili
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
            Gestire internamente attività operative o amministrative comporta costi fissi elevati, formazione continua e un impiego di risorse che spesso non genera valore strategico.
            <br />
            <br />
            Affidandoti a un partner specializzato, puoi convertire questi costi in investimenti mirati e modulabili, ottimizzando la gestione del personale e garantendo continuità anche nei periodi di picco.
            <br />
            <br />
            Con Outsourcing Group, paghi solo ciò che serve, quando serve, mantenendo sempre il pieno controllo sui risultati.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Riduzione dei costi di personale e infrastrutture
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Flessibilità nei volumi di lavoro, anche stagionali
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Nessun costo di formazione o turnover interno
              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="flex lg:flex-row-reverse flex-col lg:gap-24 gap-8">

        <div className="flex flex-1 flex-col gap-4 items-center justify-center">
          <Image src="/images/Esternalizzare/motivi/2.png" alt="Motivo 2" width={100} height={100} className="w-full h-auto" />
        </div>
        
        <div className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Procedure più snelle, dati più affidabili
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Un'organizzazione efficiente nasce da processi strutturati e dati affidabili. Un partner specializzato come Outsourcing Group assicura procedure documentate, controllo qualità e strumenti digitali integrati che migliorano la produttività e la sicurezza.
              <br />
              <br />
              Ogni flusso operativo viene tracciato e verificato per garantire conformità normativa e continuità nel tempo.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Riduzione degli errori operativi
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Monitoraggio costante e tracciabilità delle attività
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Conformità normativa e sicurezza dei dati
              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="flex lg:flex-row flex-col gap-8">

        <div className="flex flex-1 flex-col gap-4 items-center justify-center">
          <Image src="/images/Esternalizzare/motivi/3.png" alt="Motivo 3" width={100} height={100} className="w-full h-auto" />
        </div>
        
        <div className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Più tempo per far crescere la tua organizzazione
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Delegare le attività ripetitive o di supporto ti permette di concentrare energie e risorse sulle aree strategiche della tua azienda. L'obiettivo non è solo ridurre i costi, ma creare valore aggiunto: maggiore produttività, più attenzione ai clienti e un miglior equilibrio interno tra persone e processi.
              <br />
              <br />
              Con Outsourcing Group puoi contare su un partner operativo che lavora al tuo fianco per liberare tempo e favorire la crescita.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Maggiore attenzione alle aree strategiche
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Miglior utilizzo delle competenze interne
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="Motivo 2" width={100} height={100} className="w-[30px] h-[30px]" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Incremento della produttività aziendale
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}