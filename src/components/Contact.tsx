import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { businessData } from '../data/business';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or inquiry.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  // WhatsApp prefilled message helper
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello LA CAFEOTHEQUE! I would like to inquire about visiting your café in Bhubaneswar. My name is ${formData.name || 'a guest'}.`
    );
    window.open(`https://wa.me/917077543602?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A5A] font-semibold">
            Get In Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-[#30231F] font-normal tracking-tight">
            Connect With The Café
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#30231F]/70 font-light">
            Have a question about our menu, private celebrations, or table availability? We’d love to hear from you.
          </p>
          <div className="w-12 h-[1px] bg-[#30231F]/30 mx-auto mt-6" />
        </div>

        {/* Contact Grid: Direct Info Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 bg-[#F5F0E8] rounded-2xl border border-[#D9C9B6] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#30231F] text-[#FAF7F2]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-[#777A5A] font-semibold">
                  Direct Phone
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#30231F]">
                  {businessData.contact.displayPhone}
                </h4>
                <p className="text-xs text-[#30231F]/70 mt-1">
                  Call for instant inquiries, takeaway pickups, and directions.
                </p>
                <a
                  href={`tel:${businessData.contact.primaryPhone}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#777A5A] hover:underline"
                >
                  <span>Call Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 bg-[#F5F0E8] rounded-2xl border border-[#D9C9B6] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#30231F] text-[#FAF7F2]">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-[#777A5A] font-semibold">
                  Official Instagram
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#30231F]">
                  @lacafeothequebbsr
                </h4>
                <p className="text-xs text-[#30231F]/70 mt-1">
                  Explore daily stories, reel highlights, and customer tags.
                </p>
                <a
                  href={businessData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#777A5A] hover:underline"
                >
                  <span>View Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email & Web Card */}
            <div className="p-6 bg-[#F5F0E8] rounded-2xl border border-[#D9C9B6] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#30231F] text-[#FAF7F2]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-[#777A5A] font-semibold">
                  Official Email
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#30231F]">
                  {businessData.contact.email}
                </h4>
                <p className="text-xs text-[#30231F]/70 mt-1">
                  For brand collaborations, events, and business feedback.
                </p>
                <a
                  href={`mailto:${businessData.contact.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#777A5A] hover:underline"
                >
                  <span>Send an Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#F5F0E8] p-8 sm:p-10 rounded-2xl border border-[#D9C9B6] shadow-sm">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#30231F]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#30231F]/80 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received. During normal cafe hours, our team or host typically replies promptly.
                </p>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D9C9B6] max-w-md mx-auto text-left text-xs text-[#30231F]/80 space-y-1">
                  <p><strong>Note for client presentation:</strong> This form demonstrates full client-side validation and submission workflow. In production, it can seamlessly integrate with WhatsApp Business API, Formspree, or EmailJS.</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#777A5A] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#30231F]">
                    Send a Message or Table Inquiry
                  </h3>
                  <p className="text-xs text-[#30231F]/70 mt-1">
                    Fill in your details below and we will get back to you shortly.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Priyanshu Mohapatra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs text-[#30231F] placeholder-[#30231F]/40 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-[#D9C9B6] focus:ring-[#777A5A]/30 focus:border-[#777A5A]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs text-[#30231F] placeholder-[#30231F]/40 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-[#D9C9B6] focus:ring-[#777A5A]/30 focus:border-[#777A5A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1.5">
                      Phone Number <span className="text-gray-400 text-[10px] lowercase">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D9C9B6] rounded-xl text-xs text-[#30231F] placeholder-[#30231F]/40 focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                    />
                  </div>
                </div>

                {/* Inquiry Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D9C9B6] rounded-xl text-xs text-[#30231F] focus:outline-none focus:ring-2 focus:ring-[#777A5A]/30 focus:border-[#777A5A]"
                  >
                    <option value="Table Reservation">Table Reservation Inquiry</option>
                    <option value="General Inquiry">General Café Inquiry</option>
                    <option value="Birthday / Celebration">Birthday / Celebration Booking</option>
                    <option value="Feedback">Customer Experience Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-1.5">
                    Your Message / Notes <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your timing, party size, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs text-[#30231F] placeholder-[#30231F]/40 focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-[#D9C9B6] focus:ring-[#777A5A]/30 focus:border-[#777A5A]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#30231F] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold hover:bg-[#777A5A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#777A5A] hover:text-[#30231F] cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Prefer WhatsApp? Click here</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
