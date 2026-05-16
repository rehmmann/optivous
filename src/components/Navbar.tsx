"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import optivousLogo from "@/optivous-full-light-1600.png";

const navigation = [
  { name: "Network", href: "/#network" },
  { name: "Protocol", href: "/#protocol" },
  { name: "Metrics", href: "/#metrics" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center" aria-label="Optivous">
            <Image
              src={optivousLogo}
              alt="Optivous"
              priority
              className="h-7 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wider uppercase font-mono"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 px-5 py-2 text-sm font-semibold text-blue-400 hover:bg-blue-400 hover:text-black transition-all tracking-wider uppercase font-mono"
          >
            Request Access
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-400 hover:text-white font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-semibold text-blue-400 font-mono"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
