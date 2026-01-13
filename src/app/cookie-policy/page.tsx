import { COLORS } from "@/lib/constants";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Cookie Policy | Outsourcing Group",
  description: "Informativa sull'uso dei cookie sul sito di Outsourcing Group SRL in conformità al GDPR.",
  alternates: {
    canonical: "https://www.outsourcinggroup.it/cookie-policy",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Cookie Policy", url: "/cookie-policy" },
]);

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none" style={{ color: COLORS.TEXT }}>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              1. Titolare del trattamento
            </h2>
            <p className="mb-4">
              Ai sensi del Regolamento UE 2016/679 (GDPR), il Titolare del trattamento dei dati è:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-2">Sede legale: Piazza Giacomo Zanellato, 13 – 35127 Padova (PD)</p>
              <p className="mb-2">P. IVA / Codice Fiscale: IT03475900282</p>
              <p className="mb-0">Email di contatto privacy: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              2. Introduzione sull'uso dei cookie
            </h2>
            <p className="mb-4">
              Il sito web di OUTSOURCING GROUP srl utilizza cookie e tecnologie simili per garantire il corretto funzionamento del sito e migliorare l'esperienza di navigazione degli utenti.
            </p>
            <p className="mb-4">
              I cookie possono essere utilizzati per memorizzare preferenze, analizzare il traffico del sito e comprendere come gli utenti interagiscono con i contenuti. Alcuni cookie possono essere installati da soggetti terzi, come fornitori di servizi di analisi.
            </p>
            <p className="mb-8">
              La presente Cookie Policy fornisce informazioni dettagliate sull'uso dei cookie e sulle modalità con cui l'utente può gestire o revocare il proprio consenso.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              3. Categorie di cookie utilizzati
            </h2>
            <p className="mb-6">I cookie utilizzati su questo sito sono classificati nelle seguenti categorie:</p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              A. Cookie necessari
            </h3>
            <p className="mb-8">
              Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Vengono generalmente impostati in risposta ad azioni effettuate dall'utente, come la compilazione di moduli o la gestione delle preferenze di consenso.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              B. Cookie di preferenza
            </h3>
            <p className="mb-8">
              Consentono al sito di memorizzare informazioni che influenzano il comportamento o l'aspetto del sito, come la lingua preferita o altre impostazioni personalizzate.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              C. Cookie statistici
            </h3>
            <p className="mb-4">
              Raccolgono informazioni in forma aggregata e anonima sull'utilizzo del sito web, con l'obiettivo di migliorarne prestazioni, contenuti e usabilità.
            </p>
            <p className="mb-8">
              Il sito utilizza <strong>Google Analytics</strong>, servizio che potrebbe comportare il trasferimento di dati al di fuori dell'Unione Europea.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              D. Cookie di marketing
            </h3>
            <p className="mb-8">
              Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web, con l'obiettivo di mostrare contenuti o comunicazioni potenzialmente rilevanti per l'utente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              4. Base giuridica del trattamento
            </h2>
            <p className="mb-4">
              La base giuridica per l'utilizzo dei <strong>cookie necessari</strong> è l'interesse legittimo del Titolare al corretto funzionamento del sito web.
            </p>
            <p className="mb-8">
              Per l'utilizzo dei <strong>cookie di preferenza, statistici e marketing</strong>, la base giuridica del trattamento è il <strong>consenso esplicito dell'utente</strong>, espresso tramite il banner di gestione dei cookie al primo accesso al sito.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              5. Modalità di gestione e revoca del consenso
            </h2>
            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li>
                L'utente può in qualsiasi momento modificare o revocare il consenso ai cookie non necessari tramite il banner di gestione dei cookie presente sul sito o tramite l'apposito link sempre accessibile.
              </li>
              <li>
                È inoltre possibile gestire o eliminare i cookie direttamente dalle impostazioni del proprio browser, facendo riferimento alle opzioni di privacy e sicurezza del software utilizzato.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              6. Trasferimenti extra UE
            </h2>
            <p className="mb-4">
              Utilizzando servizi di terze parti come Google Analytics, alcuni dati potrebbero essere trasferiti verso Paesi non appartenenti allo Spazio Economico Europeo.
            </p>
            <p className="mb-8">
              In tali casi, il trattamento avviene nel rispetto delle garanzie previste dal GDPR, incluse le clausole contrattuali standard adottate dalla Commissione Europea.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              7. Diritti dell'interessato
            </h2>
            <p className="mb-4">
              Ai sensi degli articoli 15 e seguenti del GDPR, l'interessato ha il diritto di:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>accedere ai propri dati personali</li>
              <li>richiederne la rettifica o la cancellazione</li>
              <li>opporsi al trattamento o richiederne la limitazione</li>
              <li>ricevere i propri dati in formato strutturato (diritto alla portabilità)</li>
              <li>proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.garanteprivacy.it</a>)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              8. Contatti per l'esercizio dei diritti
            </h2>
            <p className="mb-4">
              Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali, l'interessato può contattare il Titolare del trattamento ai seguenti recapiti:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-0">Email: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>
            <p className="mb-8">
              Il Titolare fornirà riscontro entro i termini previsti dalla normativa vigente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              9. Cookie Declaration di Cookiebot
            </h2>
            <p className="mb-8">
              In questa sezione è disponibile la dichiarazione dettagliata dei cookie utilizzati sul sito, generata e aggiornata automaticamente tramite Cookiebot.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-sm" style={{ color: COLORS.TEXT }}>
                <strong>Nota:</strong> Qui verrà integrato il widget/tabella di Cookiebot per la dichiarazione dettagliata dei cookie utilizzati sul sito.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
