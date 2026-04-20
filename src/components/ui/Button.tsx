import { clsx } from "clsx";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-teal text-white hover:bg-teal-dark",
    secondary: "bg-lime text-navy hover:bg-lime-dark",
    outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
    white: "bg-white text-teal hover:bg-gray-bg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
