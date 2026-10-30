export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'frappes' | 'pizza' | 'pasta' | 'bites' | 'desserts';
  description: string;
  price: number | null; // null if unverified, otherwise exact price
  priceDisplay?: string;
  isVegetarian: boolean;
  isSignature?: boolean;
  isPopular?: boolean;
  verified: boolean;
  image: string;
}

export interface MenuCategory {
  id: 'all' | 'coffee' | 'frappes' | 'pizza' | 'pasta' | 'bites' | 'desserts';
  label: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'all',
    label: 'All Offerings',
    description: 'Explore our complete selection of artisanal brews, cold frappes, and savory kitchen creations.'
  },
  {
    id: 'coffee',
    label: 'Hot Coffees',
    description: 'Espresso-based classics brewed from carefully roasted beans with velvety microfoam.'
  },
  {
    id: 'frappes',
    label: 'Frappes & Coolers',
    description: 'Blended signature cold coffees, chilled thick shakes, and revitalizing botanical coolers.'
  },
  {
    id: 'pizza',
    label: 'Artisan Pizzas',
    description: 'Freshly baked 9-inch hand-stretched crusts topped with rich tomato sugo and melted mozzarella.'
  },
  {
    id: 'pasta',
    label: 'Gourmet Pastas',
    description: 'Penne and fusilli tossed in slow-simmered arrabbiata or rich sweet-corn bechamel cream.'
  },
  {
    id: 'bites',
    label: 'Burgers & Bites',
    description: 'Toasted gourmet sandwiches, crispy wraps, and savory cafe classics.'
  },
  {
    id: 'desserts',
    label: 'Sweet Treats',
    description: 'Warm chocolate brownies, indulgent sundaes, and dessert moments to complete your visit.'
  }
];

export const menuItems: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Irish Latte',
    category: 'coffee',
    description: 'Double espresso infused with smooth Irish cream syrup, steamed whole milk, and light silky crema.',
    price: 85,
    isVegetarian: true,
    isSignature: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c2',
    name: 'Caramel Macchiato',
    category: 'coffee',
    description: 'Steamed milk stained with rich espresso, finished with a generous drizzle of handcrafted butterscotch caramel.',
    price: 85,
    isVegetarian: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c3',
    name: 'Cafe Mocha',
    category: 'coffee',
    description: 'Dark Belgian cocoa melted into freshly pulled espresso shots and textured milk with cocoa dust.',
    price: 85,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c4',
    name: 'Classic Cappuccino',
    category: 'coffee',
    description: 'Balanced 1:1:1 ratio of bold espresso, silky steamed milk, and a thick cloud of velvety foam.',
    price: 80,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80'
  },

  // FRAPPES & COOLERS
  {
    id: 'f1',
    name: 'LA Chocowalnut Frappe',
    category: 'frappes',
    description: 'House specialty blended cold brew with roasted walnuts, dark chocolate fudge, and rich whipped cream.',
    price: 119,
    isVegetarian: true,
    isSignature: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'f2',
    name: 'Irish Frappe',
    category: 'frappes',
    description: 'Creamy chilled espresso blended with Irish notes, crushed ice, and topped with chocolate curls.',
    price: 119,
    isVegetarian: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'f3',
    name: 'Classic LA Cold Coffee',
    category: 'frappes',
    description: 'The beloved everyday café thick cold coffee, churned to thick frothy perfection with milk and ice cream.',
    price: 99,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'f4',
    name: 'Mint Lemon Iced Tea',
    category: 'frappes',
    description: 'Slow-brewed Ceylon tea infused with crushed fresh garden mint, tangy lemon squeeze, and chilled over ice.',
    price: 110,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'f5',
    name: 'Lavender Berry Slush',
    category: 'frappes',
    description: 'Refreshing crushed crystal ice cooler blended with aromatic lavender syrup and wild berry crush.',
    price: 200,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  },

  // PIZZA (9-INCH HAND-CRAFTED)
  {
    id: 'p1',
    name: 'Veg Volcanic Pizza (9")',
    category: 'pizza',
    description: 'Signature volcano crust loaded with molten mozzarella, spicy jalapeños, crisp bell peppers, sweet corn, and fiery herb oil.',
    price: 370,
    isVegetarian: true,
    isSignature: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'p2',
    name: 'Veg Margherita Pizza (9")',
    category: 'pizza',
    description: 'Classic Italian San Marzano tomato reduction, whole milk mozzarella, basil chiffonade, and virgin olive oil.',
    price: 300,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'p3',
    name: 'Chicken Barbeque Pizza (9")',
    category: 'pizza',
    description: 'Smoked pulled chicken tossed in hickory BBQ sauce, caramelized onions, mozzarella, and cilantro leaves.',
    price: 400,
    isVegetarian: false,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'
  },

  // PASTA
  {
    id: 'pa1',
    name: 'Sweet Corn White Sauce Penne',
    category: 'pasta',
    description: 'Al dente penne folded into velvety garlic parmesan bechamel sauce with tender sweet corn kernels and cracked black pepper.',
    price: 320,
    isVegetarian: true,
    isSignature: true,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281745?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pa2',
    name: 'Veg Arrabiata Red Sauce Pasta',
    category: 'pasta',
    description: 'Spicy roasted garlic and plum tomato sauce cooked with crushed chili flakes, bell peppers, black olives, and Italian herbs.',
    price: 320,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pa3',
    name: 'LA Special Non-Veg Pasta',
    category: 'pasta',
    description: 'House specialty mixed sauce penne loaded with tender seasoned chicken chunks, herbs, mushrooms, and melted cheese.',
    price: 169,
    isVegetarian: false,
    isSignature: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
  },

  // BITES, BURGERS & WRAPS
  {
    id: 'b1',
    name: 'Garlic Chicken Sandwich',
    category: 'bites',
    description: 'Grilled artisanal bread stuffed with roasted garlic shredded chicken, crunchy romaine, cucumber, and herbed aioli.',
    price: 330,
    isVegetarian: false,
    isPopular: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b2',
    name: 'Paneer Tikka Wrap',
    category: 'bites',
    description: 'Soft tortilla wrap filled with marinated char-grilled cottage cheese cubes, mint dip, crispy onions, and bell peppers.',
    price: 229,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b3',
    name: 'Veg King Size Burger',
    category: 'bites',
    description: 'Crispy herb potato and vegetable patty layered with melted cheese slice, tangy burger relish, and fresh tomatoes in a toasted sesame brioche.',
    price: 200,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b4',
    name: 'Crispy Peri-Peri Fries',
    category: 'bites',
    description: 'Golden skin-on french fries tossed in zesty peri-peri seasoning, served with garlic mayo dip.',
    price: 140,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80'
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Warm Sizzling Chocolate Brownie',
    category: 'desserts',
    description: 'Decadent fudge walnut brownie served warm with a generous scoop of vanilla bean gelato and warm chocolate ganache.',
    price: 180,
    isVegetarian: true,
    isSignature: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'd2',
    name: 'Butterscotch Apple Sundae',
    category: 'desserts',
    description: 'Layers of caramelized cinnamon apples, crushed waffle crisps, butterscotch sauce, and soft cream.',
    price: 210,
    isVegetarian: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80'
  }
];
