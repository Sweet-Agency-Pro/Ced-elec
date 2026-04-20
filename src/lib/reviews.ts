export interface Review {
  personne: string;
  note: number;
  commentaire: string;
}

export async function getReviews(): Promise<Review[]> {
  const { default: reviews } = await import("../../public/avis.json");
  return reviews as Review[];
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function truncateComment(comment: string, maxLength = 150): string {
  if (comment.length <= maxLength) return comment;
  return comment.slice(0, maxLength).trimEnd() + "…";
}
