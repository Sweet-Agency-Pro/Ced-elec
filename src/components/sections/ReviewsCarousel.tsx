"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import type { Review } from "@/lib/reviews";

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionTitle
            title="Ce que disent nos clients"
            subtitle="Noté 5/5 sur Google avec 42 avis vérifiés"
          />
        </ScrollReveal>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <ReviewCard
                    personne={review.personne}
                    note={review.note}
                    commentaire={review.commentaire}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-dark transition-colors disabled:opacity-30 hidden md:flex"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-dark transition-colors disabled:opacity-30 hidden md:flex"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-10">
          <Button href="/avis" variant="outline">
            Voir tous les avis
          </Button>
        </div>
      </div>
    </section>
  );
}
