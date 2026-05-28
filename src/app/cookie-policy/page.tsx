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

export default function CookiePolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      <Section title="Functional Scripts">
        <p>
          Luna 365 deploys essential functional cookies required to preserve user state navigation
          across internal tabs without incurring loading delays. These cookies are strictly necessary
          for the operation of the platform and enable core functionality such as session
          persistence, page transition state, and navigation history.
        </p>
        <p>
          These scripts do not track user behaviour across external domains, nor do they compile
          personal profiles. They are session-based and are automatically cleared upon closing the
          browser unless a persistent preference is explicitly saved by the user.
        </p>
      </Section>

      <Section title="UI Performance">
        <p>
          To deliver a seamless visual experience, Luna 365 employs hardware-acceleration
          optimisation cookies that allow heavy graphical elements — such as the drifting galaxy
          background images — to render smoothly. These cookies enable the parallax rendering engine
          to maintain a consistent{" "}
          <span style={{ color: "#D4AF37" }}>0.15 parallax factor</span> without dropping frames
          during scroll interaction.
        </p>
        <p>
          The performance cookies do not collect personally identifiable information. They are
          limited to device-level rendering parameters such as GPU vendor, screen refresh rate, and
          viewport dimensions, used exclusively to tailor the graphical output to the capabilities of
          the user&apos;s device.
        </p>
        <p>
          By continuing to browse Luna 365, you consent to the deployment of these functional and
          performance-optimisation cookies as described herein.
        </p>
      </Section>
    </div>
  );
}
