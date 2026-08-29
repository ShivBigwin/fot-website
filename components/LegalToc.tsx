export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalToc({ sections }: { sections: LegalSection[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-ink/8 bg-white p-6 md:block"
    >
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500/70">
        On this page
      </span>
      <ul className="mt-4 space-y-1">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="flex items-baseline gap-2.5 rounded-lg px-2.5 py-2 text-sm text-ink-500 transition-colors hover:bg-cream hover:text-azure-600"
            >
              <span className="font-mono text-[11px] text-azure-500/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-semibold text-azure-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
              {s.title}
            </h2>
          </div>
          <div className="mt-4 space-y-4 pl-0 text-sm leading-relaxed text-ink-500 md:pl-8">
            {s.body}
          </div>
        </section>
      ))}
    </div>
  );
}
