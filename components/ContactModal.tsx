import React from 'react';
import { X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { PROPRIETORS } from '../constants';
import { useTheme } from '../context/ThemeContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { layout } = useTheme();
  
  if (!isOpen) return null;

  const isDark = layout === 'dark';

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className={`relative transform overflow-hidden rounded-3xl text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 sm:p-8 ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className={`rounded-full p-2 transition-colors ${isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-stone-100 text-stone-400 hover:text-stone-500'}`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center sm:text-left">
            <h3 className={`text-2xl font-bold font-serif mb-2 ${isDark ? 'text-amber-50' : 'text-stone-900'}`}>
              Contact Sales Team
            </h3>
            <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
              Connect directly with our proprietors for bulk rates.
            </p>

            <div className="space-y-4">
              {PROPRIETORS.map((proprietor, index) => (
                <div key={index} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 hover:border-amber-500/50' 
                    : 'bg-stone-50 border-stone-200 hover:bg-white hover:shadow-lg hover:border-emerald-100'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-amber-500' : 'text-emerald-600'}`}>Proprietor</p>
                      <h4 className={`text-lg font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>{proprietor.name}</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:+91${proprietor.number}`}
                      className={`flex items-center justify-center px-4 py-2.5 rounded-xl border font-medium text-sm transition-colors ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800' 
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <Phone className="h-4 w-4 mr-2 opacity-70" />
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

            <div className={`mt-8 rounded-2xl p-4 flex items-center shadow-lg ${isDark ? 'bg-black text-amber-50 border border-slate-800' : 'bg-stone-900 text-white'}`}>
               <div className={`p-3 rounded-full mr-4 ${isDark ? 'bg-slate-900' : 'bg-stone-800'}`}>
                 <MapPin className="h-5 w-5 text-amber-500" />
               </div>
               <div>
                 <p className="text-xs opacity-60 uppercase tracking-wide font-semibold">Visit Our Store</p>
                 <p className="text-sm font-medium mt-0.5">Shop No. 15-8-123, Begum Bazar, Hyderabad.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};