import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-border hover:shadow-md transition-shadow duration-200">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium bg-teal/10 text-teal px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-text">{location}</span>
        </div>
        <h3 className="font-bold text-navy mb-1">{title}</h3>
        <p className="text-sm text-gray-text leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
