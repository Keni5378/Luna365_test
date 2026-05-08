"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { IntroContext } from "./MainLayout";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { triggerIntro } = useContext(IntroContext);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerIntro();
    router.push("/");
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Bar", path: "/bar" },
    { name: "Gallery", path: "/gallery" },
    { name: "The Buzz", path: "/buzz" },
    { name: "Location", path: "/location" },
  ];

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
          className="glass-pill w-full max-w-5xl rounded-full px-6 py-3 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex-shrink-0 flex flex-col justify-center cursor-pointer">
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase leading-none">
              Luna <span className="gold-gradient">365</span>
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-1">Bar and Kitchen</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === link.path ? "text-gold-500" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Reserve Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/reserve"
              className="hidden md:block champagne-btn px-6 py-2 rounded-full text-sm uppercase tracking-wider"
            >
              Reserve Now
            </Link>
            
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl tracking-widest text-gray-300 hover:text-gold-500 transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/reserve"
            onClick={() => setIsOpen(false)}
            className="champagne-btn px-8 py-3 rounded-full text-lg uppercase tracking-wider mt-4"
          >
            Reserve Now
          </Link>
        </motion.div>
      )}
    </>
  );
}
