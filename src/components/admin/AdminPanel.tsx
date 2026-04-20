"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Wrench,
  FolderOpen,
  MessageSquare,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  X,
  ChevronRight,
  Mail,
  Phone,
  Clock,
  Check,
} from "lucide-react";
import { clsx } from "clsx";
import type { Service } from "@/lib/services-data";
import type { Realisation } from "@/lib/realisations-data";
import type { ContactRequest } from "@/lib/fake-admin-data";

type Tab = "dashboard" | "services" | "realisations" | "contacts";

interface AdminPanelProps {
  initialServices: Service[];
  initialRealisations: Realisation[];
  initialContacts: ContactRequest[];
}

export default function AdminPanel({
  initialServices,
  initialRealisations,
  initialContacts,
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [services, setServices] = useState(initialServices);
  const [realisations, setRealisations] = useState(initialRealisations);
  const [contacts, setContacts] = useState(initialContacts);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingReal, setEditingReal] = useState<Realisation | null>(null);
  const [viewingContact, setViewingContact] = useState<ContactRequest | null>(null);

  const unreadCount = contacts.filter((c) => !c.read).length;

  const nav: { id: Tab; label: string; icon: typeof LayoutDashboard; badge?: number }[] = [
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { id: "services", label: "Services", icon: Wrench },
    { id: "realisations", label: "Réalisations", icon: FolderOpen },
    { id: "contacts", label: "Demandes", icon: MessageSquare, badge: unreadCount },
  ];

  function markAsRead(id: string) {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, read: true } : c))
    );
  }

  function deleteContact(id: string) {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  function deleteService(slug: string) {
    setServices((prev) => prev.filter((s) => s.slug !== slug));
  }

  function deleteRealisation(slug: string) {
    setRealisations((prev) => prev.filter((r) => r.slug !== slug));
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex flex-col shrink-0">
        <div className="p-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Ced'elec"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-xs text-white/50 mt-1">Administration</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                activeTab === item.id
                  ? "bg-teal text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {item.label}
              {item.badge ? (
                <span className="ml-auto bg-error text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Retour au site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {activeTab === "dashboard" && (
          <DashboardView
            servicesCount={services.length}
            realisationsCount={realisations.length}
            contactsCount={contacts.length}
            unreadCount={unreadCount}
            recentContacts={contacts.slice(0, 3)}
            onViewContact={(c) => {
              setViewingContact(c);
              markAsRead(c.id);
              setActiveTab("contacts");
            }}
          />
        )}

        {activeTab === "services" && (
          <ServicesView
            services={services}
            onEdit={setEditingService}
            onDelete={deleteService}
            editingService={editingService}
            onCloseEdit={() => setEditingService(null)}
            onSave={(updated) => {
              setServices((prev) =>
                prev.map((s) => (s.slug === updated.slug ? updated : s))
              );
              setEditingService(null);
            }}
          />
        )}

        {activeTab === "realisations" && (
          <RealisationsView
            realisations={realisations}
            onEdit={setEditingReal}
            onDelete={deleteRealisation}
            editingReal={editingReal}
            onCloseEdit={() => setEditingReal(null)}
            onSave={(updated) => {
              setRealisations((prev) =>
                prev.map((r) => (r.slug === updated.slug ? updated : r))
              );
              setEditingReal(null);
            }}
          />
        )}

        {activeTab === "contacts" && (
          <ContactsView
            contacts={contacts}
            onMarkRead={markAsRead}
            onDelete={deleteContact}
            viewingContact={viewingContact}
            onView={(c) => {
              setViewingContact(c);
              markAsRead(c.id);
            }}
            onCloseView={() => setViewingContact(null)}
          />
        )}
      </main>
    </div>
  );
}

