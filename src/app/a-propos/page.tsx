import type { Metadata } from "next";
import Image from "next/image";
import { ThumbsUp, Clock, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Ced'elec et son fondateur Cédric Dos Santos. Électricien professionnel en Alsace, qualité et réactivité garanties.",
};

const values = [
  {
    icon: ThumbsUp,
    title: "Qualité",
    description: "Un travail soigné et durable, réalisé dans les règles de l'art.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Intervention rapide et respect des délais convenus.",
  },
  {
    icon: MessageCircle,
    title: "Transparence",
    description: "Communication claire, devis détaillés et sans surprise.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/50 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">
              Accueil
            </a>{" "}
            &gt; À propos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de Ced&apos;elec
          </h1>
        </div>
      </section>

      {/* Portrait */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
                  alt="Cédric Dos Santos - Fondateur de Ced'elec"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-2">
                  Cédric Dos Santos
                </h2>
                <p className="text-teal font-semibold mb-6">
                  Fondateur de Ced&apos;elec
                </p>
                <div className="space-y-4 text-gray-text leading-relaxed">
                  <p>
                    Passionné par le métier d&apos;électricien depuis plus de 10
                    ans, j&apos;ai fondé Ced&apos;elec avec une conviction
                    simple : offrir un service d&apos;électricité de qualité,
                    humain et accessible en Alsace.
                  </p>
                  <p>
                    Chaque chantier est unique. C&apos;est pourquoi je
                    m&apos;implique personnellement dans chaque projet, de
                    l&apos;étude préalable à la réalisation finale. Mon objectif
                    : votre satisfaction totale et votre sécurité.
                  </p>
                  <p>
                    Que ce soit pour une installation neuve, une rénovation ou un
                    simple dépannage, je mets mon expertise et ma réactivité à
                    votre service. La confiance de mes clients est ma plus grande
                    fierté, comme en témoignent nos 42 avis 5 étoiles sur
                    Google.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy text-center mb-4">
              Nos valeurs
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-teal mx-auto mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-border">
                  <div className="w-14 h-14 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Garanties & certifications
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-teal mx-auto mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-bg rounded-xl p-6">
                <p className="text-2xl font-bold text-navy mb-1">🛡️</p>
                <p className="font-semibold text-navy">Assurance décennale</p>
                <p className="text-sm text-gray-text">
                  Protection garantie sur tous nos travaux
                </p>
              </div>
              <div className="bg-gray-bg rounded-xl p-6">
                <p className="text-2xl font-bold text-navy mb-1">✅</p>
                <p className="font-semibold text-navy">Normes NF C 15-100</p>
                <p className="text-sm text-gray-text">
                  Conformité assurée sur chaque installation
                </p>
              </div>
              <div className="bg-gray-bg rounded-xl p-6">
                <p className="text-2xl font-bold text-navy mb-1">📋</p>
                <p className="font-semibold text-navy">Devis gratuit</p>
                <p className="text-sm text-gray-text">
                  Estimation détaillée et sans engagement
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
