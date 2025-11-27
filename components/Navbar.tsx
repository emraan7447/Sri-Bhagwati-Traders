import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl tracking-tight">Sri Bhagwati <span className="text-orange-400">Traders</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#products" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium">Products</a>
                <a href="#trends" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium">Market Trends</a>
                <a href="#contact" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={onCartClick}
              className="relative bg-emerald-700 p-2 rounded-full hover:bg-emerald-600 focus:outline-none transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-800 border-t border-emerald-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block hover:bg-emerald-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block hover:bg-emerald-700 px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#trends" onClick={() => setMobileMenuOpen(false)} className="block hover:bg-emerald-700 px-3 py-2 rounded-md text-base font-medium">Trends</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:bg-emerald-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button onClick={() => { onCartClick(); setMobileMenuOpen(false); }} className="w-full text-left flex items-center hover:bg-emerald-700 px-3 py-2 rounded-md text-base font-medium">
              <ShoppingCart className="h-5 w-5 mr-2" /> Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};