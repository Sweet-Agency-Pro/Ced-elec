import { MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import MapEmbed from "@/components/ui/MapEmbed";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { CITIES } from "@/lib/constants";

export default function ZoneSection() {
  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionTitle
            title="Notre zone d'intervention"
            subtitle="Nous intervenons à Strasbourg et dans tout le Bas-Rhin"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal>
            <MapEmbed />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-gray-text mb-6 leading-relaxed">
                Basés en Alsace, nous intervenons dans un large rayon autour de
                Strasbourg pour tous vos travaux d&apos;électricité. Que vous
                soyez un particulier ou un professionnel, nous nous déplaçons
                chez vous.
              </p>
              <ul className="space-y-3 mb-8">
                {CITIES.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal shrink-0" />
                    <span className="text-navy font-medium">{city}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-gray-text">
                  <MapPin className="w-4 h-4 text-teal shrink-0" />
                  <span>+ communes environnantes</span>
                </li>
              </ul>
              <Button href="/contact">
                Contactez-nous pour vérifier
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
