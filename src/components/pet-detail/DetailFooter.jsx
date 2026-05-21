import Link from "next/link";
import MaterialIcon from "@/components/home/MaterialIcon";

export default function DetailFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low py-stack-lg">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        <div className="space-y-stack-sm">
          <span className="font-display-lg text-headline-lg font-bold text-primary">
            Paws & Home
          </span>
          <p className="text-body-md text-on-surface-variant">
            Emotional Precision in Pet Adoption.
          </p>
          <p className="text-label-sm text-on-surface-variant">
            © 2024 Paws & Home.
          </p>
        </div>

        <div className="space-y-stack-sm">
          <h5 className="font-label-md text-on-surface">Quick Links</h5>
          <nav className="flex flex-col gap-2">
            <Link
              href="/all-pets"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Find Pets
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Success Stories
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Volunteer
            </Link>
          </nav>
        </div>

        <div className="space-y-stack-sm">
          <h5 className="font-label-md text-on-surface">Support</h5>
          <nav className="flex flex-col gap-2">
            <Link
              href="#"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Contact Support
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant opacity-80 transition-opacity hover:text-on-surface hover:opacity-100"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="space-y-stack-sm">
          <h5 className="font-label-md text-on-surface">Stay Connected</h5>
          <div className="flex gap-stack-sm">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform hover:scale-110"
            >
              <MaterialIcon name="public" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform hover:scale-110"
            >
              <MaterialIcon name="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
