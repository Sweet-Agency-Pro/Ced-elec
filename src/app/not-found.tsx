import { SearchX } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <div className="text-center px-4">
        <SearchX className="w-20 h-20 text-teal/30 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-navy mb-4">Page introuvable</h1>
        <p className="text-gray-text mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </section>
  );
}
