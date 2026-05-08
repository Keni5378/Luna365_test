import { Reveal } from "@/components/Reveal";

export default function BuzzPage() {
  const reviews = [
    { name: "Rahul S.", rating: 5, text: "The Ocean's Flame cocktail is a visual and tasteful masterpiece. The ambiance perfectly captures the 'night meets flavor' vibe." },
    { name: "Priya M.", rating: 5, text: "A truly luxurious dining experience. The Paneer Sikanji took me back to my childhood while sitting in a futuristic, beautiful restaurant." },
    { name: "Ananya K.", rating: 4, text: "Loved the Sabuta Chooza. The metallic gold and black decor makes it the most Instagrammable luxury spot in Bangalore." },
    { name: "Vikram D.", rating: 5, text: "Best single malt collection. The Indri pairing with their tandoor items was spectacular. Service is top-notch." },
    { name: "Sneha R.", rating: 5, text: "The glassmorphism design isn't just on their website, the entire physical menu and vibe reflect this modern elegance. Outstanding." },
    { name: "Arjun T.", rating: 4, text: "Great mocktails! The Lychee Orbit is incredibly refreshing. Perfect place for a family celebration." }
  ];

  return (
    <div className="min-h-screen text-white pt-12 pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <Reveal key={idx} delay={0.1 * idx}>
            <div className="glass-pill p-8 h-full flex flex-col justify-between rounded-3xl">
              <div>
                <div className="flex text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed italic">&quot;{review.text}&quot;</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                <span className="font-medium tracking-wide uppercase text-sm">{review.name}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
