"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why FundsOnTime", href: "#why" },
  { label: "EMI calculator", href: "#calculator" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <nav className="container-page flex h-20 items-center justify-between">
        {/* <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-base font-bold text-white shadow-brand">
            ₹
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            FundsOnTime
          </span>
        </a> */}
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo-funds.png"
            alt="FundsOnTime Logo"
            width={150} // h-9 = 36px
            height={60} // w-9 = 36px
            className="rounded-xl object-contain"
          />
          {/* <span className="font-display text-lg font-bold tracking-tight text-ink">
            FundsOnTime
          </span> */}
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-500 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#calculator"
            className="text-sm font-semibold text-ink hover:text-azure-600"
          >
            Check eligibility
          </a>
          <a
            href="#apply"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get the app
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-brand"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
