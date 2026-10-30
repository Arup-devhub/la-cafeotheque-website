import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  linkText: string;
  href: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    category: 'The Craft of Espresso',
    title: 'Artisanal Brews & Velvety Lattes',
    description: 'Freshly extracted espresso roasts, comforting caramel macchiatos, and our beloved Irish Latte crafted with balanced sweetness and silky microfoam.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85',
    tag: 'From ₹85',
    linkText: 'View Coffee Menu',
    href: '#menu'
  },
  {
    id: 'exp2',
    category: 'Blended Indulgence',
    title: 'Signature Chocowalnut & Cold Frappes',
    description: 'Thick, frosty cold frappes loaded with roasted walnuts, rich chocolate ganache, and crowned with velvety whipped cream for warm afternoon cravings.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85',
    tag: 'Fan Favorite',
    linkText: 'Discover Frappes',
    href: '#menu'
  },
  {
    id: 'exp3',
    category: 'Stone-Baked & Fresh',
    title: 'Volcanic Pizzas & Creamy Pastas',
    description: 'Hand-stretched 9-inch artisan crusts with fiery herbs and melted mozzarella, alongside savory penne in sweet-corn white bechamel and spicy arrabbiata.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85',
    tag: 'Chef Specials',
    linkText: 'Explore Kitchen Eats',
    href: '#menu'
  },
  {
    id: 'exp4',
    category: 'Vibes & Fellowship',
    title: 'Photogenic Corners & Easy Conversations',
    description: 'Designed as a welcoming space with ambient glowing lamps, cozy booths, and chill playlists that transform a quick cup into an unhurried hangout.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85',
    tag: 'Aesthetic Vibe',
    linkText: 'View Gallery',
    href: '#gallery'
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
              The Café Experience
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
              Crafted for Your Senses.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#30231F]/70 max-w-md font-light">
            Every element at LA CAFEOTHEQUE is calibrated to make every sip, bite, and conversation feel thoughtful and memorable.
          </p>
        </div>

        {/* 4 Premium Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative flex flex-col bg-[#F5F0E8] rounded-2xl overflow-hidden border border-[#D9C9B6]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Editorial Zoom */}
              <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[#D9C9B6]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#30231F]/90 backdrop-blur-md text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  {exp.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A5A] font-bold">
                    0{index + 1} • {exp.category}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-[#30231F] group-hover:text-[#777A5A] transition-colors line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#30231F]/75 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9C9B6]/40 flex items-center justify-between">
                  <a
                    href={exp.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#30231F] group-hover:text-[#777A5A] transition-colors"
                  >
                    <span>{exp.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
