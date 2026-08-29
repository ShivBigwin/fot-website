const stats = [
  { value: "12L+", label: "Loans disbursed" },
  { value: "₹500Cr+", label: "Total payout" },
  { value: "4.6/5", label: "App store rating" },
  { value: "7 min", label: "Avg. approval time" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/5 bg-white">
      <div className="container-page grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="font-display text-2xl font-bold text-ink md:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
