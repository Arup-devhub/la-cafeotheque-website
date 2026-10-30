# LA CAFEOTHEQUE — CLIENT PRESENTATION & VERIFICATION CHECKLIST
**Prepared by:** Warrior Tech Service  
**For:** Business Owner / Management of LA CAFEOTHEQUE, Bhubaneswar  

---

## 1. Verified Information Included in Concept

The following details have been researched, verified, and embedded directly into the production website:

- [x] **Trade Name:** LA CAFEOTHEQUE (LA CAFEOTHEQUE BHUBANESWAR)
- [x] **Primary Address:** Plot No. 1051/2758 & 1052/2757, Meherpalli, BB Nagar, Kesura, Tax Ward No.-32, Cuttack-Puri Bypass Road, Bhubaneswar, Odisha — 751015
- [x] **Exact GPS Coordinates:** 20.2695048, 85.8705134
- [x] **Google Maps Direct Listing:** Integrated into "Get Directions" buttons and interactive maps
- [x] **Direct Contact Numbers:** `+91 70775 43602` / `+91 63707 24377`
- [x] **Official Email:** `info@lacafeotheque.in`
- [x] **Official Social Media:** `@lacafeothequebbsr` / `@lacafeothequeindia`
- [x] **Opening Hours:** Monday – Sunday: 9:30 AM – 11:00 PM (100% verified across regional listings)
- [x] **Key Menu Items & Pricing:**
  - Irish Latte (₹85)
  - Caramel Macchiato (₹85)
  - LA Chocowalnut Frappe (₹119)
  - Irish Frappe (₹119)
  - Classic Cold Coffee (₹99)
  - Veg Volcanic Pizza 9" (₹370)
  - Veg Margherita Pizza 9" (₹300)
  - Chicken BBQ Pizza 9" (₹400)
  - Sweet Corn White Sauce Penne (₹320)
  - LA Special Non-Veg Pasta (₹169)
  - Garlic Chicken Sandwich (₹330)
  - Paneer Wrap (₹229)
  - Veg King Size Burger (₹200)

---

## 2. Items for Confirmation / Personalization with Owner

During the client demonstration, discuss these optional enhancements with the café owner:

1. **Official High-Resolution Vector Logo:**
   - Currently, a bespoke refined editorial wordmark is rendered in Cormorant Garamond.
   - If the café has an official vector SVG or PNG logo, it can be dropped into `/src/assets/logo.svg` in 30 seconds.

2. **Table Reservation & Ordering Workflow:**
   - Currently configured with an interactive modal and direct WhatsApp integration (`wa.me/917077543602`).
   - Confirm if table reservations should route to WhatsApp, direct phone, or a dedicated booking dashboard (Zomato Dining / Swiggy SteppinOut / custom backend).

3. **Latest Seasonal Menu Additions:**
   - Review `/src/data/menu.ts` to add any new seasonal frappes, winter specials, or recent price adjustments.

4. **Exclusive Café Photography:**
   - High-grade editorial imagery currently illustrates the ambiance and items.
   - Offer a professional café photo shoot or integrate existing proprietary Instagram photos directly into `/src/data/gallery.ts`.

5. **Custom Production Domain:**
   - Link domain (e.g. `lacafeotheque.in` or custom subdomain) on Vercel with zero downtime.
