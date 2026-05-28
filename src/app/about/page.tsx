import { Reveal } from "@/components/Reveal";

const FEATURE_CARDS = [
  {
    label: "THE GEOGRAPHY & LEGACY",
    body: "Our transition to Devanahalli STRR Road marks a massive upscale expansion. We carry forward our highly-rated, social media favorite culinary heritage—from signature wood-fired pizzas to expert curated cocktails—preserving the core identity our loyal patrons adore.",
  },
  {
    label: "THE SKY ELEMENT",
    body: "Perched high above the city, our massive open-to-sky terrace and lush sky garden offer unobstructed, panoramic views of the horizon, beautifully capturing the transition from golden sunsets to starry midnight skies under a vast celestial canopy.",
  },
  {
    label: "THE CULINARY EDGE",
    body: "As a proudly chef-run destination, the culinary artistry takes center stage with a live, open-air BBQ kitchen firing up gourmet grills right on the terrace, ensuring your favorite global flavors are crafted to absolute perfection.",
  },
  {
    label: "THE VIBE & CELEBRATION",
    body: "The energy shifts seamlessly from tranquil nature to high-octane celebration. Transition effortlessly from an intimate, romantically elegant moonlit dinner to a vibrant night out amplified by dynamic DJ theme nights.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white pt-16 md:pt-24 pb-24 px-4 sm:px-8">
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        {/* ─── Executive Introduction Header ─── */}
        <Reveal>
          <div
            className="w-full p-8 md:p-14 mb-12 md:mb-16 text-center"
            style={{
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "30px",
              border: "1px solid #D4AF37",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-5">
              THE EVOLUTION OF LUNA365
            </h3>
            <p className="text-white text-base md:text-xl leading-relaxed max-w-4xl mx-auto tracking-wide">
              Loved across social media for our signature wood-fired pizzas, curated cocktails, and a romantically elegant moonlit vibe that perfects every photo, Luna365 is stepping into a grander dimension. We are moving from the city center to a massive, breathtaking new space on Devanahalli STRR Road, redefining premium dining into an immersive, nature-forward experience.
            </p>
          </div>
        </Reveal>

        {/* ─── Experiential Feature Grid ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "26px",
          }}
          className="max-sm:!grid-cols-1"
        >
          {FEATURE_CARDS.map((card, idx) => (
            <Reveal key={card.label} delay={0.15 * idx}>
              <div
                className="p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  border: "1px solid #D4AF37",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                <h4 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-5">
                  {card.label}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
