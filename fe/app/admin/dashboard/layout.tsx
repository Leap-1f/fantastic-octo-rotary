import { Sidebar } from "@/admin-component/sidebar";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <section className="flex flex-row h-screen w-screen">
        <Sidebar />
        {children}
      </section>
    </section>
  );
}
