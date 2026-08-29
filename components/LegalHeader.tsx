export default function LegalHeader({
  eyebrow,
  title,
  description,
  updated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink/8 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-brand-gradient-soft blur-3xl"
      />
      <div className="container-page relative py-16 md:py-20">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl text-balance">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
          {description}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ice px-4 py-1.5 text-xs font-medium text-azure-600">
          Last updated: {updated}
        </div>
      </div>
    </div>
  );
}
