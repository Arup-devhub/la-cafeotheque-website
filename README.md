# LA CAFEOTHEQUE | Premium Café Digital Experience
**Digital Experience Concept by Warrior Tech Service**  
**Target Client:** LA CAFEOTHEQUE, Bhubaneswar, Odisha, India  
**Live Coordinates:** `20.2695048, 85.8705134` (Cuttack-Puri Bypass Road, Bhubaneswar)  
**Google Maps:** [LA CAFEOTHEQUE Bhubaneswar on Google Maps](https://www.google.com/maps/place/LA+CAFEOTHEQUE+BHUBANESWAR/@20.2692588,85.6891245,12z/data=!4m15!1m8!3m7!1s0x3a19a1878c626885:0x3631f136ff7cc9ec!2sLA+CAFEOTHEQUE+BHUBANESWAR!8m2!3d20.2695048!4d85.8705134!10e1!16s%2Fg%2F11t88_mjnk!3m5!1s0x3a19a1878c626885:0x3631f136ff7cc9ec!8m2!3d20.2695048!4d85.8705134!16s%2Fg%2F11t88_mjnk)  

---

## ☕ Project Overview

This website is a custom, production-quality digital experience independently developed by **Warrior Tech Service** to showcase what an award-winning, editorial digital presence looks like for **LA CAFEOTHEQUE** in Bhubaneswar.

Rather than using generic restaurant templates, this experience has been custom-crafted to communicate:
- **Warmth, Ambience, and Hospitality** — capturing the cozy aesthetic corners and glowing filament lamps of the bypass café.
- **Coffee & Kitchen Excellence** — highlighting authentic signature drinks (LA Chocowalnut Frappe, Irish Latte) and stone-baked comfort (Veg Volcanic Pizza, Sweet Corn White Sauce Penne).
- **Verified Business Reality** — accurate address, real phone numbers (`+91 70775 43602`), exact GPS coordinates, confirmed daily hours (`9:30 AM – 11:00 PM`), and actual outlet menu pricing.

---

## 🎨 Visual Identity & Brand System

- **Color Palette:**
  - **Warm Ivory:** `#F5F0E8`
  - **Espresso Brown:** `#30231F`
  - **Soft Beige:** `#D9C9B6`
  - **Muted Olive:** `#777A5A`
  - **Amber Gold:** `#C69255`
  - **Deep Charcoal:** `#242321`
- **Typography:**
  - Headings: `Playfair Display` & `Cormorant Garamond` (Sophisticated Editorial Serifs)
  - Body & Navigation: `Plus Jakarta Sans` & `Inter` (Contemporary Geometric Sans)

---

## 🏛️ Website Structure & Features

1. **Editorial Navigation Bar:**
   - Sticky header with scroll-reactive opacity transition (transparent to ivory glass).
   - Wordmark with city subtitle ("Bhubaneswar • Odisha").
   - Navigation links with animated active-state indicators.
   - "Find Us" and "Reserve / Inquire" action buttons.
   - Responsive mobile drawer menu with operating status pill, quick call, and Instagram link.

2. **Full-Screen Hero:**
   - Cinematic photography with tonal overlays.
   - Headline: *"More Than Coffee. A Place to Belong."*
   - Location tag: *"Bhubaneswar, Odisha • Cuttack-Puri Bypass"*.
   - Quick stats row: 4.6★ rating, 9:30 AM–11 PM daily hours, lattes from ₹85, ~₹500 for two.
   - Subtle animated scroll indicator.

3. **Our Story & Ambience ("A Little Space. A Lot of Experience."):**
   - Narrative of the café’s role as an oasis along the Cuttack-Puri highway corridor.
   - Asymmetric visual composition featuring artisan espresso pouring and floating blend badge.
   - 3 value pillars: Handcrafted Brews, Warm Ambience, Pocket-Friendly Comfort.

4. **Signature Experiences:**
   - 4 bespoke editorial cards:
     - 01 • The Craft of Espresso (From ₹85)
     - 02 • Blended Indulgence (LA Chocowalnut Frappe)
     - 03 • Stone-Baked & Fresh (Volcanic Pizzas & Bechamel Pastas)
     - 04 • Vibes & Fellowship (Photogenic Corners & Ambient Lamps)

5. **Curated Menu & Specials:**
   - Category filter pills: All Offerings, Hot Coffees, Frappes & Coolers, Artisan Pizzas, Gourmet Pastas, Burgers & Bites, Sweet Treats.
   - Live real-time search input for quick lookup.
   - "Vegetarian Only" filter toggle with instant reactivity.
   - Badges for Signature creations, Popular items, and Verified Outlet Prices.
   - Organized in modular data file `src/data/menu.ts`.

6. **Visual Chronicle Gallery & Lightbox:**
   - Asymmetrical editorial masonry layout.
   - Category filtering (All, Interior, Coffee, Food).
   - High-resolution photographs with smooth hover zoom and caption reveals.
   - Accessible Lightbox modal with previous/next buttons and keyboard navigation (Escape, Arrow Left/Right).
   - Instagram community invitation (`#LaCafeothequeBbsr`).

7. **The Philosophy of Leisure Banner:**
   - Headline: *"Good Coffee. Better Conversations."*
   - Night ambiance visuals with deep espresso backdrop.
   - Real diner reviews and themes highlighting the atmosphere, frappes, and pizzas.

8. **Location & Directions:**
   - Verified address, landmarks, and parking accessibility info.
   - Live operational hours indicator ("Open Today • 9:30 AM – 11:00 PM").
   - "Get Directions on Google Maps" button linking directly to the listing.
   - "Copy Full Address" button with animated copied feedback toast.
   - High-fidelity Google Map embed with exact pin coordinates (`20.2695048, 85.8705134`).

9. **Contact & Table Inquiries:**
   - Direct cards for phone (`+91 70775 43602`), Instagram (`@lacafeothequebbsr`), and email (`info@lacafeotheque.in`).
   - Interactive inquiry form with frontend validation, error states, and submission simulation.
   - Direct WhatsApp integration button (`wa.me/917077543602`) for immediate booking.

10. **Refined Footer:**
    - Typographic wordmark, quick links, verified hours, social links, and smooth back-to-top button.
    - Subtle developer credit: *"Digital Experience Concept by Warrior Tech Service"*.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React + Bespoke SVG Insignias
- **Automation / Testing:** Puppeteer & headless Chrome test harness
- **SEO & Schema:** JSON-LD `CafeOrCoffeeShop` schema, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended, v26 tested)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/la-cafeotheque.git
cd la-cafeotheque

# Install dependencies
npm install

# Run the local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🧪 Automated QA & Browser Verification

An automated Puppeteer browser test suite (`test-browser.cjs`) is included:
- Verifies Desktop (1440x950) and Mobile (390x844) viewports.
- Tests menu category filtering, vegetarian toggling, search input.
- Validates the Gallery lightbox modal and keyboard controls.
- Tests the table reservation modal and form validation with instant feedback.
- Generates section-by-section screenshot captures into the root folder.
- Verified **ZERO console errors**.

To run the QA suite:
```bash
node test-browser.cjs
```

---

## 📦 Project Deliverables

- `RESEARCH.md` — Complete business intelligence report for LA CAFEOTHEQUE Bhubaneswar.
- `ASSETS.md` — Full attribution and reference guide for fonts, photographs, and icons.
- `OWNER_VERIFICATION_CHECKLIST.md` — Client demonstration checklist distinguishing verified data from customization points.
- `VERCEL_DEPLOYMENT.md` — Step-by-step instructions for zero-downtime deployment on Vercel.
- `vercel.json` — Pre-configured Vercel routing and security headers.
