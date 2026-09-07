import Link from "next/link";
import Image from "next/image";
import optivousLogo from "@/optivous-full-dark-1600.png";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-ivory/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="mx-auto flex max-w-7xl items-baseline gap-4 px-4 sm:px-6 lg:px-8 py-5">
        <Link href="/" aria-label="Optivous" className="flex items-center">
          <Image
            src={optivousLogo}
            alt="Optivous"
            priority
            className="h-6 w-auto"
          />
        </Link>
        <p className="ml-auto text-xs font-mono text-stone-600 uppercase tracking-widest truncate">
          Rehman Sajid — Research &amp; Introductions
        </p>
      </div>
    </header>
  );
}
