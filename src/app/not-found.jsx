import Link from "next/link";
import MaterialIcon from "@/components/home/MaterialIcon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <MaterialIcon name="pets" className="mb-4 text-6xl text-primary" />
      <h1 className="font-display-lg text-headline-xl text-on-surface">404 — Page Not Found</h1>
      <p className="mt-2 max-w-md text-on-surface-variant">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-b from-primary-container to-primary px-8 py-3 font-label-md text-white shadow-lg transition hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
