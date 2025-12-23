"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Profile" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Menu button (+ icon) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 text-black text-4xl font-light hover:opacity-70 transition-opacity pointer-events-auto"
        aria-label="Open menu"
      >
        +
      </button>

      {/* Navigation overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-white"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex flex-col justify-center items-center min-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black text-4xl font-light hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-8 text-left">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-6xl md:text-8xl font-light ${
                    pathname === link.href
                      ? "text-black"
                      : "text-black hover:opacity-70"
                  } transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

