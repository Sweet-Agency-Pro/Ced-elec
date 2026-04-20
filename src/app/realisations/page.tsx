import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import { realisations } from "@/lib/realisations-data";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez nos réalisations en électricité : rénovation, installation, mise aux normes et domotique en Alsace.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/50 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">
              Accueil
            </a>{" "}
            &gt; Réalisations
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos réalisations
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  description={project.description}
                  image={project.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
