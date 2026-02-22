export const COLORS = {
  PRIMARY: "linear-gradient(to right, #208AE4, #1C2776)",
  SECONDARY: "#000000",
  TERTIARY: "#FFFFFF",
  TEXT:"#2B2D2F",
  TEXT_TITLE:"#010310",
  TEXT_WHITE:"#FFFFFF",
  BLUE: " #208AE4",
};

// SERVICES: structural data only. All text content comes from translations (servizi.json).
// - slug: URL path segment
// - image: listing page image
// - headerImage: detail page hero background
// - grid: layout mode for functionality section
// - functionality[]: icon paths + structure (items with { icon, title } use title+description from translations; items with { icon } use description only)
// - advantages[]: structure (items with { title } use title+description from translations; items without use description only)
// - detailedContent: image path + paragraph count

export const SERVICES = [
  {
    slug: "assistenza-dedicata",
    image: "/website_images/Servizi/Pagina Generale/servizi-assistenza-dedicata-utenti-outsourcing.webp",
    headerImage: "website_images/Servizi/AssistenzaDedUtenti/assistenza-dedicata-utenti-outsourcing",
    grid: false,
    functionality: [
      { icon: "/website_images/Servizi/detailed/assistenza/funzionalita/1.png", title: "" },
      { icon: "/website_images/Servizi/detailed/assistenza/funzionalita/2.png", title: "" },
      { icon: "/website_images/Servizi/detailed/assistenza/funzionalita/3.png", title: "" },
      { icon: "/website_images/Servizi/detailed/assistenza/funzionalita/4.png", title: "" },
      { icon: "/website_images/Servizi/detailed/assistenza/funzionalita/5.png", title: "" },
    ],
    advantages: [
      { title: "" },
      { title: "" },
    ],
    detailedContent: {
      image: "/website_images/Servizi/AssistenzaDedUtenti/supporto-utenti-servizi-digitali-outsourcing.webp",
      paragraphs: ["", "", ""],
    },
  },
  {
    slug: "contact-center",
    image: "/website_images/Servizi/Pagina Generale/servizi-contact-center-outsourcing-multicanale.webp",
    headerImage: "website_images/Servizi/ContactCenter/contact-center-operatrice-gestionale",
    grid: false,
    functionality: [
      { icon: "/website_images/Servizi/detailed/contactCenter/funzionalita/1.png", title: "" },
      { icon: "/website_images/Servizi/detailed/contactCenter/funzionalita/2.png", title: "" },
      { icon: "/website_images/Servizi/detailed/contactCenter/funzionalita/3.png", title: "" },
      { icon: "/website_images/Servizi/detailed/contactCenter/funzionalita/4.png", title: "" },
      { icon: "/website_images/Servizi/detailed/contactCenter/funzionalita/5.png", title: "" },
    ],
    advantages: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    detailedContent: {
      image: "/website_images/Servizi/ContactCenter/contact-center-sezione-operatrice-outsourcing-group.webp",
      paragraphs: ["", "", ""],
    },
  },
  {
    slug: "outsourcing-back-office-digitale",
    image: "/website_images/Servizi/Pagina Generale/servizi-digital-back-office-outsourcing.webp",
    headerImage: "website_images/Servizi/DigitalBackOffice/digital-back-office-banner-gestione-processi",
    grid: true,
    functionality: [
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/1.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/2.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/3.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/4.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/5.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/6.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/7.png" },
      { icon: "/website_images/Servizi/detailed/digitalBank/funzionalita/8.png" },
    ],
    advantages: [
      {},
      {},
      {},
      {},
      {},
    ],
    detailedContent: {
      image: "/website_images/Servizi/DigitalBackOffice/digital-back-office-operatrice-outsourcing-group.webp",
      paragraphs: ["", "", "", ""],
    },
  },
  {
    slug: "gestione-anagrafiche-clienti-outsourcing",
    image: "/website_images/Servizi/Pagina Generale/servizi-gestione-operativa-dati-cliente-outsourcing.webp",
    headerImage: "website_images/Servizi/GestOperativaDatiCliente/gestione-operativa-dati-cliente-outsourcing",
    grid: false,
    functionality: [
      { icon: "/website_images/Servizi/detailed/gestioneAmministrativa/funzionalita/1.png", title: "" },
      { icon: "/website_images/Servizi/detailed/gestioneAmministrativa/funzionalita/2.png", title: "" },
      { icon: "/website_images/Servizi/detailed/gestioneAmministrativa/funzionalita/3.png", title: "" },
      { icon: "/website_images/Servizi/detailed/gestioneAmministrativa/funzionalita/4.png", title: "" },
      { icon: "/website_images/Servizi/detailed/gestioneAmministrativa/funzionalita/5.png", title: "" },
    ],
    advantages: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    detailedContent: {
      image: "/website_images/Servizi/GestOperativaDatiCliente/supporto-operativo-gestione-dati-cliente-outsourcing.webp",
      paragraphs: ["", "", ""],
    },
  },
  {
    slug: "data-management",
    image: "/website_images/Servizi/Pagina Generale/servizi-data-management-outsourcing.webp",
    headerImage: "website_images/Servizi/DataManagement/data-management-gestione-dati-aziendali-outsourcing",
    grid: true,
    functionality: [
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/1.png" },
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/2.png" },
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/3.png" },
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/4.png" },
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/5.png" },
      { icon: "/website_images/Servizi/detailed/dataManagement/funzionalita/6.png" },
    ],
    advantages: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    detailedContent: {
      image: "/website_images/Servizi/DataManagement/data management for your data - outsourcing.webp",
      paragraphs: ["", "", ""],
    },
  },
  {
    slug: "training-aziendali",
    image: "/website_images/Servizi/Pagina Generale/servizi-training-aziendali-formazione-online-outsourcing.webp",
    headerImage: "website_images/Servizi/TrainingAziendali/formazione-aziendale-remota-outsourcing",
    grid: true,
    functionality: [
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/1.png" },
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/2.png" },
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/3.png" },
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/4.png" },
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/5.png" },
      { icon: "/website_images/Servizi/detailed/trainingAziendali/funzionalita/6.png" },
    ],
    advantages: [
      { title: "" },
      { title: "" },
    ],
    detailedContent: {
      image: "/website_images/Servizi/DataManagement/Training aziendale in outsourcing.webp",
      paragraphs: ["", "", ""],
    },
  },
];
