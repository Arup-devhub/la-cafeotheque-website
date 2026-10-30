import React from 'react';
import { Coffee, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F5F0E8] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9C9B6]/25 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#777A5A]/10 rounded-full filter blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
            Our Identity &amp; Ambience
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
            A Little Space. <br />
            <span className="italic font-serif font-light text-[#777A5A]">
              A Lot of Experience.
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-[#30231F]/30 mx-auto mt-6" />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Layered Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-[#D9C9B6]">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85"
                  alt="Barista extracting rich espresso at LA CAFEOTHEQUE"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#30231F] text-[#FAF7F2] p-5 sm:p-6 rounded-2xl shadow-2xl max-w-xs border border-[#FAF7F2]/10 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-[#777A5A]/30 text-[#D9C9B6]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D9C9B6]">The Blend</span>
                    <h3 className="text-sm font-semibold text-[#FAF7F2]">Freshly Ground Espresso</h3>
                  </div>
                </div>
                <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-light">
                  From bold dark roast shots to our chilled Hazelnut &amp; Chocowalnut frappes, every cup is poured with care.
                </p>
              </div>

              {/* Badge */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#FAF7F2] border border-[#D9C9B6] rounded-full p-4 shadow-lg items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C69255]" />
                <span className="text-xs font-semibold tracking-wide text-[#30231F]">
                  Est. on Bypass Road
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="space-y-6 text-[#30231F]">
              
              <p className="text-lg sm:text-xl font-light text-[#30231F]/90 leading-relaxed font-serif">
                Located near Meherpalli on Bhubaneswar’s vibrant Cuttack-Puri Bypass Road, LA CAFEOTHEQUE was envisioned as a warm sanctuary where good coffee and comforting food invite you to slow down.
              </p>

              <p className="text-sm sm:text-base text-[#30231F]/80 leading-relaxed font-light">
                Whether you’re catching up with old friends, seeking an aesthetic nook for an evening date, stopping for a quick highway break, or treating yourself to our signature <strong className="font-semibold text-[#30231F]">Veg Volcanic Pizza</strong> and velvety <strong className="font-semibold text-[#30231F]">Sweet Corn White Sauce Penne</strong>, LA CAFEOTHEQUE blends warmth with genuine hospitality.
              </p>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D9C9B6]/60">
                
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#30231F]/5 flex items-center justify-center text-[#777A5A]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#30231F]">
                    Brews &amp; Frappes
                  </h3>
                  <p className="text-xs text-[#30231F]/70 leading-relaxed">
                    Irish lattes, caramel macchiatos, and signature blended walnut frappes.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#30231F]/5 flex items-center justify-center text-[#777A5A]">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#30231F]">
                    Warm Ambience
                  </h3>
                  <p className="text-xs text-[#30231F]/70 leading-relaxed">
                    Soft filament lighting, relaxed booth seating, and social media-worthy corners.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-full bg-[#30231F]/5 flex items-center justify-center text-[#777A5A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#30231F]">
                    Pocket-Friendly
                  </h3>
                  <p className="text-xs text-[#30231F]/70 leading-relaxed">
                    Premium cafe quality with approachable neighborhood pricing (~₹500 for two).
                  </p>
                </div>

              </div>

              {/* Quick Action */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#30231F] hover:text-[#777A5A] transition-colors group"
                >
                  <span>Explore The Experience</span>
                  <span className="w-6 h-[1px] bg-[#30231F] group-hover:w-10 group-hover:bg-[#777A5A] transition-all" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
