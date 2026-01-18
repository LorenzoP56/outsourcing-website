"use client";

import "./Motivi.css";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem, staggerContainerSlow, fadeInUp } from "@/components/animations";

export default function Motivi() {
  return (
    <section className="xl:px-32 lg:px-16 lg:py-32 px-8 py-16 flex flex-col lg:gap-40 gap-16">

      <div className="flex lg:flex-row flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center relative lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/trasformare-costi-fissi-in-dati-misurabili-outsourcing.webp" alt="Analisi dei dati e monitoraggio delle performance per trasformare i costi fissi in dati misurabili tramite outsourcing"
          width={1160} height={894} className="rounded-[16px] lg:max-h-[400px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Trasforma i costi fissi in risultati misurabili
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Gestire internamente attività operative o amministrative comporta costi fissi elevati, formazione continua e un impiego di risorse che spesso non genera valore strategico.
              <br />
              <br />
              Affidandoti a un partner specializzato, <span className="font-bold">puoi convertire i costi fissi dovuti ad attività operative o amministrative in investimenti mirati e soprattutto modulabili</span>, ottimizzando così la gestione del personale (sia nel numero che nelle capacità professionali) e così adattandoti al meglio ai periodi di picco o di down.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Riduzione dei costi di personale e infrastrutture
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Flessibilità nei volumi di lavoro, anche stagionali
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Nessun costo di formazione o turnover interno
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Miglior utilizzo delle competenze interne
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

      <div className="flex lg:flex-row-reverse flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/dati-sicuri-velocita-processi-digitali-outsourcing.webp" alt="Gestione sicura dei dati aziendali e velocizzazione dei processi digitali grazie ai servizi di outsourcing operativo" width={1160} height={894} className="rounded-[16px] lg:max-h-[400px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Dati sicuri e velocità dei processi
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Gestire internamente attività che coinvolgono dati sensibili richiede procedure rigide, strumenti adeguati e personale costantemente aggiornato sulle normative. <span className="font-bold">Un partner specializzato assicura invece processi controllati, protocolli chiari e una gestione dei dati conforme e monitorata, riducendo al minimo errori, rallentamenti e rischi operativi.</span>
              <br />
              <br />
              Affidando queste attività a Outsourcing Group, ottieni processi più rapidi, tracciati e sicuri: ogni operazione viene eseguita seguendo istruzioni precise e standard condivisi, garantendo continuità e qualità anche nei momenti di maggiore carico.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Gestione conforme dei dati e procedure sempre aggiornate
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Tempi di lavorazione più rapidi grazie a flussi operativi ottimizzati
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Riduzione del rischio di errori, difformità e accessi non autorizzati
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Tracciabilità completa delle attività e delle modifiche
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

      <div className="flex lg:flex-row flex-col lg:gap-8 gap-16 lg:justify-between">

        <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 items-center justify-center lg:w-1/2 md:w-1/2 w-full lg:self-auto self-center">
          <Image src="/website_images/Esternalizzare/problem-solving-gestione-criticita-operativa-outsourcing.webp" alt="Team di outsourcing impegnato nel problem solving e nella gestione delle criticità operative aziendali" width={1160} height={894} className="rounded-[16px] lg:max-h-[400px] lg:w-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} className="flex flex-1 flex-col lg:gap-16 gap-8 justify-center lg:w-1/2">

          <div className="flex flex-col gap-4">
            <h3 className="lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Problem solving e gestione delle criticità
            </h3>
            <p className="text-base" style={{ color: COLORS.TEXT }}>
              Le attività operative spesso generano imprevisti: richieste fuori standard, pratiche incomplete, errori da correggere o casi che richiedono verifiche aggiuntive.Quando il team interno è già sovraccarico, queste criticità rallentano il lavoro e incidono sulla qualità del servizio.
              <br />
              <br />
              Un partner esperto intercetta, gestisce e risolve queste situazioni quotidiane, applicando procedure chiare, verifiche accurate e un <span className="font-bold">approccio strutturato al problem solving.</span>
              <br />
              Outsourcing Group affronta le anomalie in modo rapido e ordinato, consentendo al cliente di mantenere continuità e fluidità nei processi senza carichi extra.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Gestione immediata delle eccezioni e delle pratiche complesse
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Meno interruzioni per il team interno
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Riduzione dei colli di bottiglia operativi
              </h3>

            </div>

            <div className="flex flex-row gap-4 items-center">

              <Image src="/images/Esternalizzare/motivi/tick.png" alt="" width={100} height={100} className="w-[30px] h-[30px]" aria-hidden="true" />
              <h3 className="text-base" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                Maggiore qualità del risultato finale grazie a verifiche puntuali
              </h3>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}