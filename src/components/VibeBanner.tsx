import React from 'react';
import { Wifi, Sparkles, Coffee } from 'lucide-react';
import { communityFeedback } from '../data/testimonials';

export const VibeBanner: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#1E1513] text-[#FAF7F2] overflow-hidden">
      {/* Background with Atmospheric Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Warm cafe ambiance at night with ambient lighting"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1513] via-[#1E1513]/90 to-[#1E1513]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Editorial Statement */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C69255] font-semibold">
            The Philosophy of Leisure
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-[#FAF7F2]">
            Good Coffee. <br />
            <span className="italic font-serif font-light text-[#D9C9B6]">
              Better Conversations.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#FAF7F2]/80 font-light leading-relaxed max-w-2xl">
            In the fast rush along the highway, LA CAFEOTHEQUE is an invitation to slow down. An oasis of calm where rich roasted aromas, artisan pizzas, and ambient golden glow turn simple encounters into timeless memories.
          </p>

          {/* Quick Perks Strip */}
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 text-xs text-[#D9C9B6]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
              <Wifi className="w-3.5 h-3.5 text-[#C69255]" />
              <span>High-Speed Guest Wi-Fi</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
              <Coffee className="w-3.5 h-3.5 text-[#C69255]" />
              <span>Dine-In &amp; Takeaway</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#C69255]" />
              <span>Aesthetic Corners for Photos</span>
            </div>
          </div>
        </div>

        {/* Customer Review Quotation Cards */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {communityFeedback.map((fb) => (
            <div
              key={fb.id}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-1 text-[#C69255] text-xs mb-3">
                {[...Array(fb.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-[#FAF7F2]/90 font-light italic leading-relaxed">
                "{fb.quote}"
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D9C9B6]/70">
                <span className="font-medium text-[#D9C9B6]">{fb.theme}</span>
                <span>{fb.context}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
