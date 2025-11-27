import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, mobileMenuOpen, setMobileMenuOpen, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className={`font-serif font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
                Sri Bhagwati <span className="text-amber-500">Traders</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-emerald-50'}`}>Home</button>
            <button onClick={() => scrollToSection('products')} className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-emerald-50'}`}>Products</button>
            <button onClick={() => scrollToSection('trends')} className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-emerald-50'}`}>Market Trends</button>
            <button onClick={onContactClick} className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-emerald-50'}`}>Contact Us</button>
            
            <button 
              onClick={onCartClick}
              className={`relative p-2 rounded-full transition-colors ${scrolled ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-emerald-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">Home</button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">Products</button>
            <button onClick={() => scrollToSection('trends')} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">Trends</button>
            <button onClick={() => { onContactClick(); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">Contact Sales</button>
            <button onClick={() => { onCartClick(); setMobileMenuOpen(false); }} className="flex w-full items-center px-3 py-3 rounded-lg text-base font-medium text-emerald-700 bg-emerald-50">
              <ShoppingCart className="h-5 w-5 mr-3" /> View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};