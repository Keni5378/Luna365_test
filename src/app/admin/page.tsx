"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════
   Design Tokens — Matching Luna 365 Front-Facing Theme
   ═══════════════════════════════════════════════════════════════ */
const GLASS_CARD: React.CSSProperties = {
  background: "rgba(0,0,0,0.20)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid #D4AF37",
  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
  borderRadius: "30px",
};

const GLASS_CARD_SUBTLE: React.CSSProperties = {
  ...GLASS_CARD,
  border: "1px solid rgba(212,175,55,0.3)",
};

const inputBase =
  "w-full bg-black/15 backdrop-blur-sm border border-white/10 rounded-3xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none";

const btnBase =
  "px-6 py-3 rounded-3xl text-sm uppercase tracking-wider font-bold transition-all duration-300 disabled:opacity-40";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */
interface Reservation {
  id: string;
  created_at: string;
  name: string;
  email: string;
  mobile: string;
  guests: number;
  booking_date: string;
  booking_time: string;
  status: string;
}

interface GalleryItem {
  id: string;
  image_url: string;
  title: string;
  created_at: string;
}

interface Metrics {
  totalVisits: number;
  bandwidthBytes: number;
  totalBookings: number;
  conversionRate: number;
}

/* ═══════════════════════════════════════════════════════════════
   Email Templates
   ═══════════════════════════════════════════════════════════════ */
