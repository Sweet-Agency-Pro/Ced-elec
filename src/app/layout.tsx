import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PhoneButton from "@/components/ui/PhoneButton";
import { getLocalBusinessSchema } from "@/lib/schema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ced'elec - Électricien en Alsace",
    template: "%s | Ced'elec - Électricien en Alsace",
  },
  description:
    "Ced'elec, votre électricien de confiance en Alsace. Installation, rénovation, mise aux normes électriques à Strasbourg et environs. Noté 5/5 sur Google.",
  keywords: [
    "électricien Alsace",
    "électricien Strasbourg",
    "installation électrique",
    "rénovation électrique",
    "mise aux normes",
    "Ced'elec",
    "Obernai",
    "Marlenheim",
    "Geispolsheim",
    "Marckolsheim",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Ced'elec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PhoneButton />
      </body>
    </html>
  );
}
