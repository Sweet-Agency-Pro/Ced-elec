import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services-data";

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionTitle
            title="Nos services"
            subtitle="Des solutions électriques adaptées à tous vos besoins"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services#${service.slug}`}
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button href="/services">Voir tous nos services</Button>
        </div>
      </div>
    </section>
  );
}
