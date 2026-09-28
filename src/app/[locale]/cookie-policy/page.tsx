import { COLORS } from "@/lib/constants";
import type { Metadata } from "next";
import { organizationSchema, generateBreadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

import CookieDeclaration from "@/components/sections/Cookie/CookieDeclaration";

const BASE_URL = "https://osgdigitaleconomy.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });

  return {
    title: t('cookie.metaTitle'),
    description: t('cookie.metaDescription'),
    alternates: {
      canonical: `${BASE_URL}/${locale}/cookie-policy`,
      languages: {
        ...Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}/cookie-policy`])),
        'x-default': `${BASE_URL}/it/cookie-policy`,
      },
    },
    openGraph: {
      title: t('cookie.metaTitle'),
      description: t('cookie.metaDescription'),
      url: `${BASE_URL}/${locale}/cookie-policy`,
      siteName: "Outsourcing Group",
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: "website",
    },
  };
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Cookie Policy", url: "/cookie-policy" },
]);

export default async function CookiePolicy({ params }: { params: Promise<{ locale: string }> }) {
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
            Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none" style={{ color: COLORS.TEXT }}>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "1. Titolare del trattamento" : "1. Data Controller"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Ai sensi del Regolamento UE 2016/679 (GDPR), il Titolare del trattamento dei dati è:"
                : "Pursuant to EU Regulation 2016/679 (GDPR), the Data Controller is:"}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-2">{isIt ? "Sede legale: Piazza Giacomo Zanellato, 13 – 35131 Padova (PD)" : "Registered office: Piazza Giacomo Zanellato, 13 – 35131 Padova (PD), Italy"}</p>
              <p className="mb-2">{isIt ? "P. IVA / Codice Fiscale: IT03475900282" : "VAT / Tax Code: IT03475900282"}</p>
              <p className="mb-0">{isIt ? "Email di contatto privacy" : "Privacy contact email"}: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "2. Introduzione sull'uso dei cookie" : "2. Introduction to the use of cookies"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Il sito web di OUTSOURCING GROUP srl utilizza cookie e tecnologie simili per garantire il corretto funzionamento del sito e migliorare l'esperienza di navigazione degli utenti."
                : "The OUTSOURCING GROUP srl website uses cookies and similar technologies to ensure the proper functioning of the site and to improve the browsing experience."}
            </p>
            <p className="mb-4">
              {isIt
                ? "I cookie possono essere utilizzati per memorizzare preferenze, analizzare il traffico del sito e comprendere come gli utenti interagiscono con i contenuti. Alcuni cookie possono essere installati da soggetti terzi, come fornitori di servizi di analisi."
                : "Cookies may be used to store preferences, analyse site traffic and understand how users interact with content. Some cookies may be set by third parties, such as analytics service providers."}
            </p>
            <p className="mb-8">
              {isIt
                ? "La presente Cookie Policy fornisce informazioni dettagliate sull'uso dei cookie e sulle modalità con cui l'utente può gestire o revocare il proprio consenso."
                : "This Cookie Policy provides detailed information on the use of cookies and the ways in which users can manage or withdraw their consent."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "3. Categorie di cookie utilizzati" : "3. Categories of cookies used"}
            </h2>
            <p className="mb-6">{isIt ? "I cookie utilizzati su questo sito sono classificati nelle seguenti categorie:" : "The cookies used on this site are classified into the following categories:"}</p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "A. Cookie necessari" : "A. Necessary cookies"}
            </h3>
            <p className="mb-8">
              {isIt
                ? "Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Vengono generalmente impostati in risposta ad azioni effettuate dall'utente, come la compilazione di moduli o la gestione delle preferenze di consenso."
                : "These cookies are essential for the proper functioning of the website and cannot be disabled in our systems. They are generally set in response to actions taken by the user, such as filling in forms or managing consent preferences."}
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "B. Cookie di preferenza" : "B. Preference cookies"}
            </h3>
            <p className="mb-8">
              {isIt
                ? "Consentono al sito di memorizzare informazioni che influenzano il comportamento o l'aspetto del sito, come la lingua preferita o altre impostazioni personalizzate."
                : "These cookies allow the site to remember information that affects the behaviour or appearance of the site, such as the preferred language or other personalised settings."}
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "C. Cookie statistici" : "C. Statistical cookies"}
            </h3>
            <p className="mb-4">
              {isIt
                ? "Raccolgono informazioni sull'utilizzo del sito web, con l'obiettivo di migliorarne prestazioni, contenuti e usabilità. La raccolta avviene tramite cookie e identificatori online (es. client ID) che consentono a Google di riconoscere il dispositivo dell'utente: i dati trasmessi, quindi, non sono anonimi."
                : "These cookies collect information about the use of the website, with the aim of improving its performance, content and usability. Collection takes place through cookies and online identifiers (e.g. client ID) that allow Google to recognise the user's device: the data transmitted is therefore not anonymous."}
            </p>
            <p className="mb-8">
              {isIt
                ? "Il sito utilizza Google Tag Manager e Google Analytics, servizi che potrebbero comportare il trasferimento di dati al di fuori dell'Unione Europea."
                : "The site uses Google Tag Manager and Google Analytics, services that may involve the transfer of data outside the European Union."}
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "D. Cookie di marketing" : "D. Marketing cookies"}
            </h3>
            <p className="mb-4">
              {isIt
                ? "Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web, con l'obiettivo di mostrare contenuti o comunicazioni potenzialmente rilevanti per l'utente."
                : "These cookies are used to track visitors across websites, with the aim of displaying content or communications that may be relevant to the user."}
            </p>
            <p className="mb-8">
              {isIt
                ? "Nella pagina Contatti è integrata una mappa Google Maps che, al momento del caricamento, imposta cookie propri di Google e comporta la connessione ai server di Google."
                : "The Contact page embeds a Google Maps widget which, once loaded, sets its own Google cookies and connects to Google's servers."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "4. Base giuridica del trattamento" : "4. Legal basis for processing"}
            </h2>
            <p className="mb-4">
              {isIt
                ? <>La base giuridica per l&apos;utilizzo dei <strong>cookie necessari</strong> è l&apos;interesse legittimo del Titolare al corretto funzionamento del sito web.</>
                : <>The legal basis for the use of <strong>necessary cookies</strong> is the legitimate interest of the Data Controller in the proper functioning of the website.</>}
            </p>
            <p className="mb-8">
              {isIt
                ? <>Per l&apos;utilizzo dei <strong>cookie di preferenza, statistici e marketing</strong>, la base giuridica del trattamento è il <strong>consenso esplicito dell&apos;utente</strong>, espresso tramite il banner di gestione dei cookie al primo accesso al sito.</>
                : <>For the use of <strong>preference, statistical and marketing cookies</strong>, the legal basis for processing is the <strong>explicit consent of the user</strong>, expressed through the cookie management banner on first access to the site.</>}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "5. Modalità di gestione e revoca del consenso" : "5. Managing and withdrawing consent"}
            </h2>
            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li>
                {isIt
                  ? "L'utente può in qualsiasi momento modificare o revocare il consenso ai cookie non necessari tramite il banner di gestione dei cookie presente sul sito o tramite l'apposito link sempre accessibile."
                  : "Users can modify or withdraw consent to non-essential cookies at any time through the cookie management banner on the site or through the dedicated link that is always accessible."}
              </li>
              <li>
                {isIt
                  ? "È inoltre possibile gestire o eliminare i cookie direttamente dalle impostazioni del proprio browser, facendo riferimento alle opzioni di privacy e sicurezza del software utilizzato."
                  : "It is also possible to manage or delete cookies directly from your browser settings, by referring to the privacy and security options of your software."}
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "6. Trasferimenti extra UE" : "6. Transfers outside the EU"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "I cookie di terze parti utilizzati sul sito comportano i seguenti trasferimenti di dati e garanzie:"
                : "The third-party cookies used on the site involve the following data transfers and safeguards:"}
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li>
                {isIt
                  ? <><strong>Google</strong> (Google Analytics, Google Tag Manager, Google Maps) – società con sede negli Stati Uniti, aderente al <strong>Data Privacy Framework (DPF) UE-USA</strong>, il meccanismo di adeguatezza riconosciuto dalla Commissione Europea.</>
                  : <><strong>Google</strong> (Google Analytics, Google Tag Manager, Google Maps) – US-based company, adhering to the <strong>EU-U.S. Data Privacy Framework (DPF)</strong>, the adequacy mechanism recognised by the European Commission.</>}
              </li>
              <li>
                {isIt
                  ? "Eventuali altri fornitori terzi operano, ove possibile, con infrastrutture nell'Unione Europea; in caso contrario, il trasferimento avviene sulla base delle Clausole Contrattuali Standard (SCC) adottate dalla Commissione Europea."
                  : "Any other third-party providers operate, where possible, with infrastructure within the European Union; otherwise, the transfer is based on the Standard Contractual Clauses (SCC) adopted by the European Commission."}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "7. Diritti dell'interessato" : "7. Rights of the data subject"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Ai sensi degli articoli 15 e seguenti del GDPR, l'interessato ha il diritto di:"
                : "Under Articles 15 et seq. of the GDPR, the data subject has the right to:"}
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>{isIt ? "accedere ai propri dati personali" : "access their personal data"}</li>
              <li>{isIt ? "richiederne la rettifica o la cancellazione" : "request rectification or erasure"}</li>
              <li>{isIt ? "opporsi al trattamento o richiederne la limitazione" : "object to processing or request its restriction"}</li>
              <li>{isIt ? "ricevere i propri dati in formato strutturato (diritto alla portabilità)" : "receive their data in a structured format (right to portability)"}</li>
              <li>
                {isIt
                  ? <>proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.garanteprivacy.it</a>)</>
                  : <>lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.garanteprivacy.it</a>)</>}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "8. Contatti per l'esercizio dei diritti" : "8. Contact for exercising rights"}
            </h2>
            <p className="mb-4">
              {isIt
                ? "Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali, l'interessato può contattare il Titolare del trattamento ai seguenti recapiti:"
                : "To exercise your rights or request information about the processing of your personal data, you can contact the Data Controller at:"}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>OUTSOURCING GROUP srl</strong></p>
              <p className="mb-0">Email: <a href="mailto:info@osgdigitaleconomy.com" className="text-blue-600 hover:underline">info@osgdigitaleconomy.com</a></p>
            </div>
            <p className="mb-4">
              {isIt
                ? <>In alternativa, l&apos;interessato può rivolgersi direttamente al Responsabile della Protezione dei Dati (DPO), ai recapiti indicati nella <a href={`/${locale}/privacy-policy`} className="text-blue-600 hover:underline">Privacy Policy</a> (email: <a href="mailto:r.castroreale@rcsrl.it" className="text-blue-600 hover:underline">r.castroreale@rcsrl.it</a>).</>
                : <>Alternatively, the data subject may contact the Data Protection Officer (DPO) directly, using the details provided in the <a href={`/${locale}/privacy-policy`} className="text-blue-600 hover:underline">Privacy Policy</a> (email: <a href="mailto:r.castroreale@rcsrl.it" className="text-blue-600 hover:underline">r.castroreale@rcsrl.it</a>).</>}
            </p>
            <p className="mb-8">
              {isIt
                ? "Il Titolare fornirà riscontro entro i termini previsti dalla normativa vigente."
                : "The Data Controller will respond within the timeframes required by applicable law."}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "9. Cookie Declaration" : "9. Cookie Declaration"}
            </h2>
            <p className="mb-8">
              {isIt
                ? "In questa sezione è disponibile la dichiarazione dettagliata dei cookie utilizzati sul sito, generata e aggiornata automaticamente tramite il servizio di gestione del consenso."
                : "This section contains the detailed declaration of cookies used on the site, generated and updated automatically through the consent management service."}
            </p>

            <CookieDeclaration locale={locale} />

            <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: COLORS.TEXT_TITLE }}>
              {isIt ? "Google Maps (pagina Contatti)" : "Google Maps (Contact page)"}
            </h3>
            <p className="mb-4">
              {isIt
                ? "La mappa Google Maps della pagina Contatti resta bloccata finché l'utente non presta il consenso. Per questo motivo i relativi cookie potrebbero non comparire nella dichiarazione automatica qui sopra. Una volta caricata la mappa, Google può impostare sul dominio google.com cookie come i seguenti:"
                : "The Google Maps widget on the Contact page stays blocked until the user gives consent. For this reason, its cookies may not appear in the automatic declaration above. Once the map is loaded, Google may set cookies on the google.com domain such as the following:"}
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left border-collapse text-base">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4">{isIt ? "Nome" : "Name"}</th>
                    <th className="py-2 pr-4">{isIt ? "Fornitore" : "Provider"}</th>
                    <th className="py-2 pr-4">{isIt ? "Finalità" : "Purpose"}</th>
                    <th className="py-2 pr-4">{isIt ? "Durata" : "Duration"}</th>
                    <th className="py-2">{isIt ? "Categoria" : "Category"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">NID</td>
                    <td className="py-2 pr-4">Google LLC (google.com)</td>
                    <td className="py-2 pr-4">{isIt ? "Memorizza preferenze e un identificatore univoco del dispositivo, usato da Google anche per personalizzare gli annunci" : "Stores preferences and a unique device identifier, also used by Google to personalise ads"}</td>
                    <td className="py-2 pr-4">{isIt ? "6 mesi" : "6 months"}</td>
                    <td className="py-2">Marketing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">AEC</td>
                    <td className="py-2 pr-4">Google LLC (google.com)</td>
                    <td className="py-2 pr-4">{isIt ? "Sicurezza: impedisce l'invio di richieste fraudolente" : "Security: prevents fraudulent requests"}</td>
                    <td className="py-2 pr-4">{isIt ? "6 mesi" : "6 months"}</td>
                    <td className="py-2">Marketing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">SOCS</td>
                    <td className="py-2 pr-4">Google LLC (google.com)</td>
                    <td className="py-2 pr-4">{isIt ? "Memorizza le scelte dell'utente sui cookie di Google" : "Stores the user's choices about Google cookies"}</td>
                    <td className="py-2 pr-4">{isIt ? "13 mesi" : "13 months"}</td>
                    <td className="py-2">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-8">
              {isIt
                ? <>L&apos;elenco può variare in base alle scelte tecniche di Google. Per informazioni aggiornate: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">policies.google.com/technologies/cookies</a>.</>
                : <>The list may change depending on Google&apos;s technical choices. For up-to-date information: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">policies.google.com/technologies/cookies</a>.</>}
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
