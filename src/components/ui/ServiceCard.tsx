import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-text mb-4 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-teal font-medium hover:gap-2 transition-all duration-200"
      >
        En savoir plus <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
