import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";
import {
  LegalToc,
  LegalSections,
  type LegalSection,
} from "@/components/LegalToc";

export const metadata: Metadata = {
  title: "Privacy Policy | FundsOnTime",
  description:
    "How FundsOnTime collects, uses, shares and protects your personal information across the loan application journey.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          FundsOnTime (&ldquo;FundsOnTime&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a digital loan facilitation platform that
          connects eligible customers with our RBI-registered Non-Banking
          Financial Company (NBFC) partner, RAJVIR SECURITIES AND FINANCE PVT.
          LTD.. This Privacy Policy explains what personal information we
          collect when you use our website or app, how we use it, who we share
          it with, and the choices you have.
        </p>
        <p>
          By using FundsOnTime, you agree to the collection and use of
          information in accordance with this policy. If you do not agree,
          please do not use our services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect information in three ways:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">You provide directly</span>
            {" — "}name, mobile number, email, date of birth, address,
            employment and income details, PAN, Aadhaur number, and bank account
            information submitted during onboarding or KYC.
          </li>
          <li>
            <span className="font-medium text-ink">
              Collected automatically
            </span>
            {" — "}device identifiers, IP address, app usage patterns, log
            files, and location (if permission is granted) used to secure your
            account and improve the product.
          </li>
          <li>
            <span className="font-medium text-ink">
              Received from third parties
            </span>
            {" — "}credit bureau reports, bank statement analysis, and
            verification results from our KYC and fraud-check partners.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>To verify your identity and assess loan eligibility.</li>
        <li>
          To process your application, disburse approved loans, and manage
          repayments.
        </li>
        <li>
          To communicate updates about your application, or account via SMS,
          email, WhatsApp, or push notification.
        </li>
        <li>
          To detect and prevent fraud, and to comply with legal and regulatory
          obligations.
        </li>
        <li>
          To improve our products, run analytics, and personalize your
          experience on the app and website.
        </li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "How we share your information",
    body: (
      <>
        <p>
          We share information only where necessary to deliver the service or
          where required by law:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Lending partner</span>
            {" — "}RAJVIR SECURITIES AND FINANCE PVT. LTD., the RBI-registered
            NBFC that sanctions and disburses your loan, receives the details
            needed to underwrite and service it.
          </li>
          <li>
            <span className="font-medium text-ink">Credit bureaus</span>
            {" — "}your loan and repayment data is reported to bureaus such as
            CIBIL, Experian, Equifax and CRIF as mandated by RBI regulation.
          </li>
          <li>
            <span className="font-medium text-ink">Service providers</span>
            {" — "}KYC verification, payment processing, cloud hosting and
            customer support vendors, bound by confidentiality obligations.
          </li>
          <li>
            <span className="font-medium text-ink">
              Regulators and law enforcement
            </span>
            {" — "}when required under applicable law, court order, or
            regulatory directive.
          </li>
        </ul>
        <p>
          We never sell your personal information to third parties for marketing
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data security",
    body: (
      <p>
        We use encryption in transit and at rest, role-based access controls,
        and regular security audits to protect your information. Sensitive
        identifiers such as PAN and Aadhaar are stored in encrypted form and
        accessed only by authorized systems for KYC verification. While we work
        to protect your data, no method of transmission or storage is 100%
        secure, and we encourage you to keep your login credentials
        confidential.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Access and download a copy of the personal data we hold about you.
        </li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>
          Withdraw consent for marketing communications at any time via the app
          settings or by contacting support.
        </li>
        <li>
          Request deletion of your data, subject to statutory retention
          requirements applicable to lending records.
        </li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <p>
        Our website uses cookies and similar technologies to keep you signed in,
        remember your preferences, and understand how the site is used. You can
        control cookies through your browser settings; disabling them may limit
        some features of the site.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We retain personal and loan-related information for as long as your
        account is active and thereafter for the period required under RBI
        guidelines, applicable tax and accounting laws, and to resolve disputes
        or enforce our agreements — typically up to 8 years after loan closure.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        FundsOnTime is intended for individuals aged 18 and above. We do not
        knowingly collect personal information from anyone under 18. If we
        become aware that we have, we will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of material
        changes through the app or by email, and the &ldquo;last updated&rdquo;
        date at the top of this page will always reflect the most recent
        version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        For questions about this policy or to exercise your data rights, write
        to our Data Protection Officer at{" "}
        <a
          href="mailto:privacy@fundsontime.in"
          className="font-medium text-azure-600 underline underline-offset-2"
        >
          privacy@fundsontime.in
        </a>{" "}
        or reach our support team through the in-app chat.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <LegalHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="We know a loan application means sharing sensitive information. Here's exactly what we collect, why, and how it's protected."
        updated="August 27, 2026"
      />
      <div className="container-page grid gap-12 py-16 md:grid-cols-[260px_1fr] md:py-24">
        <LegalToc sections={sections} />
        <LegalSections sections={sections} />
      </div>
      <Footer />
    </main>
  );
}
