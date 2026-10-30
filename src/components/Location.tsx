import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Copy, Check, Compass, Car } from 'lucide-react';
import { businessData } from '../data/business';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessData.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F5F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
            Visit Us
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
            Find Your Way to Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#30231F]/70 font-light">
            Conveniently situated along the Cuttack-Puri Bypass corridor in Bhubaneswar, with easy vehicle access and parking.
          </p>
          <div className="w-12 h-[1px] bg-[#30231F]/30 mx-auto mt-6" />
        </div>

        {/* Location Split Layout: Details Card + Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#D9C9B6] shadow-sm">
            <div className="space-y-6">
              
              {/* Status Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#777A5A]/15 text-[#777A5A] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#777A5A] animate-pulse" />
                <span>Open Today • 9:30 AM – 11:00 PM</span>
              </div>

              {/* Verified Address */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#30231F] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C69255]" />
                  <span>LA CAFEOTHEQUE</span>
                </h3>
                <p className="mt-2 text-sm text-[#30231F]/80 leading-relaxed font-light">
                  {businessData.address.line1}, {businessData.address.line2}
                </p>
                <p className="text-sm font-medium text-[#30231F]/90">
                  {businessData.address.locality}
                </p>
                <p className="text-sm text-[#777A5A] font-semibold">
                  {businessData.address.city}, {businessData.address.state} — {businessData.address.pincode}
                </p>
              </div>

              {/* Landmark & Parking info */}
              <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#D9C9B6]/60 flex items-start gap-3">
                <Car className="w-4 h-4 text-[#777A5A] mt-0.5 shrink-0" />
                <p className="text-xs text-[#30231F]/80 leading-relaxed font-light">
                  {businessData.address.landmark}
                </p>
              </div>

              {/* Operating Timings List */}
              <div className="space-y-2 pt-2 border-t border-[#D9C9B6]/40">
                <div className="flex items-center justify-between text-xs text-[#30231F]">
                  <span className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#777A5A]" />
                    <span>Monday – Sunday:</span>
                  </span>
                  <span className="font-semibold text-[#30231F]">
                    9:30 AM – 11:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#30231F]">
                  <span className="flex items-center gap-2 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#777A5A]" />
                    <span>Phone Contact:</span>
                  </span>
                  <a
                    href={`tel:${businessData.contact.primaryPhone}`}
                    className="font-semibold text-[#777A5A] hover:underline"
                  >
                    {businessData.contact.displayPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-[#30231F]">
                  <span className="flex items-center gap-2 font-medium">
                    <Compass className="w-3.5 h-3.5 text-[#777A5A]" />
                    <span>Coordinates:</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#30231F]/70">
                    20.2695° N, 85.8705° E
                  </span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3">
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold hover:bg-[#777A5A] transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#C69255]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F5F0E8] border border-[#D9C9B6] text-[#30231F] text-xs uppercase tracking-wider font-semibold hover:bg-[#D9C9B6]/40 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#777A5A]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D9C9B6] shadow-sm relative min-h-[380px] sm:min-h-[460px] bg-[#E8DFD4]">
            <iframe
              title="LA CAFEOTHEQUE Bhubaneswar Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6648714897217!2d85.8683247!3d20.2695048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1878c626885%3A0x3631f136ff7cc9ec!2sLA%20CAFEOTHEQUE%20BHUBANESWAR!5e0!3m2!1sen!2sin!4v1730279500000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%', width: '100%' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter saturate-110"
            />
            {/* Quick Map Floating Pill */}
            <div className="absolute top-4 left-4 bg-[#30231F]/90 backdrop-blur-md text-[#FAF7F2] px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 shadow-lg flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C69255]" />
              <span>LA CAFEOTHEQUE • Bhubaneswar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
