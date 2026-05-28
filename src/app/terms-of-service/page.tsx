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

export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      <Section title="Venue Ground Rules">
        <p>
          All platform terms, conditions, and operational policies are formally bound to the
          physical venue located at <strong className="text-white">Emporia Comforts, No 804/49/6 STRR Road, Service Road, next to
          Sujay Feeds, Devanahalli, Karnataka 562110</strong>. By accessing this platform or visiting
          the premises, guests acknowledge and agree to abide by the rules and regulations set forth
          herein.
        </p>
        <p>
          Luna 365 reserves the right to refuse service to any individual who fails to comply with
          venue policies, including but not limited to dress code standards, conduct expectations, and
          statutory age requirements.
        </p>
      </Section>

      <Section title="Bar Compliance">
        <p>
          The ingestion of bar menu assets — including but not limited to cocktails such as
          Ocean&apos;s Flame, Jamugi, single malts, shooters, wines, and beers — requires the
          presentation of legitimate government-issued photographic identification at the reception
          desk prior to service.
        </p>
        <p>
          Accepted forms of identification include Aadhaar card, Voter ID, Passport, or Driver&apos;s
          License. Digital copies displayed on mobile devices are not accepted. All guests must
          fulfill the Karnataka statutory drinking age minimums as prescribed by applicable law.
          Service will be denied to any guest who cannot produce valid identification.
        </p>
      </Section>

      <Section title="Booking Execution">
        <p>
          Table placements are available during operational hours from{" "}
          <span style={{ color: "#D4AF37" }}>12:00 PM to 12:00 AM</span>. Upon arrival, guests are
          requested to check in at the reception desk, at which point the table is held for a fixed
          grace period.
        </p>
        <p>
          Each reservation features a fixed <span style={{ color: "#D4AF37" }}>15-minute grace
          expiration countdown</span> commencing at the scheduled booking time. If the guest has
          not checked in within this window, the seating grid unlinks automatically to clear room for
          walk-in guests. Late arrivals may be accommodated on a best-effort basis subject to table
          availability.
        </p>
      </Section>
    </div>
  );
}
