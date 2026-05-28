"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { GlobalFooter } from "@/components/GlobalFooter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "@/utils/supabaseClient";

gsap.registerPlugin(ScrollTrigger);

/* ─── Frame Sequence Constants ─── */
const FRAME_COUNT = 240;
const FRAME_PATH = "/confirm-scroll/frame_";

/* ─── Scroll-Reveal Section (Faster 0.4s scrub) ─── */
function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [0, 1, 1, 0]);

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
    description: "A legacy of flavour since 2019",
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
    description: "Find us in the heart of Devanahalli",
    href: "/location",
  },
  {
    label: "SECURE A TABLE",
    page: "Reserve",
    description: "A Premium Escape in Devanahalli",
    href: "/reserve",
  },
];

/* ─── Text Announcement Bar (Upgraded Premium) ─── */
function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState<{
    text_content: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("announcements")
        .select("text_content")
        .eq("is_active", true)
        .limit(1)
        .single();
      if (data) setAnnouncement(data);
    })();
  }, []);

  if (!announcement) return null;

  return (
    <div className="relative z-10 px-4 sm:px-8 my-6 md:my-10">
      <div className="max-w-3xl mx-auto">
        <div
          className="flex items-center justify-center transition-shadow duration-500 ease-in-out hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          style={{
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            borderRadius: "30px",
            border: "1px solid #D4AF37",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            minHeight: "clamp(180px, 25vh, 220px)",
          }}
        >
          <p className="font-serif tracking-[0.06em] text-white text-sm md:text-lg leading-relaxed px-8 md:px-12 py-8 md:py-10 text-center max-w-xl">
            <span style={{ color: "#D4AF37" }}>✨</span> {announcement.text_content} <span style={{ color: "#D4AF37" }}>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Single Directory Box (Vertical, Full-Width) ─── */
