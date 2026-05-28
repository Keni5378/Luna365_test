"use client";

import Link from "next/link";

const EXPLORE_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Bar", path: "/bar" },
  { name: "Gallery", path: "/gallery" },
  { name: "The Buzz", path: "/buzz" },
  { name: "Location", path: "/location" },
  { name: "Reserve", path: "/reserve" },
];

const LEGAL_LINKS = [
  { name: "About Us", path: "/about" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Cookie Policy", path: "/cookie-policy" },
];

export function GlobalFooter() {
  return (
    <footer className="w-full mt-12 md:mt-24 relative z-10">
      <div
        style={{
          background: "rgba(0,0,0,0.20)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "30px 30px 0 0",
          borderTop: "1px solid #D4AF37",
          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div className="px-6 sm:px-10 md:px-14 py-10 md:py-14 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {/* Column 1: Brand + Address */}
            <div>
              <h3
                className="text-xl md:text-2xl font-serif tracking-widest uppercase mb-4"
                style={{ color: "#D4AF37" }}
              >
                LUNA 365
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Emporia Comforts, No 804/49/6 STRR Road, Service Road, next to Sujay Feeds, Devanahalli, Karnataka 562110
              </p>
            </div>

            {/* Column 2: EXPLORE */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#D4AF37" }}>
                EXPLORE
              </h4>
              <ul className="space-y-2.5">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-gold-500 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: LEGAL */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#D4AF37" }}>
                LEGAL
              </h4>
              <ul className="space-y-2.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-gold-500 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#D4AF37" }}>
                CONNECT
              </h4>
              <div className="space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">Email:</span>
                  <br />
                  <a
                    href="mailto:luna365mkt@gmail.com"
                    className="text-white no-underline hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    luna365mkt@gmail.com
                  </a>
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">Queries (Information Desk):</span>
                  <br />
                  <a
                    href="tel:+917204012323"
                    className="text-white no-underline hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    7204012323
                  </a>
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">Reception:</span>
                  <br />
                  <a
                    href="tel:+917204032323"
                    className="text-white no-underline hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    7204032323
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
              &copy; 2025 Luna 365 Bar and Kitchen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
