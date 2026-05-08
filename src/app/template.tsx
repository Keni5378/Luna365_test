"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax logic: background moves at 0.1x scroll speed
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, 200]);

  // Do not apply the voyage transition to the landing page
  if (pathname === "/") {
    return <>{children}</>;
  }

  const getBackgroundImage = (path: string) => {
    if (path.includes('about')) return '/backgrounds/about.png';
    if (path.includes('menu')) return '/backgrounds/menu.png';
    if (path.includes('bar')) return '/backgrounds/bar.png';
    if (path.includes('gallery')) return '/backgrounds/gallery.png';
    if (path.includes('buzz')) return '/backgrounds/buzz.png';
    if (path.includes('location')) return '/backgrounds/location.png';
    if (path.includes('reserve')) return '/backgrounds/reserve.png';
    return '/backgrounds/location.png';
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
    <div id={`${pageId}-page`} className="w-full min-h-screen relative z-0 overflow-x-hidden bg-black" ref={containerRef}>
      {/* High-Resolution Galaxy Background with Responsive Scaling and Parallax */}
      <div className="fixed inset-0 w-full h-screen -z-20 pointer-events-none overflow-hidden">
        <motion.div 
          key={pathname}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 0.6 }}
          style={{ 
            y: backgroundY,
          }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }} 
          className="absolute inset-0 w-full h-[140%] -top-[20%] flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              x: ["-0.5%", "0.5%", "-0.5%"],
              y: ["-0.5%", "0.5%", "-0.5%"],
              rotate: [0, 0.2, 0]
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="relative w-full h-full min-w-[110vw]"
          >
            <Image 
              src={bgImage} 
              alt="Celestial Background" 
              fill 
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1920px"
            />
          </motion.div>
          {/* Dark Overlay for legibility - 40% Radial for Location as requested */}
          {isLocation ? (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]" />
          ) : (
            <div className="absolute inset-0 bg-black/30" />
          )}
        </motion.div>
      </div>
      
      <div className="w-full min-h-screen pt-32 pb-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col items-center">
        {/* Space Voyage Header Fly-Forward (Responsive Scaling) */}
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
            {getPageTitle(pathname)}
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
      </div>
    </div>
  );
}
