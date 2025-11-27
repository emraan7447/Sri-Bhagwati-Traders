import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, mobileMenuOpen, setMobileMenuOpen, onContactClick }) => {
  const { layout } = useTheme();
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

  // Theme Styles Configuration
  const themeStyles = {
    classic: {
      navBg: scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent',
      text: scrolled ? 'text-emerald-900' : 'text-white',
      linkText: scrolled ? 'text-gray-700' : 'text-emerald-50',
      linkHover: 'hover:text-amber-500',
      cartBg: scrolled ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-white/10 text-white hover:bg-white/20',
      brandAccent: 'text-amber-500'
    },
    modern: {
      navBg: scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100' : 'bg-transparent',
      text: scrolled ? 'text-blue-900' : 'text-white',
      linkText: scrolled ? 'text-gray-600' : 'text-blue-50',
      linkHover: 'hover:text-blue-600',
      cartBg: scrolled ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-white/20 text-white hover:bg-white/30',
      brandAccent: 'text-blue-500'
    },
    dark: {
      navBg: scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent',
      text: scrolled ? 'text-amber-50' : 'text-slate-100',
      linkText: scrolled ? 'text-slate-300' : 'text-slate-300',
      linkHover: 'hover:text-amber-400',
      cartBg: scrolled ? 'bg-amber-900/20 text-amber-400 hover:bg-amber-900/40 border border-amber-900/30' : 'bg-black/30 text-amber-100 hover:bg-black/50 border border-white/10',
      brandAccent: 'text-amber-500'
    }
  };

  const currentStyle = themeStyles[layout];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${currentStyle.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className={`font-serif font-bold text-2xl tracking-tight transition-colors ${currentStyle.text}`}>
                Sri Bhagwati <span className={currentStyle.brandAccent}>Traders</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'Trends'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'products' ? 'products' : 'trends')} 
                className={`text-sm font-medium transition-colors ${currentStyle.linkText} ${currentStyle.linkHover}`}
              >
                {item}
              </button>
            ))}
            <button onClick={onContactClick} className={`text-sm font-medium transition-colors ${currentStyle.linkText} ${currentStyle.linkHover}`}>Contact Us</button>
            
            <button 
              onClick={onCartClick}
              className={`relative p-2 rounded-full transition-colors ${currentStyle.cartBg}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className={`absolute -top-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white ${
                  layout === 'dark' ? 'bg-amber-500 text-black' : 'bg-amber-500 text-white'
                }`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${currentStyle.text}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute w-full shadow-xl border-b ${
          layout === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Products', 'Trends'].map((item) => (
               <button 
                 key={item}
                 onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'products' ? 'products' : 'trends')} 
                 className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${
                   layout === 'dark' ? 'text-slate-300 hover:bg-slate-800 hover:text-amber-400' : 'text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 {item}
               </button>
            ))}
            <button 
              onClick={() => { onContactClick(); setMobileMenuOpen(false); }} 
              className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${
                layout === 'dark' ? 'text-slate-300 hover:bg-slate-800 hover:text-amber-400' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};