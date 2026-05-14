"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BAR_CATEGORIES, type BarCategory, type BarItem } from "@/data/barMenuNew";

/* ─── Category Tab Bar (synced with Menu page) ─── */
function CategoryTabs({
  categories,
  activeId,
  onSelect,
}: {
  categories: BarCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="sticky top-24 z-40 flex justify-center px-4 mb-16">
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl flex items-center justify-center p-2"
        style={{
          background: "rgba(0,0,0,0.20)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "30px",
          border: "1px solid rgba(212,175,55,0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-center justify-center gap-1 md:gap-2 w-full overflow-x-auto no-scrollbar px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="relative flex items-center px-3 md:px-5 py-3 rounded-full transition-all duration-500 whitespace-nowrap group"
              style={{
                color: activeId === cat.id ? "#D4AF37" : "rgba(255,255,255,0.4)",
                background: activeId === cat.id ? "rgba(255,255,255,0.05)" : "transparent",
              }}
            >
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.12em]">
                {cat.label}
              </span>
              {activeId === cat.id && (
                <motion.div
                  layoutId="bar-active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(212,175,55,0.35)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}

/* ─── Pop-and-Glow Section Header ─── */
function PopGlowHeader({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="text-center mb-12 relative"
    >
      <h2 className="text-3xl md:text-5xl font-serif relative inline-block" style={{ color: "#D4AF37" }}>
        {title}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-8 rounded-full z-[-1]"
          style={{ background: "rgba(212,175,55,0.1)", filter: "blur(40px)" }}
        />
      </h2>
      <div className="h-px w-32 gold-gradient-bg mx-auto mt-6 rounded-full opacity-50" />
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base italic leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/* ─── Hero Spotlight Card ─── */
function HeroSpotlight({ category }: { category: BarCategory }) {
  const featuredItem = category.items.find((i) => i.image && i.featured) || category.items.find((i) => i.featured);
  if (!featuredItem) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      className="relative w-full h-[320px] md:h-[420px] rounded-[30px] overflow-hidden mb-16 group"
      style={{ border: "1px solid #D4AF37" }}
    >
      <Image
        src={category.heroImage}
        alt={category.heroTitle}
        fill
        className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold block" style={{ color: "#D4AF37" }}>
              Featured Selection
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white">{featuredItem.name}</h3>
            <p className="text-white/60 text-sm">{featuredItem.measurement}</p>
          </div>
          <span className="text-3xl md:text-4xl font-serif" style={{ color: "#D4AF37" }}>
            {featuredItem.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Single Bento Card (Bar variant with measurement badge) ─── */
function BentoCard({ item, index }: { item: BarItem; index: number }) {
  const hasImage = !!item.image;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.6),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group ${hasImage ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "30px",
        border: "1px solid #D4AF37",
        boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        minHeight: hasImage ? "300px" : "auto",
        transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Gold pulse on appear */}
      <motion.div
        initial={{ opacity: 0.6, scale: 0.8 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.8, delay: Math.min(index * 0.04, 0.6) }}
        className="absolute inset-0 rounded-[30px] pointer-events-none z-0"
        style={{ border: "2px solid rgba(212,175,55,0.4)" }}
      />

      {hasImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={item.image!}
            alt={item.name}
            fill
            className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110"
            style={{ transition: "all 0.7s ease" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      )}

      <div className={`relative z-10 flex flex-col h-full justify-end ${hasImage ? "p-8" : "p-6"}`}>
        <div className="flex justify-between items-start mb-2 gap-3">
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
              {item.name}
              {item.featured && (
                <span
                  className="ml-2 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded font-bold whitespace-nowrap align-middle"
                  style={{ background: "#D4AF37", color: "#000" }}
                >
                  Signature
                </span>
              )}
            </h3>
          </div>
          <span className="text-lg font-serif shrink-0" style={{ color: "#D4AF37" }}>
            {item.price}
          </span>
        </div>
        {/* Measurement badge */}
        <div className="flex items-center gap-3 mt-1">
          <div
            className="px-2 py-1 rounded-md text-[8px] uppercase tracking-widest font-bold"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
            }}
          >
            {item.measurement}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Sub-Category Grid ─── */
function SubCategorySection({ subCategory, items, startIndex }: { subCategory: string; items: BarItem[]; startIndex: number }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <h3
          className="text-lg md:text-xl font-serif tracking-widest whitespace-nowrap"
          style={{ color: "#D4AF37" }}
        >
          {subCategory}
        </h3>
        <div className="flex-1 h-[1px] bg-white/10" />
        <div className="w-2 h-2 rounded-full" style={{ background: "rgba(212,175,55,0.4)" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {items.map((item, idx) => (
          <BentoCard key={`${item.name}-${idx}`} item={item} index={startIndex + idx} />
        ))}
      </div>
    </div>
  );
}

/* ─── Bar Footer ─── */
function BarFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mt-24 overflow-hidden"
      style={{
        borderRadius: "30px",
        border: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
      <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-8" style={{ color: "#D4AF37" }}>
          The Lunar Pour
        </h2>
        <div className="h-px w-24 gold-gradient-bg mx-auto mb-10 opacity-60" />
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
          &quot;Every pour is a celestial event — timed, measured, and served under the lunar glow.&quot;
        </p>
        <p className="text-gray-400 leading-relaxed mb-12">
          Our bar program draws from the world&apos;s finest distilleries and the imagination of our
          lead mixologist. From flame-kissed signature cocktails to rare single malts aged in
          tropical oak, every sip at Luna 365 is an experience curated for the discerning palate.
          Whether you&apos;re sharing a pitcher under the stars or savoring a 30ml dram at the counter,
          this is where night truly meets flavor.
        </p>
        <div
          className="inline-block px-8 py-3 rounded-full uppercase tracking-[0.3em] text-xs"
          style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37" }}
        >
          139 Selections
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Bar Page ─── */
export default function BarPage() {
  const [activeId, setActiveId] = useState(BAR_CATEGORIES[0].id);
  const activeCategory = BAR_CATEGORIES.find((c) => c.id === activeId)!;

  // Group items by subCategory
  const grouped = activeCategory.items.reduce(
    (acc, item) => {
      const key = item.subCategory || "Other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, BarItem[]>
  );

  let runningIndex = 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Tab Navigation */}
      <CategoryTabs categories={BAR_CATEGORIES} activeId={activeId} onSelect={setActiveId} />

      {/* Animated Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: -20 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Section Header */}
          <PopGlowHeader title={activeCategory.heroTitle} description={activeCategory.heroDescription} />

          {/* Hero Spotlight */}
          <HeroSpotlight category={activeCategory} />

          {/* SubCategory Grids */}
          <div className="space-y-20">
            {Object.entries(grouped).map(([subCat, items]) => {
              const startIdx = runningIndex;
              runningIndex += items.length;
              return (
                <SubCategorySection
                  key={subCat}
                  subCategory={subCat}
                  items={items}
                  startIndex={startIdx}
                />
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bar Footer */}
      <BarFooter />
    </div>
  );
}
