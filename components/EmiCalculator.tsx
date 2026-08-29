"use client";

import { useMemo, useState } from "react";

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(75000);
  const [tenure, setTenure] = useState(12);
  const [rate, setRate] = useState(11.5);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const n = tenure;
    const emiValue =
      monthlyRate === 0
        ? amount / n
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    const total = emiValue * n;
    return {
      emi: emiValue,
      totalPayment: total,
      totalInterest: total - amount,
    };
  }, [amount, tenure, rate]);

  return (
    <section id="calculator" className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Plan ahead</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          See your EMI before you apply
        </h2>
        <p className="mt-3 text-ink-500">
          Move the sliders to match what you need — the numbers update instantly.
        </p>
      </div>

      <div className="mt-12 grid gap-8 rounded-4xl bg-white p-6 shadow-card md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="flex flex-col justify-center gap-8">
          <SliderRow
            label="Loan amount"
            value={formatINR(amount)}
            min={5000}
            max={500000}
            step={5000}
            onChange={setAmount}
            current={amount}
            minLabel="₹5,000"
            maxLabel="₹5,00,000"
          />
          <SliderRow
            label="Tenure"
            value={`${tenure} months`}
            min={3}
            max={60}
            step={1}
            onChange={setTenure}
            current={tenure}
            minLabel="3 mo"
            maxLabel="60 mo"
          />
          <SliderRow
            label="Interest rate (p.a.)"
            value={`${rate.toFixed(1)}%`}
            min={10}
            max={28}
            step={0.5}
            onChange={setRate}
            current={rate}
            minLabel="10%"
            maxLabel="28%"
          />
        </div>

        <div className="flex flex-col justify-between rounded-[1.75rem] bg-ink p-7 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
              Your monthly EMI
            </span>
            <div className="mt-2 font-display text-4xl font-bold tabular-nums">
              {formatINR(emi)}
            </div>
          </div>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            <Row label="Principal" value={formatINR(amount)} />
            <Row label="Total interest" value={formatINR(totalInterest)} />
            <Row label="Total payment" value={formatINR(totalPayment)} accent />
          </div>

          <a
            href="#apply"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
          >
            Apply for this amount
          </a>
        </div>
      </div>

      <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink-500/70">
        Indicative figures only. Final interest rate and EMI depend on your credit
        profile and are confirmed by our lending partner, Tristar Fincon &
        Credit Pvt. Ltd, before disbursal.
      </p>
    </section>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  const pct = ((current - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink-500">{label}</span>
        <span className="font-mono text-lg font-semibold text-ink tabular-nums">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="brand-range mt-3 w-full"
        style={{
          background: `linear-gradient(to right, #0B2D5C 0%, #2E86DE ${pct}%, #E3EBF3 ${pct}%, #E3EBF3 100%)`,
        }}
        aria-label={label}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-ink-500/60">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className={accent ? "font-semibold text-azure-100" : "text-white/80"}>
        {value}
      </span>
    </div>
  );
}
