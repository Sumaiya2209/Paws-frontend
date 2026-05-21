"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";
import { authClient } from "@/lib/auth-client";

const publicLinks = [
  { name: "Home", path: "/" },
  { name: "All Pets", path: "/all-pets" },
];

const privateLinks = [
  { name: "My Requests", path: "/dashboard/requests" },
  { name: "Add Pet", path: "/dashboard/pets/new" },
];

function PrivateLinks() {
  const { data: session } = authClient.useSession();
  if (!session?.user) return null;
  return privateLinks.map((l) => (
    <Link
      key={l.path}
      href={l.path}
      className="text-on-surface-variant transition-colors hover:text-primary"
    >
      {l.name}
    </Link>
  ));
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-surface/80 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-stack-lg">
          <Link href="/" className="font-display-lg text-headline-lg font-bold text-primary">
            Paws & Home
          </Link>
          <nav className="hidden gap-stack-md font-body-md md:flex">
            <NavLinks navLinks={publicLinks} />
            <PrivateLinks />
          </nav>
        </div>
        <NavAuth />
      </nav>
    </header>
  );
}
