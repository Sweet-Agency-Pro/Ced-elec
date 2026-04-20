import {
  Home,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Smartphone,
  ChefHat,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "installation-electrique",
    title: "Installation électrique",
    shortDescription:
      "Installation complète pour vos projets neufs ou d'aménagement.",
    description:
      "Que ce soit pour une construction neuve ou un aménagement, nous réalisons l'ensemble de votre installation électrique dans le respect des normes en vigueur. Du tableau électrique aux points lumineux, chaque détail est pensé pour votre confort et votre sécurité.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    features: [
      "Tableau électrique",
      "Câblage complet",
      "Prises et interrupteurs",
      "Éclairage intérieur et extérieur",
      "Raccordement au réseau",
    ],
  },
  {
    slug: "renovation-electrique",
    title: "Rénovation électrique",
    shortDescription:
      "Remise à neuf de vos installations existantes.",
    description:
      "Votre installation électrique est vieillissante ? Nous prenons en charge la rénovation complète ou partielle de votre réseau électrique. Un travail propre et minutieux, adapté à votre habitat, sans mauvaise surprise.",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    features: [
      "Remplacement du réseau existant",
      "Modernisation du tableau",
      "Adaptation aux nouveaux usages",
      "Redistribution des circuits",
      "Travail propre et soigné",
    ],
  },
  {
    slug: "mise-aux-normes",
    title: "Mise aux normes NF C 15-100",
    shortDescription:
      "Mise en conformité de votre installation électrique.",
    description:
      "La mise aux normes de votre installation électrique est essentielle pour votre sécurité et obligatoire en cas de vente ou location. Nous réalisons le diagnostic, les travaux de mise en conformité et vous accompagnons dans vos démarches Consuel.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop",
    features: [
      "Diagnostic de l'installation",
      "Mise en conformité NF C 15-100",
      "Certificat Consuel",
      "Accompagnement dans les démarches",
      "Rapport détaillé",
    ],
  },
  {
    slug: "depannage-electrique",
    title: "Dépannage électrique",
    shortDescription:
      "Intervention rapide pour tous vos problèmes électriques.",
    description:
      "Panne de courant, court-circuit, disjoncteur qui saute ? Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes électriques. Réactivité et efficacité sont nos maîtres mots.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop",
    features: [
      "Panne de courant",
      "Court-circuit",
      "Disjoncteur défaillant",
      "Intervention rapide",
      "Diagnostic précis",
    ],
  },
  {
    slug: "domotique",
    title: "Domotique",
    shortDescription:
      "Solutions connectées pour un habitat intelligent.",
    description:
      "Transformez votre habitat grâce à la domotique. Volets roulants électriques, éclairage connecté, programmation horaire… Nous installons et configurons vos équipements pour un quotidien plus confortable.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    features: [
      "Volets roulants électriques",
      "Éclairage connecté",
      "Programmation horaire",
      "Pilotage par smartphone",
      "Conseils personnalisés",
    ],
  },
  {
    slug: "cuisine-salle-de-bain",
    title: "Cuisine & Salle de bain",
    shortDescription:
      "Installations spécifiques pour vos pièces d'eau.",
    description:
      "Les pièces d'eau nécessitent des installations électriques spécifiques et sécurisées. Nous réalisons le câblage, les circuits spécialisés et l'éclairage de vos cuisines et salles de bain dans le respect strict des normes.",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    features: [
      "Circuits spécialisés",
      "Norme NF C 15-100 pièces d'eau",
      "Spots encastrés",
      "Prises sécurisées",
      "Éclairage fonctionnel",
    ],
  },
];
