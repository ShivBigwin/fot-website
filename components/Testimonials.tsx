import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The approval came through faster than I expected and the money was in my account the same evening. It genuinely felt effortless.",
    name: "Ananya R.",
    role: "Marketing Manager, Pune",
  },
  {
    quote:
      "As a freelancer I usually get turned away by lenders. FundsOnTime looked at my actual income pattern and approved me quickly.",
    name: "Vikram S.",
    role: "Freelance Designer, Bengaluru",
  },
  {
    quote:
      "I compared five apps before choosing FundsOnTime — the interest rate and processing fee were the most transparent by far.",
    name: "Farhan K.",
    role: "Software Engineer, Hyderabad",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Borrowers like you</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Trusted by over 12 lakh people
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl bg-cream p-7"
            >
              <div>
                <div className="flex gap-0.5 text-azure-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
