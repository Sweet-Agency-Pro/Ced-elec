import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ReviewCard from "@/components/ui/ReviewCard";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import { getReviews } from "@/lib/reviews";
import { GOOGLE_RATING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Découvrez les avis de nos clients. Ced'elec est noté 5/5 sur Google avec 42 avis vérifiés.",
};

export default async function AvisPage() {
  const reviews = await getReviews();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/50 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">
              Accueil
            </a>{" "}
            &gt; Avis
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Avis de nos clients
          </h1>
          <div className="inline-flex items-center gap-2 bg-lime/20 text-lime px-4 py-2 rounded-full text-sm font-medium">
            ⭐ {GOOGLE_RATING.score}/5 - {GOOGLE_RATING.count} avis sur Google
          </div>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-6xl font-bold text-navy mb-3">5.0</p>
              <div className="flex justify-center mb-3">
                <StarRating rating={5} size="lg" />
              </div>
              <p className="text-gray-text">
                Basé sur {GOOGLE_RATING.count} avis Google
              </p>

              {/* Rating bars */}
              <div className="max-w-xs mx-auto mt-6 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2 text-sm">
                    <span className="w-4 text-right text-gray-text">
                      {stars}
                    </span>
                    <StarRating rating={1} size="sm" />
                    <div className="flex-1 h-2 bg-gray-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full transition-all"
                        style={{
                          width: stars === 5 ? "100%" : "0%",
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-gray-text text-xs">
                      {stars === 5 ? `${GOOGLE_RATING.count}` : "0"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <ReviewCard
                  personne={review.personne}
                  note={review.note}
                  commentaire={review.commentaire}
                  truncate={false}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="#"
              variant="outline"
              icon={ExternalLink}
              external
            >
              Voir sur Google
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
