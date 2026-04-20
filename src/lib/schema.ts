import { CONTACT, SITE_NAME, SITE_DESCRIPTION, SITE_URL, GOOGLE_RATING, CITIES } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+33760354475",
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Alsace",
      addressLocality: "Strasbourg",
      addressCountry: "FR",
    },
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING.score,
      reviewCount: GOOGLE_RATING.count,
      bestRating: 5,
    },
    priceRange: "€€",
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/logo.png`,
  };
}
