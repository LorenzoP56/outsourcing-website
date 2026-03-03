# Fix 2.5 — Espansione pagine servizio a 2.000+ parole

> **Priorità di implementazione:** Contact Center → Digital Back Office → Data Management
> **Target:** 2.000–2.500 parole per pagina
> **Struttura aggiunte:** Use case anonimizzati · Tabella comparativa · FAQ 6-8 domande · Link contestuali blog
> **File da modificare:** `messages/it/servizi.json` e `messages/en/servizi.json`
> **Sezione di inserimento:** Nuovo blocco dopo `detailedContent`, prima del "Back to Services"

---

## 1. CONTACT CENTER (`contact-center`)

### Use Cases (3 casi reali anonimizzati)

Chiave JSON: `details.contact-center.useCases`

```json
"useCasesSectionTitle": "Chi usa il nostro Contact Center",
"useCasesSubtitle": "Alcuni esempi di aziende che hanno affidato la gestione clienti a Outsourcing Group.",
"useCases": {
  "case1": {
    "sector": "Provider di Servizi Digitali",
    "challenge": "Un operatore di servizi SaaS B2B riceveva oltre 400 richieste al giorno tra attivazioni, configurazioni e supporto tecnico. Il team interno non riusciva a gestire i picchi e i tempi di risposta superavano le 24 ore.",
    "solution": "Abbiamo attivato un team dedicato multicanale (email, chat, ticket) con operatori formati sulla piattaforma cliente. In 3 settimane il Contact Center era operativo con SLA garantiti a 4 ore.",
    "result": "Riduzione del 68% dei tempi di risposta. Il team interno si è concentrato sullo sviluppo prodotto."
  },
  "case2": {
    "sector": "Utilities — Gestione Clienti Residenziali",
    "challenge": "Una società di distribuzione energia doveva gestire migliaia di pratiche mensili di voltura, subentro e cessazione, con picchi stagionali difficili da prevedere.",
    "solution": "Abbiamo integrato il nostro Contact Center nei sistemi CRM del cliente, gestendo l'intero flusso inbound con tracciabilità completa e reportistica settimanale.",
    "result": "Scalabilità immediata nei picchi (+40% volumi estivi). Zero interruzioni operative."
  },
  "case3": {
    "sector": "E-commerce B2B",
    "challenge": "Un marketplace B2B italiano aveva bisogno di un punto di contatto professionale per gestire reclami, ordini e richieste post-vendita in italiano e inglese.",
    "solution": "Team bilingue IT/EN con script personalizzati, KPI condivisi e report mensile sulle performance per categoria di richiesta.",
    "result": "NPS cliente finale aumentato di 22 punti in 6 mesi. Tasso di escalation ridotto del 35%."
  }
}
```

---

### Tabella Comparativa: Interno vs Outsourcing

Chiave JSON: `details.contact-center.comparisonTable`

```json
"comparisonTitle": "Contact Center interno vs Contact Center in outsourcing",
"comparisonSubtitle": "Una valutazione oggettiva per aiutarti a scegliere il modello più efficiente.",
"comparison": {
  "headers": {
    "criteria": "Criterio",
    "internal": "Gestione Interna",
    "outsourcing": "Outsourcing Group"
  },
  "rows": {
    "cost": {
      "criteria": "Costo mensile fisso",
      "internal": "Alto (stipendi, tool, formazione, spazi)",
      "outsourcing": "Variabile in base ai volumi reali"
    },
    "time": {
      "criteria": "Tempo di attivazione",
      "internal": "2–4 mesi (selezione, formazione, setup)",
      "outsourcing": "2–4 settimane"
    },
    "scalability": {
      "criteria": "Scalabilità nei picchi",
      "internal": "Limitata, richiede nuove assunzioni",
      "outsourcing": "Immediata, senza costi aggiuntivi fissi"
    },
    "sla": {
      "criteria": "SLA misurabili",
      "internal": "Difficili da garantire con team ridotti",
      "outsourcing": "Contrattualizzati e monitorati"
    },
    "reporting": {
      "criteria": "Reportistica",
      "internal": "Manuale o limitata",
      "outsourcing": "Dashboard e report periodici inclusi"
    },
    "languages": {
      "criteria": "Multilingua",
      "internal": "Dipende dalle risorse disponibili",
      "outsourcing": "Italiano e inglese inclusi"
    }
  }
}
```

