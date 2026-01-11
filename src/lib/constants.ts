import { title } from "process";

export const NAVIGATION_LINKS = [
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Servizi", href: "/servizi", icon: "/images/icons/servizi.svg" },
  { name: "Perché esternalizzare", href: "/esternalizzare" },
  { name: "Blog", href: "/blog" },
];

export const COLORS = {
  PRIMARY: "linear-gradient(to right, #208AE4, #1C2776)",
  SECONDARY: "#000000",
  TERTIARY: "#FFFFFF",
  TEXT:"#2B2D2F",
  TEXT_TITLE:"#010310",
  TEXT_WHITE:"#FFFFFF",
  BLUE: " #208AE4",
};

export const SERVICES = [
  {
    slug: "assistenza-dedicata",
    name: "Assistenza dedicata agli utenti",
    serviceDescription: "Supportiamo i tuoi utenti in attivazioni, accessi, configurazioni e uso corretto degli strumenti digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    shortDescription: "Supportiamo i tuoi utenti in attivazioni, accessi, configurazioni e uso corretto degli strumenti digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    image: "/images/Servizi/immagini/C - Servizi Generali - Assistenza dedicata agli utenti.webp",
    headerImage: "images/Servizi/detailed/assistenza/bgHero",
    detailDescription: "Supportiamo i tuoi utenti nelle attivazioni, negli accessi e nell’utilizzo corretto dei servizi digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    functionalityTitle: "Come funziona",
    functionalitySubtitle: "Ogni richiesta viene gestita da un operatore dedicato, che segue l’utente passo dopo passo in tutte le fasi:",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/detailed/assistenza/funzionalita/1.png",
        title: "Comprensione del servizio digitale",
        description: "Aiutiamo l’utente a capire chiaramente come funziona il servizio messo a disposizione dall’azienda."
      },
      {
        icon: "/images/Servizi/detailed/assistenza/funzionalita/2.png",
        title: "Attivazioni e configurazioni guidate",
        description: "Supportiamo gli utenti in attivazioni, configurazioni e accessi ai portali e agli strumenti digitali."
      },
      {
        icon: "/images/Servizi/detailed/assistenza/funzionalita/3.png",
        title: "Supporto tecnico-operativo",
        description: "Gestiamo richieste e problematiche tecniche, fornendo soluzioni rapide e istruzioni precise."
      },
      {
        icon: "/images/Servizi/detailed/assistenza/funzionalita/4.png",
        title: "Utilizzo corretto e sicuro",
        description: "Accompagniamo gli utenti nell’uso conforme alle procedure interne e alle policy di sicurezza."
      },
      {
        icon: "/images/Servizi/detailed/assistenza/funzionalita/5.png",
        title: "Risoluzione delle difficoltà",
        description: "Interveniamo per sbloccare situazioni critiche o rallentamenti operativi, ripristinando rapidamente la funzionalità del servizio."
      }
    ],
    advantagesTitle: "Risultato",
    advantages: [
      {
        title: "Servizi digitali sempre operativi",
        description: "Risparmi su stipendi, benefit e formazione del personale amministrativo, convertendo costi fissi in variabili."
      },
      {
        title: "Nessun carico sui reparti interni",
        description: "Gestiamo l’assistenza quotidiana; IT, HR, Compliance e Digital Office mantengono governance e controllo."
      }
    ],
    detailedContent: {
      title: "Un supporto che semplifica l’uso dei servizi digitali e libera i tuoi reparti",
      image: "/images/Servizi/detailed/assistenza/G - Assistenza ded - Sezione.webp",
      paragraphs: [
        "Con il nostro servizio di <strong>assistenza dedicata</strong>, i tuoi utenti ricevono un supporto diretto e personalizzato per <strong>comprendere</strong>, <strong>configurare e utilizzare correttamente gli strumenti digitali</strong> messi a disposizione dalla tua azienda. Gestiamo attivazioni, accessi, difficoltà operative, problemi tecnici e qualsiasi esigenza quotidiana che possa ostacolare l’operatività.",
        "L’azienda mantiene il pieno controllo e la governance del servizio digitale, mentre noi <strong>gestiamo tutta l’operatività quotidiana</strong>. Questo permette ai reparti interni - come IT, HR, Compliance o Digital Office - di <strong>concentrarsi sulle attività strategiche</strong> senza dover assorbire richieste continue da parte degli utenti.",
        "Il risultato è un <strong>servizio digitale sempre funzionante</strong>, <strong>conforme alle policy aziendali</strong> e <strong>utilizzato correttamente dagli utenti</strong>, con un supporto disponibile anche in <strong>lingua inglese</strong> quando necessario.",
      ]
    }
  },
  {
    slug: "contact-center",
    name: "Contact Center",
    serviceDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    shortDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    image: "/images/Servizi/immagini/C - Servizi Generali - Contact Center.webp",
    headerImage: "images/Servizi/detailed/contactCenter/bgHero",
    detailDescription: "Assistenza multicanale strutturata per gestire ogni richiesta in modo rapido, tracciabile e coerente su tutti i canali di comunicazione.",
    functionalityTitle: "Come lavoriamo",
    functionalitySubtitle: "Ogni progetto parte da un’analisi delle esigenze del cliente e si sviluppa con procedure definite, strumenti digitali condivisi e un controllo costante della qualità del servizio.",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/detailed/contactCenter/funzionalita/1.png",
        title: "Piattaforma multicanale unificata",
        description: "Gestiamo tutte le comunicazioni in un’unica console operativa, così nessuna richiesta viene persa e il controllo dei flussi è sempre completo."
      },
      {
        icon: "/images/Servizi/detailed/contactCenter/funzionalita/2.png",
        title: "Tracciabilità completa",
        description: "Ogni interazione viene registrata: tempi di risposta, motivo del contatto, storico delle conversazioni ed esito finale, per una gestione trasparente e monitorabile."
      },
      {
        icon: "/images/Servizi/detailed/contactCenter/funzionalita/3.png",
        title: "SLA garantiti",
        description: "Rispettiamo tempi di risposta definiti per chiamate, ticket, email e chat, assicurando continuità e rapidità anche nei momenti di maggiore volume."
      },
      {
        icon: "/images/Servizi/detailed/contactCenter/funzionalita/4.png",
        title: "Flusso integrato",
        description: "L’ingresso avviene nel Contact Center, la relazione viene gestita dal Customer Care e la risoluzione dal Customer Service: tre funzioni integrate in un unico flusso coerente."
      },
      {
        icon: "/images/Servizi/detailed/contactCenter/funzionalita/5.png",
        title: "Operatori formati",
        description: "Ogni operatore è formato sui servizi del cliente e aggiornato regolarmente, così da garantire risposte corrette, consistenti e aderenti alle procedure."
      }
    ],
    advantagesTitle: "I tuoi vantaggi",
    advantages: [
      {
        description: "Unico punto di contatto chiaro e professionale"
      },
      {
        description: "Tempi di gestione ridotti"
      },
      {
        description: "Migliore soddisfazione del cliente finale"
      },
      {
        description: "Monitoraggio costante dei volumi"
      },
      {
        description: "Coerenza delle risposte su tutti i canali"
      },
      {
        description: "Riduzione del carico interno per il team aziendale"
      },
      {
        description: "Scalabilità immediata nei picchi di lavoro"
      }
    ],
    detailedContent: {
      title: "Un servizio clienti integrato, fluido e sempre sotto controllo",
      image: "/images/Servizi/detailed/contactCenter/E - Contact Center - Sezione.webp",
      paragraphs: [
        "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale che include <strong>telefono, e-mail, chat, social, ticket</strong> e <strong>piattaforme digitali</strong>. Ogni richiesta viene presa in carico con risposte rapide, coerenti e sempre tracciabili.",
        "Il nostro Contact Center è il punto di ingresso di tutte le comunicazioni: da qui le richieste vengono indirizzate al <strong>Customer Care</strong>, che gestisce la relazione, e al <strong>Customer Service</strong>, che si occupa delle soluzioni operative.",
        "La piena integrazione tra Contact Center, Customer Care e Customer Service garantisce un’<strong>esperienza fluida</strong>, <strong>uniforme</strong> e di <strong>alta qualità</strong>, offrendo ai tuoi utenti una Customer Experience realmente eccellente."
      ]
    }
  },
  {
    slug: "digital-back-office",
    name: "Digital Back Office",
    serviceDescription: "Forniamo un servizio di Digital Back Office strutturato per supportare processi digitali che non possono essere completamente automatizzati.",
    shortDescription: "Forniamo un servizio di Digital Back Office strutturato per supportare processi digitali che non possono essere completamente automatizzati.",
    image: "/images/Servizi/immagini/C - Servizi Generali - Digital Back Office.webp",
    headerImage: "images/Servizi/detailed/digitalBank/bgHero",
    detailDescription: "Supportiamo i tuoi processi digitali attraverso servizi operativi strutturati, controlli puntuali e gestione continua delle attività.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
    grid: true,
    functionality: [
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/1.png",
        description: "Verifiche documentali per onboarding utenti, attivazioni, compliance, recupero informazioni e gestione pratiche."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/2.png",
        description: "Controlli di identità tramite sistemi digitali (adeguata verifica della clientela, OTP, video-identificazione dove prevista)."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/3.png",
        description: "Validazione dei requisiti (es. requisiti tecnici, amministrativi, anagrafici, contrattuali)."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/4.png",
        description: "Configurazioni personalizzate di account, profili, app, piattaforme o servizi digitali."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/5.png",
        description: "Attivazioni on-demand con procedure previste da SLA e workflow approvati dal cliente."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/6.png",
        description: "Rilascio dei servizi con gestione dall’inizio alla fine delle fasi post-attivazione."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/7.png",
        description: "Monitoraggio pratiche e gestione degli stati avanzamento."
      },
      {
        icon: "/images/Servizi/detailed/digitalBank/funzionalita/8.png",
        description: "Eventuali escalation verso reparti tecnici o di supporto avanzato."
      }
    ],
    advantagesTitle: "Il Digital Back Office è ideale per aziende che:",
    advantages: [
      {
        description: "Gestiscono servizi digitali complessi"
      },
      {
        description: "Hanno bisogno di operazioni ripetitive ma sensibili"
      },
      {
        description: "Devono garantire qualità e conformità nei processi"
      },
      {
        description: "Vogliono alleggerire il carico operativo interno"
      },
      {
        description: "Operano in settori regolamentati o ad alto volume di pratiche"
      }
    ],
    detailedContent: {
      title: "Un supporto operativo che semplifica la gestione dei tuoi processi digitali",
      image: "/images/Servizi/detailed/digitalBank/D - Digital Back Office - Sezione.webp",
      paragraphs: [
        "Nel Digital Back Office, <strong>ogni fase deve essere gestita con ordine e continuità</strong>: verifiche documentali, controlli di identità, validazione dei requisiti e attivazioni richiedono procedure chiare e una supervisione costante.",
        "Per questo organizziamo tutte le attività in flussi strutturati, con <strong>tracciabilità completa</strong> e tempi di lavorazione definiti dagli SLA concordati.",
        "Ci occupiamo delle operazioni che non possono essere completamente automatizzate, assicurando precisione e uniformità, anche in presenza di volumi elevati o pratiche sensibili.",
        "Il risultato è una <strong>gestione più fluida, meno rischi di errore</strong> e un team interno che può concentrarsi sulle attività strategiche."
      ]
    }
  },
  {
    slug: "gestione-operativa-digitale-dei-clienti",
    name: "Gestione Operativa dei Dati Cliente",
    serviceDescription: "Gestiamo la creazione e l’allineamento dei dati cliente su sistemi gestionali e CRM, garantendo coerenza dei flussi amministrativi e dei processi di fatturazione e incasso.",
    shortDescription: "Gestiamo la creazione e l’allineamento dei dati cliente su sistemi gestionali e CRM, garantendo coerenza dei flussi amministrativi e dei processi di fatturazione e incasso.",
    image: "/images/Servizi/immagini/C - Servizi Generali - Gestione operativa.webp",
    headerImage: "images/Servizi/detailed/gestioneAmministrativa/bgHero",
    detailDescription: "Organizziamo e gestiamo tutte le attività operative, anagrafiche e amministrative legate al ciclo di vita dei tuoi clienti, garantendo ordine, coerenza e controllo totale dei processi.",
    functionalityTitle: "Come lavoriamo",
    functionalitySubtitle: "Ogni processo amministrativo viene gestito con workflow chiari, strumenti integrati e supervisione costante della qualità, per garantire dati affidabili e operazioni sempre sotto controllo.",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/detailed/gestioneAmministrativa/funzionalita/1.png",
        title: "Procedure standardizzate",
        description: "Ogni attività segue procedure documentate, garantendo uniformità e riducendo errori operativi."
      },
      {
        icon: "/images/Servizi/detailed/gestioneAmministrativa/funzionalita/2.png",
        title: "Tracciabilità completa",
        description: "Tutte le operazioni (creazioni, modifiche, verifiche, incassi e rimborsi) vengono registrate e monitorate."
      },
      {
        icon: "/images/Servizi/detailed/gestioneAmministrativa/funzionalita/3.png",
        title: "Integrazione con i tuoi sistemi",
        description: "Lavoriamo direttamente su CRM, gestionali, billing, ERP e piattaforme digitali già utilizzate dall’azienda."
      },
      {
        icon: "/images/Servizi/detailed/gestioneAmministrativa/funzionalita/4.png",
        title: "Supervisione qualificata",
        description: "Operatori formati su normative, procedure amministrative e policy interne del cliente."
      },
      {
        icon: "/images/Servizi/detailed/gestioneAmministrativa/funzionalita/5.png",
        title: "Controlli qualità continui",
        description: "Effettuiamo verifiche costanti per mantenere dati coerenti, affidabili e sempre aggiornati."
      }
    ],
    advantagesTitle: "Perché scegliere questo servizio",
    advantages: [
      {
        description: "Eliminazione di errori anagrafici e amministrativi"
      },
      {
        description: "Riduzione drastica dei tempi di gestione interna"
      },
      {
        description: "Dati sempre aggiornati e coerenti"
      },
      {
        description: "Migliore esperienza per il cliente finale"
      },
      {
        description: "Controllo dei flussi economici e delle pratiche amministrative"
      },
      {
        description: "Allineamento totale tra sistemi digitali"
      },
      {
        description: "Scalabilità immediata in caso di aumento dei volumi"
      }
    ],
    detailedContent: {
      title: "Un ciclo amministrativo sempre sotto controllo",
      image: "/images/Servizi/detailed/gestioneAmministrativa/F - Gest Operativa - Sezione.webp",
      paragraphs: [
        "Gestiamo tutte le <strong>attività operative, amministrative</strong> e <strong>anagrafiche</strong> legate ai clienti che utilizzano i servizi digitali della tua azienda. Dalla creazione dei codici cliente all’allineamento delle anagrafiche, dagli incassi ai rimborsi fino al controllo delle fatture, ogni fase del ciclo di vita del cliente viene gestita in modo preciso e coerente.",
        "Questo servizio è particolarmente adatto a <strong>realtà che gestiscono servizi digitali ricorrenti, piattaforme SaaS, grandi database anagrafici</strong> o <strong>processi con attivazioni e cessazioni frequenti.</strong> Anche i flussi amministrativi multi-step e le attività di billing ad alto volume trovano un supporto strutturato e affidabile.",
        "Il risultato è <strong>un sistema amministrativo ordinato, aggiornato</strong> e <strong>completamente tracciato</strong>, che elimina gli errori e garantisce continuità operativa. L’azienda può così concentrarsi sulle attività a maggiore valore aggiunto, delegando a noi la gestione puntuale e professionale di tutto il ciclo amministrativo."
      ]
    }
  },
  {
    slug: "data-management",
    name: "Data management",
    serviceDescription: "Gestione organizzata e sicura, secondo criteri di cybersecurity, di tutti i tuoi dati aziendali con backup automatici e accesso controllato.",
    shortDescription: "Offriamo Training aziendali per gruppi di utenti finali sull'utilizzo dei servizi digitali dell'azienda cliente.\nI training possono essere modulari, multi-sessione, personalizzati o standard.",
    image: "/images/Servizi/immagini/C - Servizi Generali - Data management.webp",
    headerImage: "images/Servizi/detailed/dataManagement/bgHero",
    detailDescription: "Gestiamo i tuoi dati in modo sicuro, organizzato e conforme, garantendo continuità operativa e una base solida per automazioni e progetti digitali.",
    functionalityTitle: "Come funziona",
    functionalitySubtitle: "Ogni attività di Data Management è gestita con un modello operativo strutturato, che garantisce dati protetti, aggiornati e pienamente integrati con i processi digitali dell’azienda.",
    grid: true,
    functionality: [
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/1.png",
        description: "Organizziamo i dati in modo ordinato, con archiviazione strutturata e versioni sempre sotto controllo."
      },
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/2.png",
        description: "Applichiamo criteri di cybersecurity con controlli accessi, crittografia e monitoraggio continuo."
      },
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/3.png",
        description: "Gestiamo backup automatici e copie ridondanti per garantire continuità operativa."
      },
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/4.png",
        description: "Definiamo ruoli e permessi, tracciando ogni accesso ai documenti e alle informazioni."
      },
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/5.png",
        description: "Integriamo i dati con CRM, ERP, gestionali, API e archivi cloud."
      },
      {
        icon: "/images/Servizi/detailed/dataManagement/funzionalita/6.png",
        description: "Verifichiamo la qualità del dato, correggendo incongruenze e mantenendo i sistemi allineati."
      }
    ],
    advantagesTitle: "I tuoi vantaggi",
    advantages: [
      {
        description: "Applichiamo standard avanzati di cybersecurity per proteggere dati e sistemi in ogni fase."
      },
      {
        description: "Manteniamo i dati strutturati, allineati e facilmente consultabili da tutti i reparti."
      },
      {
        description: "Backup costanti e sistemi ridondanti garantiscono stabilità e continuità operativa."
      },
      {
        description: "Dati sempre pronti e disponibili, con tempi di reperimento drasticamente ridotti."
      },
      {
        description: "Procedure di ripristino e monitoraggio continuo assicurano la massima operatività."
      },
      {
        description: "Gestiamo i dati rispettando normative, policy interne e criteri di governance."
      },
      {
        description: "Ci integriamo nei tuoi sistemi digitali e supportiamo architetture anche molto articolate."
      }

    ],
    detailedContent: {
      title: "Un sistema dati sicuro, ordinato e sempre disponibile",
      image: "/images/Servizi/detailed/dataManagement/H - Training Aziendali - Sezione.webp",
      paragraphs: [
        "Il Data Management è diventato un elemento strategico per qualsiasi organizzazione che voglia operare con continuità, sicurezza e scalabilità. Con il nostro servizio <strong>strutturiamo, proteggiamo e rendiamo fruibili tutti i dati aziendali<strong>, integrandoli nei processi digitali e garantendo la loro disponibilità in ogni momento.",
        "Gestiamo l’intero ciclo del dato <strong>applicando criteri avanzati di cybersecurity e governance</strong>. Organizziamo le informazioni in modo ordinato e tracciabile, così i sistemi lavorano meglio e il personale può contare su basi dati affidabili e aggiornate.",
        "Il risultato è un’<strong>infrastruttura dati moderna e resiliente</strong>, capace di supportare progetti digitali, automazioni e iniziative basate sull’intelligenza artificiale. Un ambiente sicuro, scalabile e progettato per accompagnare la crescita dell’azienda nel tempo."
      ]
    }
  },
  {
    slug: "training-aziendali",
    name: "Training aziendali",
    serviceDescription: "Offriamo Training aziendali per gruppi di utenti finali sull'utilizzo dei servizi digitali dell'azienda cliente. I training possono essere modulari, multi-sessione, personalizzati o standard.",
    shortDescription: "Gestione di funzioni \"non core\" e attività ripetitive in outsourcing. Ottimizzi costi e tempi, garantendo continuità e qualità operativa.",
    image: "/images/Servizi/immagini/C - Servizi Generali -Training Aziendali.webp",
    headerImage: "images/Servizi/detailed/trainingAziendali/bgHero",
    detailDescription: "Progettiamo ed eroghiamo attività di training dedicate a gruppi di utenti finali sull’utilizzo dei servizi e degli strumenti dell’azienda",
    functionalityTitle: "Come funziona",
    functionalitySubtitle: "I training aziendali sono pensati per gruppi di utenti, anche numerosi, che devono essere formati in modo uniforme, completo e strutturato. Si tratta di sessioni di formazione dedicate a dipendenti delle aziende clienti che in genere vertono sull’utilizzo dei servizi e degli strumenti digitali in uso.",
    grid: true,
    functionality: [
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/1.png",
        description: "Spieghiamo tutte le funzionalità del servizio digitale in uso nell’azienda"
      },
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/2.png",
        description: "Rispondiamo in diretta ai dubbi dei partecipanti"
      },
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/3.png",
        description: "Mostriamo i flussi operativi"
      },
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/4.png",
        description: "Guidiamo i dipendenti nell’utilizzo corretto, sicuro ed efficace del servizio"
      },
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/5.png",
        description: "Approfondiamo anche parti del servizio che non tutti utilizzeranno, per garantire una visione completa"
      },
      {
        icon: "/images/Servizi/detailed/trainingAziendali/funzionalita/6.png",
        description: "Possiamo dedicare più giornate o sessioni a moduli specifici"
      }
    ],
    advantagesTitle: "I training possono essere:",
    advantages: [
      {
        title: "Personalizzati",
        description: "Costruiti su misura in base alle esigenze dell’azienda cliente, ai ruoli dei dipendenti, ai processi interni e agli ambiti di utilizzo del servizio digitale."
      },
      {
        title: "Standard",
        description: "Pensati per fornire una panoramica completa del servizio digitale in tutte le sue funzionalità."
      }
    ],
    detailedContent: {
      title: "Training aziendali per migliorare competenze e processi",
      image: "/images/Servizi/detailed/trainingAziendali/H - Training Aziendali - Sezione.webp",
      paragraphs: [
        "Offriamo training aziendali per gruppi di utenti finali sull’utilizzo dei servizi digitali dell’azienda cliente. I training possono essere <strong>modulari, multi-sessione, personalizzati</strong> o <strong>standard</strong>.",
        "Coprono tutte le funzionalità del servizio, incluse quelle non utilizzate da tutti i ruoli, e <strong>forniscono istruzioni operative, best practice, procedure di sicurezza</Strong> e <strong>supporto diretto ai partecipanti.</strong>",
        "L’obiettivo è garantire che l’azienda abbia dipendenti competenti, autonomi e pronti a utilizzare il servizio digitale in modo corretto, migliorando produttività, continuità operativa e sicurezza."
      ]
    }
  },
];

