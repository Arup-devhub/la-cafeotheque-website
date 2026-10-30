import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredGallery = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const currentIndex = selectedImage
    ? filteredGallery.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredGallery.length - 1) {
      setSelectedImage(filteredGallery[currentIndex + 1]);
    } else {
      setSelectedImage(filteredGallery[0]);
    }
  }, [currentIndex, filteredGallery]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredGallery[currentIndex - 1]);
    } else {
      setSelectedImage(filteredGallery[filteredGallery.length - 1]);
    }
  }, [currentIndex, filteredGallery]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
              Visual Chronicle
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
              Moments in Amber &amp; Wood
            </h2>
          </div>
          
          {/* Gallery Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'interior', label: 'Interior & Vibe' },
              { id: 'coffee', label: 'Brews & Frappes' },
              { id: 'food', label: 'Kitchen Eats' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#30231F] text-[#FAF7F2]'
                    : 'bg-[#F5F0E8] text-[#30231F]/70 hover:bg-[#D9C9B6]/40 border border-[#D9C9B6]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              className={`${item.span} group relative overflow-hidden rounded-2xl bg-[#D9C9B6] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#777A5A]`}
            >
              {/* Aspect Ratio Box */}
              <div className={`w-full overflow-hidden ${
                item.aspect === 'portrait'
                  ? 'aspect-[3/4] sm:aspect-[4/5]'
                  : item.aspect === 'landscape'
                  ? 'aspect-[16/10] sm:aspect-[16/9]'
                  : 'aspect-square'
              }`}>
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with Editorial Typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9C9B6] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF7F2]/80 mt-1 font-light line-clamp-1">
                  {item.subtitle}
                </p>

                {/* Inspect icon */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#D9C9B6]">
                  <Eye className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5F0E8] border border-[#D9C9B6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#30231F] flex items-center justify-center text-[#D9C9B6]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#30231F]">
                Tag us in your café captures
              </h4>
              <p className="text-xs text-[#30231F]/70">
                Share your moments with <strong>#LaCafeothequeBbsr</strong> on Instagram.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/lacafeothequebbsr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#777A5A] transition-colors whitespace-nowrap"
          >
            Follow @lacafeothequebbsr
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C69255] font-semibold">
                {selectedImage.category.toUpperCase()} • Image {currentIndex + 1} of {filteredGallery.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light mt-1 text-[#FAF7F2]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-[#D9C9B6] mt-1 font-light">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
