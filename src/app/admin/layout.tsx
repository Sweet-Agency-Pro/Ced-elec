import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration | Ced'elec",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-bg">
      {children}
    </div>
  );
}
