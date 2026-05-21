"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import { authClient } from "@/lib/auth-client";

const mainNav = [
  { href: "/dashboard/requests", label: "My Requests", icon: "assignment" },
  { href: "/dashboard/pets/new", label: "Add Pet", icon: "add_circle" },
  { href: "/dashboard/pets", label: "My Listings", icon: "pets" },
];

function NavLink({ href, label, icon, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl px-4 py-3 font-label-md transition-all duration-200 ${
        active
          ? "bg-primary-container text-on-primary-container"
          : "text-on-surface-variant hover:translate-x-1 hover:bg-surface-container-high"
      }`}
    >
      <MaterialIcon name={icon} className="mr-3" />
      {label}
    </Link>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="fixed top-0 left-0 z-40 flex h-screen w-64 flex-col border-r border-outline-variant bg-surface p-stack-sm">
      <div className="px-4 py-6">
        <Link href="/" className="font-display-lg text-headline-xl font-bold text-primary">
          Paws & Home
        </Link>
        <p className="font-label-md text-on-surface-variant opacity-70">Dashboard</p>
      </div>
      <nav className="flex-1 space-y-1">
        {mainNav.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={
              item.href === "/dashboard/pets"
                ? pathname === "/dashboard/pets"
                : pathname.startsWith(item.href)
            }
          />
        ))}
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-4">
        <button
          type="button"
          onClick={async () => {
            await authClient.signOut();
            toast.success("Logged out");
            router.push("/");
          }}
          className="flex w-full items-center rounded-xl px-4 py-3 font-label-md text-on-surface-variant hover:bg-surface-container-high"
        >
          <MaterialIcon name="logout" className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
