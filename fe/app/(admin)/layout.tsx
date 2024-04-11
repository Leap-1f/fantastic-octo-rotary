import { Sidebar } from "@/admin-component/sidebar";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <nav></nav>

      {children}
    </section>
  );
}
