import Link from "next/link";

export default function NavLinks({ navLinks }) {
  return (
    <>
      {navLinks.map((l) => (
        <Link
          href={l.path}
          className="border-b-2 border-primary pb-1 text-primary"
          key={l.name}
        >
          {l.name}
        </Link>
      ))}
    </>
  );
}