import React from 'react';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { businessData } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1513] text-[#FAF7F2] border-t border-[#30231F] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative ambient blur */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C69255]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Wordmark */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block group focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#FAF7F2] group-hover:text-[#D9C9B6] transition-colors">
                LA CAFEOTHEQUE
              </span>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C69255] mt-1 font-medium">
                Bhubaneswar • Odisha
              </p>
            </a>

            <p className="text-sm text-[#D9C9B6]/80 font-light max-w-sm leading-relaxed">
              Where handcrafted coffee, decadent frappes, and stone-baked comfort meet warm amber lighting. Bhubaneswar’s favorite bypass haven.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D9C9B6] hover:bg-[#C69255] hover:text-white transition-colors"
                aria-label="Instagram Bhubaneswar Outlet"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D9C9B6] hover:bg-[#C69255] hover:text-white transition-colors"
                aria-label="Google Maps Listing"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${businessData.contact.primaryPhone}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D9C9B6] hover:bg-[#C69255] hover:text-white transition-colors"
                aria-label="Call Café"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C69255] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#home" className="hover:text-[#D9C9B6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#D9C9B6] transition-colors">
                  Our Story &amp; Ambience
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D9C9B6] transition-colors">
                  Signature Experiences
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D9C9B6] transition-colors">
                  Curated Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D9C9B6] transition-colors">
                  Photography Chronicle
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D9C9B6] transition-colors">
                  Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C69255] font-semibold">
              Visit &amp; Hours
            </h4>
            <div className="text-xs text-[#FAF7F2]/80 space-y-2 font-light">
              <p>
                <strong className="text-white font-medium">Opening Hours:</strong><br />
                Monday – Sunday: 9:30 AM – 11:00 PM
              </p>
              <p>
                <strong className="text-white font-medium">Address:</strong><br />
                {businessData.address.line1}, {businessData.address.line2}, {businessData.address.locality}, Bhubaneswar, Odisha 751015
              </p>
              <p>
                <strong className="text-white font-medium">Phone:</strong>{' '}
                <a href={`tel:${businessData.contact.primaryPhone}`} className="hover:text-[#C69255]">
                  {businessData.contact.displayPhone}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer & Agency Credit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9C9B6]/60">
          
          <div>
            <p>© {new Date().getFullYear()} LA CAFEOTHEQUE Bhubaneswar. All rights reserved.</p>
          </div>

          {/* Developer Credit */}
          <div className="text-center sm:text-right">
            <p className="tracking-wide">
              Digital Experience Concept by <span className="font-semibold text-[#D9C9B6] hover:text-white transition-colors">Warrior Tech Service</span>.
            </p>
            <p className="text-[10px] text-[#D9C9B6]/40 mt-0.5">
              Developed as an independent digital showcase for client presentation.
            </p>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
