"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 bg-white transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Ced'elec"
            width={140}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === link.href
                  ? "text-teal border-b-2 border-teal"
                  : "text-navy hover:text-teal"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={CONTACT.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-teal text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-dark transition-colors"
        >
          <Phone className="w-4 h-4" />
          {CONTACT.phone}
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-navy"
          aria-label="Ouvrir le menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-navy/95 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white p-2"
              aria-label="Fermer le menu"
            >
              <X className="w-7 h-7" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-xl font-medium transition-colors",
                    pathname === link.href ? "text-teal" : "text-white hover:text-teal"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <a
              href={CONTACT.phoneHref}
              className="mt-10 inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-dark transition-colors"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
