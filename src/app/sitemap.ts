import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cedelec.fr";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/realisations`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/avis`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), priority: 0.3 },
  ];
}
