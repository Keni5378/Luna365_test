import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function LocationPage() {
  return (
    <div className="min-h-screen text-white pt-12 pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
      

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-8">
            <div className="glass-pill p-8 rounded-3xl">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">Luna 365 Bar and Kitchen</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                419, Maragondanahalli Main Rd<br />
                K. C. Krishna Reddy Layout, Margondanahalli<br />
                Bengaluru, Karnataka 560036
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <p><span className="text-white w-24 inline-block">Reservations:</span> <a href="tel:+919620901303" className="text-gold-500 hover:text-white transition-colors">+91 9620901303</a></p>
                <p><span className="text-white w-24 inline-block">Hours:</span> 12:00 PM – 12:00 AM (Mon-Sun)</p>
                <p><span className="text-white w-24 inline-block">Valet:</span> Complimentary</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="champagne-btn px-6 py-3 rounded-full text-sm uppercase tracking-wider w-full">
                Get Directions
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <Image 
              src="/map.png" 
              alt="Map of Bangalore" 
              fill
              className="object-cover"
            />
            {/* Interactive map placeholder */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
