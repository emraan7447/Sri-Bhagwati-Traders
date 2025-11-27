import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQty }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.priceWholesale * item.qty), 0);

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = "Hello Sri Bhagwati Traders, I would like to place a bulk order:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.name}: ${item.qty} ${item.unit} @ ₹${item.priceWholesale}/${item.unit}\n`;
    });
    message += `\nTotal Estimated: ₹${totalAmount}`;
    message += "\n\nPlease confirm availability and delivery details.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919346994172?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-2xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-900 font-serif">Your Quote List</h2>
                <button onClick={onClose} className="bg-stone-100 p-2 rounded-full text-stone-400 hover:text-stone-500 hover:bg-stone-200 focus:outline-none">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="mx-auto h-20 w-20 bg-stone-50 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag className="h-10 w-10 text-stone-300" />
                    </div>
                    <p className="text-stone-500 text-lg font-medium">Your list is empty.</p>
                    <p className="text-stone-400 text-sm mt-2">Browse products to start a quote.</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-stone-100">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-stone-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-stone-900">
                                <h3 className="font-serif leading-tight pr-4">{item.name}</h3>
                                <p className="text-emerald-700">₹{item.priceWholesale * item.qty}</p>
                              </div>
                              <p className="mt-1 text-sm text-stone-500">{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm mt-3">
                              <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                                <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 text-stone-600 hover:bg-white hover:text-stone-900 rounded-l-lg transition-colors">-</button>
                                <span className="px-2 py-1 font-semibold min-w-[3rem] text-center">{item.qty} {item.unit}</span>
                                <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 text-stone-600 hover:bg-white hover:text-stone-900 rounded-r-lg transition-colors">+</button>
                              </div>
                              <button onClick={() => onRemoveItem(item.id)} type="button" className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-stone-100 py-6 px-4 sm:px-6 bg-stone-50/50">
              <div className="flex justify-between text-base font-medium text-stone-900 mb-2">
                <p>Estimated Total</p>
                <p className="text-xl font-serif">₹{totalAmount}</p>
              </div>
              <p className="text-sm text-stone-500 mb-6">Final price, delivery & taxes confirmed via WhatsApp.</p>
              
              <button
                onClick={handleWhatsAppOrder}
                disabled={cartItems.length === 0}
                className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg shadow-emerald-900/10 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 hover:translate-y-[-1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <MessageCircle className="h-5 w-5 mr-2" /> Request Quote via WhatsApp
              </button>
              
              <div className="mt-6 flex justify-center text-sm text-center">
                <button type="button" className="text-stone-500 font-medium hover:text-stone-800 transition-colors" onClick={onClose}>
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};