"use client";

import { COLORS } from "@/lib/constants";
import { ReactNode, useState } from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string | ReactNode;
  side: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Anni '80 - '90",
    title: "L'era del data entry",
    description: (
      <>
        Negli anni '90 l'azienda opera come <strong>Leondata Srl</strong>, specializzandosi nei servizi di data entry e nella trascrizione manuale dei dati da documenti cartacei ai sistemi gestionali, gettando le basi dei moderni servizi di back office.
        Le attività principali riguardano l'inserimento e la gestione di grandi volumi di dati amministrativi e fiscali. Leondata diventa successivamente socia fondatrice del <strong>Consorzio Outsourcing Group</strong>, portando competenze e know-how nel trattamento digitale dei dati.
      </>
    ),
    side: 'right'
  },
  {
    date: "Anni '98 - '99",
    title: "Archiviazione ottica",
    description: (
      <>
        In questi anni il Consorzio si trasforma in <strong>Outsourcing Group Srl</strong> e contribuisce da uno dei primi grandi progetti nazionali di digitalizzazione: <strong>l'archiviazione ottica dei bilanci e delle pratiche delle Camere di Commercio italiane</strong>. Vengono digitalizzati milioni di documenti e costruite le prime infrastrutture di conservazione digitale sicura.
        È uno dei momenti più significativi nella storia dell'azienda: dalla digitalizzazione dati si passa alla digitalizzazione massiva dei documenti, gettando le basi per i moderni servizi di gestione documentale.
      </>
    ),
    side: 'left'
  },
  {
    date: "2005",
    title: "PEC (Posta Elettronica Certificata)",
    description: (
      <>
        La PEC introduce un nuovo modo di comunicare con valore legale, accelerando i processi amministrativi e riducendo la dipendenza dal cartaceo. È l'inizio della trasformazione digitale nelle comunicazioni ufficiali tra aziende, professionisti e Pubblica Amministrazione.
      </>
    ),
    side: 'right'
  },
  {
    date: "2011",
    title: "L'inizio del servizio di attivazione PEC per un'autorità di certificazione europea",
    description: (
      <>
        Outsourcing Group avvia la gestione operativa delle <strong>attivazioni PEC per una delle principali autorità di certificazione europee</strong>. Il team si occupa della verifica dei dati, del controllo qualità e dell'attivazione delle caselle PEC, operando su processi ad alto volume e requisiti certificati.
        Nel tempo il servizio si è evoluto verso portali online self-service, con il supporto continuo di Outsourcing Group nelle fasi di verifica e assistenza agli utenti.
      </>
    ),
    side: 'left'
  },
  {
    date: "2013",
    title: "Outsourcing Group avvia l'emissione delle prime firme digitali",
    description: (
      <>
        Dopo l'introduzione della firma digitale in Italia nel 2010, nel 2013 Outsourcing Group inizia a operare direttamente nel settore come partner operativo di una delle principali autorità di certificazione europee. Il team gestisce <strong>verifica dei dati, identificazione degli utenti, emissione dei certificati</strong> e <strong>assistenza tecnica</strong> su Business Key, Smart Card e firme digitali remote.
      </>
    ),
    side: 'right'
  },
  {
    date: "2016",
    title: "SPID e identità digitale",
    description: (
      <>
        Con la nascita di SPID, che diventa in pochi anni lo strumento principale di accesso ai servizi digitali pubblici e privati, cresce la richiesta di supporto e assistenza specializzata. Outsourcing Group avvia, fin dalle prime fasi, la <strong>gestione delle attivazioni SPID</strong>, occupandosi di verifiche documentali e controllo dell'identità su volumi elevati.
      </>
    ),
    side: 'left'
  },
  {
    date: "2018",
    title: "Entra in vigore il GDPR",
    description: (
      <>
        Il Regolamento Europeo sulla protezione dei dati introduce requisiti stringenti su sicurezza, processi, tracciabilità e gestione delle informazioni. Le aziende devono adeguare procedure e sistemi.
        Outsourcing Group avvia un percorso completo di adeguamento, supportata da un'azienda specializzata in sicurezza dei dati e normativa GDPR.
      </>
    ),
    side: 'right'
  },
  {
    date: "2023",
    title: "Approvazione del Data Act",
    description: (
      <>
        Arriva il nuovo quadro normativo europeo dedicato ai dati, alla loro condivisione e alla governance. Le imprese sono chiamate a gestire processi ancora più strutturati e sicuri.
      </>
    ),
    side: 'left'
  },
  {
    date: "Oggi",
    title: "Intelligenza Artificiale nei processi operativi",
    description: (
      <>
        L&apos;IA inizia a supportare la gestione di dati, documenti e ticket, rendendo i processi più veloci, ordinati e tracciabili. Le aziende si preparano a una nuova fase di efficienza digitale.
      </>
    ),
    side: 'right'
  }
];

export default function LaNostraStoria() {
  // State per tracciare quali elementi sono aperti (solo su mobile)
  // Tutti gli elementi sono aperti di default
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(timelineEvents.map((_, i) => i)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="lg:px-32 lg:pb-16 flex flex-col gap-16 px-8 py-16 items-center justify-center">
      
      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>La nostra storia nel digitale</h2>
    
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 hidden lg:block" style={{ backgroundColor: COLORS.BLUE }}></div>
        
        {/* Timeline events */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {timelineEvents.map((event, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className={`flex lg:flex-row flex-col gap-6 lg:gap-8 items-start ${
                  event.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Date and content */}
                <div className={`flex-1 ${event.side === 'left' ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                  <div className={`flex flex-col gap-3 ${event.side === 'left' ? 'lg:items-end' : 'lg:items-start'} items-start`}>
                    <div className="flex items-center gap-2 lg:gap-0">
                      <button
                        onClick={() => toggleItem(index)}
                        className="lg:pointer-events-none text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded w-fit italic cursor-pointer lg:cursor-default"
                        style={{
                          background: COLORS.PRIMARY,
                          color: COLORS.TEXT_WHITE
                        }}
                        aria-label={`Mostra dettagli ${event.date}`}
                      >
                        {event.date}
                      </button>
                      <button
                        onClick={() => toggleItem(index)}
                        className="lg:hidden cursor-pointer"
                        style={{ color: COLORS.BLUE }}
                        aria-label={isOpen ? `Chiudi dettagli ${event.date}` : `Apri dettagli ${event.date}`}
                        aria-expanded={isOpen}
                      >
                        <span className="transition-transform duration-200 inline-block" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          ▼
                        </span>
                      </button>
                    </div>
                    <h3 
                      className="text-xl lg:text-2xl font-bold"
                      style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
                    >
                      {event.title}
                    </h3>
                    <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
                      <p 
                        className="text-sm lg:text-base leading-relaxed"
                        style={{ color: COLORS.TEXT }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline marker - only visible on desktop */}
                <div className="hidden lg:flex items-center justify-center w-8 h-8 flex-shrink-0 relative z-10">
                  <div 
                    className="w-4 h-4 rounded-full border-2"
                    style={{ 
                      backgroundColor: 'white',
                      borderColor: COLORS.BLUE
                    }}
                  ></div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    
    </section>
  );
}