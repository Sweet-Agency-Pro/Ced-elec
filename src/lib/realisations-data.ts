export interface Realisation {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

export const realisations: Realisation[] = [
  {
    slug: "renovation-appartement-strasbourg",
    title: "Rénovation complète appartement",
    category: "Rénovation",
    location: "Strasbourg",
    description:
      "Refonte totale de l'installation électrique d'un appartement de 80m². Nouveau tableau, câblage complet et éclairage LED.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=450&fit=crop",
  },
  {
    slug: "tableau-electrique-obernai",
    title: "Installation tableau électrique neuf",
    category: "Installation",
    location: "Obernai",
    description:
      "Installation d'un tableau électrique aux normes dans une maison individuelle neuve avec 12 circuits.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=450&fit=crop",
  },
  {
    slug: "mise-aux-normes-studio-strasbourg",
    title: "Mise aux normes studio",
    category: "Mise aux normes",
    location: "Strasbourg",
    description:
      "Mise en conformité NF C 15-100 d'un studio pour location. Travail méticuleux dans un espace déjà rénové.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=450&fit=crop",
  },
  {
    slug: "installation-spa-marlenheim",
    title: "Installation électrique spa",
    category: "Installation spécialisée",
    location: "Marlenheim",
    description:
      "Raccordement électrique complet pour l'installation d'un spa. Circuit dédié et mise en sécurité.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=450&fit=crop",
  },
  {
    slug: "domotique-maison-geispolsheim",
    title: "Domotique maison individuelle",
    category: "Domotique",
    location: "Geispolsheim",
    description:
      "Installation complète de volets roulants électriques et éclairage connecté pilotable par smartphone.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=450&fit=crop",
  },
  {
    slug: "renovation-cuisine-strasbourg",
    title: "Rénovation électrique cuisine",
    category: "Cuisine & SDB",
    location: "Strasbourg",
    description:
      "Création de circuits spécialisés et installation de spots encastrés dans une cuisine entièrement rénovée.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=450&fit=crop",
  },
  {
    slug: "depannage-marckolsheim",
    title: "Dépannage panne générale",
    category: "Dépannage",
    location: "Marckolsheim",
    description:
      "Diagnostic et réparation d'une panne générale causée par un court-circuit. Intervention rapide le jour même.",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=600&h=450&fit=crop",
  },
  {
    slug: "extension-reseau-obernai",
    title: "Extension réseau électrique",
    category: "Installation",
    location: "Obernai",
    description:
      "Extension du réseau électrique pour une annexe de maison. Nouveau tableau divisionnaire et câblage.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop",
  },
];
