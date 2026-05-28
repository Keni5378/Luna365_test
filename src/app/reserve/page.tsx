"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

const inputBase =
  "w-full bg-black/15 backdrop-blur-sm border border-white/10 rounded-3xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none";

const labelClass =
  "text-xs uppercase tracking-widest text-white";

export default function ReservePage() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validatePhone = (value: string) =>
    /^[6-9]\d{9}$/.test(value) ? null : "Please enter a valid 10-digit mobile number";

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Please enter a valid email address";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
    if (phoneTouched) setPhoneError(validatePhone(val));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailTouched) setEmailError(validateEmail(e.target.value));
  };

  const handlePhoneBlur = () => {
    setPhoneTouched(true);
    if (phone) setPhoneError(validatePhone(phone));
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email) setEmailError(validateEmail(email));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);
    setPhoneError(phoneErr);
    setEmailError(emailErr);
    setPhoneTouched(true);
    setEmailTouched(true);
    if (phoneErr || emailErr) return;
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const name = fd.get("name") as string;
    const fullName = name;
    const emailAddress = email;
    const contactNumber = phone;
    const mobile = phone;
    const guests = fd.get("guests") as string;
    const date = fd.get("date") as string;
    const booking_date = date;
    const time = fd.get("time") as string;
    const booking_time = time;
    setSubmitting(true);
    const { error } = await supabase.from("reservations").insert([
      {
        name: name || fullName,
        email: email || emailAddress,
        mobile: phone || contactNumber || mobile,
        guests: parseInt(guests, 10) || 2,
        booking_date: date || booking_date,
        booking_time: time || booking_time,
      },
    ]);
    if (error) {
      console.error("Database Insert Error Details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    setPhone("");
    setEmail("");
    setPhoneError(null);
    setEmailError(null);
    setPhoneTouched(false);
    setEmailTouched(false);
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
        <div className="w-full max-w-2xl p-8 md:p-12 rounded-3xl"
          style={{
            background: "rgba(0,0,0,0.20)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.3)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="text-gold-500 mx-auto w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-2xl">
                &#10003;
              </div>
              <h2 className="text-3xl font-serif text-white">Reservation Confirmed</h2>
              <p className="text-gray-400">
                Your details have been received. Our team will contact you at <span className="text-gold-500">{phone}</span> to confirm your booking.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelClass}>Date</label>
                  <input type="date" name="date" required className={inputBase} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Time</label>
                  <select name="time" defaultValue="" required className={inputBase}>
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
                  <label className={labelClass}>Guests</label>
                  <select name="guests" defaultValue="2" required className={inputBase}>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People (Private Dining)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Occasion</label>
                  <select name="occasion" defaultValue="none" className={inputBase}>
                    <option value="none">Standard Dining</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Full Name</label>
                <input type="text" name="name" required className={inputBase} placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelClass}>Contact Number</label>
                  <div className={`flex items-stretch bg-black/15 backdrop-blur-sm border rounded-3xl focus-within:border-[#D4AF37] transition-colors ${phoneError ? 'border-red-400/60' : 'border-white/10'}`}>
                    <span className="flex items-center px-3 text-white/50 text-sm border-r border-white/10 select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      onBlur={handlePhoneBlur}
                      required
                      placeholder="98765 43210"
                      className="flex-1 bg-transparent border-none rounded-r-3xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-400/80 text-xs mt-1">{phoneError}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    required
                    placeholder="guest@domain.com"
                    className={`${inputBase} ${emailError ? 'border-red-400/60' : ''}`}
                  />
                  {emailError && (
                    <p className="text-red-400/80 text-xs mt-1">{emailError}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Special Requests</label>
                <textarea name="requests" rows={3} className={inputBase + " resize-none"} placeholder="Any dietary restrictions?"></textarea>
              </div>

              <button type="submit" disabled={submitting}
                className="w-full champagne-btn py-4 rounded-3xl text-lg uppercase tracking-wider font-bold mt-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
              >
                {submitting ? "SUBMITTING…" : "RESERVE NOW"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}
