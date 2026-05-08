"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

interface BentoCardProps {
  title: string;
  price?: string;
  description?: string;
  image?: string;
  span?: string;
  featured?: boolean;
}

function BentoCard({ title, price, description, image, span, featured }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`bento-card rounded-[2.5rem] p-8 overflow-hidden relative group ${span || ""}`}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col h-full justify-end">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300">
            {title}
            {featured && (
              <span className="ml-3 text-[10px] uppercase tracking-widest bg-[#D4AF37] text-black px-2 py-0.5 rounded font-bold whitespace-nowrap">
                Signature
              </span>
            )}
          </h3>
          {price && <span className="text-xl font-serif text-[#D4AF37]">{price}</span>}
        </div>
        {description && (
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function PopGlowHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="text-center mb-16 relative"
    >
      <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] relative inline-block">
        {title}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-8 bg-[#D4AF37]/10 blur-3xl rounded-full z-[-1]"
        />
      </h2>
      <div className="h-px w-32 gold-gradient-bg mx-auto mt-6 rounded-full opacity-50" />
    </motion.div>
  );
}

export default function MenuPage() {
  const categories = [
    {
      title: "The Appetisers",
      items: [
        { title: "The Paneer Craft", price: "₹250", description: "Paneer Sikanji: Cottage cheese in fennel-flavoured sauce of cashew, yogurt, and khoya.", image: "/menu/paneer_sikanji.png", span: "md:col-span-2 md:row-span-2", featured: true },
        { title: "Peshawari Paneer Tikka", price: "₹250", description: "Creamy malai paneer coated with fennel-flavoured yogurt.", featured: true },
        { title: "Vegetarian Platter", price: "₹500", description: "Selection of Shikanji paneer, Soya Chaap, Makai Seekh, and Tandoori Salad.", span: "md:col-span-2", featured: true },
        { title: "The Tandoor Artistry", price: "₹250", description: "Grilled Sabuta Chooza: Whole spring chicken baked in Indian spices.", image: "/menu/sabuta_chooza.png", span: "md:col-span-2 md:row-span-2", featured: true },
        { title: "Karare Dhaniya Ka Paneer", price: "₹250", description: "Malai paneer stuffed with spinach & cheese, fried in fresh coriander." },
        { title: "Sunehri Soya Chaap", price: "₹150", description: "Juicy soya batons baked in chef's spices." },
        { title: "Subz Makai Seekh", price: "₹190", description: "Vegetarian seekh kebab with corn and spinach." },
      ]
    },
    {
      title: "The Main Course",
      items: [
        { title: "Dal Afghani", price: "₹225", description: "Black lentils cooked overnight with spices and desi butter.", span: "md:col-span-2", featured: true },
        { title: "Murgh Peshawari", price: "₹325", description: "Tender chicken cuts in traditional Peshawari gravy.", span: "md:col-span-2", featured: true },
        { title: "Patiala Tikka Masala", price: "₹250", description: "Cottage cheese cubes grilled and cooked in spicy masala." },
        { title: "Murgh Khasam Khaas", price: "₹300", description: "Tandoor grilled chicken in butter and cream." },
        { title: "Diwani Handi", price: "₹200", description: "Baby vegetables and spinach in a tangy tomato-based masala." },
        { title: "Lahori Gosht", price: "₹450", description: "Lamb cubes simmered in a thick, aromatic gravy.", featured: true },
      ]
    },
    {
      title: "Sweet Orbits",
      items: [
        { title: "Gulab Jamun Rabri Brulee", price: "₹150", description: "Jamuns in saffron rabdi, torched golden.", image: "/menu/dessert_orbit.png", span: "md:col-span-2 md:row-span-2", featured: true },
        { title: "Moong Dal Halwa", price: "₹150", description: "Saffron-infused gram pudding." },
        { title: "Phirni", price: "₹100", description: "Basmati rice milk with saffron and cardamom." },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="space-y-32">
        {categories.map((category, catIdx) => (
          <section key={catIdx}>
            <PopGlowHeader title={category.title} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
              {category.items.map((item, itemIdx) => (
                <BentoCard key={itemIdx} {...item} />
              ))}
            </div>
          </section>
        ))}

        {/* Heritage Footer */}
        <Reveal>
          <div className="relative mt-32 rounded-[3rem] overflow-hidden border border-[#D4AF37]/20 group">
            {/* Faint gold parchment texture overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
            <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay opacity-30 z-1" 
                 style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/parchment.png')" }} />
            
            <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] mb-8">Nostalgic Palates</h2>
              <div className="h-px w-24 gold-gradient-bg mx-auto mb-10 opacity-60" />
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                &quot;Bridging the rich traditions of Sindh since 1947 with the modern vibrancy of Bangalore.&quot;
              </p>
              <p className="text-gray-400 leading-relaxed mb-12">
                Since 1947, our family has preserved the culinary secrets of undivided India. Luna 365 
                proudly carries this legacy forward, merging the rustic soul of the Tandoor with the 
                sophistication of contemporary fine dining. Every spice blend, every slow-cooked lentil, 
                and every signature kebab is a testament to our heritage—a journey from the banks of 
                the Indus to the heart of NRI Layout.
              </p>
              <div className="inline-block px-8 py-3 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
                Est. 2019
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