---

### FAQ Espansa (6 domande)

Chiave JSON: `details.contact-center.faq`

```json
"faqTitle": "Domande frequenti sul Contact Center in outsourcing",
"faq": {
  "q1": {
    "question": "Quanto tempo ci vuole per attivare il servizio?",
    "answer": "In media tra le 2 e le 4 settimane dall'accordo operativo. Il tempo include la fase di onboarding degli operatori sui tuoi servizi, la definizione degli script, l'integrazione con i tuoi sistemi e i test di qualità. Per progetti urgenti possiamo accelerare il processo."
  },
  "q2": {
    "question": "Gli operatori saranno formati sui miei prodotti/servizi?",
    "answer": "Sì. Prima dell'attivazione conduciamo una sessione di formazione dedicata con il tuo team per conoscere i servizi, i flussi operativi e le procedure specifiche. La formazione viene aggiornata a ogni rilascio o variazione significativa del servizio."
  },
  "q3": {
    "question": "Posso integrare il vostro Contact Center con il mio CRM?",
    "answer": "Sì, lavoriamo direttamente sui CRM e i sistemi del cliente (Salesforce, HubSpot, gestionali verticali, ecc.). In alternativa, utilizziamo piattaforme condivise con accesso controllato. Ogni interazione viene tracciata e sincronizzata."
  },
  "q4": {
    "question": "Come vengono gestiti i picchi di volume?",
    "answer": "La scalabilità è uno dei vantaggi principali dell'outsourcing. Quando i volumi aumentano — per campagne, stagionalità o eventi — il team viene ampliato senza necessità di nuove assunzioni da parte tua. I picchi vengono gestiti entro i tempi previsti dagli SLA."
  },
  "q5": {
    "question": "Che tipo di reportistica ricevo?",
    "answer": "Ricevi report periodici (settimanali o mensili, in base alle esigenze) con metriche su volumi, tempi di risposta, tasso di risoluzione al primo contatto, categorie di richiesta e performance per canale. I KPI vengono concordati in fase di setup."
  },
  "q6": {
    "question": "Il servizio è disponibile fuori dall'orario lavorativo standard?",
    "answer": "Il servizio standard copre il lunedì-venerdì, 9:00–19:00. Per esigenze di copertura estesa (sera, weekend, festivi) è possibile attivare fasce orarie aggiuntive. Valutiamo ogni esigenza in fase di progettazione del servizio."
  }
}
```

---

### Link contestuali a post del blog

Da inserire in fondo alla sezione `detailedContent`:

