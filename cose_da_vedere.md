Priorità alta

Blocco preventivo: GA4, GTM e Google Maps non devono partire prima del consenso (Consent Mode v2 su GTM + script con type="text/plain" data-cookieconsent)

Incolla la Cookie Declaration generata dalla CMP nella pagina (auto-aggiornante), eccola:

<script id="CookieDeclaration" src="https://consent.cookiebot.com/e58a8351-5b5c-43aa-8d93-5a7b3391f9f5/cd.js" type="text/javascript" async></script>

Form di contatto — base giuridica sbagliata
Togli "Accetto l'informativa sulla privacy" come condizione d'invio → sostituisci con "Dichiaro di aver preso visione dell'informativa sul trattamento dei dati personali" (presa visione, non consenso)

Aggiungi una seconda checkbox separata e facoltativa solo per il marketing/newsletter
La richiesta di contatto/preventivo va gestita su art. 6(1)(b), non sul consenso
Informativa privacy (art. 3 – finalità e basi giuridiche) — riscrivi così:
Gestione della richiesta → art. 6(1)(b) misure precontrattuali
Prosecuzione commerciale sul rapporto precontrattuale → legittimo interesse (6(1)(f))
Marketing/newsletter → consenso specifico e separato (6(1)(a))

Priorità media

"Gestione dei lead" troppo vaga — esplicita le operazioni concrete: inserimento in CRM, qualificazione commerciale, ricontatto telefonico/email, eventuale profilazione — e associa a ciascuna la base giuridica.
Tempi di conservazione — oggi sono 24 mesi indifferenziati. Differenzia: richiesta evasa senza seguito (es. 12 mesi), trattativa in corso (durata + termini di legge), marketing su consenso (fino a revoca / 24 mesi).

Brevo — verifica com'è configurato davvero: se i contatti del form finiscono automaticamente in liste commerciali/automation/newsletter, la checkbox attuale non lo legittima. Separa nettamente uso CRM da uso marketing. Verifica che il DPA con Brevo sia firmato.

Google Maps (pagina Contatti) — va censito in informativa e cookie policy, e l'iframe va caricato solo dopo consenso (click-to-load o blocco via CMP).

Google Analytics — togli "dati in forma aggregata": descrivi il trattamento reale (indirizzo IP e identificatori online, anonimizzazione IP se attiva, data retention impostata, condivisione con Google).

Trasferimenti extra UE — non basta "garanzie adeguate": indica fornitore per fornitore lo strumento (Google → EU-US Data Privacy Framework; Brevo → UE; altri → SCC).

Priorità bassa

CAP del titolare — informativa dice 35127, footer 35131. Verifica quale è corretto (Piazza Zanellato è 35131 ed àe quello corretto)