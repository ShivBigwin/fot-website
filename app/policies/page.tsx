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
  title: "Policies | FundsOnTime",
  description:
    "FundsOnTime's Fair Practice Code, interest rate policy, KYC standards, grievance redressal mechanism and other lending policies.",
};

const sections: LegalSection[] = [
  {
    id: "fair-practice-code",
    title: "Fair Practice Code",
    body: (
      <>
        <p>
          FundsOnTime facilitates loans through our lending partner, Tristar
          Fincon & Credit Pvt. Ltd, an RBI-registered NBFC that follows the Fair
          Practice Code prescribed by the Reserve Bank of India. We commit to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Communicating loan terms in clear, simple language before you accept
            an offer.
          </li>
          <li>
            Never using coercive or misleading methods during sourcing,
            servicing or recovery.
          </li>
          <li>
            Disclosing all fees, charges and interest rates upfront, with no
            hidden costs.
          </li>
          <li>
            Treating every applicant fairly, regardless of gender, religion,
            caste or disability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "interest-and-fees",
    title: "Interest rate & fee policy",
    body: (
      <>
        <p>
          Interest rates are risk-based and determined by Tristar Fincon &
          Credit Pvt. Ltd using your credit score, income, repayment history and
          loan tenure.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Interest rate range:Between 0.5% to 1% per day.</li>
          <li>Late payment charges:Bounce charge up to 1000 after due date.</li>
          <li>Loan Tenure :Between 91 to 365 days </li>
          <li>Processing fees:Upto 10% of loan amount.</li>
        </ul>
        <p>
          The exact rate and fee applicable to your loan are shown before you
          e-sign the agreement, and never change after disbursal.
        </p>
      </>
    ),
  },
  {
    id: "kyc-and-compliance",
    title: "KYC & digital lending compliance",
    body: (
      <p>
        All loans on FundsOnTime are processed in accordance with the
        RBI&rsquo;s Digital Lending Guidelines. We collect and verify PAN,
        Aadhaar and bank statement information solely for identity verification
        and creditworthiness assessment. A Key Fact Statement summarizing the
        annual percentage rate, fees and recovery terms is provided before every
        loan disbursal, and the loan agreement is available for download at any
        time from your account.
      </p>
    ),
  },
  {
    id: "disbursal-and-recovery",
    title: "Loan disbursal & recovery policy",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Approved funds are disbursed directly to your verified bank account,
          never to a third party.
        </li>
        <li>
          Recovery is done via auto-debit (NACH mandate) on the due date agreed
          at disbursal.
        </li>
        <li>
          Recovery calls or visits, if ever required, take place only between
          8:00 AM and 7:00 PM and are handled by identified, RBI-compliant
          agents.
        </li>
        <li>
          Loan accounts more than 90 days past due may be reported to credit
          bureaus and referred for recovery in line with the loan agreement.
        </li>
      </ul>
    ),
  },
  {
    id: "grievance-redressal",
    title: "Grievance redressal mechanism",
    body: (
      <>
        <p>
          If something doesn&rsquo;t go as expected, here&rsquo;s how to reach
          us, in order of escalation:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">In-app support</span>
            {" — "}chat with our support team; most issues are resolved within
            24 hours.
          </li>
          <li>
            <span className="font-medium text-ink">Grievance officer</span>
            {" — "}email{" "}
            <a
              href="mailto:grievance@fundsontime.in"
              className="font-medium text-azure-600 underline underline-offset-2"
            >
              grievance@fundsontime.in
            </a>{" "}
            with your loan ID; we respond within 3 working days and resolve
            within 15.
          </li>
          <li>
            <span className="font-medium text-ink">NBFC nodal officer</span>
            {" — "}if unresolved, escalate directly to the nodal officer at
            Tristar Fincon & Credit Pvt. Ltd, whose contact details are shared
            in your loan agreement.
          </li>
          <li>
            <span className="font-medium text-ink">RBI Ombudsman</span>
            {" — "}as a final step, you may approach the RBI Integrated
            Ombudsman Scheme at{" "}
            <span className="font-medium text-ink">cms.rbi.org.in</span>.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "cancellation-and-refunds",
    title: "Cancellation & refund of processing fee",
    body: (
      <p>
        You may cancel a sanctioned but undisbursed loan free of charge within
        24 hours of approval. Once funds are disbursed, standard foreclosure
        terms apply. Processing fees are non-refundable once a loan has been
        disbursed, except where a fee was charged in error, in which case it is
        refunded within 7 working days of the error being confirmed.
      </p>
    ),
  },
  {
    id: "communication-policy",
    title: "Communication policy",
    body: (
      <p>
        We contact you only through the channels you&rsquo;ve verified — SMS,
        email, WhatsApp and in-app notifications — for application updates, EMI
        reminders and service alerts. You can manage marketing communication
        preferences from your account settings at any time. See our{" "}
        <a
          href="/privacy"
          className="font-medium text-azure-600 underline underline-offset-2"
        >
          Privacy Policy
        </a>{" "}
        for how we handle the data behind these communications.
      </p>
    ),
  },
];

export default function PoliciesPage() {
  return (
    <main>
      <Navbar />
      <LegalHeader
        eyebrow="Legal"
        title="Our Policies"
        description="Fair Practice Code, pricing, KYC compliance and grievance redressal — the rules FundsOnTime and Tristar Fincon & Credit Pvt. Ltd hold themselves to."
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
