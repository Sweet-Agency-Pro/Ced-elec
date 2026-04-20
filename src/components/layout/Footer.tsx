import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { services } from "@/lib/services-data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Ced'elec"
              width={140}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Votre électricien de confiance en Alsace. Qualité, réactivité et
              professionnalisme depuis plus de 10 ans.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              Plan du site
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              Nos services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              Nous contacter
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-teal shrink-0" />
                {CONTACT.zone}
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-sm">
          <p>© 2026 Ced&apos;elec - Tous droits réservés</p>
          <Link
            href="/mentions-legales"
            className="hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
