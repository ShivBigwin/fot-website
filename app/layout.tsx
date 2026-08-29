import type { Metadata } from "next";

// Self-hosted fonts (no external network fetch at build time)
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";

import "./globals.css";
import LoaderProvider from "@/components/LoaderProvider";

export const metadata: Metadata = {
  title: "FundsOnTime — Instant Personal Loans up to ₹5 Lakh",
  description:
    "FundsOnTime gets you instant personal loans up to ₹5 Lakh with 100% digital KYC, transparent pricing and same-day disbursal. Powered by Tristar Fincon & Credit Pvt. Ltd, an RBI-registered NBFC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-ink antialiased">
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
