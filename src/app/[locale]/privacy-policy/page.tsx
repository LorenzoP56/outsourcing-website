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
      languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/privacy-policy`])),
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
              <p className="mb-2">{isIt ? "Sede legale: Piazza Giacomo Zanellato, 13 – 35127 Padova (PD)" : "Registered office: Piazza Giacomo Zanellato, 13 – 35127 Padova (PD), Italy"}</p>
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
            <p className="mb-4">{isIt ? "I dati personali sono trattati per le seguenti finalità:" : "Personal data is processed for the following purposes:"}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{isIt ? "Gestione delle richieste inviate tramite form di contatto" : "Handling requests sent via the contact form"}</li>
              <li>{isIt ? "Gestione dei lead generati dal sito web" : "Managing leads generated from the website"}</li>
              <li>{isIt ? "Ricontatto dell'utente a seguito della richiesta inviata" : "Following up with the user after their request"}</li>
            </ul>
            <p className="mb-8">
              {isIt
                ? "La base giuridica del trattamento è il consenso dell'interessato, espresso mediante l'invio volontario dei propri dati tramite i form presenti sul sito (art. 6, par. 1, lett. a GDPR)."
                : "The legal basis for processing is the consent of the data subject, expressed by voluntarily submitting their data through the forms on the site (Art. 6(1)(a) GDPR)."}
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
            <p className="mb-8">
              {isIt
                ? "I dati personali raccolti tramite i form di contatto saranno conservati per un periodo massimo di 24 mesi dalla data di raccolta, salvo diversi obblighi di legge. Trascorso tale periodo, i dati verranno cancellati o resi anonimi."
                : "Personal data collected through the contact forms will be retained for a maximum period of 24 months from the date of collection, unless otherwise required by law. After this period, data will be deleted or anonymised."}
            </p>

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
                ? "Il sito utilizza Google Analytics, un servizio di analisi del traffico web fornito da Google LLC, che raccoglie dati in forma aggregata per analizzare l'utilizzo del sito da parte degli utenti."
                : "The site uses Google Analytics, a web traffic analysis service provided by Google LLC, which collects data in aggregate form to analyse how users interact with the site."}
            </p>
            <p className="mb-8">
              {isIt
                ? "I dati raccolti da Google Analytics possono essere trasferiti su server situati al di fuori dell'Unione Europea. Google aderisce a meccanismi di garanzia riconosciuti dal GDPR per il trasferimento dei dati verso Paesi terzi."
                : "Data collected by Google Analytics may be transferred to servers located outside the European Union. Google adheres to GDPR-recognised safeguard mechanisms for data transfers to third countries."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "7. Trasferimento dei dati extra UE" : "7. Data transfers outside the EU"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Alcuni dati potrebbero essere trasferiti verso Paesi al di fuori dell'Unione Europea, esclusivamente nell'ambito dell'utilizzo di servizi di terze parti (es. Google Analytics, Brevo)."
                : "Some data may be transferred to countries outside the European Union, solely in connection with the use of third-party services (e.g. Google Analytics, Brevo)."}
            </p>
            <p className="mb-8">
              {isIt
                ? "In tali casi, il trasferimento avviene nel rispetto degli articoli 44 e seguenti del GDPR, mediante l'adozione di garanzie adeguate."
                : "In such cases, the transfer is carried out in compliance with Articles 44 et seq. of the GDPR, through the adoption of appropriate safeguards."}
            </p>

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