function getAcceptEmailHtml(name: string, date: string, time: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0; padding:0; background-color:#0a0a0a; font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#1a1a1a 0%,#0d0d0d 100%); border:1px solid #D4AF37; border-radius:16px; overflow:hidden;">
        <!-- Header -->
        <tr><td style="padding:40px 40px 20px; text-align:center; border-bottom:1px solid rgba(212,175,55,0.2);">
          <h1 style="margin:0; color:#D4AF37; font-size:28px; letter-spacing:0.15em; font-weight:300;">LUNA 365</h1>
          <p style="margin:8px 0 0; color:rgba(255,255,255,0.4); font-size:11px; letter-spacing:0.3em; text-transform:uppercase;">Bar & Kitchen</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px;">
          <p style="color:rgba(255,255,255,0.7); font-size:14px; margin:0 0 8px;">Dear ${name},</p>
          <h2 style="color:#ffffff; font-size:22px; margin:20px 0; font-weight:400; line-height:1.5;">
            Your celestial table allocation at <span style="color:#D4AF37;">Luna 365</span> is officially locked in.
          </h2>
          <table width="100%" style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2); border-radius:12px; margin:24px 0;">
            <tr>
              <td style="padding:20px; text-align:center; border-right:1px solid rgba(212,175,55,0.2);">
                <p style="margin:0; color:rgba(255,255,255,0.4); font-size:10px; letter-spacing:0.2em; text-transform:uppercase;">Date</p>
                <p style="margin:6px 0 0; color:#D4AF37; font-size:18px; font-weight:600;">${date}</p>
              </td>
              <td style="padding:20px; text-align:center;">
                <p style="margin:0; color:rgba(255,255,255,0.4); font-size:10px; letter-spacing:0.2em; text-transform:uppercase;">Time</p>
                <p style="margin:6px 0 0; color:#D4AF37; font-size:18px; font-weight:600;">${time}</p>
              </td>
            </tr>
          </table>
          <p style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.6;">We look forward to welcoming you to an evening of celestial dining and artisan craft.</p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 40px; background:rgba(0,0,0,0.3); border-top:1px solid rgba(212,175,55,0.15); text-align:center;">
          <p style="margin:0; color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:0.2em;">LUNA 365 BAR & KITCHEN · NRI LAYOUT, BANGALORE</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function getRejectEmailHtml(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0; padding:0; background-color:#0a0a0a; font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#1a1a1a 0%,#0d0d0d 100%); border:1px solid rgba(212,175,55,0.3); border-radius:16px; overflow:hidden;">
        <!-- Header -->
        <tr><td style="padding:40px 40px 20px; text-align:center; border-bottom:1px solid rgba(212,175,55,0.15);">
          <h1 style="margin:0; color:#D4AF37; font-size:28px; letter-spacing:0.15em; font-weight:300;">LUNA 365</h1>
          <p style="margin:8px 0 0; color:rgba(255,255,255,0.4); font-size:11px; letter-spacing:0.3em; text-transform:uppercase;">Bar & Kitchen</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px;">
          <p style="color:rgba(255,255,255,0.7); font-size:14px; margin:0 0 8px;">Dear ${name},</p>
          <h2 style="color:#ffffff; font-size:20px; margin:20px 0; font-weight:400; line-height:1.5;">
            We are completely booked for your requested window.
          </h2>
          <p style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.7; margin:16px 0;">
            We sincerely apologize for the inconvenience. Our celestial dining experience is in high demand, and unfortunately we are unable to accommodate your selected date and time.
          </p>
          <p style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.7;">
            Please select an alternate slot on our portal — we would love to welcome you on another evening.
          </p>
          <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
            <tr><td style="background:linear-gradient(135deg,#D4AF37,#F3E5AB); border-radius:30px; padding:14px 32px;">
              <a href="http://127.0.0.1:3000/reserve" style="color:#000000; text-decoration:none; font-size:12px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase;">Reserve Another Slot</a>
            </td></tr>
          </table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 40px; background:rgba(0,0,0,0.3); border-top:1px solid rgba(212,175,55,0.15); text-align:center;">
          <p style="margin:0; color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:0.2em;">LUNA 365 BAR & KITCHEN · NRI LAYOUT, BANGALORE</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ═══════════════════════════════════════════════════════════════
   AUTH GATE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function AdminAuthGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        sessionStorage.setItem("admin_token", data.token);
        onAuth();
      } else {
        setError("Invalid credentials. Access denied.");
      }
    } catch {
      setError("Connection error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-md p-10 md:p-12 text-center"
        style={GLASS_CARD}
      >
        {/* Lock Icon */}
        <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>

        <h1 className="text-2xl font-serif text-white mb-2">Command Center</h1>
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-8">
          Authorized Personnel Only
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access code…"
            className={inputBase + " text-center"}
            autoFocus
          />

          {error && (
            <p className="text-red-400/80 text-xs animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className={
              btnBase +
              " w-full bg-[#D4AF37] text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.02]"
            }
          >
            {loading ? "VERIFYING…" : "AUTHENTICATE"}
          </button>
        </form>

        <p className="text-white/20 text-[10px] mt-8 tracking-widest uppercase">
          Luna 365 • Admin Portal
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════════════════════ */
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-serif text-white">{title}</h2>
      <p className="text-white/30 text-xs uppercase tracking-[0.15em] mt-1">
        {subtitle}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TOAST NOTIFICATION
   ═══════════════════════════════════════════════════════════════ */
function Toast({
  message,
  type = "success",
}: {
  message: string;
  type?: "success" | "error";
}) {
  return (
    <div
      className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-2xl text-sm font-medium animate-[count-fade-in_0.4s_ease-out]"
      style={{
        background:
          type === "success"
            ? "rgba(34,197,94,0.15)"
            : "rgba(239,68,68,0.15)",
        border: `1px solid ${type === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
        color: type === "success" ? "#22c55e" : "#ef4444",
        backdropFilter: "blur(20px)",
      }}
    >
      {message}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   METRICS PANEL
   ═══════════════════════════════════════════════════════════════ */
function MetricsPanel({ metrics }: { metrics: Metrics }) {
  const formatBytes = (bytes: number) => {
    if (bytes >= 1_000_000_000)
      return `${(bytes / 1_000_000_000).toFixed(2)} GB`;
    if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
    return `${(bytes / 1_000).toFixed(0)} KB`;
  };

  const cards = [
    {
      label: "Total Visits",
      value: metrics.totalVisits.toLocaleString(),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      sub: "Landing page hits",
    },
    {
      label: "Bandwidth Served",
      value: formatBytes(metrics.bandwidthBytes),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      sub: "Estimated asset delivery",
    },
    {
      label: "Reservations",
      value: metrics.totalBookings.toLocaleString(),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      sub: "Total bookings received",
    },
    {
      label: "Conversion Rate",
      value: `${metrics.conversionRate.toFixed(1)}%`,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
        >
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
      sub: "Bookings ÷ visits",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="metric-card p-6 transition-all duration-500 hover:scale-[1.02] cursor-default"
          style={GLASS_CARD_SUBTLE}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
              {card.icon}
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-serif text-white metric-value">
            {card.value}
          </p>
          <p
            className="text-[10px] uppercase tracking-[0.15em] mt-1"
            style={{ color: "#D4AF37" }}
          >
            {card.label}
          </p>
          <p className="text-white/25 text-[10px] mt-1">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANNOUNCEMENT PANEL
   ═══════════════════════════════════════════════════════════════ */
function AnnouncementPanel() {
  const [textInput, setTextInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [announcementId, setAnnouncementId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("announcements")
        .select("*")
        .limit(1)
        .single();
      if (data) {
        setTextInput(data.text_content);
        setIsActive(data.is_active);
        setAnnouncementId(data.id);
      }
    })();
  }, []);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async () => {
    setSaving(true);
    if (announcementId) {
      const { error } = await supabase
        .from("announcements")
        .update({ text_content: textInput, is_active: isActive })
        .eq("id", announcementId);
      if (error) {
        showToast("Save failed.", "error");
        setSaving(false);
        return;
      }
    } else {
      const { data, error } = await supabase
        .from("announcements")
        .insert([{ text_content: textInput, is_active: isActive }])
        .select()
        .single();
      if (error || !data) {
        showToast("Save failed.", "error");
        setSaving(false);
        return;
      }
      setAnnouncementId(data.id);
    }
    showToast("Banner updated and synced live.");
    setSaving(false);
  };

  return (
    <div className="p-8 md:p-10 mb-6" style={GLASS_CARD_SUBTLE}>
      <SectionHeader
        title="Announcement Banner"
        subtitle="Landing page live broadcast"
      />

      <div className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/60">
            Banner Copy
          </label>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            rows={3}
            className={inputBase + " resize-none"}
            placeholder="Enter announcement text…"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`admin-toggle ${isActive ? "active" : ""}`}
            >
              <div className="toggle-knob" />
            </button>
            <span className="text-xs uppercase tracking-widest text-white/60">
              {isActive ? "Live" : "Hidden"}
            </span>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className={
              btnBase +
              " bg-[#D4AF37] text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            }
          >
            {saving ? "SAVING…" : "UPDATE BANNER"}
          </button>
        </div>
      </div>

      {toast && <Toast message={toast.msg} type={toast.type} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY MANAGEMENT PANEL
   ═══════════════════════════════════════════════════════════════ */
function GalleryPanel() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileTitle, setFileTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchItems = useCallback(async () => {
    const { data } = await supabase
      .from("gallery_items")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setItems(data);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (
      dropped &&
      (dropped.type === "image/png" || dropped.type === "image/webp")
    ) {
      setFile(dropped);
    } else {
      showToast("Only .webp and .png files are accepted.", "error");
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}_${crypto.randomUUID().slice(0, 8)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(fileName, file);

    if (uploadError) {
      showToast("Upload failed: " + uploadError.message, "error");
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("gallery")
      .getPublicUrl(fileName);

    const { error: insertError } = await supabase.from("gallery_items").insert([
      {
        image_url: urlData.publicUrl,
        title: fileTitle || file.name.replace(/\.[^.]+$/, ""),
      },
    ]);

    if (insertError) {
      showToast("DB insert failed.", "error");
      setUploading(false);
      return;
    }

    showToast("Image uploaded to gallery.");
    setFile(null);
    setFileTitle("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setUploading(false);
    fetchItems();
  };

  const handleDelete = async (item: GalleryItem) => {
    setDeleting(item.id);

    // Extract filename from URL
    const urlParts = item.image_url.split("/");
    const fileName = urlParts[urlParts.length - 1];

    await supabase.storage.from("gallery").remove([fileName]);
    await supabase.from("gallery_items").delete().eq("id", item.id);

    showToast("Image removed from gallery.");
    setDeleting(null);
    fetchItems();
  };

  return (
    <div className="p-8 md:p-10 mb-6" style={GLASS_CARD_SUBTLE}>
      <SectionHeader
        title="Gallery Management"
        subtitle="Upload & manage visual assets"
      />

      {/* Drop Zone */}
      <div
        className={`drop-zone ${dragOver ? "drag-over" : ""} p-8 md:p-10 text-center cursor-pointer mb-6`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.webp"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setFile(f);
          }}
        />

        {file ? (
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.15)] flex items-center justify-center mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">{file.name}</p>
            <p className="text-white/30 text-xs">
              {(file.size / 1024).toFixed(0)} KB •{" "}
              {file.type.split("/")[1].toUpperCase()}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-white/50 text-sm">
              Drop an image here or click to browse
            </p>
            <p className="text-white/20 text-xs uppercase tracking-widest">
              .webp & .png only
            </p>
          </div>
        )}
      </div>

      {/* Title + Upload Button */}
      {file && (
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={fileTitle}
            onChange={(e) => setFileTitle(e.target.value)}
            placeholder="Image title (optional)…"
            className={inputBase + " flex-1"}
          />
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={
              btnBase +
              " bg-[#D4AF37] text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] whitespace-nowrap"
            }
          >
            {uploading ? "UPLOADING…" : "UPLOAD"}
          </button>
        </div>
      )}

      {/* Gallery Grid */}
      {items.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden aspect-square"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-3">
                <p className="text-white text-xs font-medium mb-2 text-center truncate w-full">
                  {item.title}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item);
                  }}
                  disabled={deleting === item.id}
                  className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-red-500/20 text-red-400 border border-red-400/30 hover:bg-red-500/40 transition-colors"
                >
                  {deleting === item.id ? "…" : "DELETE"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length === 0 && (
        <p className="text-white/20 text-xs text-center uppercase tracking-widest py-4">
          No images uploaded yet
        </p>
      )}

      {toast && <Toast message={toast.msg} type={toast.type} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESERVATIONS PANEL
   ═══════════════════════════════════════════════════════════════ */
function ReservationsPanel() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [processing, setProcessing] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchReservations = useCallback(async () => {
    const { data } = await supabase
      .from("reservations")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setReservations(data);
  }, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [h, m] = timeStr.split(":");
      const hour = parseInt(h);
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${m} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const handleAction = async (
    reservation: Reservation,
    action: "accepted" | "rejected"
  ) => {
    setProcessing(reservation.id);

    // 1. Update status in database
    const { error } = await supabase
      .from("reservations")
      .update({ status: action })
      .eq("id", reservation.id);

    if (error) {
      showToast("Status update failed.", "error");
      setProcessing(null);
      return;
    }

    // 2. Send email notification
    const subject =
      action === "accepted"
        ? "Your Luna 365 Reservation is Confirmed ✨"
        : "Luna 365 — Reservation Update";

    const html =
      action === "accepted"
        ? getAcceptEmailHtml(
            reservation.name,
            formatDate(reservation.booking_date),
            formatTime(reservation.booking_time)
          )
        : getRejectEmailHtml(reservation.name);

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: reservation.email,
          subject,
          html,
        }),
      });
      showToast(
        `Reservation ${action}. Email sent to ${reservation.email}.`
      );
    } catch {
      showToast(`Reservation ${action} but email dispatch failed.`, "error");
    }

    setProcessing(null);
    fetchReservations();
  };

  return (
    <div className="p-8 md:p-10 mb-6" style={GLASS_CARD_SUBTLE}>
      <SectionHeader
        title="Reservations"
        subtitle="Manage incoming booking requests"
      />

      <div className="overflow-x-auto admin-scroll">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-white/10">
              {[
                "Guest",
                "Email",
                "Mobile",
                "Guests",
                "Date",
                "Time",
                "Status",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="py-3 px-3 text-[10px] uppercase tracking-[0.15em] text-white/30 font-medium"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr
                key={r.id}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-3 px-3 text-sm text-white font-medium">
                  {r.name}
                </td>
                <td className="py-3 px-3 text-xs text-white/50">{r.email}</td>
                <td className="py-3 px-3 text-xs text-white/50">{r.mobile}</td>
                <td className="py-3 px-3 text-xs text-white/50 text-center">
                  {r.guests}
                </td>
                <td className="py-3 px-3 text-xs text-white/50">
                  {formatDate(r.booking_date)}
                </td>
                <td className="py-3 px-3 text-xs text-white/50">
                  {formatTime(r.booking_time)}
                </td>
                <td className="py-3 px-3">
                  <span
                    className={`status-badge ${r.status || "pending"}`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background:
                          r.status === "accepted"
                            ? "#22c55e"
                            : r.status === "rejected"
                              ? "#ef4444"
                              : "#D4AF37",
                      }}
                    />
                    {r.status || "pending"}
                  </span>
                </td>
                <td className="py-3 px-3">
                  {(!r.status || r.status === "pending") && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAction(r, "accepted")}
                        disabled={processing === r.id}
                        className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-green-500/15 text-green-400 border border-green-400/30 hover:bg-green-500/30 transition-all disabled:opacity-40"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(r, "rejected")}
                        disabled={processing === r.id}
                        className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-red-500/15 text-red-400 border border-red-400/30 hover:bg-red-500/30 transition-all disabled:opacity-40"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {reservations.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="py-12 text-center text-white/20 text-xs uppercase tracking-widest"
                >
                  No reservations found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {toast && <Toast message={toast.msg} type={toast.type} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN ADMIN DASHBOARD
   ═══════════════════════════════════════════════════════════════ */
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [metrics, setMetrics] = useState<Metrics>({
    totalVisits: 0,
    bandwidthBytes: 0,
    totalBookings: 0,
    conversionRate: 0,
  });

  // Check existing session on mount
  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        if (decoded.authenticated && decoded.expires > Date.now()) {
          setAuthenticated(true);
        } else {
          sessionStorage.removeItem("admin_token");
        }
      } catch {
        sessionStorage.removeItem("admin_token");
      }
    }
    setChecking(false);
  }, []);

  // Fetch metrics
  useEffect(() => {
    if (!authenticated) return;

    (async () => {
      // Total visits
      const { count: visitCount } = await supabase
        .from("site_traffic_logs")
        .select("*", { count: "exact", head: true });

      // Bandwidth (sum of page_weight_bytes)
      const { data: bwData } = await supabase
        .from("site_traffic_logs")
        .select("page_weight_bytes");
      const totalBandwidth =
        bwData?.reduce((sum, row) => sum + (row.page_weight_bytes || 0), 0) ??
        0;

      // Total bookings
      const { count: bookingCount } = await supabase
        .from("reservations")
        .select("*", { count: "exact", head: true });

      const visits = visitCount ?? 0;
      const bookings = bookingCount ?? 0;
      const conversion = visits > 0 ? (bookings / visits) * 100 : 0;

      setMetrics({
        totalVisits: visits,
        bandwidthBytes: totalBandwidth,
        totalBookings: bookings,
        conversionRate: conversion,
      });
    })();
  }, [authenticated]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setAuthenticated(false);
  };

  // Loading state
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "2px solid rgba(212,175,55,0.2)",
            borderTopColor: "#D4AF37",
            animation: "preloader-spin 0.8s linear infinite",
          }}
        />
      </div>
    );
  }

  // Auth gate
  if (!authenticated) {
    return <AdminAuthGate onAuth={() => setAuthenticated(true)} />;
  }

  return (
    <div
      id="admin-page"
      className="min-h-screen bg-black text-white"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="celestial-grid opacity-5 absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-white">
              Command Center
            </h1>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] mt-1">
              Luna 365 • Admin Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-2xl text-[10px] uppercase tracking-wider font-bold text-white/40 border border-white/10 hover:border-red-400/30 hover:text-red-400 transition-all"
          >
            Sign Out
          </button>
        </div>

        {/* Gold divider */}
        <div className="w-16 h-1 gold-gradient-bg rounded-full mb-8" />

        {/* Metrics */}
        <MetricsPanel metrics={metrics} />

        {/* Two-column layout for announcement + gallery on wider screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <AnnouncementPanel />
          <GalleryPanel />
        </div>

        {/* Reservations — full width */}
        <ReservationsPanel />

        {/* Footer */}
        <div className="text-center pt-8 pb-4">
          <p className="text-white/15 text-[10px] uppercase tracking-[0.3em]">
            Luna 365 Admin Portal • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
