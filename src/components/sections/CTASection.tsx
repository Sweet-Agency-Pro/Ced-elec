import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal to-teal-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un projet électrique ? Parlons-en !
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={CONTACT.phoneHref}
              variant="white"
              size="lg"
              icon={Phone}
            >
              Appelez le {CONTACT.phone}
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-teal bg-transparent"
            >
              Envoyez-nous un message
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
