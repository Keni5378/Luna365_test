"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

/* ─── Scroll-Reveal Section ─── */
function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="w-full">
      {children}
    </motion.div>
  );
}

/* ─── Vertical Directory Data ─── */
const DIRECTORY_ITEMS = [
  {
    label: "THE HERITAGE",
    page: "About",
    description: "A legacy of flavor since 1947.",
    href: "/about",
  },
  {
    label: "THE KITCHEN",
    page: "Menu",
    description: "From Tandoor Artistry to Global Cuisines.",
    href: "/menu",
  },
  {
    label: "THE BAR",
    page: "Bar",
    description: "Crafted cocktails and premium single malts.",
    href: "/bar",
  },
  {
    label: "THE GALLERY",
    page: "Gallery",
    description: "A visual journey through our celestial escape.",
    href: "/gallery",
  },
  {
    label: "THE BUZZ",
    page: "The Buzz",
    description: "15 authentic stories of starlit dining.",
    href: "/buzz",
  },
  {
    label: "THE COORDINATES",
    page: "Location",
    description: "Find us in the heart of NRI Layout.",
    href: "/location",
  },
  {
    label: "SECURE A TABLE",
    page: "Reserve",
    description: "Your premium escape awaits.",
    href: "/reserve",
  },
];

/* ─── Single Directory Box (Vertical, Full-Width) ─── */
function DirectoryBox({ item, index }: { item: typeof DIRECTORY_ITEMS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link href={item.href} className="block group">
        <div
          className="relative overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.20)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "30px",
            border: "1px solid rgba(212,175,55,0.3)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        >
          {/* Hover gold glow */}
          <div
            className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              boxShadow: "0 0 50px rgba(212,175,55,0.15), inset 0 0 30px rgba(212,175,55,0.05)",
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Gold pulse on scroll-in */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.95 }}
            whileInView={{ opacity: 0, scale: 1.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="absolute inset-0 rounded-[30px] pointer-events-none"
            style={{ border: "2px solid rgba(212,175,55,0.35)" }}
          />

          <div className="relative z-10 px-8 py-7 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left: Title + Description */}
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <h3
                  className="text-lg md:text-xl font-serif uppercase tracking-wider group-hover:text-white transition-colors duration-300"
                  style={{ color: "#D4AF37" }}
                >
                  {item.label}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {item.page}
                </span>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Right: Arrow */}
            <div className="flex items-center gap-2 shrink-0">
              <span
                className="text-xs uppercase tracking-[0.2em] font-bold"
                style={{ color: "#D4AF37" }}
              >
                Explore
              </span>
              <motion.span
                className="text-lg"
                style={{ color: "#D4AF37" }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Royal Footer (Landing Page version) ─── */
function LandingFooter() {
  return (
    <div className="relative z-10 mt-8 px-4 sm:px-8 pb-16">
      <div
        className="max-w-4xl mx-auto"
        style={{
          background: "rgba(0,0,0,0.20)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "30px",
          borderTop: "2px solid #D4AF37",
          border: "1px solid rgba(212,175,55,0.3)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div className="px-8 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Address */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#D4AF37" }}>
                📍 Address
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Luna 365, NRI Layout,<br />
                Bangalore - 560016
              </p>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#D4AF37" }}>
                📞 Contact
              </h4>
              <p className="text-white text-sm leading-relaxed">
                +91 96209 01303
              </p>
              <p className="text-white text-sm leading-relaxed">
                ✉️ luna365@gmail.com
              </p>
            </div>
            {/* Hours */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#D4AF37" }}>
                🕐 Hours
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Open Daily<br />
                12:00 PM – 12:00 AM
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
              © 2025 Luna 365 Bar and Kitchen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Frame Sequence Constants ─── */
const FRAME_COUNT = 240;

/* ─── Main Landing Page ─── */
export default function Home() {
  const containerRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [, setProgress] = useState(0);

  // Force body height to 500vh explicitly for scroll-real-estate
  useEffect(() => {
    document.body.style.height = "500vh";
    return () => {
      document.body.style.height = "";
    };
  }, []);

  // Preload JPG Image Sequence
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/landing_animation/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Responsive Canvas Sizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth Scroll-Scrub Logic (Optimized for Desktop & Mobile)
  useEffect(() => {
    if (!imagesLoaded) return;

    let rafId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    };

    const updateFrame = () => {
      // Smooth Lerping with improved smoothness (1.5s feel)
      currentProgress += (targetProgress - currentProgress) * 0.08;
      setProgress(currentProgress);

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(currentProgress * FRAME_COUNT))
      );

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[frameIndex];
      
      if (ctx && canvas && img) {
        // DrawImage with aspect-fill logic
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      rafId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    rafId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative bg-transparent text-white min-h-[500vh]">
      {/* Responsive Canvas with Centered Logic */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        style={{ willChange: "transform" }}
      />
      
      {/* Celestial Grid Overlay */}
      <div className="fixed inset-0 z-[-5] pointer-events-none celestial-grid opacity-10 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[120vh] px-4 -mt-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="text-gold-500 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-medium"
        >
          Bangalore • Est. 2019
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif text-center tracking-wide mb-10 px-4 leading-tight"
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
        >
          Where Night <br className="hidden md:block"/> Meets Flavor
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <a
            href="/reserve"
            className="champagne-btn px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-base uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(212,175,55,0.3)] inline-block"
          >
            Reserve A Table
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="mt-20 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest animate-pulse absolute bottom-12"
        >
          Scroll to explore
        </motion.div>
      </div>

      {/* ─── Vertical Directory Sequence ─── */}
      <div className="relative z-10 px-4 sm:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <RevealSection>
            <div className="text-center mb-16">
              <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-4">
                Explore Luna 365
              </h3>
              <h2 className="text-2xl md:text-5xl font-serif mb-6 leading-snug">
                Your Celestial Directory
              </h2>
              <div className="w-12 md:w-16 h-1 gold-gradient-bg mx-auto rounded-full"></div>
            </div>
          </RevealSection>

          {/* Single-column vertical directory */}
          <div className="flex flex-col gap-5">
            {DIRECTORY_ITEMS.map((item, idx) => (
              <DirectoryBox key={item.label} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* Tandoor Artistry Section */}
      <div className="relative z-10 h-[100vh] md:h-[120vh] flex items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm">
        <RevealSection>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-4">The Tandoor Artistry</h3>
            <h2 className="text-2xl md:text-5xl font-serif mb-8 leading-snug">
              Mastered over glowing embers, featuring the legendary Sabuta Chooza and delicate Peshawari Paneer Tikka.
            </h2>
            <div className="w-12 md:w-16 h-1 gold-gradient-bg mx-auto rounded-full"></div>
          </div>
        </RevealSection>
      </div>

      {/* Signature Sips Section */}
      <div className="relative z-10 h-[120vh] md:h-[130vh] flex items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm">
        <RevealSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-4">Signature Sips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
              <div className="glass-pill p-6 md:p-8 rounded-3xl border border-[#D4AF37]/20">
                <h4 className="text-xl md:text-2xl font-serif text-gold-400 mb-2">Ocean&apos;s Flame</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">A mesmerizing blend of blue curacao and white rum. A true spectacle of celestial mixology.</p>
              </div>
              <div className="glass-pill p-6 md:p-8 rounded-3xl border border-[#D4AF37]/20">
                <h4 className="text-xl md:text-2xl font-serif text-gold-400 mb-2">Jamugi</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">Our secret house infusion—smoky and complex. Inspired by deep lunar craters.</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* The Lunar Vibe Section */}
      <div className="relative z-10 h-[100vh] md:h-[110vh] flex items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center glass-pill p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-[#D4AF37]/10">
            <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-6">The Lunar Vibe</h3>
            <h2 className="text-2xl md:text-5xl font-serif mb-6 md:mb-8 text-white">
              A premium escape in NRI Layout
            </h2>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
              Join us from <span className="text-gold-500">12:00 PM to 12:00 AM</span>. An atmosphere meticulously curated for those who appreciate the night.
            </p>
            <a href="/location" className="text-gold-500 hover:text-white uppercase tracking-widest text-xs transition-colors border-b border-gold-500 pb-1">
              View Location
            </a>
          </div>
        </RevealSection>
      </div>

      {/* ─── Landing Page Footer ─── */}
      <LandingFooter />
    </div>
  );
}
