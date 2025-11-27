import React from 'react';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { PROPRIETORS } from '../constants';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { layout } = useTheme();

  const styles = {
    classic: {
      bg: 'bg-stone-900', text: 'text-stone-300', heading: 'text-white',
      accent: 'text-amber-500', cardBg: 'bg-stone-800/50', border: 'border-stone-800'
    },
    modern: {
      bg: 'bg-blue-900', text: 'text-blue-100', heading: 'text-white',
      accent: 'text-cyan-400', cardBg: 'bg-white/10', border: 'border-blue-800'
    },
    dark: {
      bg: 'bg-black', text: 'text-slate-400', heading: 'text-amber-50',
      accent: 'text-amber-500', cardBg: 'bg-slate-900', border: 'border-slate-800'
    }
  };

  const current = styles[layout];

  return (
    <footer id="contact" className={`${current.bg} ${current.text} py-16 border-t ${current.border} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className={`text-2xl font-bold mb-6 ${current.heading} font-serif`}>Sri Bhagwati <span className={current.accent}>Traders</span></h3>
            <p className="opacity-80 leading-relaxed mb-6 pr-4">
              Your trusted wholesale partner in the heart of Hyderabad. We have been supplying premium quality grains, spices, and oils to retailers and hotels for over 20 years.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className={`p-2.5 rounded-full ${current.cardBg} hover:bg-white hover:text-black transition-all duration-300`}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-4">
            <h4 className={`text-lg font-bold mb-6 ${current.heading} font-serif`}>Quick Contact</h4>
            <div className="space-y-4">
              {PROPRIETORS.map((contact, index) => (
                <div key={index} className={`${current.cardBg} rounded-xl p-4 border ${current.border} hover:border-opacity-50 transition-colors`}>
                  <p className="text-xs opacity-60 uppercase tracking-wide mb-1">Proprietor</p>
                  <p className={`font-bold mb-3 ${current.heading}`}>{contact.name}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={`tel:+91${contact.number}`}
                      className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-lg transition-colors flex items-center"
                    >
                      <Phone className="h-3 w-3 mr-1.5" /> Call
                    </a>
                    <a 
                      href={`https://wa.me/91${contact.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] py-1.5 px-3 rounded-lg transition-colors flex items-center border border-[#25D366]/30"
                    >
                      <MessageCircle className="h-3 w-3 mr-1.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4">
            <h4 className={`text-lg font-bold mb-6 ${current.heading} font-serif`}>Visit Us</h4>
            <div className="flex items-start mb-6">
               <div className={`${current.cardBg} p-2 rounded-lg mr-4 mt-1`}>
                 <MapPin className={`h-5 w-5 ${current.accent}`} />
               </div>
               <div>
                 <p className={`${current.heading} font-medium mb-1`}>Begum Bazar Store</p>
                 <span className="opacity-70 text-sm">Shop No. 15-8-123,<br />Hyderabad, Telangana - 500012</span>
               </div>
            </div>
            
            <div className={`border-t ${current.border} pt-6 mt-6`}>
               <p className="text-sm opacity-70"><span className={`${current.accent} font-semibold`}>Mon - Sat:</span> 9:00 AM - 9:00 PM</p>
               <p className="text-sm opacity-60 mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className={`border-t ${current.border} pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60`}>
          <p>© {new Date().getFullYear()} Sri Bhagwati Traders. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Wholesale prices subject to market availability.</p>
        </div>
      </div>
    </footer>
  );
};