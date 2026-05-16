import Link from "next/link";
import Image from "next/image";
import optivousLogo from "@/optivous-full-light-1600.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <Link href="/" aria-label="Optivous" className="inline-block">
              <Image
                src={optivousLogo}
                alt="Optivous"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-gray-600 text-sm font-mono max-w-xs leading-relaxed">
              Connecting B2B executives with their ideal clients.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/optivous"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Network</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#network" className="text-sm text-gray-500 hover:text-white transition-colors font-mono">
                    Connection Layer
                  </Link>
                </li>
                <li>
                  <Link href="/#protocol" className="text-sm text-gray-500 hover:text-white transition-colors font-mono">
                    The Protocol
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-sm text-gray-500 hover:text-white transition-colors font-mono">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Access</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-white transition-colors font-mono"
                  >
                    Request Access
                  </a>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm text-gray-500 hover:text-white transition-colors font-mono">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700 font-mono">
            © {currentYear} Optivous. All rights reserved. ·{" "}
            <Link href="/privacy" className="hover:text-gray-500 transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-xs text-gray-800 font-mono tracking-widest uppercase">
            Introduction Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
