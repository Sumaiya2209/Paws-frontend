import DashboardSidebar from "@/components/dashboard/DashboardSidebar";


export const metadata = {
  title: "Paws & Home | Member Dashboard",
  description: "Manage your shelter listings, adoptions, and messages.",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface font-body-md text-on-surface">
      <DashboardSidebar />
      <main className="ml-64 min-h-screen bg-surface-container-lowest/50 p-margin-mobile md:p-margin-desktop">
        {children}
      </main>
    </div>
  );
}