"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export default function ReservePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-white pt-12 pb-24 px-4 sm:px-8 max-w-3xl mx-auto flex flex-col items-center justify-center">
      <Reveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Secure Your Table</h1>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-sm">Experience the extraordinary</p>
          <div className="h-1 w-24 gold-gradient-bg mx-auto rounded-full mt-6"></div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="glass-pill w-full max-w-2xl p-8 md:p-12 rounded-3xl">
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="text-gold-500 mx-auto w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-2xl">✓</div>
              <h2 className="text-3xl font-serif text-white">Reservation Confirmed</h2>
              <p className="text-gray-400">We look forward to hosting you at Luna 365. A confirmation email has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Date</label>
                  <input type="date" required className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Time</label>
                  <select defaultValue="" required className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="" disabled>Select Time</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Guests</label>
                  <select defaultValue="2" required className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People (Private Dining)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Occasion</label>
                  <select defaultValue="none" className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="none">Standard Dining</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" required className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Special Requests</label>
                <textarea rows={3} className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Any dietary restrictions?"></textarea>
              </div>

              <button type="submit" className="w-full champagne-btn py-4 rounded-xl text-lg uppercase tracking-wider font-bold mt-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                RESERVE NOW
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}
