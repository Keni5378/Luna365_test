import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white pt-12 pb-24 px-4 sm:px-8 max-w-5xl mx-auto">
      

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Born from the ashes of partition in 1947, our ancestors brought with them the rich, undivided flavors of Sindh.
              Today, Luna 365 Bar and Kitchen proudly stands as a premium multicuisine destination, seamlessly bridging this 
              heritage with the modern luxury of Bangalore.
            </p>
            <p>
              While our roots are deeply planted in North Indian traditions—showcasing our signature <span className="text-white font-medium">Sabuta Chooza</span> and the delicately crafted <span className="text-white font-medium">Paneer Sikanji</span>—we have evolved our &quot;Nostalgic Palates&quot; to embrace the world.
            </p>
            <p>
              Our carefully curated menu now features an exquisite array of Italian, Mexican, and Asian flavors. 
              In our atmospheric lounge, the deepest night sky embraces the warmth of ancestral flavors and global culinary artistry, creating an unforgettable sensory experience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="w-full h-64 bg-zinc-900 rounded-lg overflow-hidden relative">
                <Image src="/about_heritage.png" alt="1947 Heritage" fill className="object-cover" />
              </div>
              <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden relative">
                <Image src="/about_platter.png" alt="Traditional Platter" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden relative">
                <Image src="/plating.png" alt="Culinary Craft" fill className="object-cover" />
              </div>
              <div className="w-full h-64 bg-zinc-900 rounded-lg overflow-hidden relative">
                <Image src="/about_interior.png" alt="Modern Luna Interior" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
