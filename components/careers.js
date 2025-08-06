import Link from "next/link";

export function Careers() {
  return (
    <Link
      href="/careers"
      className="cursor-pointer text-sm hover:bg-stone-400 rounded-md p-2"
    >
      Careers
    </Link>
  );
}
