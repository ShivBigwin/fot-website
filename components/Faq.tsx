"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Who is eligible for a FundsOnTime loan?",
    a: "You need to be at least 18 years old, a salaried or self-employed Indian resident, with a minimum monthly income of ₹18,000 and an Aadhaar-linked mobile number.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications receive an in-principle decision within 9 minutes. Once your KYC and bank statements are verified, funds are typically disbursed within 7 minutes.",
  },
  {
    q: "What documents do I need?",
    a: "Just your PAN card, Aadhaar card, and the last 3 months of bank statements in PDF format. Everything is uploaded and verified digitally.",
  },
  {
    q: "Is there a penalty for early repayment?",
    a: "No. You can foreclose or make part-prepayments after 6 months with no additional penalty, so you're never locked into paying more interest than necessary.",
  },
  {
    q: "Which NBFC sanctions the loan?",
    a: "Loans are sanctioned by our NBFC, Tristar Fincon & Credit Pvt. Ltd, an RBI-registered NBFC, in accordance with the Reserve Bank of India's Digital Lending Guidelines. Partner details are shown before you accept any offer.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Questions</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-ink/8 rounded-3xl border border-ink/8 bg-white">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="px-6 md:px-8">
              <button
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ice text-azure-600 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-6 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-ink-500">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
