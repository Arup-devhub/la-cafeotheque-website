export interface GalleryImage {
  id: string;
  title: string;
  subtitle: string;
  category: 'interior' | 'coffee' | 'food' | 'vibes';
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  span: string; // for masonry grid styling
  alt: string;
}

export const galleryItems: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Warm Ambient Interior',
    subtitle: 'Intimate seating corners & filament lighting at LA CAFEOTHEQUE',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    span: 'col-span-12 md:col-span-8',
    alt: 'LA CAFEOTHEQUE warm cozy cafe interior with wood tables and ambient warm lamps'
  },
  {
    id: 'g2',
    title: 'The Art of the Pull',
    subtitle: 'Golden espresso extraction with dense caramel crema',
    category: 'coffee',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait',
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    alt: 'Barista pulling fresh double espresso shot with dense golden crema'
  },
  {
    id: 'g3',
    title: 'Signature Blended Frappes',
    subtitle: 'LA Chocowalnut & Irish Frappes prepared fresh daily',
    category: 'coffee',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait',
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    alt: 'Decadent chocolate hazelnut iced frappe topped with fluffy whipped cream'
  },
  {
    id: 'g4',
    title: 'Stone-Baked Crusts',
    subtitle: 'Hand-stretched 9-inch artisan pizzas fresh from the oven',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85',
    aspect: 'landscape',
    span: 'col-span-12 md:col-span-4',
    alt: 'Hot volcanic pizza with melting cheese and fresh Italian herbs'
  },
  {
    id: 'g5',
    title: 'Cozy Nooks & Conversations',
    subtitle: 'Quiet reading corners and friendship hangouts along the bypass',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait',
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    alt: 'Comfortable cafe corner with leather armchairs, wooden bookshelf, and warm sunlight'
  },
  {
    id: 'g6',
    title: 'Creamy White Sauce Penne',
    subtitle: 'Sweet corn & garlic parmesan pasta prepared to order',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281745?auto=format&fit=crop&w=1000&q=85',
    aspect: 'landscape',
    span: 'col-span-12 sm:col-span-6 md:col-span-6',
    alt: 'Creamy white sauce penne pasta garnished with herbs in a deep ceramic dish'
  },
  {
    id: 'g7',
    title: 'Velvety Microfoam Latte Art',
    subtitle: 'Steamed to 65°C for maximum natural sweetness',
    category: 'coffee',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85',
    aspect: 'landscape',
    span: 'col-span-12 md:col-span-6',
    alt: 'Latte art rosetta poured atop a hot creamy coffee in a ceramic cup'
  }
];
