import { COLORS } from "@/lib/constants";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Privacy Policy | Outsourcing Group",
    description: "Informativa sulla privacy e trattamento dei dati personali di Outsourcing Group SRL in conformità al GDPR.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy-policy`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/privacy-policy`])),
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
              La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) e descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di <strong>OUTSOURCING GROUP srl</strong> e che compilano i moduli di contatto presenti sul sito.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              1. Titolare del trattamento
            </h2>
            <p className="mb-4">Il Titolare del trattamento dei dati è:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-2">Forma giuridica: Società a responsabilità limitata</p>
              <p className="mb-2">Sede legale: Piazza Giacomo Zanellato, 13 – 35127 Padova (PD)</p>
              <p className="mb-2">P. IVA / Codice Fiscale: IT03475900282</p>
              <p className="mb-0">Email di contatto: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              2. Tipologie di dati trattati
            </h2>
            <p className="mb-4">I dati personali raccolti tramite il sito web includono:</p>
            <ul className="list-disc pl-6 mb-8">
              <li>Nome</li>
              <li>Cognome</li>
              <li>Indirizzo email</li>
            </ul>
            <p className="mb-8">
              Tali dati sono forniti volontariamente dall'utente attraverso la compilazione dei form presenti sul sito.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              3. Finalità del trattamento e basi giuridiche
            </h2>
            <p className="mb-4">I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Gestione delle richieste inviate tramite form di contatto</li>
              <li>Gestione dei lead generati dal sito web</li>
              <li>Ricontatto dell'utente a seguito della richiesta inviata</li>
            </ul>
            <p className="mb-8">
              La base giuridica del trattamento è il <strong>consenso dell'interessato</strong>, espresso mediante l'invio volontario dei propri dati tramite i form presenti sul sito (art. 6, par. 1, lett. a GDPR).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              4. Modalità di trattamento e conservazione dei dati
            </h2>
            <p className="mb-4">
              Il trattamento dei dati avviene mediante strumenti informatici e telematici, nel rispetto dei principi di liceità, correttezza, trasparenza e minimizzazione previsti dal GDPR.
            </p>
            <p className="mb-4">
              Sono adottate misure di sicurezza tecniche e organizzative adeguate a prevenire accessi non autorizzati, divulgazione, modifica o distruzione dei dati.
            </p>
            <p className="mb-8">
              I dati personali saranno conservati per il tempo strettamente necessario a gestire la richiesta dell'utente e, successivamente, per il periodo necessario a ottemperare agli obblighi di legge o per finalità organizzative interne.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              5. Accesso ai dati da parte di terzi
            </h2>
            <p className="mb-4">
              I dati personali potranno essere trattati da soggetti terzi che operano per conto del Titolare, in qualità di Responsabili del trattamento, quali ad esempio:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornitori di servizi di hosting e infrastruttura web</li>
              <li>Fornitori di servizi email</li>
              <li>Fornitori di servizi di analisi del traffico web</li>
            </ul>
            <p className="mb-8">
              Tali soggetti trattano i dati esclusivamente secondo le istruzioni del Titolare e nel rispetto della normativa vigente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              6. Strumenti di analisi e servizi esterni
            </h2>
            <p className="mb-4">
              Il sito utilizza <strong>Google Analytics</strong>, un servizio di analisi del traffico web fornito da Google LLC, che raccoglie dati in forma aggregata per analizzare l'utilizzo del sito da parte degli utenti.
            </p>
            <p className="mb-8">
              I dati raccolti da Google Analytics possono essere trasferiti su server situati al di fuori dell'Unione Europea. Google aderisce a meccanismi di garanzia riconosciuti dal GDPR per il trasferimento dei dati verso Paesi terzi.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              7. Trasferimento dei dati extra UE
            </h2>
            <p className="mb-4">
              Alcuni dati potrebbero essere trasferiti verso Paesi al di fuori dell'Unione Europea, esclusivamente nell'ambito dell'utilizzo di servizi di terze parti (es. Google Analytics).
            </p>
            <p className="mb-8">
              In tali casi, il trasferimento avviene nel rispetto degli articoli 44 e seguenti del GDPR, mediante l'adozione di garanzie adeguate.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              8. Diritti dell'interessato
            </h2>
            <p className="mb-4">
              L'utente, in qualità di interessato, può esercitare in qualsiasi momento i diritti previsti dagli articoli 15–22 del GDPR, tra cui:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Diritto di accesso ai dati personali</li>
              <li>Diritto di rettifica dei dati inesatti</li>
              <li>Diritto alla cancellazione (diritto all'oblio)</li>
              <li>Diritto alla limitazione del trattamento</li>
              <li>Diritto alla portabilità dei dati</li>
              <li>Diritto di opposizione al trattamento</li>
              <li>Diritto di revocare il consenso prestato</li>
            </ul>
            <p className="mb-8">
              L'interessato ha inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              9. Modalità di esercizio dei diritti
            </h2>
            <p className="mb-4">
              Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali, è possibile contattare il Titolare del trattamento al seguente indirizzo email:
            </p>
            <p className="mb-8">
              <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline text-lg font-semibold">info@osgdigitaleconomy.com</a>
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              10. Aggiornamenti della presente Privacy Policy
            </h2>
            <p className="mb-4">
              La presente Privacy Policy può essere soggetta a modifiche o aggiornamenti.
            </p>
            <p className="mb-8">
              Eventuali variazioni saranno pubblicate su questa pagina e avranno effetto dal momento della loro pubblicazione.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
