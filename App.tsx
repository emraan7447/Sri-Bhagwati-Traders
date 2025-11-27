import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketTrends } from './components/MarketTrends';
import { ProductList } from './components/ProductList';
import { CartDrawer } from './components/CartDrawer';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LayoutSwitcher } from './components/LayoutSwitcher';
import { Product, CartItem } from './types';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, qty: item.qty + product.minOrderQty } 
            : item
        );
      }
      return [...prev, { ...product, qty: product.minOrderQty }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(item.minOrderQty, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onContactClick={() => setIsContactOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <ProductList onAddToCart={handleAddToCart} />
        <MarketTrends />
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQty={handleUpdateQty}
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <ChatBot />
      <LayoutSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}