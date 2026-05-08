"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const FRAME_COUNT = 240;

export default function Home() {
  const containerRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

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
      // Smooth Lerping (Scrub value ~1.5 feel)
      currentProgress += (targetProgress - currentProgress) * 0.1;
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
      <div className="relative z-10 h-[120vh] md:h-[130vh] flex items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm">
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
    </div>
  );
}
