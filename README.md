# FundsOnTime

A modern fintech landing page (Next.js 14 App Router + Tailwind CSS) for an
instant-personal-loan brand called **FundsOnTime**, lending in partnership
with **RAJVIR SECURITIES AND FINANCE PVT. LTD.** (RBI-registered NBFC). Structure is
modeled on the ZapCash personal-loan page (hero → trust bar → EMI calculator
→ features → how-it-works → testimonials → FAQ → app CTA → footer), in a
navy blue brand palette:

- `#0B2D5C` (navy)
- `#2E86DE` (azure)

## Signature element

A full-screen animated loader plays on first load: a gradient progress ring
draws itself around a spinning ₹ coin while a live percentage counts up in a
monospace font, then wipes away to reveal the page. The same coin/gradient
language reappears in the hero's animated "loan approval" card.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Fonts (self-hosted via @fontsource, no external fetch), metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind layers, custom range-slider styling
components/
  LoaderProvider.tsx Full-screen loader + page reveal transition
  Navbar.tsx
  Hero.tsx           Headline + animated loan-status card
  TrustBar.tsx
  EmiCalculator.tsx  Interactive EMI sliders (amount / tenure / rate)
  Features.tsx        "Why FundsOnTime" grid
  HowItWorks.tsx      4-step process
  Testimonials.tsx
  Faq.tsx             Accordion
  CtaBanner.tsx        App download CTA
  Footer.tsx           Links + regulatory disclosure
```

## Customizing

- **Colors / fonts / gradients**: `tailwind.config.ts` (`navy`, `azure`,
  `ink`, `cream`, `ice`, and the `brand-gradient*` background images).
- **Copy**: each section's data lives in a small array/object at the top of
  its component file (`features`, `steps`, `testimonials`, `faqs`, etc.) —
  edit directly, no need to touch markup.
- **Loader duration**: `duration` constant in `components/LoaderProvider.tsx`.

## Notes

- All fonts (Sora, Inter, IBM Plex Mono) are self-hosted via `@fontsource/*`
  packages rather than fetched from Google Fonts at build time, so builds
  work reliably in network-restricted environments (CI, sandboxes, offline).
- The NBFC partner name (RAJVIR SECURITIES AND FINANCE PVT. LTD.), RBI registration
  number, and legal copy in the footer/policies/privacy pages should be
  double-checked against your actual regulatory filings before shipping —
  in particular, add the real RBI Certificate of Registration number
  wherever "RBI-registered NBFC" is mentioned.
