"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONTACT, GOOGLE_RATING } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-lime/20 text-lime px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          ⭐ Noté {GOOGLE_RATING.score}/5 sur Google — {GOOGLE_RATING.count}{" "}
          avis
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Votre électricien
          <br />
          <span className="text-teal-light">de confiance</span> en Alsace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Installation, rénovation et mise aux normes électriques à Strasbourg
          et ses environs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href={CONTACT.phoneHref}
            variant="primary"
            size="lg"
            icon={Phone}
          >
            Appelez-nous
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Demander un devis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
