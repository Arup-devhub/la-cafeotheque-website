import React from 'react';
import { ArrowDown, MapPin, Coffee, Compass, Star, Clock } from 'lucide-react';
import { businessData } from '../data/business';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#242321]"
    >
      {/* Background Photography with Sophisticated Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
          alt="LA CAFEOTHEQUE warm cozy cafe interior in Bhubaneswar"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in filter brightness-[0.78] contrast-[1.05]"
          loading="eager"
        />
        {/* Editorial Gradients & Tonal Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1513] via-[#1E1513]/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,21,19,0.5)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
        
        {/* Subtle Location & Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#C69255]" />
          <span>Bhubaneswar, Odisha • Cuttack-Puri Bypass</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF7F2] tracking-tight leading-[1.08] max-w-4xl">
          More Than Coffee. <br />
          <span className="italic font-serif font-light text-[#D9C9B6]">
            A Place to Belong.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F5F0E8]/85 font-light max-w-2xl leading-relaxed">
          Welcome to LA CAFEOTHEQUE — where handcrafted espresso roasts, decadent chocolate frappes, and stone-baked Italian crusts meet warm amber nooks and unhurried conversations.
        </p>

        {/* Action CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F5F0E8] text-[#30231F] text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#D9C9B6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/20"
          >
            <Coffee className="w-4 h-4 text-[#777A5A]" />
            <span>Explore Our Menu</span>
          </a>

          <a
            href={businessData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/30 text-xs uppercase tracking-[0.18em] font-medium backdrop-blur-sm transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-[#C69255]" />
            <span>Find Us on Maps</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl w-full text-left sm:text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#C69255] text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>4.6 / 5.0</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#D9C9B6]/80 mt-1">
              500+ Local Reviews
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#FAF7F2] text-sm font-semibold">
              <Clock className="w-4 h-4 text-[#777A5A]" />
              <span>9:30 AM – 11 PM</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#D9C9B6]/80 mt-1">
              Open 7 Days a Week
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[#FAF7F2] text-sm font-semibold">
              From ₹85
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#D9C9B6]/80 mt-1">
              Handcrafted Lattes
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[#FAF7F2] text-sm font-semibold">
              ~₹500 for Two
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#D9C9B6]/80 mt-1">
              Pocket-Friendly Comfort
            </span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer group"
        aria-label="Scroll to learn more about LA CAFEOTHEQUE"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
          Scroll Down
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C69255]" />
      </a>
    </section>
  );
};
