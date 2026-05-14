"use client";

import { motion } from "framer-motion";

/* ─── Review Data (15 Verified Reviews from luna_reviews.csv) ─── */
const REVIEWS = [
  {
    name: "Ashok Kumar",
    text: "Great experience celebrating my wife's Birthday! The staff was so helpful with the cake arrangements. My kids enjoyed a lot.",
    rating: 5,
    span: "md:col-span-2",
    highlight: "Birthday Celebrations",
  },
  {
    name: "Ranveer Malviya",
    text: "One of the best restaurants in the area. Great ambiance and the staff (especially Bharath) were extremely polite and sweet.",
    rating: 5,
    span: "",
    highlight: "Best in Area",
  },
  {
    name: "Shankar Debnath",
    text: "Very nice place for friends and family. Staff are welcoming, food tastes good, and there's a play area for kids.",
    rating: 5,
    span: "",
    highlight: "Family Friendly",
  },
  {
    name: "AKASH .V",
    text: "Excellent spot to relax. The hospitality is top-notch, and the ambiance is truly inviting. Memorable service from Mr. Niranjan!",
    rating: 5,
    span: "md:col-span-2",
    highlight: "Top-Notch Hospitality",
  },
  {
    name: "Suman Mondal",
    text: "Food and Ambiance Goals! It's like dining under the stars with the best global cuisines.",
    rating: 5,
    span: "",
    highlight: "Ambiance Goals",
  },
  {
    name: "Murali Krishna",
    text: "The food was very flavourful. Arya provided great food recommendations and excellent service.",
    rating: 5,
    span: "",
    highlight: "Flavourful Food",
  },
  {
    name: "Pradeep Badiger",
    text: "A wonderful experience! Delicious food, full of flavor, and very polite staff in a warm, inviting ambiance.",
    rating: 5,
    span: "",
    highlight: "Wonderful Experience",
  },
  {
    name: "Smitha V",
    text: "Loved the pepper chicken and Mexican Tres Leches. Excellent service from Bharat.",
    rating: 5,
    span: "",
    highlight: "Must-Try Dishes",
  },
  {
    name: "Vittal Shetty",
    text: "Beautiful and very unique multi-cuisine restaurant. The team is very friendly and professional.",
    rating: 5,
    span: "md:col-span-2",
    highlight: "Unique Multi-Cuisine",
  },
  {
    name: "Ashwin Bisoi",
    text: "Good food and good ambience. Excellent service rendered by Mr. Niranjan and Arya.",
    rating: 5,
    span: "",
    highlight: "Excellent Service",
  },
  {
    name: "Shruti Maheshwari",
    text: "Awesome food and decent prices. Great for a romantic date or family outing. Arya is a great entertainer!",
    rating: 5,
    span: "",
    highlight: "Date Night Perfect",
  },
  {
    name: "Poorva Tomar",
    text: "Mind-blowing food quality and quantity. Great ambience and the best staff (shoutout to Mr. Ramesh).",
    rating: 5,
    span: "",
    highlight: "Mind-Blowing Quality",
  },
  {
    name: "Robin Thomas",
    text: "Perfect dinner spot. Awesome food — the malai chicken tikka was mouthwatering!",
    rating: 5,
    span: "",
    highlight: "Mouthwatering",
  },
  {
    name: "Priya Madhavan",
    text: "Made our sister's anniversary memorable. The staff was humble and created a special table for us.",
    rating: 5,
    span: "md:col-span-2",
    highlight: "Anniversary Special",
  },
  {
    name: "Bablu Hussain",
    text: "A Foodie's Paradise! From North Indian to Pan-Asian, every dish tells a story. Must-try the signature cocktails!",
    rating: 5,
    span: "",
    highlight: "Foodie's Paradise",
  },
];

/* ─── Gold Star Icon ─── */
function GoldStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" style={{ fill: "#D4AF37" }}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/* ─── Single Review Card ─── */
function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative group h-full ${review.span}`}
      style={{
        background: "rgba(0,0,0,0.20)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "30px",
        border: "1px solid #D4AF37",
        boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
    >
      {/* Hover gold glow */}
      <div
        className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.05)",
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
        {/* Highlight tag */}
        <div className="mb-4">
          <span
            className="text-[8px] uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.25)",
              color: "#D4AF37",
            }}
          >
            {review.highlight}
          </span>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <GoldStar key={i} />
          ))}
        </div>

        {/* Review text */}
        <p className="text-white/80 text-sm md:text-base leading-relaxed italic flex-1">
          &quot;{review.text}&quot;
        </p>

        {/* Author */}
        <div className="mt-6 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
          {/* Avatar circle */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            style={{
              background: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
            }}
          >
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="font-semibold tracking-wide text-sm text-white block">{review.name}</span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase">Verified Guest</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Stats Banner ─── */
function StatsBanner() {
  const stats = [
    { value: "4.5", label: "Google Rating" },
    { value: "1200+", label: "Reviews" },
    { value: "98%", label: "Recommend" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-4xl font-serif" style={{ color: "#D4AF37" }}>
            {stat.value}
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

/* ─── Main Buzz Page ─── */
export default function BuzzPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="text-center mb-16 relative"
      >
        <p className="text-sm md:text-base text-white/50 italic max-w-2xl mx-auto leading-relaxed">
          Real voices from our celestial guests — every review a testament to the Luna 365 experience.
        </p>
      </motion.div>

      {/* Stats */}
      <StatsBanner />

      {/* Bento Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
        {REVIEWS.map((review, idx) => (
          <ReviewCard key={review.name} review={review} index={idx} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-24 overflow-hidden text-center"
        style={{
          borderRadius: "30px",
          border: "1px solid rgba(212,175,55,0.2)",
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="relative z-10 p-12 md:p-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ color: "#D4AF37" }}>
            Your Story Awaits
          </h2>
          <div className="h-px w-24 gold-gradient-bg mx-auto mb-8 opacity-60" />
          <p className="text-gray-400 leading-relaxed mb-10">
            Join thousands of guests who have made Luna 365 their celestial escape.
            Every visit is a new chapter in our story — and yours.
          </p>
          <a
            href="/reserve"
            className="inline-block champagne-btn px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Reserve Your Table
          </a>
        </div>
      </motion.div>
    </div>
  );
}
