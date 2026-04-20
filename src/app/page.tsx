import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import CTASection from "@/components/sections/CTASection";
import ZoneSection from "@/components/sections/ZoneSection";
import { getReviews } from "@/lib/reviews";

export default async function HomePage() {
  const reviews = await getReviews();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ReviewsCarousel reviews={reviews} />
      <CTASection />
      <ZoneSection />
    </>
  );
}
