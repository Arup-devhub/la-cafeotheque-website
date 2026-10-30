import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: '2 Guests',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello LA CAFEOTHEQUE! I would like to reserve a table.\nName: ${formData.name || 'Guest'}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nNotes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/917077543602?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] max-w-lg w-full rounded-2xl shadow-2xl border border-[#D9C9B6] overflow-hidden p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#30231F] hover:bg-[#D9C9B6]/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#30231F]">
              Table Request Submitted!
            </h3>
            <p className="text-xs text-[#30231F]/80 leading-relaxed max-w-sm mx-auto">
              We have recorded your inquiry for <strong>{formData.guests}</strong> on <strong>{formData.date}</strong> around <strong>{formData.time}</strong>. For instant confirmation, you can also send this directly via WhatsApp:
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-2.5 px-4 rounded-full bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp Instantly</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#777A5A] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A5A] font-bold">
                Table Inquiry &amp; Reservations
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#30231F] mt-0.5">
                Reserve Your Table
              </h3>
              <p className="text-xs text-[#30231F]/70 mt-1">
                Walk-ins are always warmly welcomed. Reserving ahead helps us prepare your preferred nook.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sweta Pattnaik"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Cozy Table)</option>
                    <option value="3-4 Guests">3 – 4 Guests</option>
                    <option value="5-8 Guests">5 – 8 Guests (Group Booth)</option>
                    <option value="8+ Guests">8+ Guests (Celebration)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                    Estimated Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM (Lunch)</option>
                    <option value="4:00 PM">4:00 PM (Afternoon Coffee)</option>
                    <option value="6:00 PM">6:00 PM (Sunset / Evening)</option>
                    <option value="8:00 PM">8:00 PM (Dinner)</option>
                    <option value="9:30 PM">9:30 PM (Late Bites)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1">
                  Special Notes / Occasion <span className="text-[10px] text-gray-400 lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, window seat preference"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C9B6] rounded-xl text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold hover:bg-[#777A5A] transition-colors cursor-pointer shadow-md"
              >
                Submit Reservation Request
              </button>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="text-xs text-[#777A5A] hover:underline font-medium inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Or tap here to book via WhatsApp directly</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
