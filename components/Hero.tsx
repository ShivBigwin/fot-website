"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Zap, FileCheck2, ArrowRight } from "lucide-react";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - pct, 3);
      setValue(Math.round(eased * target));
      if (pct < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export default function Hero() {
  const amount = useCountUp(85000);

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-gradient-soft "
      />

      <div className="container-page relative grid gap-14 pb-20 md:grid-cols-2 md:items-center md:pb-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
            Powered by RAJVIR SECURITIES AND FINANCE PVT. LTD., RBI-registered
            NBFC
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ink text-balance md:text-6xl">
            Instant personal loans, up to{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              ₹5 Lakh
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500 md:text-lg">
            Personal loans up to ₹1 Lakh — apply in minutes, zero paperwork.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://loanapply.fundsontime.com/auth"
              className="group mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="inline-flex gap-2">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <img
                  src="/app-store.jpg"
                  alt="Download on App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <img
                  src="/google-play.jpg"
                  alt="Download on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <Zap className="h-4 w-4 text-azure-500" />
              Disbursal in 7 minutes
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <FileCheck2 className="h-4 w-4 text-azure-500" />
              Zero paperwork
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <ShieldCheck className="h-4 w-4 text-azure-500" />
              Bank-grade security
            </div>
          </div>
        </div>

        {/* Hero visual: animated loan approval card */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm animate-float">
            {/* <div className="relative rounded-4xl bg-ink p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                  Loan status
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-azure-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
                  Approved
                </span>
              </div>

              <div className="mt-6">
                <span className="font-mono text-xs text-white/40">Sanctioned amount</span>
                <div className="mt-1 font-display text-4xl font-bold tabular-nums">
                  ₹{amount.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[85%] rounded-full bg-brand-gradient" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <span className="font-mono text-[11px] text-white/40">Tenure</span>
                  <div className="mt-0.5 text-sm font-semibold">18 months</div>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-white/40">Interest (p.a.)</span>
                  <div className="mt-0.5 text-sm font-semibold">11.5%</div>
                </div>
              </div>
            </div> */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/fot-hero.png" // Replace with your image path
                alt="Instant personal loans - Apply now"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Optional: Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* floating badge */}
            <div className="absolute -left-6 -top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ice text-azure-600">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-ink">
                  Verified KYC
                </div>
                <div className="text-[11px] text-ink-500">Aadhaar + PAN</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-4 py-3 shadow-card">
              <div className="text-xs font-medium text-ink-500">
                Disbursed to
              </div>
              <div className="text-xs font-semibold text-ink">HDFC •• 7732</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