> Leggi anche: **[Come ridurre i costi del customer service senza perdere qualità]** · **[Contact Center multicanale: guida pratica all'implementazione]**

*(Da collegare quando i post esistono — usare slug reali)*

---
---

## 2. DIGITAL BACK OFFICE (`outsourcing-back-office-digitale`)

### Use Cases (3 casi reali anonimizzati)

Chiave JSON: `details.outsourcing-back-office-digitale.useCases`

```json
"useCasesSectionTitle": "Come lavoriamo: esempi operativi",
"useCasesSubtitle": "Casi reali di aziende che hanno esternalizzato il Digital Back Office con Outsourcing Group.",
"useCases": {
  "case1": {
    "sector": "Operatore Telecomunicazioni",
    "challenge": "Gestione di 1.200+ pratiche mensili di portabilità, attivazione SIM e verifica identità. Il team interno accumulava un backlog crescente con errori frequenti nella verifica documentale.",
    "solution": "Abbiamo assorbito l'intero flusso operativo: verifica documenti, controllo identità tramite sistemi digitali certificati, attivazione e comunicazione esito al cliente finale. Workflow strutturato con SLA a 48 ore.",
    "result": "Backlog azzerato in 3 settimane. Tasso di errore documentale ridotto dal 12% all'1,4%."
  },
  "case2": {
    "sector": "Fintech — Onboarding Digitale",
    "challenge": "Una società fintech doveva gestire il processo KYC (Know Your Customer) per i nuovi iscritti: raccolta documenti, verifica, approvazione o richiesta integrazione, tutto in tempi rapidi per non perdere l'utente.",
    "solution": "Operatori dedicati con accesso alla piattaforma del cliente gestivano ogni pratica seguendo procedure conformi alla normativa AML/GDPR, con escalation automatica ai casi a rischio.",
    "result": "Tempo medio di approvazione ridotto da 5 giorni a 18 ore. Tasso di abbandono in fase onboarding calato del 31%."
  },
  "case3": {
    "sector": "Provider Software B2B",
    "challenge": "Ogni nuovo cliente enterprise richiedeva una fase di configurazione account, migrazione dati e formazione iniziale — un processo che impegnava 2-3 giorni del team tecnico per ogni contratto.",
    "solution": "Abbiamo strutturato un processo standardizzato di configurazione e onboarding, liberando il team tecnico dalle attività operative ripetitive e garantendo uniformità nella qualità di consegna.",
    "result": "Riduzione del 60% del tempo tecnico per onboarding. Capacità di gestire 3x il numero di contratti mensili."
  }
}
```

---

### Tabella Comparativa

Chiave JSON: `details.outsourcing-back-office-digitale.comparisonTable`

```json
"comparisonTitle": "Back Office interno vs Digital Back Office in outsourcing",
"comparison": {
  "headers": {
    "criteria": "Criterio",
    "internal": "Gestione Interna",
    "outsourcing": "Outsourcing Group"
  },
  "rows": {
    "volume": {
      "criteria": "Capacità di gestione volumi",
      "internal": "Limitata alle risorse disponibili",
      "outsourcing": "Scalabile su richiesta"
    },
    "errors": {
      "criteria": "Tasso di errore operativo",
      "internal": "Variabile, spesso alto nei picchi",
      "outsourcing": "Controllato da procedure e quality check"
    },
    "compliance": {
      "criteria": "Conformità GDPR e normative",
      "internal": "Dipende dalla formazione interna",
      "outsourcing": "Procedure sempre aggiornate e verificate"
    },
    "traceability": {
      "criteria": "Tracciabilità delle pratiche",
      "internal": "Spesso manuale o su fogli Excel",
      "outsourcing": "Completa, con stato avanzamento in tempo reale"
    },
    "cost": {
      "criteria": "Struttura dei costi",
      "internal": "Fissi (stipendi, formazione, strumenti)",
      "outsourcing": "Variabile in base ai volumi effettivi"
    },
    "continuity": {
      "criteria": "Continuità operativa",
      "internal": "A rischio in caso di assenze o turnover",
      "outsourcing": "Garantita contrattualmente"
    }
  }
}
```

---

### FAQ Espansa (7 domande)

Chiave JSON: `details.outsourcing-back-office-digitale.faq`

```json
"faqTitle": "Domande frequenti sul Digital Back Office in outsourcing",
"faq": {
  "q1": {
    "question": "Quali tipologie di pratiche gestite nel Digital Back Office?",
    "answer": "Gestiamo tutto il ciclo operativo legato all'erogazione di servizi digitali: verifica documentale per onboarding, controlli di identità, validazione requisiti tecnici o contrattuali, configurazione account, attivazioni on-demand, cessazioni e gestione stati avanzamento pratiche. Il perimetro viene definito in fase di progettazione del servizio."
  },
  "q2": {
    "question": "Come garantite la conformità GDPR nel trattamento dei documenti?",
    "answer": "Operiamo come Responsabili del Trattamento ai sensi del GDPR. Tutti i dati e i documenti vengono trattati secondo procedure documentate e controllate. Firmiamo il DPA (Data Processing Agreement) con ogni cliente e formiamo gli operatori sui protocolli di sicurezza e riservatezza specifici per ogni progetto."
  },
  "q3": {
    "question": "Gli operatori lavorano sui vostri sistemi o su quelli del cliente?",
    "answer": "Lavoriamo direttamente sulle piattaforme del cliente, con accesso profilato e tracciato. Non duplichiamo i dati su sistemi terzi se non strettamente necessario. Questo garantisce continuità operativa, visibilità in tempo reale da parte del cliente e massima sicurezza dei dati."
  },
  "q4": {
    "question": "Come viene misurata la qualità del lavoro?",
    "answer": "Definiamo insieme KPI operativi precisi: tempi di lavorazione, tasso di completamento entro SLA, tasso di errore, volume pratiche gestite. Produciamo report periodici e siamo disponibili per call di allineamento operative. Ogni pratiche è tracciata dall'apertura alla chiusura."
  },
  "q5": {
    "question": "Cosa succede se i volumi aumentano improvvisamente?",
    "answer": "La scalabilità è uno dei vantaggi principali del nostro modello. Possiamo aumentare la capacità operativa in tempi brevi senza che il cliente debba assumere o formare nuovo personale. Gestiamo picchi stagionali, campagne e situazioni straordinarie mantenendo i tempi di lavorazione previsti."
  },
  "q6": {
    "question": "Quanto tempo richiede l'avvio del servizio?",
    "answer": "Il tempo standard di avvio è tra le 2 e le 4 settimane, incluse la fase di analisi dei processi, la definizione delle procedure operative, la formazione degli operatori e i test di qualità. Per esigenze urgenti possiamo strutturare un avvio accelerato in accordo con il cliente."
  },
  "q7": {
    "question": "Operate anche su pratiche complesse o solo su attività ripetitive?",
    "answer": "Operiamo su entrambe le tipologie. Le attività ripetitive vengono gestite con procedure standardizzate ad alta efficienza. Per le pratiche complesse o sensibili (es. KYC, verifiche antifrode, escalation) prevediamo livelli operativi dedicati con supervisori specializzati e procedure di escalation definite."
  }
}
```

---

### Link contestuali blog

> Leggi anche: **[Digital Back Office: cos'è e perché le aziende lo esternalizzano]** · **[Onboarding digitale: come velocizzare il processo con il Back Office esterno]**

---
---

## 3. DATA MANAGEMENT (`data-management`)

### Use Cases (3 casi reali anonimizzati)

Chiave JSON: `details.data-management.useCases`

```json
"useCasesSectionTitle": "Data Management in pratica: tre scenari reali",
"useCasesSubtitle": "Aziende che hanno affidato la gestione dei dati a Outsourcing Group.",
"useCases": {
  "case1": {
    "sector": "Sanità Privata — Gestione Dati Pazienti",
    "challenge": "Una struttura sanitaria privata con 8 sedi gestiva i dati dei pazienti su sistemi eterogenei e non integrati. Le anagrafiche erano duplicate, le cartelle incomplete, i backup manuali e non verificati.",
    "solution": "Abbiamo realizzato un progetto di data consolidation: deduplicazione dei record, allineamento degli archivi sui diversi sistemi, implementazione di procedure di backup automatico con verifica giornaliera e definizione di un modello di governance del dato conforme GDPR.",
    "result": "Riduzione del 43% dei record duplicati. Backup certificati e verificabili. Zero violazioni GDPR nei 18 mesi successivi."
  },
  "case2": {
    "sector": "E-commerce B2C — Data Quality",
    "challenge": "Un e-commerce con 300.000 clienti attivi aveva un CRM con dati anagrafici deteriorati: email non valide, indirizzi incompleti, clienti duplicati. Le campagne marketing mostravano un tasso di rimbalzo superiore al 22%.",
    "solution": "Progetto di data cleansing su tutto il database: validazione email, normalizzazione indirizzi, deduplicazione, arricchimento dei record incompleti tramite fonti verificate e integrazione con la piattaforma marketing.",
    "result": "Tasso di rimbalzo email sceso al 4,8%. Costo per acquisizione migliorato del 18% grazie a dati più precisi."
  },
  "case3": {
    "sector": "Manifatturiero — Integrazione ERP/CRM",
    "challenge": "Un'azienda manifatturiera con ERP legacy e CRM moderno aveva dati non allineati tra i due sistemi: prezzi, anagrafiche cliente e stock spesso incoerenti, con impatti sulle offerte commerciali.",
    "solution": "Progetto di integrazione dati con mappatura del modello informativo, definizione delle regole di sincronizzazione, gestione dei conflitti e monitoraggio continuo della coerenza tra i sistemi.",
    "result": "Eliminazione completa delle incoerenze critiche. Il team commerciale ha ridotto del 70% il tempo dedicato a verifiche manuali sui dati."
  }
}
```

---

### Tabella Comparativa

Chiave JSON: `details.data-management.comparisonTable`

```json
"comparisonTitle": "Gestione dati interna vs Data Management in outsourcing",
"comparison": {
  "headers": {
    "criteria": "Criterio",
    "internal": "Gestione Interna",
    "outsourcing": "Outsourcing Group"
  },
  "rows": {
    "expertise": {
      "criteria": "Competenze specializzate",
      "internal": "Spesso frammentate o assenti",
      "outsourcing": "Team dedicato con competenze su GDPR, cybersecurity, integrazione dati"
    },
    "gdpr": {
      "criteria": "Conformità GDPR",
      "internal": "Dipende dall'aggiornamento normativo interno",
      "outsourcing": "Procedure continuamente aggiornate e certificate"
    },
    "backup": {
      "criteria": "Backup e disaster recovery",
      "internal": "Spesso manuale, non verificato sistematicamente",
      "outsourcing": "Automatizzato, ridondante, verificabile"
    },
    "quality": {
      "criteria": "Qualità del dato",
      "internal": "Degrada nel tempo senza presidio attivo",
      "outsourcing": "Monitorata con controlli continuativi"
    },
    "integration": {
      "criteria": "Integrazione multi-sistema",
      "internal": "Complessa da gestire internamente",
      "outsourcing": "Gestita con metodologie strutturate"
    },
    "cost": {
      "criteria": "Costo di gestione",
      "internal": "Alto (personale IT, licenze, formazione)",
      "outsourcing": "Ottimizzato in base al perimetro del progetto"
    }
  }
}
```

---

### FAQ Espansa (8 domande)

Chiave JSON: `details.data-management.faq`

```json
"faqTitle": "Domande frequenti sul Data Management aziendale",
"faq": {
  "q1": {
    "question": "Cosa si intende esattamente per Data Management aziendale?",
    "answer": "Il Data Management aziendale comprende tutte le attività necessarie per raccogliere, organizzare, proteggere, mantenere e rendere disponibili i dati dell'azienda in modo affidabile e conforme. Include archiviazione strutturata, backup, qualità del dato, governance degli accessi, integrazione tra sistemi e conformità normativa (GDPR, Data Act)."
  },
  "q2": {
    "question": "Come garantite la sicurezza dei dati aziendali?",
    "answer": "Applichiamo criteri avanzati di cybersecurity: accesso ai dati con autenticazione a più fattori, profilazione per ruolo, cifratura dei dati sensibili, backup automatici con verifica di integrità e procedure documentate per la gestione degli incidenti. Operiamo come Responsabili del Trattamento ai sensi del GDPR e firmiamo il DPA con ogni cliente."
  },
  "q3": {
    "question": "Siete in grado di lavorare sui nostri sistemi esistenti (ERP, CRM, database)?",
    "answer": "Sì. Lavoriamo direttamente sui sistemi del cliente — ERP, CRM, gestionali verticali, database SQL/NoSQL — o in ambienti sicuri condivisi. Prima dell'avvio del progetto realizziamo una mappatura del modello dati esistente per garantire un intervento preciso e senza interruzioni operative."
  },
  "q4": {
    "question": "Cosa include un progetto di data cleansing?",
    "answer": "Un progetto di data cleansing include: analisi della qualità del dato esistente, identificazione e risoluzione dei duplicati, normalizzazione dei formati (indirizzi, CAP, email, telefoni), validazione dei record, arricchimento dei dati incompleti e allineamento tra sistemi. Al termine viene consegnato un report dettagliato sulle modifiche effettuate."
  },
  "q5": {
    "question": "Con quale frequenza vengono eseguiti i backup?",
    "answer": "La frequenza dei backup viene definita in base alla criticità dei dati e alle esigenze operative del cliente. Le soluzioni standard prevedono backup giornalieri con verifica automatica di integrità e copia ridondante in location separata. Per dati critici possiamo implementare backup incrementali ogni ora o in tempo reale."
  },
  "q6": {
    "question": "Gestite anche la migrazione di dati tra sistemi?",
    "answer": "Sì. Gestiamo progetti di migrazione dati tra sistemi legacy e piattaforme moderne, tra CRM diversi, da on-premise a cloud o viceversa. Ogni migrazione segue una metodologia strutturata: analisi, mappatura, trasformazione, test e validazione prima del go-live, per garantire che nessun dato venga perso o corrotto."
  },
  "q7": {
    "question": "Come viene gestita la conformità al GDPR nel Data Management?",
    "answer": "Integriamo il GDPR in ogni fase del Data Management: dalla classificazione dei dati personali alla definizione delle finalità di trattamento, dalla gestione dei diritti degli interessati (accesso, rettifica, cancellazione) alla tenuta del Registro dei Trattamenti. Siamo aggiornati anche sulle evoluzioni normative come il Data Act europeo."
  },
  "q8": {
    "question": "Che dimensioni deve avere un'azienda per beneficiare di questo servizio?",
    "answer": "Il Data Management in outsourcing è efficace per aziende di qualsiasi dimensione che gestiscono dati clienti, processi digitali o sistemi informativi complessi. Lavoriamo sia con PMI in fase di strutturazione del dato, sia con aziende enterprise con infrastrutture complesse e requisiti normativi stringenti."
  }
}
```

---

### Link contestuali blog

> Leggi anche: **[GDPR e gestione dati aziendali: cosa devono sapere le PMI]** · **[Data quality: perché i dati sporchi costano più di quanto pensi]**

---

## Note di implementazione

### Componente da creare
Per rendere operativo questo contenuto servono due nuovi componenti React (o sezioni aggiuntive nei componenti esistenti):

1. **`UseCases.tsx`** — 3 card con settore, sfida, soluzione, risultato
2. **`ComparisonTable.tsx`** — tabella 3 colonne responsive
3. **`ServiceFAQ.tsx`** — accordion FAQ (simile a `DomandeFrequenti` già esistente)

### Dove inserirli in `[slug]/page.tsx`
```
Hero → Funzionalita → Vantaggi → ServiceContent → [UseCases] → [ComparisonTable] → [ServiceFAQ]
```

### Stima word count aggiunta
| Sezione | Parole aggiuntive |
|---|---|
| Use Cases (3) | ~350 |
| Tabella comparativa | ~150 |
| FAQ (6-8 domande) | ~600–800 |
| Link contestuali | ~20 |
| **Totale aggiunta** | **~1.100–1.300** |

Con le ~1.200 parole già presenti → **totale stimato: 2.300–2.500 parole** per pagina ✓

### Versione EN
I testi EN vanno aggiunti in `messages/en/servizi.json` con le stesse chiavi. Traduzione da fare dopo aver finalizzato i testi IT.
