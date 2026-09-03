import Image from "next/image";
const columns = [
  {
    title: "Product",
    links: [
      { label: "EMI calculator", href: "/#calculator" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Eligibility", href: "/#why" },
      { label: "Interest rates", href: "/policies#interest-and-fees" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/aboutUs" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "/contactUs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Loan guide", href: "#" },
      { label: "Credit score tips", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Grievance redressal", href: "/policies#grievance-redressal" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Policies", href: "/policies" },
      { label: "Fair practice code", href: "/policies#fair-practice-code" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            {/* <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-base font-bold text-white">
                ₹
              </span>
              <span className="font-display text-lg font-bold text-ink">
                FundsOnTime
              </span>
            </a> */}
            <a href="#top" className="flex items-center gap-2">
              <Image
                src="/logo-funds.png"
                alt="FundsOnTime Logo"
                width={150} // h-9 = 36px
                height={60} // w-9 = 36px
                className="rounded-xl object-contain"
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              FundsOnTime is a digital loan facilitation platform that partners
              with RAJVIR SECURITIES AND FINANCE PVT. LTD., an RBI-registered
              Non-Banking Financial Company, to offer personal loans to eligible
              customers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-ink">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-500 transition-colors hover:text-azure-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-ink/8 pt-8">
          <p className="text-xs leading-relaxed text-ink-500/80">
            FundsOnTime loans are sanctioned and disbursed by Rajvir Securities
            And Finance Pvt. Ltd., an RBI-registered NBFC lending partner, in
            accordance with the Reserve Bank of India's Digital Lending
            Guidelines. Interest rates range from 0.5% to 1.0% per day based on
            credit profile. Loan amount, tenure and rate shown are indicative
            and subject to lender approval. FundsOnTime is a facilitation
            platform and does not itself lend money.
          </p>
          <p className="mt-4 text-xs text-ink-500/60">
            © {new Date().getFullYear()} FundsOnTime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
