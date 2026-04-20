import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Nos services d'électricité",
  description:
    "Découvrez nos services : installation, rénovation, mise aux normes, dépannage, domotique et électricité cuisine/salle de bain en Alsace.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/50 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">
              Accueil
            </a>{" "}
            &gt; Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos services d&apos;électricité
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Des solutions professionnelles adaptées à chaque besoin
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-24">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug}>
              <div
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-navy"
                      >
                        <Check className="w-5 h-5 text-lime shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href={`/contact?service=${service.slug}`}>
                    Demander un devis
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
