import Link from "next/link";
import Image from "next/image";
import optivousLogo from "@/optivous-full-dark-1600.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory border-t border-stone-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Link href="/" aria-label="Optivous" className="inline-block">
          <Image
            src={optivousLogo}
            alt="Optivous"
            className="h-7 w-auto"
          />
        </Link>
        <p className="mt-4 text-xs text-stone-600 font-mono tracking-widest uppercase">Singapore</p>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-stone-600 font-mono">
            © {currentYear} Optivous ·{" "}
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-xs text-stone-600 font-mono tracking-widest uppercase">
            Research & Introductions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
