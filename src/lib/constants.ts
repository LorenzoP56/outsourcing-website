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
  BLUE: "linear-gradient(to right, #208AE4, #1C2776)",
};

export const SERVICES = [
  {
    slug: "digital-back-office",
    name: "Digital Back Office",
    serviceDescription: "Forniamo un servizio di Digital Back Office strutturato per supportare processi digitali che non possono essere completamente automatizzati.",
    title: "Customer care multicanale",
    shortDescription: "Assistenza clienti professionale tramite telefono, chat e ticketing, integrata con piattaforme CRM come Salesforce e Freshdesk. Un servizio scalabile, flessibile e in linea con l'identità del tuo brand.",
    imageDesktop: "/images/Servizi/desktop/servizi/1.webp",
    imageMobile: "/images/Servizi/mobile/servizi/1.png",
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
    advantages: [
      {
        title: "Servizio professionale",
        description: "Customer care di alta qualità gestito da operatori esperti, senza dover gestire internamente call center e turni."
      },
      {
        title: "Riduzione dei costi",
        description: "Riduzione significativa dei costi di personale, infrastrutture e tecnologie grazie alle economie di scala."
      },
      {
        title: "Flessibilità operativa",
        description: "Scalabilità immediata in base ai picchi di richiesta, garantendo sempre il livello di servizio ottimale."
      }
    ],
    detailedContent: {
      title: "Il tuo servizio clienti, gestito con competenza e umanità",
      image: "/images/Servizi/detailed/customer-care.png",
      paragraphs: [
        "Gestire un servizio clienti interno richiede operatori, turni, formazione e investimenti tecnologici. Senza un centro di assistenza strutturato il team viene sopraffatto dalle richieste, con disservizi e clienti insoddisfatti.",
        "Dato su cosa vuol dire avere un servizio clienti non di qualità (cerca di perplexity pro da mio account) e poi metti fonte fra",
        "Outsourcing Group offre un customer care multicanale gestito da professionisti qualificati che rispondono in modo diretto, preciso e coerente con l’identità del brand. Esternalizzando libererai risorse per il core business, ridurrai i costi operativi, avrai accesso a competenze specializzate e potrai adattare facilmente la capacità alle variazioni della domanda.",
      ]
    }
  },
  {
    slug: "contact-center",
    name: "Contact Center",
    serviceDescription: "Gestiamo tutta la comunicazione in entrata dei clienti attraverso un modello multicanale: telefono, e-mail, chat, social, ticket e piattaforme digitali, garantendo risposte rapide, coerenti e sempre tracciate.",
    title: "Data entry & data management",
    shortDescription: "Inserimento, pulizia e validazione dei dati con procedure controllate e strumenti digitali avanzati. Riduciamo errori, tempi e costi di gestione per database sempre aggiornati.",
    imageDesktop: "/images/Servizi/desktop/servizi/2.webp",
    imageMobile: "/images/Servizi/mobile/servizi/2.png",
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
    advantages: [
      {
        title: "Flessibilità e risparmio",
        description: "Riduci i costi operativi e gestisci con flessibilità anche i picchi stagionali, senza dover assumere personale aggiuntivo."
      },
      {
        title: "Qualità garantita",
        description: "Ottieni dati accurati e aggiornati grazie a controlli qualità dedicati e procedure standardizzate."
      },
      {
        title: "Focus sul core business",
        description: "Migliori la produttività del team interno, concentrandoti sulle attività strategiche che generano valore."
      }
    ],
    detailedContent: {
      title: "Dati corretti, processi più veloci",
      image: "/images/Servizi/detailed/data-entry.png",
      paragraphs: [
        "Gestire grandi volumi di dati internamente richiede risorse, tempo e personale qualificato, spesso solo per periodi limitati. Le immissioni manuali rallentano la produttività e aumentano il rischio di errori e ritardi.",
        "Con Outsourcing Group affidi il data entry a professionisti che operano con procedure digitali controllate e strumenti avanzati, garantendo puntualità, sicurezza e qualità del dato. Ottimizzi tempi e risorse, migliorando la gestione dei processi informativi e la continuità operativa. "
      ]
    }
  },
  {
    slug: "gestione-amministrativa-digitale-dei-clienti",
    name: "Gestione Amministrativa Digitale dei Clienti",
    serviceDescription: "È il servizio con cui gestiamo tutte le attività operative, amministrative e anagrafiche connesse ai clienti che utilizzano i servizi digitali dell’azienda.",
    title: "Attività di assistenza personalizzata agli utenti di servizi digitali",
    shortDescription: "Supporto diretto agli utenti finali per SPID, firma digitale, PEC e servizi online. Assistenza telefonica e via ticket con personale qualificato.",
    imageDesktop: "/images/Servizi/desktop/servizi/3.webp",
    imageMobile: "/images/Servizi/mobile/servizi/3.png",
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
    advantages: [
      {
        title: "Supporto qualificato",
        description: "Personale formato specificamente sui servizi digitali, in grado di risolvere problemi complessi e guidare gli utenti con competenza."
      },
      {
        title: "Multicanale e flessibile",
        description: "Assistenza telefonica, via ticket e chat per garantire accessibilità e risposte rapide attraverso il canale preferito dall'utente."
      },
      {
        title: "Migliore esperienza utente",
        description: "Riduciamo frustrazione e abbandoni, aumentando la soddisfazione e la fidelizzazione degli utenti dei servizi digitali."
      }
    ],
    detailedContent: {
      title: "Assistenza reale, gestita da persone competenti",
      image: "/images/Servizi/detailed/digital-services.png",
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
    title: "Processi operativi e amministrativi",
    shortDescription: "Gestione di pratiche, codici cliente, riconciliazioni e attività amministrative ricorrenti. Trasformiamo procedure complesse in flussi semplici e misurabili, ottimizzando costi e performance.",
    imageDesktop: "/images/Servizi/desktop/servizi/4.webp",
    imageMobile: "/images/Servizi/mobile/servizi/4.png",
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
    advantages: [
      {
        title: "Riduzione dei costi",
        description: "Risparmi su stipendi, benefit e formazione del personale amministrativo, convertendo costi fissi in variabili."
      },
      {
        title: "Maggiore efficienza",
        description: "Alleggerisci il carico interno e migliori l'efficienza operativa con processi standardizzati e ottimizzati."
      },
      {
        title: "Scalabilità on-demand",
        description: "Adatti i servizi alle esigenze del mercato senza assumere nuovo personale, garantendo flessibilità operativa."
      }
    ],
    detailedContent: {
      title: "Processi semplificati, risultati misurabili",
      image: "/images/Servizi/detailed/administrative.png",
      paragraphs: [
        "Procedure, fatturazione, codici cliente e incassi richiedono tempo, personale e aggiornamento continuo. La complessità amministrativa sottrae energie alla crescita e comporta costi fissi elevati.",
        "Esternalizzando i processi non core con Outsourcing Group, ottieni supporto flessibile e professionale, riduci i costi operativi e migliori la continuità del servizio.",
        "Gestiamo i flussi amministrativi anche per mercati esteri, permettendoti di concentrarti sullo sviluppo dell'attività.",
      ]
    }
  },
  {
    slug: "data-management",
    name: "Data management",
    serviceDescription: "Gestione organizzata e sicura, secondo criteri di cybersecurity, di tutti i tuoi dati aziendali con backup automatici e accesso controllato.",
    title: "Servizi di backoffice in outsourcing",
    shortDescription: "Gestione di funzioni \"non core\" e attività ripetitive in outsourcing. Ottimizzi costi e tempi, garantendo continuità e qualità operativa.",
    imageDesktop: "/images/Servizi/desktop/servizi/5.webp",
    imageMobile: "/images/Servizi/mobile/servizi/5.png",
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
    advantages: [
      {
        title: "Efficienza operativa",
        description: "Processi standardizzati e ottimizzati che riducono i tempi di esecuzione e migliorano la produttività complessiva."
      },
      {
        title: "Costi sotto controllo",
        description: "Conversione dei costi fissi in variabili, con risparmio su personale, formazione, infrastrutture e tecnologie."
      },
      {
        title: "Continuità garantita",
        description: "Assicuriamo continuità operativa e qualità costante, indipendentemente da assenze, turnover o picchi di lavoro."
      }
    ],
    detailedContent: {
      title: "Un partner operativo che cresce con la tua azienda",
      image: "/images/Servizi/detailed/backoffice.png",
      paragraphs: [
        "Gestire internamente funzioni non strategiche sottrae tempo e risorse alle attività core. Attività ripetitive, amministrative e operative richiedono personale dedicato, formazione continua e costi fissi elevati.",
        "Outsourcing Group gestisce le tue funzioni di backoffice con procedure standardizzate, controlli di qualità e tecnologie all'avanguardia. Ottimizzi costi e tempi, garantendo continuità operativa e qualità costante, mentre il tuo team si concentra su ciò che genera vero valore per il business.",
      ]
    }
  },
  {
    slug: "training-aziendali",
    name: "Training aziendali",
    serviceDescription: "Offriamo Training aziendali per gruppi di utenti finali sull’utilizzo dei servizi digitali dell’azienda cliente. I training possono essere modulari, multi-sessione, personalizzati o standard.",
    title: "Servizi di backoffice in outsourcing",
    shortDescription: "Gestione di funzioni \"non core\" e attività ripetitive in outsourcing. Ottimizzi costi e tempi, garantendo continuità e qualità operativa.",
    imageDesktop: "/images/Servizi/desktop/servizi/6.webp",
    imageMobile: "/images/Servizi/mobile/servizi/5.png",
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
    advantages: [
      {
        title: "Efficienza operativa",
        description: "Processi standardizzati e ottimizzati che riducono i tempi di esecuzione e migliorano la produttività complessiva."
      },
      {
        title: "Costi sotto controllo",
        description: "Conversione dei costi fissi in variabili, con risparmio su personale, formazione, infrastrutture e tecnologie."
      },
      {
        title: "Continuità garantita",
        description: "Assicuriamo continuità operativa e qualità costante, indipendentemente da assenze, turnover o picchi di lavoro."
      }
    ],
    detailedContent: {
      title: "Un partner operativo che cresce con la tua azienda",
      image: "/images/Servizi/detailed/backoffice.png",
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
    image: "/images/Blog/1.png",
    date: "5 ottobre 2025",
  },
  {
    category: "BACKOFFICE COMMERCIALE",
    title: "Ottimizzazione dei processi di backoffice per aumentare l'efficienza",
    description: "Strategie innovative per digitalizzare e automatizzare le attività...",
    image: "/images/Blog/2.png",
    date: "3 ottobre 2025",
  },
  {
    category: "CUSTOMER CARE",
    title: "Customer care multicanale: soddisfare le esigenze dei clienti moderni",
    description: "Come costruire un servizio clienti efficace attraverso tutti i canali...",
    image: "/images/Blog/3.png",
    date: "30 settembre 2025",
  },
  {
    category: "CONFORMITÀ NORMATIVA",
    title: "Normative antiriciclaggio: adempimenti e controlli per le aziende",
    description: "Guida completa agli obblighi normativi e alle procedure di verifi...",
    image: "/images/Blog/1.png",
    date: "28 settembre 2025",
  },
  {
    category: "BACKOFFICE COMMERCIALE",
    title: "Gestione documentale digitale: verso l'ufficio senza carta",
    description: "Tecnologie e metodologie per dematerializzare i documenti e...",
    image: "/images/Blog/2.png",
    date: "25 settembre 2025",
  },
  {
    category: "CUSTOMER CARE",
    title: "L'importanza della formazione continua nel customer care outsourcing",
    description: "Investire nelle competenze del team per garantire un servizio...",
    image: "/images/Blog/3.png",
    date: "22 settembre 2025",
  },
  {
    category: "CONFORMITÀ NORMATIVA",
    title: "Normative antiriciclaggio: adempimenti e controlli per le aziende",
    description: "Guida completa agli obblighi normativi e alle procedure di verifi...",
    image: "/images/Blog/1.png",
    date: "28 settembre 2025",
  },
];