import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Ced'elec - Électricien en Alsace.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-navy">
        <h1 className="text-3xl font-bold text-navy mb-8">
          Mentions légales
        </h1>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">
          Éditeur du site
        </h2>
        <p className="text-gray-text leading-relaxed">
          <strong className="text-navy">Ced&apos;elec - Électricité générale</strong>
          <br />
          M. Cédric Dos Santos
          <br />
          SIRET : [à compléter]
          <br />
          Adresse : [à compléter], Alsace
          <br />
          Téléphone : 07 60 35 44 75
          <br />
          Email : cedricelec@gmail.com
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">Hébergeur</h2>
        <p className="text-gray-text leading-relaxed">
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723, États-Unis
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-text leading-relaxed">
          L&apos;ensemble du contenu de ce site (textes, images, logo) est la
          propriété exclusive de Ced&apos;elec, sauf mention contraire. Toute
          reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">
          Données personnelles & RGPD
        </h2>
        <p className="text-gray-text leading-relaxed">
          Les données collectées via le formulaire de contact (nom, email,
          téléphone, message) sont uniquement utilisées pour répondre à votre
          demande. Elles ne sont ni cédées, ni vendues à des tiers. Conformément
          au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données. Pour exercer ce droit,
          contactez-nous à cedricelec@gmail.com.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">Cookies</h2>
        <p className="text-gray-text leading-relaxed">
          Ce site n&apos;utilise pas de cookies de suivi ni de cookies
          publicitaires. Seuls des cookies techniques strictement nécessaires au
          fonctionnement du site peuvent être utilisés.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">
          Responsabilité
        </h2>
        <p className="text-gray-text leading-relaxed">
          Ced&apos;elec s&apos;efforce d&apos;assurer l&apos;exactitude des
          informations publiées sur ce site, mais ne saurait être tenu
          responsable d&apos;éventuelles erreurs ou omissions. Les photos
          présentées sont données à titre illustratif.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-3">Contact</h2>
        <p className="text-gray-text leading-relaxed">
          Pour toute question relative aux mentions légales, vous pouvez nous
          contacter à cedricelec@gmail.com ou au 07 60 35 44 75.
        </p>
      </div>
    </section>
  );
}
