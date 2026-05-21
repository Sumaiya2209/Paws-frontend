"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import { authClient } from "@/lib/auth-client";

const GOOGLE_ICON =
  "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }
    toast.success("Welcome back!");
    router.push(redirect);
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: redirect });
  };

  return (
    <section className="flex w-full items-center justify-center bg-surface-container-lowest p-margin-mobile md:p-margin-desktop lg:w-1/2">
      <div className="w-full max-w-md">
        <div className="mb-stack-lg">
          <div className="mb-2 flex items-center gap-2">
            <MaterialIcon name="pets" className="text-4xl text-primary" />
            <Link href="/" className="font-display-lg text-headline-lg font-bold text-primary">
              Paws & Home
            </Link>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Welcome back</h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            Sign in to browse pets and manage adoption requests.
          </p>
        </div>

        <form className="space-y-stack-md" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="ml-1 font-label-md text-on-surface-variant">
              Email Address
            </label>
            <div className="group relative">
              <MaterialIcon name="mail" className="absolute top-1/2 left-4 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary" />
              <input id="email" name="email" type="email" required placeholder="name@example.com" className="w-full rounded-xl border-none bg-surface-container-low py-4 pr-4 pl-12 font-body-md shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary-container" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="ml-1 font-label-md text-on-surface-variant">
              Password
            </label>
            <div className="group relative">
              <MaterialIcon name="lock" className="absolute top-1/2 left-4 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary" />
              <input id="password" name="password" type={showPassword ? "text" : "password"} required placeholder="••••••••" className="w-full rounded-xl border-none bg-surface-container-low py-4 pr-12 pl-12 font-body-md shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary-container" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-outline" aria-label="Toggle password">
                <MaterialIcon name={showPassword ? "visibility_off" : "visibility"} />
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="auth-primary-gradient w-full rounded-xl py-4 font-label-md font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-80">
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="relative flex items-center justify-center py-2">
            <div className="w-full border-t border-outline-variant" />
            <span className="absolute bg-surface-container-lowest px-4 font-label-sm tracking-widest text-on-surface-variant uppercase">
              or continue with
            </span>
          </div>

          <button type="button" onClick={handleGoogle} className="flex w-full items-center justify-center gap-3 rounded-xl border border-outline-variant bg-white py-4 font-label-md text-on-surface transition-all hover:bg-surface-container-low">
            <Image src={GOOGLE_ICON} alt="Google" width={20} height={20} />
            Continue with Google
          </button>
        </form>

        <p className="mt-stack-lg text-center font-body-md text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
