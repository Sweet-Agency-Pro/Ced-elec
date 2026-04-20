"use client";

import AdminPanel from "@/components/admin/AdminPanel";
import {
  getFakeServices,
  getFakeRealisations,
  getFakeContacts,
} from "@/lib/fake-admin-data";

export default function AdminPage() {
  return (
    <AdminPanel
      initialServices={getFakeServices()}
      initialRealisations={getFakeRealisations()}
      initialContacts={getFakeContacts()}
    />
  );
}
