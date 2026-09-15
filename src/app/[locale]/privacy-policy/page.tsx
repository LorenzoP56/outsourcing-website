import { COLORS } from "@/lib/constants";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });

  return {
    title: t('privacy.metaTitle'),
    description: t('privacy.metaDescription'),
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy-policy`,
      languages: {
        ...Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/privacy-policy`])),
        'x-default': `${BASE_URL}/it/privacy-policy`,
      },
    },
    openGraph: {
      title: t('privacy.metaTitle'),
      description: t('privacy.metaDescription'),
      url: `${BASE_URL}/${locale}/privacy-policy`,
      siteName: "Outsourcing Group",
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: "website",
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Privacy Policy", url: "/privacy-policy" },
]);

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isIt = locale === "it";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)}
      />

      <section className="lg:px-32 lg:py-16 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="lg:text-[56px] lg:leading-[56px] text-[40px] leading-[40px] font-bold mb-8" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}>
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none" style={{ color: COLORS.TEXT }}>

            <p className="text-lg mb-8">
              {isIt
                ? "La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) e descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di OUTSOURCING GROUP srl e che compilano i moduli di contatto presenti sul sito."
                : "This privacy notice is provided pursuant to Art. 13 of EU Regulation 2016/679 (GDPR) and describes how the personal data of users who visit the OUTSOURCING GROUP srl website and fill in the contact forms on the site are processed."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "1. Titolare del trattamento" : "1. Data Controller"}
            </h2>
            <p className="mb-4">{isIt ? "Il Titolare del trattamento dei dati è:" : "The Data Controller is:"}</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-2">{isIt ? "Forma giuridica: Società a responsabilità limitata" : "Legal form: Limited liability company (SRL)"}</p>
              <p className="mb-2">{isIt ? "Sede legale: Piazza Giacomo Zanellato, 13 – 35131 Padova (PD)" : "Registered office: Piazza Giacomo Zanellato, 13 – 35131 Padova (PD), Italy"}</p>
              <p className="mb-2">{isIt ? "P. IVA / Codice Fiscale: IT03475900282" : "VAT / Tax Code: IT03475900282"}</p>
              <p className="mb-0">{isIt ? "Email di contatto" : "Contact email"}: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "2. Tipologie di dati trattati" : "2. Types of data processed"}
            </h2>
            <p className="mb-4">{isIt ? "I dati personali raccolti tramite il sito web includono:" : "Personal data collected through the website includes:"}</p>
            <ul className="list-disc pl-6 mb-8">
              <li>{isIt ? "Nome e cognome" : "Full name"}</li>
              <li>{isIt ? "Indirizzo email" : "Email address"}</li>
              <li>{isIt ? "Azienda (se fornita)" : "Company (if provided)"}</li>
              <li>{isIt ? "Messaggio (se fornito)" : "Message (if provided)"}</li>
            </ul>
            <p className="mb-8">
              {isIt
                ? "Tali dati sono forniti volontariamente dall'utente attraverso la compilazione dei form presenti sul sito."
                : "Such data is voluntarily provided by the user by filling in the forms on the site."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "3. Finalità del trattamento e basi giuridiche" : "3. Purposes and legal bases for processing"}
            </h2>
            <p className="mb-6">
              {isIt
                ? "I dati personali raccolti tramite i form del sito sono trattati per finalità distinte, ciascuna con una propria base giuridica, come di seguito specificato:"
                : "Personal data collected through the site's forms is processed for distinct purposes, each with its own legal basis, as specified below:"}
            </p>

            <p className="mb-2"><strong>{isIt ? "a) Gestione della richiesta di contatto o preventivo" : "a) Handling the contact or quote request"}</strong></p>
            <p className="mb-2">
              {isIt
                ? "Quando l'utente invia una richiesta tramite i form del sito, i dati sono trattati per:"
                : "When a user submits a request through the site's forms, the data is processed to:"}
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>{isIt ? "inserire la richiesta nel sistema CRM aziendale (Brevo)" : "record the request in the company's CRM system (Brevo)"}</li>
              <li>{isIt ? "qualificare commercialmente la richiesta" : "commercially qualify the request"}</li>
              <li>{isIt ? "ricontattare l'utente telefonicamente o via email per dare seguito a quanto richiesto" : "contact the user by phone or email to follow up on the request"}</li>
              <li>{isIt ? "svolgere un'eventuale profilazione elementare del lead (es. settore di appartenenza, dimensione aziendale), limitata a quanto necessario per la gestione commerciale della richiesta" : "carry out limited lead profiling (e.g. industry sector, company size), restricted to what is necessary to handle the request commercially"}</li>
            </ul>
            <p className="mb-6">
              {isIt
                ? <>Base giuridica: <strong>art. 6, par. 1, lett. b) GDPR</strong> (misure precontrattuali adottate su richiesta dell&apos;interessato).</>
                : <>Legal basis: <strong>Art. 6(1)(b) GDPR</strong> (pre-contractual measures taken at the request of the data subject).</>}
            </p>

            <p className="mb-2"><strong>{isIt ? "b) Prosecuzione del rapporto commerciale" : "b) Continuation of the business relationship"}</strong></p>
            <p className="mb-6">
              {isIt
                ? <>Successivamente alla richiesta iniziale, il Titolare può proseguire l&apos;interlocuzione con l&apos;utente (es. invio di informazioni aggiuntive strettamente collegate al servizio richiesto, gestione della trattativa commerciale) sulla base del proprio <strong>legittimo interesse</strong> a dare seguito al rapporto precontrattuale avviato dall&apos;interessato (<strong>art. 6, par. 1, lett. f) GDPR</strong>), bilanciato con i diritti e le libertà dell&apos;interessato, che può opporsi in qualsiasi momento a questo trattamento.</>
                : <>After the initial request, the Data Controller may continue the interaction with the user (e.g. sending further information strictly related to the requested service, managing the commercial negotiation) on the basis of its <strong>legitimate interest</strong> in pursuing the pre-contractual relationship initiated by the data subject (<strong>Art. 6(1)(f) GDPR</strong>), balanced against the rights and freedoms of the data subject, who may object to this processing at any time.</>}
            </p>

            <p className="mb-2"><strong>{isIt ? "c) Marketing e newsletter" : "c) Marketing and newsletter"}</strong></p>
            <p className="mb-8">
              {isIt
                ? <>L&apos;invio di comunicazioni commerciali, promozionali e di newsletter avviene esclusivamente sulla base del <strong>consenso specifico e separato</strong> dell&apos;interessato (<strong>art. 6, par. 1, lett. a) GDPR</strong>), espresso tramite l&apos;apposita casella facoltativa e distinta presente nei form del sito, indipendente dalla presa visione della presente informativa. Il consenso è in ogni momento revocabile, senza pregiudizio per la liceità del trattamento basata sul consenso prestato prima della revoca.</>
                : <>Commercial, promotional and newsletter communications are sent exclusively on the basis of the data subject&apos;s <strong>specific and separate consent</strong> (<strong>Art. 6(1)(a) GDPR</strong>), expressed through the dedicated, optional and separate checkbox on the site&apos;s forms, independent of having read this notice. Consent can be withdrawn at any time, without affecting the lawfulness of processing based on consent given before its withdrawal.</>}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "4. Modalità di trattamento e conservazione dei dati" : "4. Processing methods and data retention"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Il trattamento dei dati avviene mediante strumenti informatici e telematici, nel rispetto dei principi di liceità, correttezza, trasparenza e minimizzazione previsti dal GDPR."
                : "Data is processed using electronic and digital tools, in compliance with the principles of lawfulness, fairness, transparency and minimisation as required by the GDPR."}
            </p>
            <p className="mb-4">
              {isIt
                ? "Sono adottate misure di sicurezza tecniche e organizzative adeguate a prevenire accessi non autorizzati, divulgazione, modifica o distruzione dei dati."
                : "Appropriate technical and organisational security measures are in place to prevent unauthorised access, disclosure, modification or destruction of data."}
            </p>
            <p className="mb-4">
              {isIt
                ? "I tempi di conservazione dei dati sono differenziati in base alla finalità del trattamento:"
                : "Data retention periods differ depending on the purpose of processing:"}
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li>
                {isIt
                  ? <><strong>Richiesta evasa senza seguito commerciale:</strong> i dati sono conservati per 12 mesi dalla chiusura della richiesta, trascorsi i quali vengono cancellati o resi anonimi.</>
                  : <><strong>Request handled with no further commercial follow-up:</strong> data is retained for 12 months from the closing of the request, after which it is deleted or anonymised.</>}
              </li>
              <li>
                {isIt
                  ? <><strong>Trattativa commerciale in corso o rapporto contrattuale instaurato:</strong> i dati sono conservati per tutta la durata del rapporto e, successivamente, per il periodo previsto dagli obblighi di legge applicabili (es. termini di conservazione della documentazione fiscale e contrattuale).</>
                  : <><strong>Ongoing commercial negotiation or established contractual relationship:</strong> data is retained for the entire duration of the relationship and, afterwards, for the period required by applicable legal obligations (e.g. statutory retention terms for tax and contractual documentation).</>}
              </li>
              <li>
                {isIt
                  ? <><strong>Marketing e newsletter (dati trattati sulla base del consenso):</strong> i dati sono conservati fino alla revoca del consenso da parte dell&apos;interessato e comunque non oltre 24 mesi dall&apos;ultima interazione, salvo rinnovo del consenso stesso.</>
                  : <><strong>Marketing and newsletter (data processed on the basis of consent):</strong> data is retained until the data subject withdraws consent and, in any case, for no longer than 24 months from the last interaction, unless consent is renewed.</>}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "5. Accesso ai dati da parte di terzi" : "5. Third-party access to data"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "I dati personali potranno essere trattati da soggetti terzi che operano per conto del Titolare, in qualità di Responsabili del trattamento, quali ad esempio:"
                : "Personal data may be processed by third parties acting on behalf of the Data Controller, as Data Processors, such as:"}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>{isIt ? "Fornitori di servizi di hosting e infrastruttura web" : "Web hosting and infrastructure service providers"}</li>
              <li>
                {isIt
                  ? <>
                      <strong>Brevo (Sendinblue)</strong> – piattaforma CRM utilizzata per la gestione dei contatti e delle richieste inviate tramite i form del sito. I dati (nome, email, azienda, messaggio) vengono trasmessi a Brevo ai sensi di un contratto di trattamento dati (DPA). Maggiori informazioni: <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">brevo.com/legal/privacypolicy</a>
                    </>
                  : <>
                      <strong>Brevo (Sendinblue)</strong> – CRM platform used to manage contacts and requests submitted through the site forms. Data (name, email, company, message) is transmitted to Brevo under a Data Processing Agreement (DPA). More information: <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">brevo.com/legal/privacypolicy</a>
                    </>
                }
              </li>
              <li>{isIt ? "Fornitori di servizi di analisi del traffico web" : "Web traffic analysis service providers"}</li>
              <li>
                {isIt
                  ? <><strong>Google Maps</strong> – mappa interattiva integrata nella pagina Contatti per mostrare la sede aziendale, fornita da Google LLC. Il caricamento della mappa comporta la connessione ai server Google e l&apos;eventuale impostazione di cookie da parte di quest&apos;ultima.</>
                  : <><strong>Google Maps</strong> – interactive map embedded on the Contact page to show the company's location, provided by Google LLC. Loading the map connects to Google's servers and may set cookies on Google's behalf.</>}
              </li>
            </ul>
            <p className="mb-8">
              {isIt
                ? "Tali soggetti trattano i dati esclusivamente secondo le istruzioni del Titolare e nel rispetto della normativa vigente."
                : "These parties process data solely in accordance with the Data Controller's instructions and in compliance with applicable regulations."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "6. Strumenti di analisi e servizi esterni" : "6. Analytics and external services"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Il sito utilizza Google Analytics 4 (GA4), un servizio di analisi del traffico web fornito da Google LLC. Attraverso GA4 vengono raccolti, tramite cookie e identificatori online (es. client ID), dati quali: pagine visitate, tempo di permanenza, sorgente di provenienza del traffico, tipo di dispositivo e browser utilizzati, area geografica approssimativa dell'utente."
                : "The site uses Google Analytics 4 (GA4), a web traffic analysis service provided by Google LLC. Through GA4, data such as pages visited, time spent on the site, traffic source, device and browser type, and the user's approximate geographic area is collected via cookies and online identifiers (e.g. client ID)."}
            </p>
            <p className="mb-4">
              {isIt
                ? "GA4 non memorizza l'indirizzo IP completo dell'utente: l'IP viene utilizzato in modo transitorio per determinare l'area geografica di provenienza e successivamente non conservato in forma leggibile, secondo l'architettura tecnica adottata da Google per questo servizio."
                : "GA4 does not store the user's full IP address: the IP is used transiently to determine the user's geographic area and is not subsequently retained in readable form, in line with the technical architecture Google applies to this service."}
            </p>
            <p className="mb-8">
              {isIt
                ? <>Il periodo di conservazione dei dati sugli eventi in GA4 è configurato nel pannello di amministrazione Google Analytics del Titolare (impostazione da verificare periodicamente e comunque non superiore a 14 mesi). I dati sono condivisi con Google LLC, che li tratta anche come titolare autonomo secondo la propria informativa privacy, disponibile su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">policies.google.com/privacy</a>.</>
                : <>The retention period for event data in GA4 is configured in the Data Controller&apos;s Google Analytics admin panel (a setting to be verified periodically and, in any case, not exceeding 14 months). Data is shared with Google LLC, which also processes it as an independent controller under its own privacy policy, available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">policies.google.com/privacy</a>.</>}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "7. Trasferimento dei dati extra UE" : "7. Data transfers outside the EU"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Per i servizi di terze parti utilizzati sul sito, il trasferimento di dati al di fuori dello Spazio Economico Europeo (SEE) e le relative garanzie sono i seguenti:"
                : "For the third-party services used on the site, the transfer of data outside the European Economic Area (EEA) and the related safeguards are as follows:"}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                {isIt
                  ? <><strong>Google</strong> (Google Analytics, Google Maps) – società con sede negli Stati Uniti, aderente al <strong>Data Privacy Framework (DPF) UE-USA</strong>, il meccanismo di adeguatezza riconosciuto dalla Commissione Europea per i trasferimenti di dati verso gli USA.</>
                  : <><strong>Google</strong> (Google Analytics, Google Maps) – US-based company, adhering to the <strong>EU-U.S. Data Privacy Framework (DPF)</strong>, the adequacy mechanism recognised by the European Commission for data transfers to the USA.</>}
              </li>
              <li>
                {isIt
                  ? <><strong>Brevo</strong> – società con sede in Francia; i dati dei contatti raccolti tramite i form sono conservati su server situati nell&apos;Unione Europea, senza trasferimento extra-UE.</>
                  : <><strong>Brevo</strong> – France-based company; contact data collected through the forms is stored on servers located within the European Union, with no extra-EU transfer.</>}
              </li>
              <li>
                {isIt
                  ? "Eventuali ulteriori fornitori tecnici (es. hosting) operano, ove possibile, con infrastrutture situate nell'Unione Europea; qualora ciò non fosse possibile, il trasferimento avviene sulla base delle Clausole Contrattuali Standard (SCC) adottate dalla Commissione Europea."
                  : "Any additional technical providers (e.g. hosting) operate, where possible, with infrastructure located within the European Union; where this is not possible, the transfer is based on the Standard Contractual Clauses (SCC) adopted by the European Commission."}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "8. Diritti dell'interessato" : "8. Rights of the data subject"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "L'utente, in qualità di interessato, può esercitare in qualsiasi momento i diritti previsti dagli articoli 15–22 del GDPR, tra cui:"
                : "As a data subject, the user may exercise the following rights under Articles 15–22 of the GDPR at any time:"}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>{isIt ? "Diritto di accesso ai dati personali" : "Right of access to personal data"}</li>
              <li>{isIt ? "Diritto di rettifica dei dati inesatti" : "Right to rectification of inaccurate data"}</li>
              <li>{isIt ? "Diritto alla cancellazione (diritto all'oblio)" : "Right to erasure (right to be forgotten)"}</li>
              <li>{isIt ? "Diritto alla limitazione del trattamento" : "Right to restriction of processing"}</li>
              <li>{isIt ? "Diritto alla portabilità dei dati" : "Right to data portability"}</li>
              <li>{isIt ? "Diritto di opposizione al trattamento" : "Right to object to processing"}</li>
              <li>{isIt ? "Diritto di revocare il consenso prestato" : "Right to withdraw consent"}</li>
            </ul>
            <p className="mb-8">
              {isIt
                ? "L'interessato ha inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali."
                : "The data subject also has the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "9. Modalità di esercizio dei diritti" : "9. How to exercise your rights"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali, è possibile contattare il Titolare del trattamento al seguente indirizzo email:"
                : "To exercise your rights or request information about the processing of your personal data, you can contact the Data Controller at the following email address:"}
            </p>
            <p className="mb-8">
              <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline text-lg font-semibold">info@osgdigitaleconomy.com</a>
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "10. Aggiornamenti della presente Privacy Policy" : "10. Updates to this Privacy Policy"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "La presente Privacy Policy può essere soggetta a modifiche o aggiornamenti."
                : "This Privacy Policy may be subject to changes or updates."}
            </p>
            <p className="mb-8">
              {isIt
                ? "Eventuali variazioni saranno pubblicate su questa pagina e avranno effetto dal momento della loro pubblicazione."
                : "Any changes will be published on this page and will take effect from the date of publication."}
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
