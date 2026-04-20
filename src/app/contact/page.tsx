import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import MapEmbed from "@/components/ui/MapEmbed";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Ced'elec pour un devis gratuit. Électricien en Alsace, Strasbourg et environs. Appelez le 07 60 35 44 75.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/50 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">
              Accueil
            </a>{" "}
            &gt; Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Demandez votre devis gratuit ou posez-nous vos questions
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Nos coordonnées
                </h2>

                <div className="bg-white rounded-xl border border-gray-border p-6 space-y-4">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 text-navy hover:text-teal transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-text">Téléphone</p>
                      <p className="font-semibold">{CONTACT.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-navy hover:text-teal transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-text">Email</p>
                      <p className="font-semibold">{CONTACT.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-text">Zone</p>
                      <p className="font-semibold text-navy">{CONTACT.zone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-text">Horaires</p>
                      <p className="font-semibold text-navy">{CONTACT.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Urgency card */}
                <div className="bg-teal/10 border border-teal/30 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-navy mb-1">Urgence ?</h3>
                      <p className="text-sm text-gray-text mb-4">
                        Pour toute urgence électrique, appelez-nous directement
                        pour une intervention rapide.
                      </p>
                      <a
                        href={CONTACT.phoneHref}
                        className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-0">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
