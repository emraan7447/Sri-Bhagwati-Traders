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
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div 
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        onClick={onClose}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel */}
        <div 
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-xl leading-6 font-bold text-gray-900 mb-2" id="modal-title">
                Contact Sales Team
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Get in touch directly with our proprietors for the best wholesale prices and bulk orders.
              </p>

              <div className="space-y-4">
                {PROPRIETORS.map((proprietor, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Proprietor</p>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{proprietor.name}</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:+91${proprietor.number}`}
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        Call
                      </a>
                      <a
                        href={`https://wa.me/91${proprietor.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-start">
                   <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                   <div>
                     <p className="text-sm font-medium text-gray-900">Visit Store</p>
                     <p className="text-sm text-gray-500">Shop No. 15-8-123, Begum Bazar, Hyderabad.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};