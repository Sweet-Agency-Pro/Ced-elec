export const SITE_NAME = "Ced'elec";
export const SITE_DESCRIPTION =
  "Ced'elec, votre électricien de confiance en Alsace. Installation, rénovation, mise aux normes électriques à Strasbourg et environs. Noté 5/5 sur Google.";
export const SITE_URL = "https://cedelec.fr";

export const CONTACT = {
  phone: "07 60 35 44 75",
  phoneHref: "tel:+33760354475",
  email: "cedricelec@gmail.com",
  zone: "Alsace - Strasbourg et environs",
  hours: "Lun-Ven : 8h-18h",
} as const;

export const CITIES = [
  "Strasbourg",
  "Obernai",
  "Marlenheim",
  "Geispolsheim",
  "Marckolsheim",
] as const;

export const GOOGLE_RATING = {
  score: 5,
  count: 42,
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/avis" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;
