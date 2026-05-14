"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Do not apply the voyage transition to the landing page
  if (pathname === "/") {
    return <>{children}</>;
  }

  const getBackgroundImage = (path: string) => {
    if (path.includes('about')) return '/backgrounds/about.jpg';
    if (path.includes('menu')) return '/backgrounds/menu.jpg';
    if (path.includes('bar')) return '/backgrounds/bar.jpg';
    if (path.includes('gallery')) return '/backgrounds/gallery.jpg';
    if (path.includes('buzz')) return '/backgrounds/buzz.jpg';
    if (path.includes('location')) return '/backgrounds/location.jpg';
    if (path.includes('reserve')) return '/backgrounds/reserve.jpg';
    return '/backgrounds/location.jpg';
  };

  const getPageTitle = (path: string) => {
    if (path.includes('about')) return 'OUR STORY';
    if (path.includes('menu')) return 'CELESTIAL OBSERVATORY';
    if (path.includes('bar')) return 'THE BAR';
    if (path.includes('gallery')) return 'GALLERY';
    if (path.includes('buzz')) return 'THE BUZZ';
    if (path.includes('location')) return 'LOCATION';
    if (path.includes('reserve')) return 'RESERVE';
    return '';
  };

  const bgImage = getBackgroundImage(pathname);
  const pageId = pathname.replace(/\//g, '') || 'home';
  const isLocation = pathname.includes('location');

  return (
    <TemplateInner
      key={pathname}
      bgImage={bgImage}
      pageId={pageId}
      pageTitle={getPageTitle(pathname)}
      isLocation={isLocation}
      pathname={pathname}
      containerRef={containerRef}
      bgRef={bgRef}
    >
      {children}
    </TemplateInner>
  );
}

/* ─── Inner component that uses hooks safely ─── */
function TemplateInner({
  bgImage,
  pageId,
  pageTitle,
  isLocation,
  pathname,
  containerRef,
  bgRef,
  children,
}: {
  bgImage: string;
  pageId: string;
  pageTitle: string;
  isLocation: boolean;
  pathname: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  bgRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  // GSAP-powered parallax: 0.15 speed, 1.2s scrub for cinematic drift
  useEffect(() => {
    const bgEl = bgRef.current;
    if (!bgEl) return;

    // Reset transform before applying ScrollTrigger
    gsap.set(bgEl, { y: 0, scale: 1.1 });

    const tween = gsap.to(bgEl, {
      y: () => window.innerHeight * 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [bgRef]);

  return (
    <div id={`${pageId}-page`} className="w-full min-h-screen relative z-0 overflow-x-hidden bg-black" ref={containerRef}>
      {/* High-Performance Galaxy Background with GSAP Parallax */}
      <div className="fixed inset-0 w-full h-screen -z-20 pointer-events-none overflow-hidden">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            ref={bgRef}
            className="absolute w-full h-full"
            style={{
              top: "-5%",
              left: "-5%",
              width: "110%",
              height: "120%",
              transform: "scale(1.1)",
              willChange: "transform",
            }}
          >
            <Image
              src={bgImage}
              alt="Celestial Background"
              fill
              priority
              className="object-cover object-center"
              sizes="110vw"
              quality={90}
            />
          </div>

          {/* Dark Overlay for legibility */}
          {isLocation ? (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]" />
          ) : (
            <div className="absolute inset-0 bg-black/25" />
          )}
        </motion.div>
      </div>
      
      <div className="w-full min-h-screen pt-32 pb-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col items-center">
        {/* Space Voyage Header Fly-Forward */}
        <motion.div
          initial={{ scale: 0, opacity: 0, z: -1000 }}
          animate={{ scale: 1, opacity: 1, z: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.19, 1, 0.22, 1]
          }}
          style={{ perspective: 1000 }}
          className="text-center mb-12 md:mb-16 relative z-10 w-full"
        >
          <div className="relative inline-block scale-75 md:scale-100">
            <motion.h2 
              className="text-gold-500 uppercase tracking-[0.4em] text-lg md:text-xl font-bold"
            >
              LUNA 365
            </motion.h2>
            
            {/* Solar Flare Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0.5, 2.5, 3.5],
                filter: ["blur(10px)", "blur(40px)", "blur(100px)"] 
              }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-[#D4AF37] rounded-full z-[-1]"
            />
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-serif mt-4 text-white uppercase tracking-wider px-4"
          >
            {pageTitle}
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 gold-gradient-bg mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Data Drift Container */}
        <motion.div
          initial={{ opacity: 0, x: pathname.length % 2 === 0 ? 50 : -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ 
            duration: 1.2, 
            delay: 0.8, 
            ease: [0.19, 1, 0.22, 1] 
          }}
          className="w-full relative z-10"
        >
          {children}
        </motion.div>

        {/* ─── Global Royal Footer ─── */}
        <footer className="w-full mt-24 relative z-10">
          <div
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
        </footer>
      </div>
    </div>
  );
}
