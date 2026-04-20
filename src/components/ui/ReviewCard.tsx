import { Quote } from "lucide-react";
import StarRating from "./StarRating";
import { getInitials, truncateComment } from "@/lib/reviews";

interface ReviewCardProps {
  personne: string;
  note: number;
  commentaire: string;
  truncate?: boolean;
}

export default function ReviewCard({
  personne,
  note,
  commentaire,
  truncate = true,
}: ReviewCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-gray-border p-6 hover:shadow-md transition-shadow duration-200">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-teal/5" />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm shrink-0">
          {getInitials(personne)}
        </div>
        <div>
          <p className="font-semibold text-navy">{personne}</p>
          <StarRating rating={note} size="sm" />
        </div>
      </div>
      <p className="text-gray-text leading-relaxed">
        {truncate ? truncateComment(commentaire) : commentaire}
      </p>
    </div>
  );
}
