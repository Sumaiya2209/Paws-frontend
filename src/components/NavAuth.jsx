"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function NavAuth() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isPending) {
    return <div className="h-10 w-24 animate-pulse rounded-full bg-gray-200" />;
  }

  if (session?.user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setOpenDropdown(!openDropdown)}
          className="overflow-hidden rounded-full border-2 border-primary"
        >
          <Image
            src={session.user.image || "/avatar.png"}
            alt={session.user.name}
            width={42}
            height={42}
            className="h-10 w-10 object-cover"
          />
        </button>
        {openDropdown && (
          <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-outline-variant bg-white p-2 shadow-xl">
            <div className="border-b border-outline-variant px-3 py-2">
              <h4 className="font-semibold text-on-surface">{session.user.name}</h4>
              <p className="truncate text-sm text-on-surface-variant">
                {session.user.email}
              </p>
            </div>
            <div className="mt-2 flex flex-col">
              <Link
                href="/dashboard/pets"
                className="rounded-xl px-3 py-2 text-sm transition hover:bg-surface-container-low"
                onClick={() => setOpenDropdown(false)}
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={async () => {
                  await authClient.signOut();
                  toast.success("Logged out");
                  router.push("/");
                  setOpenDropdown(false);
                }}
                className="mt-1 rounded-xl px-3 py-2 text-left text-sm text-red-500 transition hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-full bg-gradient-to-b from-primary-container to-primary px-stack-md py-2.5 font-label-md text-on-primary shadow-lg transition-all hover:-translate-y-0.5"
    >
      Login
    </Link>
  );
}
