"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

interface MenuItemProps {
  name: string;
  price?: string;
  description?: string;
  featured?: boolean;
}

function MenuItem({ name, price, description, featured }: MenuItemProps) {
  return (
    <motion.div
      whileHover="hover"
      className="glass-pill p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors relative group"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-medium tracking-wide text-white group-hover:text-[#F3E5AB] transition-colors">
          {name}
          {featured && (
            <span className="ml-3 text-[10px] uppercase tracking-widest bg-[#D4AF37] text-black px-2 py-0.5 rounded font-bold whitespace-nowrap">
              Luna Special
            </span>
          )}
        </h3>
        <motion.span 
          variants={{
            hover: { color: "#D4AF37", scale: 1.1 }
          }}
          className="text-lg font-serif text-white transition-colors"
        >
          {price}
        </motion.span>
      </div>
      {description && (
        <motion.p 
          variants={{
            hover: { textShadow: "0 0 8px rgba(212, 175, 55, 0.4)", color: "#ffffff" }
          }}
          className="text-gray-400 text-sm leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

function CategoryHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] inline-block relative">
        {title}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-4 bg-[#D4AF37]/10 blur-xl rounded-full z-[-1]"
        />
      </h2>
      <div className="h-0.5 w-24 gold-gradient-bg mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}

export default function BarPage() {
  const barData = {
    signatures: [
      { name: "Ocean's Flame", price: "₹590", description: "Vibrant layers of blue and red. Vodka, Lime, Blue Curaçao, and Cranberry Breezer.", featured: true },
      { name: "Luna Special", price: "₹490", description: "Vodka, Passion Fruit Syrup, Orange Juice, and Orange Chunks.", featured: true },
      { name: "Jamugi", price: "₹450", description: "Unique balance of sweetness and tang with Gin and Jamun juice." },
      { name: "Beergarita", price: "₹565", description: "Refreshing fusion of Beer, Tequila, Triple Sec, and Lime." },
      { name: "Sky Hawaiian", price: "₹425", description: "Tropical mix of Vodka, Bacardi, Pineapple, and Blue Curaçao." },
    ],
    malts: [
      { name: "Indri Single Malt", price: "₹345", description: "Premium Indian single malt with rich complexity." },
      { name: "Amrut Singlemalt", price: "₹285", description: "Award-winning Indian malt with vanilla and honey notes." },
      { name: "Paul John Nirvana", price: "₹285", description: "Soft, honey-hued malt from the Goan coast." },
      { name: "JW Black Label", price: "₹290", description: "The iconic blend of over 30 malt and grain whiskies." },
      { name: "Chivas Regal", price: "₹495", description: "Smooth, rich and generous blend." },
      { name: "JW Double Black", price: "₹525", description: "Intense, smoky and full-bodied." },
    ],
    ginsTequila: [
      { name: "Jaisalmer Indian Craft", price: "₹275", description: "Botanical gin with 11 hand-picked herbs." },
      { name: "Bombay Sapphire", price: "₹285", description: "Vapour-infused gin with 10 botanicals." },
      { name: "Tanqueray", price: "₹285", description: "Perfect balance of four botanicals." },
      { name: "Patron", price: "₹510", description: "Ultra-premium silver tequila." },
      { name: "José Cuervo", price: "₹340", description: "The world's best-selling tequila." },
      { name: "Don Angel", price: "₹290", description: "Smooth Blanco tequila." },
    ],
    mocktails: [
      { name: "Lychee Orbit", price: "₹235", description: "Tropical lychee flavor with Kiwi, Tabasco, and Coca-Cola.", featured: true },
      { name: "Bubbly Brut", price: "₹245", description: "Bubblegum syrup, Lychee juice, and Chaat Masala." },
      { name: "Luna Light", price: "₹250", description: "Lychee and Apple juice with Vanilla Ice Cream and Chocolate.", featured: true },
    ],
    gatherings: [
      { name: "Long Island Iced Tea", price: "₹1345", description: "Bold blend of Gin, Vodka, Tequila, Rum, and Triple Sec." },
      { name: "Celestial Sips", price: "₹1275", description: "Vodka, Blue Curaçao, Orange, and Lime." },
    ],
    shooters: [
      { name: "B-52", price: "₹545", description: "Layered Kahlua, Baileys, and Grand Marnier.", featured: true },
      { name: "B-55", price: "₹545", description: "Layered Kahlua, Baileys, and Absinthe.", featured: true },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
      <div className="space-y-24">
        {/* Celestial Signatures */}
        <section>
          <CategoryHeader title="Celestial Signatures" />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[#D4AF37]/30 group">
                <Image 
                  src="/bar/oceans_flame.png" 
                  alt="Ocean's Flame Cocktail" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#D4AF37] font-serif text-3xl">Ocean's Flame</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Luna Signature</p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {barData.signatures.map((item, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <MenuItem {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Malts */}
        <section>
          <CategoryHeader title="Premium Malts & Spirits" />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
             <div className="grid gap-6 order-2 lg:order-1">
              {barData.malts.map((item, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <MenuItem {...item} />
                </Reveal>
              ))}
            </div>
            <Reveal className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[#D4AF37]/30 group">
                <Image 
                  src="/bar/premium_malts.png" 
                  alt="Premium Malts" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#D4AF37] font-serif text-3xl">Rare Malts</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Curated Collection</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {barData.ginsTequila.map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <MenuItem {...item} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Lunar Mocktails */}
        <section>
          <CategoryHeader title="Lunar Mocktails" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barData.mocktails.map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <MenuItem {...item} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Layered Shooters */}
        <section>
          <CategoryHeader title="Layered Shooters" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-[#D4AF37]/30 group">
                <Image 
                  src="/bar/b52_shooter.png" 
                  alt="B-52 Shooter" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#D4AF37] font-serif text-3xl">B-52 & B-55</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Masterfully Layered</p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {barData.shooters.map((item, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <MenuItem {...item} />
                </Reveal>
              ))}
              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-4">Cooler Zone</p>
                <div className="flex flex-wrap gap-4">
                  {["Budweiser Magnum", "Corona", "Heineken"].map((beer) => (
                    <span key={beer} className="text-white text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[#D4AF37] transition-colors">
                      {beer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luna Gatherings */}
        <section>
          <CategoryHeader title="Luna Gatherings" />
          <div className="grid md:grid-cols-2 gap-6">
            {barData.gatherings.map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <MenuItem {...item} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
