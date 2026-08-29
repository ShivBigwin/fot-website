"use client";

import { useEffect, useRef, useState } from "react";

const CIRCUMFERENCE = 2 * Math.PI * 54; // r=54

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 220);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isDone = progress >= 100;

  return (
    <>
      {(!isDone || !exiting) && (
        <div
          aria-hidden={exiting}
          role="status"
          aria-live="polite"
          className={[
            "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
            exiting ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0",
          ].join(" ")}
        >
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* ambient rotating gradient ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-brand-radial opacity-20 blur-md" />

            {/* progress ring */}
            <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#1C2C42"
                strokeWidth="3"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#rupee-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
                style={{ transition: "stroke-dashoffset 120ms linear" }}
              />
              <defs>
                <linearGradient id="rupee-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B2D5C" />
                  <stop offset="100%" stopColor="#2E86DE" />
                </linearGradient>
              </defs>
            </svg>

            {/* coin */}
            <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient shadow-brand">
              <span className="font-display text-2xl font-bold text-white">₹</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-1">
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              FundsOnTime
            </span>
            <span className="font-mono text-xs tabular-nums text-white/50">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </div>
      )}

      <div
        className={[
          "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          exiting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
}
