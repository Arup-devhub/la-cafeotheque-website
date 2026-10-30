export interface CommunityHighlight {
  id: string;
  theme: string;
  quote: string;
  context: string;
  rating: number;
}

export const communityFeedback: CommunityHighlight[] = [
  {
    id: 'f1',
    theme: 'Atmosphere & Aesthetic',
    quote: 'One of the most photogenic and relaxing spots on the Cuttack-Puri bypass. The warm lighting and ambient music make it an effortless place to unwind.',
    context: 'Verified Local Diner Review • Bhubaneswar',
    rating: 5
  },
  {
    id: 'f2',
    theme: 'Signature Frappes',
    quote: 'The LA Chocowalnut Frappe and Irish Frappe are standout favorites. Rich, perfectly blended, and remarkably pocket-friendly.',
    context: 'Coffee Enthusiast Review • Odisha Dine Community',
    rating: 5
  },
  {
    id: 'f3',
    theme: 'Volcanic Pizza & Pastas',
    quote: 'Their Veg Volcanic Pizza and Sweet Corn White Sauce Pasta are must-tries. Generous portions, authentic flavors, and welcoming service.',
    context: 'Regular Visitor • Bhubaneswar Food Guide',
    rating: 5
  }
];
