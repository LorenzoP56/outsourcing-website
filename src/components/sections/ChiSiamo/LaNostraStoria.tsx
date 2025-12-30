import { COLORS } from "@/lib/constants";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Anni '80-'90",
    title: "L'era del data entry",
    description: "Negli anni '90, l'azienda operava come Leondata Srl, specializzata in servizi di data entry e trascrizione manuale di dati da documenti cartacei a sistemi gestionali, gettando le basi per i moderni servizi di back-office. Le attività principali includevano l'inserimento e la gestione di grandi volumi di dati amministrativi e fiscali. Leondata divenne poi socio fondatore del Consorzio Outsourcing Group, contribuendo con competenze e know-how nell'elaborazione digitale dei dati.",
    side: 'right'
  },
  {
    date: "Anni '98-'99",
    title: "Archiviazione ottica",
    description: "In questi anni, il Consorzio si trasformò in Outsourcing Group Srl e contribuì a uno dei primi grandi progetti nazionali di digitalizzazione: l'archiviazione ottica di bilanci e pratiche delle Camere di Commercio italiane. Milioni di documenti furono digitalizzati e furono costruite le prime infrastrutture sicure di conservazione digitale. Questo fu uno dei momenti più significativi della storia aziendale: dalla digitalizzazione dei dati, si passò alla digitalizzazione massiva dei documenti, gettando le basi per i moderni servizi di document management.",
    side: 'left'
  },
  {
    date: "2005",
    title: "PEC (Posta Elettronica Certificata)",
    description: "La PEC introdusse un nuovo metodo di comunicazione con valore legale, accelerando i processi amministrativi e riducendo la dipendenza dalla carta. Segnò l'inizio della trasformazione digitale nelle comunicazioni ufficiali tra aziende, professionisti e Pubblica Amministrazione.",
    side: 'right'
  },
  {
    date: "2011",
    title: "L'inizio del servizio di attivazione PEC per un'autorità di certificazione europea",
    description: "Outsourcing Group avviò la gestione operativa delle attivazioni PEC per una delle principali autorità di certificazione europee. Il team gestisce la verifica dei dati, il controllo qualità e l'attivazione delle caselle PEC, operando su processi ad alto volume con requisiti certificati. Nel tempo, il servizio si è evoluto in portali online self-service, con supporto continuo di Outsourcing Group durante le fasi di verifica e assistenza agli utenti.",
    side: 'left'
  },
  {
    date: "2013",
    title: "Outsourcing Group avvia l'emissione delle prime firme digitali",
    description: "A seguito dell'introduzione delle firme digitali in Italia nel 2010, nel 2013 Outsourcing Group iniziò a operare direttamente nel settore come partner operativo di una delle principali autorità di certificazione europee. Il team gestisce la verifica dei dati, l'identificazione degli utenti, l'emissione dei certificati e l'assistenza tecnica per Chiavi Business, Smart Card e firme digitali remote.",
    side: 'right'
  },
  {
    date: "2016",
    title: "SPID e identità digitale",
    description: "Con la nascita dello SPID, che in pochi anni divenne il principale strumento per l'accesso ai servizi digitali pubblici e privati, crebbe la domanda di supporto specializzato e assistenza. Fin dalle prime fasi, Outsourcing Group gestì le attivazioni SPID, occupandosi della verifica documentale e del controllo identità per volumi elevati.",
    side: 'left'
  },
  {
    date: "2018",
    title: "Entra in vigore il GDPR",
    description: "Il Regolamento Europeo sulla Protezione dei Dati introdusse requisiti stringenti per sicurezza, processi, tracciabilità e gestione delle informazioni. Le aziende dovettero adattare procedure e sistemi. Outsourcing Group avviò un processo di compliance completo, supportato da un'azienda specializzata in sicurezza dei dati e normative GDPR.",
    side: 'right'
  },
  {
    date: "2023",
    title: "Approvazione del Data Act",
    description: "Arrivò il nuovo quadro normativo europeo dedicato ai dati, al loro condivisione e governance. Le aziende sono chiamate a gestire processi ancora più strutturati e sicuri.",
    side: 'left'
  },
  {
    date: "Oggi",
    title: "Intelligenza Artificiale nei processi operativi",
    description: "L'AI inizia a supportare la gestione di dati, documenti e ticket, rendendo i processi più veloci, organizzati e tracciabili. Le aziende si preparano per una nuova fase di efficienza digitale.",
    side: 'right'
  }
];

export default function LaNostraStoria() {
  return (
    <section className="lg:px-32 lg:py-16 flex flex-col gap-16 px-8 py-16 items-center justify-center">
      
      <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>La nostra storia nel digitale</h2>
    
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 hidden lg:block" style={{ backgroundColor: COLORS.BLUE }}></div>
        
        {/* Timeline events */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex lg:flex-row flex-col gap-6 lg:gap-8 items-start ${
                event.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Date and content */}
              <div className={`flex-1 ${event.side === 'left' ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                <div className={`flex flex-col gap-3 ${event.side === 'left' ? 'lg:items-end' : 'lg:items-start'} items-start`}>
                  <div 
                    className="text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded w-fit"
                    style={{ 
                      background: COLORS.PRIMARY,
                      color: COLORS.TEXT_WHITE
                    }}
                  >
                    {event.date}
                  </div>
                  <h3 
                    className="text-xl lg:text-2xl font-bold"
                    style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
                  >
                    {event.title}
                  </h3>
                  <p 
                    className="text-sm lg:text-base leading-relaxed"
                    style={{ color: COLORS.TEXT }}
                  >
                    {event.description}
                  </p>
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
          ))}
        </div>
      </div>
    
    </section>
  );
}