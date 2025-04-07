
import { Metadata } from "next";
import AdminLayout from "@/components/dashboard/AdminLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard | KBET",
  description: "KBET Admin Dashboard - Manage games, categories, and users",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
