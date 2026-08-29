const steps = [
  {
    num: "01",
    title: "Check eligibility",
    desc: "Enter your mobile number and basic details to see your loan offer in seconds — no impact on your credit score.",
  },
  {
    num: "02",
    title: "Complete digital KYC",
    desc: "Upload Aadhaar, PAN and 3 months of bank statements. Our system verifies everything instantly.",
  },
  {
    num: "03",
    title: "Get approved",
    desc: "Review your sanctioned amount, interest rate and tenure. E-sign the agreement from your phone.",
  },
  {
    num: "04",
    title: "Receive funds",
    desc: "Money is disbursed directly to your bank account, usually within 7 minutes of approval.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container-page py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <span className="eyebrow">The process</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl text-balance">
            From application to bank transfer in four steps
          </h2>
          <p className="mt-4 text-ink-500">
            The entire journey happens on your phone — designed to take less
            time than your coffee break.
          </p>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-ink/10 pl-8">
          {steps.map((step) => (
            <li key={step.num} className="relative">
              <span className="absolute -left-[2.55rem] flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-mono text-xs font-semibold text-white shadow-brand">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-500">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
