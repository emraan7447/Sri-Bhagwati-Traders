import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { PROPRIETORS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sri Bhagwati <span className="text-orange-500">Traders</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted wholesale partner in the heart of Hyderabad. We supply premium quality grains and spices to retailers across the state.
            </p>
            <div className="flex items-start mt-4">
               <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-gray-300 text-sm">Shop No. 15-8-123, Begum Bazar,<br />Hyderabad, Telangana - 500012</span>
            </div>
            <div className="flex items-center mt-3">
               <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
               <span className="text-gray-300 text-sm">sales@sribhagwatitraders.com</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Proprietors</h3>
            <div className="space-y-6">
              {PROPRIETORS.map((contact, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Proprietor</p>
                  <p className="font-medium text-white mb-3">{contact.name}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={`tel:+91${contact.number}`}
                      className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded text-sm transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" /> Call
                    </a>
                    <a 
                      href={`https://wa.me/91${contact.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social / Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Business Hours</h3>
            <p className="text-gray-300 text-sm mb-6">
              Mon - Sat: 9:00 AM - 9:00 PM<br/>
              Sunday: Closed
            </p>
            
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sri Bhagwati Traders. All rights reserved. Prices subject to market fluctuation.
          </p>
        </div>
      </div>
    </footer>
  );
};