import { clsx } from "clsx";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={clsx(centered && "text-center", "mb-12", className)}>
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold mb-4",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "w-16 h-[3px] rounded-full mb-4",
          centered ? "mx-auto" : "",
          "bg-teal"
        )}
      />
      {subtitle && (
        <p
          className={clsx(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-gray-text"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
