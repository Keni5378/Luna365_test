"use client";

import { useState, useEffect, useCallback, createContext } from "react";
import { IntroAnimation } from "./IntroAnimation";
import { usePathname } from "next/navigation";

export const IntroContext = createContext({
  triggerIntro: () => {},
});

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(pathname === "/");
  const [introKey, setIntroKey] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("lunaIntro");
    if (hasSeenIntro || pathname !== "/") {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [pathname]);

  const handleComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("lunaIntro", "true");
  };

  const triggerIntro = useCallback(() => {
    // Hard reset: scroll to top, force re-mount via key increment
    window.scrollTo({ top: 0, behavior: "instant" });
    // Remove the session flag so the intro replays fresh
    sessionStorage.removeItem("lunaIntro");
    // Increment key to force React to fully unmount/remount the IntroAnimation
    setIntroKey((prev) => prev + 1);
    setShowIntro(true);
  }, []);

  return (
    <IntroContext.Provider value={{ triggerIntro }}>
      {showIntro && <IntroAnimation key={introKey} onComplete={handleComplete} />}
      <div className={showIntro ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </IntroContext.Provider>
  );
}
