import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { PROPRIETORS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-6 text-white font-serif">Sri Bhagwati <span className="text-amber-500">Traders</span></h3>
            <p className="text-stone-400 leading-relaxed mb-6 pr-4">
              Your trusted wholesale partner in the heart of Hyderabad. We have been supplying premium quality grains, spices, and oils to retailers and hotels for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 p-2.5 rounded-full text-stone-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-stone-800 p-2.5 rounded-full text-stone-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="bg-stone-800 p-2.5 rounded-full text-stone-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold text-white mb-6 font-serif">Quick Contact</h4>
            <div className="space-y-4">
              {PROPRIETORS.map((contact, index) => (
                <div key={index} className="bg-stone-800/50 rounded-xl p-4 border border-stone-800 hover:border-emerald-900/50 transition-colors">
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Proprietor</p>
                  <p className="font-bold text-white mb-3">{contact.name}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={`tel:+91${contact.number}`}
                      className="text-xs font-medium bg-stone-700 hover:bg-stone-600 text-white py-1.5 px-3 rounded-lg transition-colors flex items-center"
                    >
                      <Phone className="h-3 w-3 mr-1.5" /> Call
                    </a>
                    <a 
                      href={`https://wa.me/91${contact.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-emerald-900/50 hover:bg-emerald-900 text-emerald-400 hover:text-emerald-300 py-1.5 px-3 rounded-lg transition-colors flex items-center border border-emerald-900"
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
            <h4 className="text-lg font-bold text-white mb-6 font-serif">Visit Us</h4>
            <div className="flex items-start mb-6">
               <div className="bg-stone-800 p-2 rounded-lg mr-4 mt-1">
                 <MapPin className="h-5 w-5 text-amber-500" />
               </div>
               <div>
                 <p className="text-white font-medium mb-1">Begum Bazar Store</p>
                 <span className="text-stone-400 text-sm">Shop No. 15-8-123,<br />Hyderabad, Telangana - 500012</span>
               </div>
            </div>
            
            <div className="border-t border-stone-800 pt-6 mt-6">
               <p className="text-sm text-stone-400"><span className="text-emerald-500 font-semibold">Mon - Sat:</span> 9:00 AM - 9:00 PM</p>
               <p className="text-sm text-stone-500 mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Sri Bhagwati Traders. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Wholesale prices subject to market availability.</p>
        </div>
      </div>
    </footer>
  );
};