/* ─── Dashboard ─── */
function DashboardView({
  servicesCount,
  realisationsCount,
  contactsCount,
  unreadCount,
  recentContacts,
  onViewContact,
}: {
  servicesCount: number;
  realisationsCount: number;
  contactsCount: number;
  unreadCount: number;
  recentContacts: ContactRequest[];
  onViewContact: (c: ContactRequest) => void;
}) {
  const stats = [
    { label: "Services", value: servicesCount, color: "bg-teal" },
    { label: "Réalisations", value: realisationsCount, color: "bg-lime" },
    { label: "Demandes", value: contactsCount, color: "bg-navy" },
    { label: "Non lues", value: unreadCount, color: "bg-error" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy mb-6">Tableau de bord</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-border">
            <p className="text-sm text-gray-text mb-1">{s.label}</p>
            <p className="text-3xl font-bold text-navy">{s.value}</p>
            <div className={`w-8 h-1 ${s.color} rounded-full mt-2`} />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-border p-6">
        <h2 className="font-bold text-navy mb-4">Dernières demandes</h2>
        <div className="space-y-3">
          {recentContacts.map((c) => (
            <button
              key={c.id}
              onClick={() => onViewContact(c)}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-bg transition-colors text-left cursor-pointer"
            >
              <div
                className={clsx(
                  "w-2 h-2 rounded-full shrink-0",
                  c.read ? "bg-gray-border" : "bg-teal"
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-navy text-sm truncate">
                  {c.name} - {c.subject}
                </p>
                <p className="text-xs text-gray-text truncate">{c.message}</p>
              </div>
              <span className="text-xs text-gray-text shrink-0">
                {new Date(c.date).toLocaleDateString("fr-FR")}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-text shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Services ─── */
function ServicesView({
  services,
  onEdit,
  onDelete,
  editingService,
  onCloseEdit,
  onSave,
}: {
  services: Service[];
  onEdit: (s: Service) => void;
  onDelete: (slug: string) => void;
  editingService: Service | null;
  onCloseEdit: () => void;
  onSave: (s: Service) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-navy">Services</h1>
        <button className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-dark transition-colors cursor-pointer">
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-border bg-gray-bg/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-text uppercase">Image</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-text uppercase">Titre</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-text uppercase hidden md:table-cell">Description</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-text uppercase">Prestations</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-text uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-border">
            {services.map((s) => (
              <tr key={s.slug} className="hover:bg-gray-bg/30 transition-colors">
                <td className="px-5 py-3">
                  <div className="relative w-16 h-12 rounded-md overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover" sizes="64px" />
                  </div>
                </td>
                <td className="px-5 py-3">
                  <p className="font-medium text-navy text-sm">{s.title}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <p className="text-xs text-gray-text line-clamp-2">{s.shortDescription}</p>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs text-gray-text">{s.features.length} prestations</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => onEdit(s)}
                      className="p-2 rounded-lg hover:bg-teal/10 text-teal transition-colors cursor-pointer"
                      title="Modifier"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(s.slug)}
                      className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors cursor-pointer"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit modal */}
      {editingService && (
        <ServiceEditModal
          service={editingService}
          onClose={onCloseEdit}
          onSave={onSave}
        />
      )}
    </div>
  );
}

function ServiceEditModal({
  service,
  onClose,
  onSave,
}: {
  service: Service;
  onClose: () => void;
  onSave: (s: Service) => void;
}) {
  const [title, setTitle] = useState(service.title);
  const [shortDesc, setShortDesc] = useState(service.shortDescription);
  const [desc, setDesc] = useState(service.description);
  const [image, setImage] = useState(service.image);
  const [features, setFeatures] = useState(service.features.join("\n"));

  function handleSave() {
    onSave({
      ...service,
      title,
      shortDescription: shortDesc,
      description: desc,
      image,
      features: features.split("\n").filter((f) => f.trim()),
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-border">
          <h2 className="font-bold text-navy text-lg">Modifier le service</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-bg rounded-lg transition-colors cursor-pointer">
            <X className="w-5 h-5 text-gray-text" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Titre</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Description courte</label>
            <input
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Description complète</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none resize-y"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">URL de l&apos;image</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Prestations (une par ligne)</label>
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={5}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none resize-y font-mono text-sm"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 p-5 border-t border-gray-border">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-border text-sm font-medium text-gray-text hover:bg-gray-bg transition-colors cursor-pointer">
            Annuler
          </button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal-dark transition-colors cursor-pointer">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Réalisations ─── */
function RealisationsView({
  realisations,
  onEdit,
  onDelete,
  editingReal,
  onCloseEdit,
  onSave,
}: {
  realisations: Realisation[];
  onEdit: (r: Realisation) => void;
  onDelete: (slug: string) => void;
  editingReal: Realisation | null;
  onCloseEdit: () => void;
  onSave: (r: Realisation) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-navy">Réalisations</h1>
        <button className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-dark transition-colors cursor-pointer">
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {realisations.map((r) => (
          <div key={r.slug} className="bg-white rounded-xl shadow-sm border border-gray-border overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image src={r.image} alt={r.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(r)}
                    className="p-2 bg-white rounded-lg text-teal hover:bg-teal hover:text-white transition-colors cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(r.slug)}
                    className="p-2 bg-white rounded-lg text-error hover:bg-error hover:text-white transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium bg-teal/10 text-teal px-2 py-0.5 rounded-full">
                  {r.category}
                </span>
                <span className="text-xs text-gray-text">{r.location}</span>
              </div>
              <p className="font-semibold text-navy text-sm">{r.title}</p>
              <p className="text-xs text-gray-text mt-1 line-clamp-2">{r.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      {editingReal && (
        <RealisationEditModal
          realisation={editingReal}
          onClose={onCloseEdit}
          onSave={onSave}
        />
      )}
    </div>
  );
}

function RealisationEditModal({
  realisation,
  onClose,
  onSave,
}: {
  realisation: Realisation;
  onClose: () => void;
  onSave: (r: Realisation) => void;
}) {
  const [title, setTitle] = useState(realisation.title);
  const [category, setCategory] = useState(realisation.category);
  const [location, setLocation] = useState(realisation.location);
  const [description, setDescription] = useState(realisation.description);
  const [image, setImage] = useState(realisation.image);

  function handleSave() {
    onSave({ ...realisation, title, category, location, description, image });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-border">
          <h2 className="font-bold text-navy text-lg">Modifier la réalisation</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-bg rounded-lg transition-colors cursor-pointer">
            <X className="w-5 h-5 text-gray-text" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Titre</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Catégorie</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Lieu</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none resize-y"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">URL de l&apos;image</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 p-5 border-t border-gray-border">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-border text-sm font-medium text-gray-text hover:bg-gray-bg transition-colors cursor-pointer">
            Annuler
          </button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal-dark transition-colors cursor-pointer">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Contacts ─── */
function ContactsView({
  contacts,
  onMarkRead,
  onDelete,
  viewingContact,
  onView,
  onCloseView,
}: {
  contacts: ContactRequest[];
  onMarkRead: (id: string) => void;
  onDelete: (id: string) => void;
  viewingContact: ContactRequest | null;
  onView: (c: ContactRequest) => void;
  onCloseView: () => void;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-navy mb-6">Demandes de contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-2 space-y-3">
          {contacts.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-border p-12 text-center">
              <MessageSquare className="w-10 h-10 text-gray-border mx-auto mb-3" />
              <p className="text-gray-text">Aucune demande pour le moment</p>
            </div>
          ) : (
            contacts.map((c) => (
              <button
                key={c.id}
                onClick={() => onView(c)}
                className={clsx(
                  "w-full bg-white rounded-xl border p-4 text-left transition-all hover:shadow-sm cursor-pointer",
                  viewingContact?.id === c.id
                    ? "border-teal ring-2 ring-teal/20"
                    : "border-gray-border",
                  !c.read && "border-l-4 border-l-teal"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className={clsx("text-sm", c.read ? "text-navy" : "font-bold text-navy")}>
                        {c.name}
                      </p>
                      <span className="text-xs bg-gray-bg text-gray-text px-2 py-0.5 rounded-full">
                        {c.subject}
                      </span>
                    </div>
                    <p className="text-xs text-gray-text truncate">{c.message}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-text">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(c.date).toLocaleString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {c.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {c.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {!c.read && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMarkRead(c.id);
                        }}
                        className="p-1.5 rounded-lg hover:bg-teal/10 text-teal transition-colors cursor-pointer"
                        title="Marquer comme lu"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(c.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-error/10 text-error transition-colors cursor-pointer"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-1">
          {viewingContact ? (
            <div className="bg-white rounded-xl border border-gray-border p-5 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-navy">Détail</h2>
                <button onClick={onCloseView} className="p-1 hover:bg-gray-bg rounded-lg transition-colors cursor-pointer">
                  <X className="w-4 h-4 text-gray-text" />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-gray-text mb-0.5">Nom</p>
                  <p className="font-medium text-navy">{viewingContact.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-text mb-0.5">Email</p>
                  <a href={`mailto:${viewingContact.email}`} className="text-teal hover:underline">
                    {viewingContact.email}
                  </a>
                </div>
                {viewingContact.phone && (
                  <div>
                    <p className="text-xs text-gray-text mb-0.5">Téléphone</p>
                    <a href={`tel:${viewingContact.phone}`} className="text-teal hover:underline">
                      {viewingContact.phone}
                    </a>
                  </div>
                )}
                <div>
                  <p className="text-xs text-gray-text mb-0.5">Sujet</p>
                  <span className="bg-teal/10 text-teal text-xs px-2 py-1 rounded-full font-medium">
                    {viewingContact.subject}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-text mb-0.5">Date</p>
                  <p className="text-navy">
                    {new Date(viewingContact.date).toLocaleString("fr-FR")}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-border">
                  <p className="text-xs text-gray-text mb-1">Message</p>
                  <p className="text-navy leading-relaxed whitespace-pre-wrap">
                    {viewingContact.message}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-5 pt-4 border-t border-gray-border">
                <a
                  href={`mailto:${viewingContact.email}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-teal text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-teal-dark transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Répondre
                </a>
                {viewingContact.phone && (
                  <a
                    href={`tel:${viewingContact.phone}`}
                    className="flex items-center justify-center gap-2 border border-gray-border px-3 py-2 rounded-lg text-sm font-medium text-navy hover:bg-gray-bg transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-border p-8 text-center sticky top-6">
              <Eye className="w-8 h-8 text-gray-border mx-auto mb-2" />
              <p className="text-sm text-gray-text">
                Sélectionnez une demande pour voir les détails
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
