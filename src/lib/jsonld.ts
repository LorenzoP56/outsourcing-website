// JSON-LD Schema utilities per SEO

const baseUrl = "https://osgdigitaleconomy.com";

// Organization Schema - da usare in tutte le pagine
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Outsourcing Group SRL",
  legalName: "Outsourcing Group SRL",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  foundingDate: "1999",
  vatID: "IT03475900282",
  email: "info@osgdigitaleconomy.com",
  telephone: "+39-049-870-1855",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Giacomo Zanellato, 13",
    addressLocality: "Padova",
    postalCode: "35127",
    addressRegion: "PD",
    addressCountry: "IT",
  },
  areaServed: {
    "@type": "Country",
    name: "Italy",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "UNI EN ISO 9001:2015 - Sistema di Gestione per la Qualità",
    identifier: "0536.2026",
    recognizedBy: {
      "@type": "Organization",
      name: "IMQ S.p.A.",
      url: "https://www.imq.it",
    },
  },
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "Outsourcing Group SRL",
  image: `${baseUrl}/logo.png`,
  url: baseUrl,
  telephone: "+39-049-870-1855",
  email: "info@osgdigitaleconomy.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Giacomo Zanellato, 13",
    addressLocality: "Padova",
    postalCode: "35127",
    addressRegion: "PD",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.4064",
    longitude: "11.8768",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "Outsourcing Group",
  publisher: {
    "@id": `${baseUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Service Schema Generator
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    url: `${baseUrl}/servizi/${service.slug}`,
  };
}

// Author Schema - Redazione Outsourcing Group
export const authorPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#author-redazione`,
  name: "Redazione Outsourcing Group",
  url: `${baseUrl}/chi-siamo`,
  parentOrganization: {
    "@id": `${baseUrl}/#organization`,
  },
};

// Article Schema Generator (per blog posts)
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
  category?: string;
  locale?: string;
  wordCount?: number;
}) {
  const imageUrl = article.image || `${baseUrl}/logo.png`;
  const inLanguage = article.locale === 'en' ? 'en' : 'it';

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    inLanguage,
    datePublished: article.date,
    dateModified: article.date,
    ...(article.wordCount && { wordCount: article.wordCount }),
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#author-redazione`,
      name: "Redazione Outsourcing Group",
    },
    publisher: {
      "@type": "Organization",
      name: "Outsourcing Group SRL",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${article.slug}`,
    },
    ...(article.category && {
      articleSection: article.category,
    }),
  };
}

// FAQPage Schema Generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Helper per inserire JSON-LD nella pagina
export function jsonLdScript(schema: object) {
  return {
    __html: JSON.stringify(schema),
  };
}