function DirectoryBox({ item, index }: { item: typeof DIRECTORY_ITEMS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link href={item.href} className="block group">
        <div
          className="relative overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "30px",
            border: "1px solid #D4AF37",
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

          <div className="relative z-10 p-5 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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

/* ─── Cover-Fit Canvas Draw Helper ─── */
function drawCoverFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  img: HTMLImageElement
) {
  const canvasAspect = canvas.width / canvas.height;
  const imgAspect = img.width / img.height;

  let drawWidth = canvas.width;
  let drawHeight = canvas.height;
  let offsetX = 0;
  let offsetY = 0;

  if (canvasAspect > imgAspect) {
    // Canvas is wider than image — scale image width to canvas, crop vertically
    drawHeight = canvas.width / imgAspect;
    offsetY = (canvas.height - drawHeight) / 2;
  } else {
    // Canvas is taller than image — scale image height to canvas, crop horizontally
    drawWidth = canvas.height * imgAspect;
    offsetX = (canvas.width - drawWidth) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

/* ─── GSAP Frame Sequence Canvas Component ─── */
function FrameSequenceCanvas({ containerId }: { containerId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Promise.all preloader — blocks GSAP until every frame fires .onload
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    const promises: Promise<void>[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${i.toString().padStart(3, "0")}.webp`;
      promises.push(new Promise<void>((resolve) => { img.onload = () => resolve(); }));
      images.push(img);
    }

    Promise.all(promises).then(() => {
      imagesRef.current = images;
      setImagesLoaded(true);
    });
  }, []);

  // Responsive canvas sizing — tracks viewport dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redraw current frame on resize if images are loaded
      if (imagesRef.current.length > 0) {
        const ctx = canvas.getContext("2d");
        if (ctx && imagesRef.current[0]) {
          drawCoverFrame(ctx, canvas, imagesRef.current[0]);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  // GSAP ScrollTrigger — animate frame index from 0 to 239
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Draw the first frame immediately to prevent black screen
    const firstFrame = imagesRef.current[0];
    if (firstFrame) {
      drawCoverFrame(ctx, canvas, firstFrame);
    }

    // Plain object for GSAP to tween — no React state involved
    const frameIndex = { frame: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${containerId}`,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2, // Essential for mobile kinetic smoothing
        invalidateOnRefresh: true,
      },
    });

    tl.to(frameIndex, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const idx = Math.round(frameIndex.frame);
        const img = imagesRef.current[idx];
        if (img && ctx && canvas) {
          drawCoverFrame(ctx, canvas, img);
        }
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [imagesLoaded, containerId]);

  return (
    <div className="frame-canvas-wrapper">
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Elegant dark preloader — visible until all 240 frames are in GPU memory */}
      {!imagesLoaded && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            transition: "opacity 0.5s ease",
          }}
        >
          {/* Pulsing gold ring */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "2px solid rgba(212, 175, 55, 0.3)",
              borderTopColor: "#D4AF37",
              animation: "preloader-spin 0.8s linear infinite",
            }}
          />
          <span
            style={{
              marginTop: 24,
              color: "rgba(212, 175, 55, 0.7)",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Loading Experience
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Main Landing Page ─── */
export default function Home() {
  /* ─── Traffic Logger for Admin Analytics Dashboard ─── */
  useEffect(() => {
    supabase.from("site_traffic_logs").insert([{ page: "/" }]);
  }, []);

  return (
    <div className="relative bg-transparent text-white">
      {/* GPU-Accelerated Frame Sequence Canvas Background */}
      <FrameSequenceCanvas containerId="main-landing-scroller" />

      {/* Celestial Grid Overlay */}
      <div className="fixed inset-0 z-[-5] pointer-events-none celestial-grid opacity-10 animate-pulse"></div>

      <div
        id="main-landing-scroller"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "auto",
        }}
      >
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center h-[120vh] px-4 -mt-16">
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
            Where Night <br className="hidden md:block" /> Meets Flavor
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

        {/* ─── Text Announcement Bar ─── */}
        <AnnouncementBar />

        {/* ─── Content sections with strict 26px gap ─── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "26px",
          }}
        >
          {/* ─── Vertical Directory Sequence ─── */}
          <div className="px-4 sm:px-8 py-[clamp(40px,5vh,60px)]">
            <div className="mx-auto" style={{ maxWidth: "1200px" }}>
              {/* Section header */}
              <RevealSection>
                <div className="text-center mb-8">
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "26px",
                  margin: "0 auto",
                }}
              >
                {DIRECTORY_ITEMS.map((item, idx) => (
                  <DirectoryBox key={item.label} item={item} index={idx} />
                ))}
              </div>
            </div>
          </div>

          {/* Tandoor Artistry Section */}
          <div className="px-4 sm:px-8">
            <RevealSection>
              <div
                className="w-full"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  border: "1px solid #D4AF37",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center justify-center min-h-[50vh] md:min-h-[60vh] px-8 md:px-12 py-12 md:py-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-4">The Tandoor Artistry</h3>
                    <h2 className="text-2xl md:text-5xl font-serif mb-8 leading-snug text-white">
                      Mastered over glowing embers, featuring the legendary Sabuta Chooza and delicate Peshawari Paneer Tikka.
                    </h2>
                    <div className="w-12 md:w-16 h-1 gold-gradient-bg mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Signature Sips Section */}
          <div className="px-4 sm:px-8">
            <RevealSection>
              <div
                className="w-full"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  border: "1px solid #D4AF37",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center justify-center min-h-[50vh] md:min-h-[60vh] px-8 md:px-12 py-12 md:py-16">
                  <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-4">Signature Sips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
                      <div
                        className="p-6 md:p-8"
                        style={{
                          background: "rgba(0,0,0,0.25)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          borderRadius: "30px",
                          border: "1px solid #D4AF37",
                          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                        }}
                      >
                        <h4 className="text-xl md:text-2xl font-serif text-gold-400 mb-2">Ocean&apos;s Flame</h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">A mesmerizing blend of blue curacao and white rum. A true spectacle of celestial mixology.</p>
                      </div>
                      <div
                        className="p-6 md:p-8"
                        style={{
                          background: "rgba(0,0,0,0.25)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          borderRadius: "30px",
                          border: "1px solid #D4AF37",
                          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                        }}
                      >
                        <h4 className="text-xl md:text-2xl font-serif text-gold-400 mb-2">Jamugi</h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">Our secret house infusion—smoky and complex. Inspired by deep lunar craters.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* The Lunar Vibe Section */}
          <div className="px-4 sm:px-8">
            <RevealSection>
              <div
                className="w-full"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  border: "1px solid #D4AF37",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center justify-center min-h-[50vh] md:min-h-[60vh] px-8 md:px-12 py-12 md:py-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-[10px] md:text-xs text-gold-500 tracking-[0.3em] uppercase mb-6">The Lunar Vibe</h3>
                    <h2 className="text-2xl md:text-5xl font-serif mb-6 md:mb-8 text-white">
                      A premium escape in Devanahalli
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
                      Join us from <span className="text-gold-500">12:00 PM to 12:00 AM</span>. An atmosphere meticulously curated for those who appreciate the night.
                    </p>
                    <a href="/location" className="text-gold-500 hover:text-white uppercase tracking-widest text-xs transition-colors border-b border-gold-500 pb-1">
                      View Location
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* ─── Global 4-Column Premium Footer ─── */}
        <GlobalFooter />
      </div>
    </div>
  );
}
