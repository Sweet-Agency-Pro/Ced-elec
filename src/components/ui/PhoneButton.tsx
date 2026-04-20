"use client";

import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function PhoneButton() {
  return (
    <a
      href={CONTACT.phoneHref}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-teal text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-dark transition-colors animate-pulse"
      aria-label="Appeler Ced'elec"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