export const BLOGS = [
  {
    category: "CONFORMITÀ NORMATIVA",
    title: "GDPR e protezione dei dati: come garantire la conformità aziendale",
    description: "Le migliori pratiche per gestire la privacy dei dati e rispettare le...",
    image: "/images/Blog/blog/1.png",
    date: "5 ottobre 2025",
  },
  {
    category: "BACKOFFICE COMMERCIALE",
    title: "Ottimizzazione dei processi di backoffice per aumentare l'efficienza",
    description: "Strategie innovative per digitalizzare e automatizzare le attività...",
    image: "/images/Blog/blog/2.png",
    date: "3 ottobre 2025",
  },
  {
    category: "CUSTOMER CARE",
    title: "Customer care multicanale: soddisfare le esigenze dei clienti moderni",
    description: "Come costruire un servizio clienti efficace attraverso tutti i canali...",
    image: "/images/Blog/blog/3.png",
    date: "30 settembre 2025",
  },
  {
    category: "CONFORMITÀ NORMATIVA",
    title: "Normative antiriciclaggio: adempimenti e controlli per le aziende",
    description: "Guida completa agli obblighi normativi e alle procedure di verifi...",
    image: "/images/Blog/blog/1.png",
    date: "28 settembre 2025",
  },
  {
    category: "BACKOFFICE COMMERCIALE",
    title: "Gestione documentale digitale: verso l'ufficio senza carta",
    description: "Tecnologie e metodologie per dematerializzare i documenti e...",
    image: "/images/Blog/blog/2.png",
    date: "25 settembre 2025",
  },
  {
    category: "CUSTOMER CARE",
    title: "L'importanza della formazione continua nel customer care outsourcing",
    description: "Investire nelle competenze del team per garantire un servizio...",
    image: "/images/Blog/blog/3.png",
    date: "22 settembre 2025",
  },
  {
    category: "CONFORMITÀ NORMATIVA",
    title: "Normative antiriciclaggio: adempimenti e controlli per le aziende",
    description: "Guida completa agli obblighi normativi e alle procedure di verifi...",
    image: "/images/Blog/blog/1.png",
    date: "28 settembre 2025",
  },
];