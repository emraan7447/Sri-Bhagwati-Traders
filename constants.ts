import { Category, Product } from './types';

export const PROPRIETORS = [
  { name: "Trilok Ramawath", number: "9346994172" },
  { name: "Om Prakash Ramawath", number: "7013084492" }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Basmati Rice (XL Grain)',
    category: Category.RICE,
    description: 'Aged extra long grain basmati rice, perfect for biryani.',
    priceMRP: 120,
    priceWholesale: 85,
    minOrderQty: 1,
    unit: 'kg',
    // Rice in open jute sack
    image: 'https://images.unsplash.com/photo-1630612660738-9cb52585f8c6?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '2',
    name: 'Sona Masoori Rice',
    category: Category.RICE,
    description: 'High quality daily use medium grain rice.',
    priceMRP: 60,
    priceWholesale: 42,
    minOrderQty: 1,
    unit: 'kg',
    // Bulk rice heap/sack view
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '3',
    name: 'Tur Dal (Polished)',
    category: Category.PULSES,
    description: 'Premium quality polished Toor Dal.',
    priceMRP: 140,
    priceWholesale: 115,
    minOrderQty: 1,
    unit: 'kg',
    // Yellow lentils in bulk/sack
    image: 'https://images.unsplash.com/photo-1610725664338-23c6b76985c8?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '4',
    name: 'Sunflower Oil (15L Tin)',
    category: Category.OILS,
    description: 'Refined sunflower oil, bulk tin packaging.',
    priceMRP: 1800,
    priceWholesale: 1550,
    minOrderQty: 1,
    unit: 'tin',
    // Oil bottles/cans
    image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '5',
    name: 'Coriander Powder (Dhania)',
    category: Category.SPICES,
    description: 'Aromatic, freshly ground coriander powder.',
    priceMRP: 220,
    priceWholesale: 180,
    minOrderQty: 1,
    unit: 'kg',
    // Spices in sacks/bowls in market
    image: 'https://images.unsplash.com/photo-1588612502804-d50e8229f3d6?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '6',
    name: 'Kashmiri Red Chilli Powder',
    category: Category.SPICES,
    description: 'Vibrant color, medium heat.',
    priceMRP: 450,
    priceWholesale: 320,
    minOrderQty: 1,
    unit: 'kg',
    // Red powder in bulk sacks
    image: 'https://images.unsplash.com/photo-1601053744933-722a4d95267b?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '7',
    name: 'Soy Sauce (Dark)',
    category: Category.SAUCES,
    description: 'Restaurant grade dark soy sauce.',
    priceMRP: 120,
    priceWholesale: 85,
    minOrderQty: 1,
    unit: 'bottle (750ml)',
    // Sauce bottles
    image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d693?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '8',
    name: 'Green Chilli Sauce',
    category: Category.SAUCES,
    description: 'Spicy green chilli sauce for fast food.',
    priceMRP: 90,
    priceWholesale: 65,
    minOrderQty: 1,
    unit: 'bottle (750ml)',
    // Green sauce/chilli aesthetic
    image: 'https://images.unsplash.com/photo-1582234372928-8687b8971f45?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '9',
    name: 'Moong Dal (Yellow)',
    category: Category.PULSES,
    description: 'Split yellow moong beans.',
    priceMRP: 110,
    priceWholesale: 88,
    minOrderQty: 1,
    unit: 'kg',
    // Sacks of yellow lentils/grains
    image: 'https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: '10',
    name: 'Cumin Seeds (Jeera)',
    category: Category.SPICES,
    description: 'Premium quality whole cumin seeds.',
    priceMRP: 380,
    priceWholesale: 310,
    minOrderQty: 1,
    unit: 'kg',
    // Spices/Seeds in sacks
    image: 'https://images.unsplash.com/photo-1507723908985-e35e7df25555?q=80&w=800&auto=format&fit=crop',
    inStock: true,
  }
];

export const MARKET_TRENDS = [
  { month: 'Jan', Rice: 40, Oil: 140, Pulses: 100 },
  { month: 'Feb', Rice: 41, Oil: 138, Pulses: 105 },
  { month: 'Mar', Rice: 42, Oil: 142, Pulses: 102 },
  { month: 'Apr', Rice: 41, Oil: 145, Pulses: 108 },
  { month: 'May', Rice: 43, Oil: 150, Pulses: 110 },
  { month: 'Jun', Rice: 42, Oil: 155, Pulses: 115 },
];