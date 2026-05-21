import Image from "next/image";

const AUTH_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbnxWcjdc3RiffnBxIaBse-IkCrinJu_GMhK50M05pVPXvf1ooAq4thZMjF4U8KIQ5wGu2g7SAU2Ngoye-3HSytvfgcQLpi7BVfk6389KdXREooO9Tz1MswE5FvNpYSYpAs4CdfkVHTx8E_D4N3ITxLVyLc2Xr2qwCiDrrPLlBjp6YpCgx36tfb44YAF7xUkLY8Ea69iXSxwU_D-Ze2_tNe3KOkSWQlRppCZt8GnrR9cpgkR4UAAh_xlg_UeBoCPvmptCzvo_fOvcL";

export default function AuthVisualPanel({
  badge = "Our Mission",
  title = (
    <>
      Finding your <br />
      perfect companion.
    </>
  ),
  quote = '"Until one has loved an animal, a part of one\'s soul remains unawakened."',
  attribution = "— Anatole France",
}) {
  return (
    <section className="relative hidden items-end overflow-hidden p-margin-desktop lg:flex lg:w-1/2">
      <Image
        src={AUTH_IMAGE}
        alt="A woman hugging a golden retriever in a sun-drenched living room"
        fill
        priority
        className="object-cover"
      />
      <div className="auth-image-overlay absolute inset-0 z-10" />
      <div className="relative z-20 mb-stack-lg max-w-lg">
        <span className="mb-stack-sm inline-block rounded-full bg-white/20 px-4 py-1 font-label-sm tracking-wider text-white uppercase backdrop-blur-md">
          {badge}
        </span>
        <h1 className="mb-stack-md font-display-lg text-display-lg leading-none text-white">
          {title}
        </h1>
        <p className="font-body-lg leading-relaxed text-white/90 italic">
          {quote}
        </p>
        <div className="mt-stack-md flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-primary-container" />
          <span className="font-label-md text-white/60">{attribution}</span>
        </div>
      </div>
    </section>
  );
}
