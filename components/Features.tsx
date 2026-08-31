import {
  Clock,
  ShieldCheck,
  PiggyBank,
  Smartphone,
  TrendingUp,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "7 minute disbursal",
    desc: "Once approved, funds hit your bank account the same day — no waiting on branch hours.",
  },
  {
    icon: Smartphone,
    title: "100% digital KYC",
    desc: "Verify identity with Aadhaar and PAN in the app. No physical documents, ever.",
  },
  {
    icon: PiggyBank,
    title: "Transparent pricing",
    desc: "Rates and processing fees are shown upfront. No prepayment penalty after 6 months.",
  },
  {
    icon: TrendingUp,
    title: "Flexible tenure",
    desc: "Repay anywhere from 7 to 60 days that fits your income.",
  },
  {
    icon: ShieldCheck,
    title: "RBI-registered lending",
    desc: "Every loan is sanctioned by Tristar Fincon & Credit Pvt. Ltd, our RBI-registered NBFC partner, under the RBI's Digital Lending Guidelines.",
  },
  {
    icon: Headphones,
    title: "Human support",
    desc: "Real people on chat and phone if you ever have a question about your loan.",
  },
];

export default function Features() {
  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Why FundsOnTime</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Built for how you actually borrow
          </h2>
          <p className="mt-3 text-ink-500">
            No branch visits, no runaround. Just a fast, honest way to get money
            when you need it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-ink/5 bg-cream p-7 transition-all hover:-translate-y-1 hover:border-azure-500/30 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand transition-transform group-hover:scale-105">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
