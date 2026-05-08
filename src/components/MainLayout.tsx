"use client";

import { useState, useEffect, createContext } from "react";
import { IntroAnimation } from "./IntroAnimation";
import { usePathname } from "next/navigation";

export const IntroContext = createContext({
  triggerIntro: () => {},
});

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(pathname === "/");

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

  const triggerIntro = () => {
    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: "instant" });
    setShowIntro(true);
  };

  return (
    <IntroContext.Provider value={{ triggerIntro }}>
      {showIntro && <IntroAnimation onComplete={handleComplete} />}
      <div className={showIntro ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </IntroContext.Provider>
  );
}
