import React from 'react';
import { X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { PROPRIETORS } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="rounded-full bg-stone-100 p-2 text-stone-400 hover:text-stone-500 hover:bg-stone-200 focus:outline-none transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-2">
              Contact Sales Team
            </h3>
            <p className="text-sm text-stone-500 mb-8">
              Connect directly with our proprietors for bulk rates.
            </p>

            <div className="space-y-4">
              {PROPRIETORS.map((proprietor, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all hover:bg-white hover:shadow-lg hover:border-emerald-100 hover:scale-[1.02] duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Proprietor</p>
                      <h4 className="text-lg font-bold text-stone-900 font-serif">{proprietor.name}</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:+91${proprietor.number}`}
                      className="flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2 text-stone-400" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${proprietor.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#128C7E] transition-colors shadow-sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-stone-900 p-4 text-white flex items-center shadow-lg">
               <div className="bg-stone-800 p-3 rounded-full mr-4">
                 <MapPin className="h-5 w-5 text-amber-500" />
               </div>
               <div>
                 <p className="text-xs text-stone-400 uppercase tracking-wide font-semibold">Visit Our Store</p>
                 <p className="text-sm font-medium mt-0.5">Shop No. 15-8-123, Begum Bazar, Hyderabad.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};