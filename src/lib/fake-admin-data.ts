import type { Review } from "./reviews";
import { services, type Service } from "./services-data";
import { realisations, type Realisation } from "./realisations-data";

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export const fakeContacts: ContactRequest[] = [
  {
    id: "1",
    name: "Pierre Martin",
    email: "pierre.martin@email.fr",
    phone: "06 12 34 56 78",
    subject: "Demande de devis",
    message:
      "Bonjour, nous venons d'acheter une maison à Obernai et l'installation électrique date des années 70. Nous souhaiterions un devis pour une rénovation complète. La maison fait environ 120m². Merci d'avance.",
    date: "2026-04-18T10:30:00",
    read: true,
  },
  {
    id: "2",
    name: "Marie Dupont",
    email: "m.dupont@gmail.com",
    phone: "07 98 76 54 32",
    subject: "Dépannage",
    message:
      "Bonjour, mon disjoncteur saute régulièrement depuis hier soir, surtout quand j'allume le four. Pourriez-vous intervenir rapidement ? Je suis à Strasbourg centre. Merci.",
    date: "2026-04-19T14:15:00",
    read: false,
  },
  {
    id: "3",
    name: "Jean-Luc Weber",
    email: "jl.weber@outlook.fr",
    phone: "06 55 44 33 22",
    subject: "Demande de devis",
    message:
      "Bonjour M. Dos Santos, je souhaiterais installer des volets roulants électriques dans toute ma maison (6 fenêtres + 1 baie vitrée) à Geispolsheim. Est-ce que vous faites ce type d'installation ? Quel serait le budget approximatif ?",
    date: "2026-04-19T16:42:00",
    read: false,
  },
  {
    id: "4",
    name: "Sophie Keller",
    email: "sophie.k@free.fr",
    phone: "",
    subject: "Question",
    message:
      "Bonjour, nous rénovons notre salle de bain et notre plombier nous a dit qu'il fallait revoir l'électricité pour la mise aux normes. Pouvez-vous passer faire un diagnostic ? Nous sommes à Marlenheim.",
    date: "2026-04-20T09:05:00",
    read: false,
  },
  {
    id: "5",
    name: "Thomas Braun",
    email: "t.braun@entreprise.fr",
    phone: "06 11 22 33 44",
    subject: "Demande de devis",
    message:
      "Bonjour, je suis propriétaire d'un studio à Strasbourg que je souhaite mettre en location. Le diagnostic électrique a révélé plusieurs non-conformités. J'aurais besoin d'un devis pour la mise aux normes complète.",
    date: "2026-04-20T11:30:00",
    read: false,
  },
];

export function getFakeServices(): Service[] {
  return services;
}

export function getFakeRealisations(): Realisation[] {
  return realisations;
}

export function getFakeContacts(): ContactRequest[] {
  return fakeContacts;
}
