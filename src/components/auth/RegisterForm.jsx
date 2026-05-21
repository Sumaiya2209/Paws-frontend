"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import { authClient } from "@/lib/auth-client";

const GOOGLE_ICON =
  "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg";

function validatePassword(password) {
  if (password.length < 6) return "Password must be at least 6 characters";
  if (!/[A-Z]/.test(password)) return "Password needs one uppercase letter";
  if (!/[a-z]/.test(password)) return "Password needs one lowercase letter";
  return null;
}

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputClass =
    "w-full rounded-xl border border-outline-variant bg-white py-3 pr-4 pl-11 text-sm outline-none transition focus:ring-2 focus:ring-primary-container";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const pwdError = validatePassword(password);
    if (pwdError) {
      toast.error(pwdError);
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: formData.get("email"),
      password,
      name: formData.get("fullName"),
      image: formData.get("photoUrl") || undefined,
    });

    setLoading(false);
    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }
    if (data) {
      toast.success("Account created! Please sign in.");
      router.push("/login");
    }
  };

  return (
    <section className="flex w-full flex-1 flex-col items-center justify-center bg-surface-container-lowest px-4 py-6">
      <div className="mb-5 text-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Paws & Home
        </Link>
      </div>
      <div className="w-full max-w-lg rounded-2xl border border-outline-variant bg-white p-6 shadow-sm">
        <h2 className="text-center text-xl font-bold text-on-surface">Create Account</h2>
        <p className="mt-1 text-center text-sm text-on-surface-variant">Join our pet community</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm text-on-surface-variant">Name</label>
            <input id="fullName" name="fullName" type="text" required placeholder="John Doe" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-on-surface-variant">Email</label>
            <input id="email" name="email" type="email" required placeholder="john@example.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="photoUrl" className="mb-1 block text-sm text-on-surface-variant">Photo URL</label>
            <input id="photoUrl" name="photoUrl" type="url" placeholder="https://example.com/photo.png" className={inputClass} />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-on-surface-variant">Password</label>
            <input id="password" name="password" type={showPassword ? "text" : "password"} required minLength={6} className={inputClass} />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="mb-1 block text-sm text-on-surface-variant">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type={showConfirm ? "text" : "password"} required minLength={6} className={inputClass} />
          </div>
          <button type="submit" disabled={loading} className="auth-primary-gradient w-full rounded-xl py-3 font-semibold text-white disabled:opacity-70">
            {loading ? "Creating Account..." : "Create Account"}
          </button>
          <button type="button" onClick={() => authClient.signIn.social({ provider: "google" })} className="flex w-full items-center justify-center gap-3 rounded-xl border border-outline-variant py-3 text-sm font-medium hover:bg-surface-container-low">
            <Image src={GOOGLE_ICON} alt="Google" width={18} height={18} />
            Continue with Google
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-on-surface-variant">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">Sign In</Link>
        </p>
      </div>
    </section>
  );
}
