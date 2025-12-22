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
  TEXT:"#4A4A4A",
  TEXT_TITLE:"#2C2C2C",
  TEXT_WHITE:"#FFFFFF",
  BLUE: " #208AE4",
};

export const SERVICES = [
  {
    slug: "digital-back-office",
    name: "Digital Back Office",
    serviceDescription: "Forniamo un servizio di Digital Back Office strutturato per supportare processi digitali che non possono essere completamente automatizzati.",
    shortDescription: "Forniamo un servizio di Digital Back Office strutturato per supportare processi digitali che non possono essere completamente automatizzati.",
    imageDesktop: "/images/Servizi/desktop/servizi/1.png",
    imageMobile: "/images/Servizi/mobile/servizi/1.png",
    headerImage: "images/Servizi/detailed/digitalBank/bgHero",
    detailDescription: "Supportiamo i tuoi processi digitali con attività operative strutturate, controlli accurati e gestione completa delle pratiche.",
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
      imageDesktop: "/images/Servizi/detailed/digitalBank/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/digitalBank/serviceImageMobile.png",
      paragraphs: [
        "Nel Digital Back Office, <strong>ogni fase deve essere gestita con ordine e continuità</strong>: verifiche documentali, controlli di identità, validazione dei requisiti e attivazioni richiedono procedure chiare e una supervisione costante.",
        "Per questo organizziamo tutte le attività in flussi strutturati, con <strong>tracciabilità completa</strong> e tempi di lavorazione definiti dagli SLA concordati.",
        "Ci occupiamo delle operazioni che non possono essere automatizzate, assicurando precisione e uniformità, anche in presenza di volumi elevati o pratiche sensibili.",
        "Il risultato è una <strong>gestione più fluida, meno rischi di errore</strong> e un team interno che può concentrarsi sulle attività strategiche."
      ]
    }
  },
  {
    slug: "contact-center",
    name: "Contact Center",
    serviceDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    shortDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    imageDesktop: "/images/Servizi/desktop/servizi/2.png",
    imageMobile: "/images/Servizi/mobile/servizi/2.png",
    headerImage: "images/Servizi/detailed/contactCenter/bgHero",
    detailDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
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
      imageDesktop: "/images/Servizi/detailed/contactCenter/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/contactCenter/serviceImageMobile.png",
      paragraphs: [
        "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale che include <strong>telefono, e-mail, chat, social, ticket</strong> e <strong>piattaforme digitali</strong>. Ogni richiesta viene presa in carico con risposte rapide, coerenti e sempre tracciabili.",
        "Il nostro Contact Center è il punto di ingresso di tutte le comunicazioni: da qui le richieste vengono indirizzate al <strong>Customer Care</strong>, che gestisce la relazione, e al <strong>Customer Service</strong>, che si occupa delle soluzioni operative.",
        "La piena integrazione tra Contact Center, Customer Care e Customer Service garantisce un’<strong>esperienza fluida</strong>, <strong>uniforme</strong> e di <strong>alta qualità</strong>, offrendo ai tuoi utenti una Customer Experience realmente eccellente."
      ]
    }
  },
  {
    slug: "gestione-amministrativa-digitale-dei-clienti",
    name: "Gestione Amministrativa Digitale dei Clienti",
    serviceDescription: "È il servizio con cui gestiamo tutte le attività operative, amministrative e anagrafiche connesse ai clienti che utilizzano i servizi digitali dell'azienda.",
    shortDescription: "È il servizio con cui gestiamo tutte le attività operative, amministrative e anagrafiche connesse ai clienti che utilizzano i servizi digitali dell'azienda.",
    imageDesktop: "/images/Servizi/desktop/servizi/3.png",
    imageMobile: "/images/Servizi/mobile/servizi/3.png",
    headerImage: "images/Servizi/detailed/gestioneAmministrativa/bgHero",
    detailDescription: "È il servizio con cui gestiamo tutte le attività operative, amministrative e anagrafiche connesse ai clienti che utilizzano i servizi digitali dell'azienda.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/icons/1.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/2.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/3.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/4.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      }
    ],
    advantagesTitle: "",
    advantages: [
      {
        description: "Personale formato specificamente sui servizi digitali, in grado di risolvere problemi complessi e guidare gli utenti con competenza."
      },
      {
        description: "Assistenza telefonica, via ticket e chat per garantire accessibilità e risposte rapide attraverso il canale preferito dall'utente."
      },
      {
        description: "Riduciamo frustrazione e abbandoni, aumentando la soddisfazione e la fidelizzazione degli utenti dei servizi digitali."
      }
    ],
    detailedContent: {
      title: "Assistenza reale, gestita da persone competenti",
      imageDesktop: "/images/Servizi/detailed/gestioneAmministrativa/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/gestioneAmministrativa/serviceImageMobile.png",
      paragraphs: [
        "Gli utenti dei servizi digitali hanno bisogno di supporto immediato e competente per utilizzare piattaforme complesse come SPID, firma digitale, PEC e altri servizi online. La mancanza di assistenza adeguata genera frustrazione, abbandoni e riduce l'efficacia dei servizi digitali.",
        "Outsourcing Group fornisce assistenza telefonica e via ticket con personale qualificato e formato, capace di guidare gli utenti passo dopo passo. Supportiamo gli utenti finali in modo professionale, riducendo i tempi di risoluzione e migliorando la loro esperienza complessiva con i servizi digitali.",
      ]
    }
  },
  {
    slug: "assistenza-dedicata",
    name: "Assistenza dedicata agli utenti",
    serviceDescription: "Supportiamo i tuoi utenti in attivazioni, accessi, configurazioni e uso corretto degli strumenti digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    shortDescription: "Supportiamo i tuoi utenti in attivazioni, accessi, configurazioni e uso corretto degli strumenti digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    imageDesktop: "/images/Servizi/desktop/servizi/4.png",
    imageMobile: "/images/Servizi/mobile/servizi/4.png",
    headerImage: "images/Servizi/detailed/assistenza/bgHero",
    detailDescription: "Supportiamo i tuoi utenti in attivazioni, accessi, configurazioni e uso corretto degli strumenti digitali, garantendo continuità operativa e riducendo il carico sui tuoi reparti interni.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/icons/1.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/2.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/3.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/4.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      }
    ],
    advantagesTitle: "",
    advantages: [
      {
        description: "Risparmi su stipendi, benefit e formazione del personale amministrativo, convertendo costi fissi in variabili."
      },
      {
        description: "Alleggerisci il carico interno e migliori l'efficienza operativa con processi standardizzati e ottimizzati."
      },
      {
        description: "Adatti i servizi alle esigenze del mercato senza assumere nuovo personale, garantendo flessibilità operativa."
      }
    ],
    detailedContent: {
      title: "Processi semplificati, risultati misurabili",
      imageDesktop: "/images/Servizi/detailed/assistenza/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/assistenza/serviceImageMobile.png",
      paragraphs: [
        "Procedure, fatturazione, codici cliente e incassi richiedono tempo, personale e aggiornamento continuo. La complessità amministrativa sottrae energie alla crescita e comporta costi fissi elevati.",
        "Esternalizzando i processi non core con Outsourcing Group, ottieni supporto flessibile e professionale, riduci i costi operativi e migliori la continuità del servizio.",
        "Gestiamo i flussi amministrativi anche per mercati esteri, permettendoti di concentrarti sullo sviluppo dell'attività.",
      ]
    }
  },
  {
    slug: "training-aziendali",
    name: "Training aziendali",
    serviceDescription: "Offriamo Training aziendali per gruppi di utenti finali sull'utilizzo dei servizi digitali dell'azienda cliente. I training possono essere modulari, multi-sessione, personalizzati o standard.",
    shortDescription: "Gestione di funzioni \"non core\" e attività ripetitive in outsourcing. Ottimizzi costi e tempi, garantendo continuità e qualità operativa.",
    imageDesktop: "/images/Servizi/desktop/servizi/5.png",
    imageMobile: "/images/Servizi/mobile/servizi/5.png",
    headerImage: "images/Servizi/detailed/trainingAziendali/bgHero",
    detailDescription: "Offriamo Training aziendali per gruppi di utenti finali sull'utilizzo dei servizi digitali dell'azienda cliente. I training possono essere modulari, multi-sessione, personalizzati o standard.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
    grid: true,
    functionality: [
      {
        icon: "/images/Servizi/icons/1.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/2.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/3.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/4.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      }
    ],
    advantagesTitle: "",
    advantages: [
      {
        description: "Processi standardizzati e ottimizzati che riducono i tempi di esecuzione e migliorano la produttività complessiva."
      },
      {
        description: "Conversione dei costi fissi in variabili, con risparmio su personale, formazione, infrastrutture e tecnologie."
      },
      {
        description: "Assicuriamo continuità operativa e qualità costante, indipendentemente da assenze, turnover o picchi di lavoro."
      }
    ],
    detailedContent: {
      title: "Un partner operativo che cresce con la tua azienda",
      imageDesktop: "/images/Servizi/detailed/trainingAziendali/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/trainingAziendali/serviceImageMobile.png",
      paragraphs: [
        "Gestire internamente funzioni non strategiche sottrae tempo e risorse alle attività core. Attività ripetitive, amministrative e operative richiedono personale dedicato, formazione continua e costi fissi elevati.",
        "Outsourcing Group gestisce le tue funzioni di backoffice con procedure standardizzate, controlli di qualità e tecnologie all'avanguardia. Ottimizzi costi e tempi, garantendo continuità operativa e qualità costante, mentre il tuo team si concentra su ciò che genera vero valore per il business.",
      ]
    }
  },
  {
    slug: "data-management",
    name: "Data management",
    serviceDescription: "Gestione organizzata e sicura, secondo criteri di cybersecurity, di tutti i tuoi dati aziendali con backup automatici e accesso controllato.",
    shortDescription: "Offriamo Training aziendali per gruppi di utenti finali sull'utilizzo dei servizi digitali dell'azienda cliente.\nI training possono essere modulari, multi-sessione, personalizzati o standard.",
    imageDesktop: "/images/Servizi/desktop/servizi/6.png",
    imageMobile: "/images/Servizi/mobile/servizi/6.png",
    headerImage: "images/Servizi/detailed/dataManagement/bgHero",
    detailDescription: "Gestione organizzata e sicura, secondo criteri di cybersecurity, di tutti i tuoi dati aziendali con backup automatici e accesso controllato.",
    functionalityTitle: "Cosa facciamo",
    functionalitySubtitle: "Il team di Outsourcing Group gestisce le fasi operative dei processi digitali, occupandosi di:",
    grid: false,
    functionality: [
      {
        icon: "/images/Servizi/icons/1.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/2.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/3.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      },
      {
        icon: "/images/Servizi/icons/4.png",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam ac amet sed maecenas arcu quis vulputate eget at posuere lorem."
      }
    ],
    advantagesTitle: "",
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
      title: "Un partner operativo che cresce con la tua azienda",
      imageDesktop: "/images/Servizi/detailed/dataManagement/serviceImageDesktop.png",
      imageMobile: "/images/Servizi/detailed/dataManagement/serviceImageMobile.png",
      paragraphs: [
        "Gestire internamente funzioni non strategiche sottrae tempo e risorse alle attività core. Attività ripetitive, amministrative e operative richiedono personale dedicato, formazione continua e costi fissi elevati.",
        "Outsourcing Group gestisce le tue funzioni di backoffice con procedure standardizzate, controlli di qualità e tecnologie all'avanguardia. Ottimizzi costi e tempi, garantendo continuità operativa e qualità costante, mentre il tuo team si concentra su ciò che genera vero valore per il business.",
      ]
    }
  }
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