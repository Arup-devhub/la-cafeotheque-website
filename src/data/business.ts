export interface BusinessInfo {
  name: string;
  tagline: string;
  altTagline: string;
  conceptCredit: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
    landmark: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
  embedMapUrl: string;
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    displayPhone: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    brandInstagramHandle: string;
    brandInstagramUrl: string;
    website: string;
  };
  hours: {
    days: string;
    time: string;
    status: string;
    openTime: string;
    closeTime: string;
  }[];
  priceForTwo: string;
  ratings: {
    score: number;
    maxScore: number;
    reviewCount: string;
    source: string;
  };
  features: string[];
}

export const businessData: BusinessInfo = {
  name: "LA CAFEOTHEQUE",
  tagline: "More Than Coffee. A Place to Belong.",
  altTagline: "Your Everyday Escape, Beautifully Brewed.",
  conceptCredit: "Digital Experience Concept by Warrior Tech Service",
  address: {
    line1: "Plot No. 1051/2758 & 1052/2757",
    line2: "Meherpalli, BB Nagar, Kesura, Tax Ward No.-32",
    locality: "Cuttack-Puri Bypass Road (Near Lakshmi Sagar)",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751015",
    country: "India",
    full: "Plot No. 1051/2758 & 1052/2757, Meherpalli, BB Nagar, Kesura, Tax Ward No.-32, Cuttack-Puri Bypass Road, Bhubaneswar, Odisha 751015",
    landmark: "Along Cuttack-Puri Highway corridor, easy highway accessibility with roadside parking"
  },
  coordinates: {
    latitude: 20.2695048,
    longitude: 85.8705134,
  },
  googleMapsUrl: "https://www.google.com/maps/place/LA+CAFEOTHEQUE+BHUBANESWAR/@20.2692588,85.6891245,12z/data=!4m15!1m8!3m7!1s0x3a19a1878c626885:0x3631f136ff7cc9ec!2sLA+CAFEOTHEQUE+BHUBANESWAR!8m2!3d20.2695048!4d85.8705134!10e1!16s%2Fg%2F11t88_mjnk!3m5!1s0x3a19a1878c626885:0x3631f136ff7cc9ec!8m2!3d20.2695048!4d85.8705134!16s%2Fg%2F11t88_mjnk",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.57861962372!2d85.8705134!3d20.2695048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1878c626885%3A0x3631f136ff7cc9ec!2sLA%20CAFEOTHEQUE%20BHUBANESWAR!5e0!3m2!1sen!2sin!4v1730279500000!5m2!1sen!2sin",
  contact: {
    primaryPhone: "+917077543602",
    secondaryPhone: "+916370724377",
    displayPhone: "+91 70775 43602",
    email: "info@lacafeotheque.in",
    instagramHandle: "@lacafeothequebbsr",
    instagramUrl: "https://www.instagram.com/lacafeothequebbsr",
    brandInstagramHandle: "@lacafeothequeindia",
    brandInstagramUrl: "https://www.instagram.com/lacafeothequeindia",
    website: "https://lacafeotheque.in"
  },
  hours: [
    {
      days: "Monday – Sunday",
      time: "9:30 AM – 11:00 PM",
      status: "Open Daily",
      openTime: "09:30",
      closeTime: "23:00"
    }
  ],
  priceForTwo: "₹500 – ₹550 approx.",
  ratings: {
    score: 4.6,
    maxScore: 5.0,
    reviewCount: "500+ Verified Reviews",
    source: "Google & Regional Diner Directories"
  },
  features: [
    "Specialty Coffees & Signature Frappes",
    "Handmade Stone-Baked Pizzas & Italian Pastas",
    "Aesthetic Photogenic Corners & Ambient Lighting",
    "Comfortable Indoor Air-Conditioned & Casual Seating",
    "Cozy Hangout for Friends, Dates & Work Sessions",
    "Convenient Pitstop on Cuttack-Puri Bypass"
  ]
};
