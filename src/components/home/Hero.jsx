import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QX3Wv99RXpD-ipZ56lZH3gn9SXqFDMSWfgS8BmzN6YcrTQ_zkM6J5xiFRb_SHsxXJ_uyc-LcHMDYQfob_C1TfHvfEnAx2lINIuPcB0Pw3oLzMigLWX8wax8h66bJUGn47PSX9hTf7b6ySlY1-msPlwvQKYINxfysahjjfo8yXaF4Y2GOEGgU0FoVM3uipOn8352i9npKWLW0PDkTLQT9-GNBYzVOZL8DKpybQlJRf62JnRrgy8D2FOdjTkfMlD16i3GtXbVqU9kb"
          alt="Woman embracing a golden retriever"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="mb-stack-md font-display-lg text-display-lg-mobile text-on-surface md:text-display-lg">
            Find your new <span className="text-primary">best friend</span>
          </h1>
          <p className="mb-stack-lg text-body-lg leading-relaxed text-on-surface-variant">
            Browse pets from trusted shelters and rescues. Submit adoption requests and give a loving pet a forever home.
          </p>
          <div className="flex flex-wrap gap-stack-sm">
            <Link
              href="/all-pets"
              className="primary-gradient rounded-xl px-8 py-4 text-lg font-label-md text-white shadow-lg transition-all hover:-translate-y-1"
            >
              Adopt Now
            </Link>
            <Link
              href="/all-pets"
              className="glass-card rounded-xl px-8 py-4 text-lg font-label-md text-on-surface transition-all hover:bg-white"
            >
              Explore Pets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
