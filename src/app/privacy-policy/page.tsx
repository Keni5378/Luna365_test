import { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="w-full p-8 md:p-10"
      style={{
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "30px",
        border: "1px solid rgba(212,175,55,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        className="text-lg md:text-2xl font-serif mb-4 uppercase tracking-wider"
        style={{ color: "#D4AF37" }}
      >
        {title}
      </h2>
      <div className="text-white/80 text-sm md:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      <Section title="Platform Scope">
        <p>
          Luna 365 operates strictly as an informational and booking platform. No payments or
          financial transactions are executed or processed on this website. The platform serves
          exclusively to provide prospective guests with details regarding our venue, menu, bar
          offerings, and the ability to request table reservations.
        </p>
        <p>
          Any booking confirmation communicated through our platform is a preliminary reservation
          request and does not constitute a binding contract until confirmed by our reception team
          via the designated contact channels.
        </p>
      </Section>

      <Section title="Data Collection">
        <p>
          We limit data collection to the minimum necessary for operational purposes: guest names
          and phone numbers. These fields are gathered purely for booking validation and
          communication regarding reservation status.
        </p>
        <p>
          Data is collected exclusively through the Queries Desk at{" "}
          <span style={{ color: "#D4AF37" }}>7204012323</span> and Reception at{" "}
          <span style={{ color: "#D4AF37" }}>7204032323</span>. No sensitive financial data,
          government identifiers, or biometric information is requested, stored, or processed at any
          point during the guest interaction lifecycle.
        </p>
      </Section>

      <Section title="Data Safeguards">
        <p>
          Internal reservation lists are shielded using AES-256 local field encryption protocols,
          ensuring that guest information remains protected from external breaches or perimeter
          system vulnerabilities. This encryption standard is applied at rest across all internal
          databases housing guest contact fields.
        </p>
        <p>
          Access to decrypted data is restricted to authorised personnel only, and routine security
          audits are conducted to maintain the integrity of the encryption infrastructure. Luna 365
          does not share, sell, or lease collected data to third parties under any circumstances.
        </p>
      </Section>
    </div>
  );
}
