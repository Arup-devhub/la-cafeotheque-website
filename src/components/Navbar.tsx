import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { businessData } from '../data/business';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'story', 'experience', 'menu', 'gallery', 'location', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#D9C9B6]/40 py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Café Wordmark Logo */}
            <a
              href="#home"
              className="group flex flex-col focus:outline-none"
              aria-label="LA CAFEOTHEQUE Home"
            >
              <span
                className={`font-serif text-xl sm:text-2xl tracking-[0.22em] font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-[#30231F] group-hover:text-[#777A5A]' : 'text-[#FAF7F2] group-hover:text-[#D9C9B6]'
                }`}
              >
                LA CAFEOTHEQUE
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.35em] -mt-0.5 font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-[#777A5A]' : 'text-[#D9C9B6]/90'
                }`}
              >
                Bhubaneswar • Odisha
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 relative py-1 ${
                      isScrolled
                        ? isActive
                          ? 'text-[#30231F] font-semibold'
                          : 'text-[#30231F]/80 hover:text-[#777A5A]'
                        : isActive
                        ? 'text-[#FAF7F2] font-semibold'
                        : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-colors ${
                          isScrolled ? 'bg-[#777A5A]' : 'bg-[#D9C9B6]'
                        }`}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-colors duration-200 ${
                  isScrolled
                    ? 'border border-[#D9C9B6] text-[#30231F] hover:bg-[#D9C9B6]/20'
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}
                title="View location on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C69255]" />
                <span>Find Us</span>
              </a>

              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 bg-[#30231F] text-[#F5F0E8] hover:bg-[#777A5A] hover:shadow-md cursor-pointer"
              >
                <span>Reserve / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none ${
                  isScrolled ? 'text-[#30231F] hover:bg-[#D9C9B6]/30' : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slideout Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl flex flex-col justify-between p-6 z-50 border-l border-[#D9C9B6]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D9C9B6]/60">
                <div>
                  <h3 className="font-serif text-lg font-bold tracking-[0.18em] text-[#30231F]">
                    LA CAFEOTHEQUE
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#777A5A]">
                    Bhubaneswar, Odisha
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#30231F] hover:bg-[#D9C9B6]/40 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill */}
              <div className="my-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#777A5A]/15 text-[#777A5A] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#777A5A] animate-pulse" />
                <span>Open Today: 9:30 AM – 11:00 PM</span>
              </div>

              {/* Mobile nav links */}
              <nav className="flex flex-col space-y-3 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium tracking-wider uppercase text-[#30231F] hover:text-[#777A5A] py-2 border-b border-[#D9C9B6]/20 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#777A5A]" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#D9C9B6]/60 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold text-center hover:bg-[#777A5A] transition-colors cursor-pointer"
              >
                Reserve / Inquire Table
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#30231F]/80">
                <a
                  href={`tel:${businessData.contact.primaryPhone}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#777A5A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#777A5A]" />
                  <span>Call Café</span>
                </a>
                <a
                  href={businessData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#777A5A]"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#777A5A]" />
                  <span>@lacafeothequebbsr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
