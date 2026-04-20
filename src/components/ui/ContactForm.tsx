"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Tag,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const subjects = [
  "Demande de devis",
  "Dépannage",
  "Question",
  "Autre",
] as const;

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Message envoyé !</h3>
        <p className="text-gray-text">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formState === "error" && (
        <div className="bg-error/10 border border-error/30 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-error shrink-0" />
          <p className="text-sm text-error">
            Une erreur est survenue. Veuillez réessayer ou nous appeler.
          </p>
        </div>
      )}

      <div className="relative">
        <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-text" />
        <input
          type="text"
          name="name"
          required
          placeholder="Nom complet"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-text" />
        <input
          type="email"
          name="email"
          required
          placeholder="Adresse email"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-text" />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone (optionnel)"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
        />
      </div>

      <div className="relative">
        <Tag className="absolute left-3 top-3.5 w-5 h-5 text-gray-text" />
        <select
          name="subject"
          required
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all appearance-none bg-white"
        >
          <option value="">Choisir un sujet</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-text" />
        <textarea
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="Décrivez votre projet ou votre demande..."
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-teal text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-50 cursor-pointer"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
