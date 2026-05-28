"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const fallbackImages = [
  { span: "col-span-1 row-span-2", bg: "bg-zinc-800", label: "Midnight Celebrations", src: "/ambience.png" },
  { span: "col-span-2 row-span-1", bg: "bg-zinc-900", label: "The Golden Hour", src: "/gallery_golden_hour.png" },
  { span: "col-span-1 row-span-1", bg: "bg-zinc-800", label: "Intimate Dining", src: "/gallery_intimate_dining.png" },
  { span: "col-span-1 row-span-2", bg: "bg-zinc-900", label: "Culinary Art", src: "/plating.png" },
  { span: "col-span-2 row-span-1", bg: "bg-zinc-800", label: "Celestial Mixology", src: "/gallery_mixology.png" },
  { span: "col-span-1 row-span-1", bg: "bg-zinc-900", label: "Live Music", src: "/gallery_live_music.png" },
  { span: "col-span-1 row-span-1", bg: "bg-zinc-800", label: "Festivals", src: "/gallery_festivals.png" },
];

export default function GalleryPage() {
  const [images, setImages] = useState<{ image_url: string; title: string }[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("gallery_items")
        .select("image_url, title");
      if (data && data.length > 0) {
        setImages(data);
      }
      setLoaded(true);
    })();
  }, []);

  const displayImages = images.length > 0 ? images : null;

  return (
    <div className="min-h-screen text-white pt-12 pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {(displayImages ? displayImages : fallbackImages).map((img, idx) => {
            const src = "image_url" in img ? img.image_url : (img as typeof fallbackImages[0]).src;
            const label = "title" in img ? img.title : (img as typeof fallbackImages[0]).label;
            const span = "span" in img ? (img as typeof fallbackImages[0]).span : "col-span-1 row-span-1";
            const bg = "bg" in img ? (img as typeof fallbackImages[0]).bg : "bg-zinc-800";
            return (
              <div
                key={idx}
                className={`${span} ${bg} rounded-2xl overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                  <span className="text-gold-500 font-medium tracking-wide uppercase text-sm">
                    {label}
                  </span>
                </div>

                {src ? (
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized={src.startsWith("http")}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700/50 uppercase tracking-widest text-xs">
                    Image {idx + 1}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
