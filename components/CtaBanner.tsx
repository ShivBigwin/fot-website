import { Apple, PlayCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="apply" className="container-page pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-center md:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        />

        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Your loan is a few taps away
          </h2>
          <p className="mt-4 text-white/60">
            Download the FundsOnTime app and check your eligibility in under a
            minute — it won't affect your credit score.
          </p>

          <div className="inline-flex gap-2 mt-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <img
                src="/app-store.jpg"
                alt="Download on App Store"
                className="h-12 w-auto rounded-xl"
              />
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <img
                src="/google-play.jpg"
                alt="Download on Google Play"
                className="h-12 w-auto rounded-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
