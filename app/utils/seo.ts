export const SITE_URL = "https://rpldigitalsolutions.com";
export const SITE_NAME = "RPL Digital Solutions";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
}

export function getSeoMeta({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  keywords = "software house bandar lampung, it consultant lampung, jasa pembuatan website, aplikasi android, iot telemetry, penetration testing, rekayasa perangkat lunak, web development lampung",
  type = "website",
}: SeoOptions) {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${cleanPath}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "theme-color", content: "#000000" },
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: fullTitle },
    { property: "og:locale", content: "id_ID" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: fullTitle },
  ];
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RPL Digital Solutions",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/logo.png`,
    "description": "Software House & IT Consultant terpercaya di Bandar Lampung. Melayani pembuatan website modern, aplikasi Android native, sistem telemetri IoT, dan audit keamanan siber.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandar Lampung",
      "addressRegion": "Lampung",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-5.450000",
      "longitude": "105.266667"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://github.com/rpldigitalsolutions"
    ]
  };
}
