import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menu';
import { Sparkles, CheckCircle2, Search, Leaf, AlertCircle } from 'lucide-react';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = vegOnly ? item.isVegetarian : true;
    return matchesCategory && matchesQuery && matchesVeg;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F5F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
            Our Kitchen &amp; Espresso Bar
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
            Curated Menu &amp; Specials
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#30231F]/70 font-light">
            Every brew is freshly prepared, and every dish is freshly baked. Authentic pricing from our Bhubaneswar outlet.
          </p>
          <div className="w-12 h-[1px] bg-[#30231F]/30 mx-auto mt-6" />
        </div>

        {/* Filter Toolbar: Categories + Search + Veg Toggle */}
        <div className="mb-10 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all'
                ? menuItems.length
                : menuItems.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#30231F] text-[#FAF7F2] shadow-md'
                      : 'bg-[#FAF7F2] text-[#30231F]/80 hover:bg-[#D9C9B6]/40 border border-[#D9C9B6]/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#30231F]/10 text-[#30231F]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Controls: Search & Veg Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#30231F]/40" />
              <input
                type="text"
                placeholder="Search coffee, pizza, pasta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#D9C9B6] rounded-full text-[#30231F] placeholder-[#30231F]/50 focus:outline-none focus:ring-2 focus:ring-[#777A5A]/50 focus:border-[#777A5A]"
              />
            </div>

            {/* Diet toggle */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  vegOnly
                    ? 'bg-[#777A5A] text-[#FAF7F2] border-[#777A5A]'
                    : 'bg-[#FAF7F2] text-[#30231F]/80 border-[#D9C9B6] hover:bg-[#D9C9B6]/30'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vegetarian Only</span>
                {vegOnly && <CheckCircle2 className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#D9C9B6]/60 p-8">
            <AlertCircle className="w-8 h-8 text-[#777A5A] mx-auto mb-3" />
            <p className="text-base font-serif text-[#30231F]">No menu items found</p>
            <p className="text-xs text-[#30231F]/70 mt-1">Try resetting your search query or vegetarian filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#30231F] text-[#FAF7F2] rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#D9C9B6]/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#D9C9B6]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Vegetarian Indicator Tag */}
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md p-1.5 rounded-md shadow-sm border border-[#D9C9B6]/40 flex items-center justify-center">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.isVegetarian ? 'bg-emerald-600 ring-2 ring-emerald-600/30' : 'bg-rose-600 ring-2 ring-rose-600/30'
                        }`}
                        title={item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                      />
                    </div>

                    {/* Signature / Popular Badges */}
                    {item.isSignature && (
                      <div className="absolute top-3 right-3 bg-[#30231F]/90 backdrop-blur-md text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/10">
                        <Sparkles className="w-3 h-3 text-[#C69255]" />
                        <span>Signature</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg font-semibold text-[#30231F] group-hover:text-[#777A5A] transition-colors">
                        {item.name}
                      </h3>
                      {item.price !== null ? (
                        <span className="font-serif text-lg font-bold text-[#30231F] whitespace-nowrap">
                          ₹{item.price}
                        </span>
                      ) : (
                        <span className="text-xs uppercase text-[#777A5A] font-medium tracking-wide">
                          Seasonal
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-[#30231F]/75 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer strip */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between text-[11px] text-[#777A5A] border-t border-[#D9C9B6]/30">
                  <span className="uppercase tracking-wider font-medium">
                    {item.category.toUpperCase()}
                  </span>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#777A5A] font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#777A5A]" />
                      <span>Verified Outlet Price</span>
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Menu Note */}
        <div className="mt-12 text-center text-xs text-[#30231F]/60 max-w-xl mx-auto">
          <p>
            * Prices reflect verified listings for LA CAFEOTHEQUE Bhubaneswar. Taxes applicable as per local dining norms. Menu items and daily specials are updated regularly.
          </p>
        </div>

      </div>
    </section>
  );
};
