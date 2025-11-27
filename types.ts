export enum Category {
  RICE = 'Rice & Grains',
  SPICES = 'Masalas & Spices',
  OILS = 'Oils & Ghee',
  PULSES = 'Dals & Pulses',
  SAUCES = 'Sauces & Condiments'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  priceMRP: number;
  priceWholesale: number; // Price per unit
  minOrderQty: number;
  unit: string;
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  qty: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}