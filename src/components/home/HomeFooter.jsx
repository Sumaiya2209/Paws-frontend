import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low py-stack-lg">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-3 md:px-margin-desktop">
        <div>
          <span className="font-display-lg text-headline-lg font-bold text-primary">Paws & Home</span>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Ethical pet adoption platform connecting families with rescue pets.
          </p>
        </div>
        <div>
          <h5 className="mb-2 font-label-md uppercase tracking-wider text-on-surface">Contact</h5>
          <p className="text-on-surface-variant">Email: hello@pawshome.com</p>
          <p className="text-on-surface-variant">Phone: (555) 123-4567</p>
          <p className="text-on-surface-variant">Austin, TX</p>
        </div>
        
      </div>
      <div className="mx-auto mt-stack-lg max-w-container-max border-t border-outline-variant/30 px-margin-mobile pt-stack-md text-center md:px-margin-desktop">
        <p className="text-label-sm text-on-surface-variant">© {new Date().getFullYear()} Paws & Home. All rights reserved.</p>
      </div>
    </footer>
  );
}
