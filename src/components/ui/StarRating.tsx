import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${sizeMap[size]} ${
            i < rating ? "fill-gold text-gold" : "fill-gray-border text-gray-border"
          }`}
        />
      ))}
    </div>
  );
}
