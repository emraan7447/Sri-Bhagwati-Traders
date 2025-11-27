import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQty }) => {
  const { layout } = useTheme();
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

  // Theme Styles
  const styles = {
    classic: {
      bg: 'bg-white', text: 'text-stone-900', subtext: 'text-stone-500',
      itemBg: 'bg-stone-50', border: 'border-stone-100',
      btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      qtyBtn: 'bg-stone-50 hover:bg-white border-stone-200'
    },
    modern: {
      bg: 'bg-white', text: 'text-gray-900', subtext: 'text-gray-500',
      itemBg: 'bg-gray-50', border: 'border-gray-100',
      btn: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200',
      qtyBtn: 'bg-gray-50 hover:bg-white border-gray-200'
    },
    dark: {
      bg: 'bg-slate-900', text: 'text-amber-50', subtext: 'text-slate-400',
      itemBg: 'bg-slate-800', border: 'border-slate-800',
      btn: 'bg-amber-600 hover:bg-amber-500 text-black font-bold',
      qtyBtn: 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-100'
    }
  };

  const current = styles[layout];

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className={`h-full flex flex-col shadow-2xl ${current.bg}`}>
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold font-serif ${current.text}`}>Your Quote List</h2>
                <button onClick={onClose} className={`p-2 rounded-full transition-colors ${layout === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-stone-100 text-stone-400 hover:text-stone-600'}`}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20">
                    <div className={`mx-auto h-20 w-20 rounded-full flex items-center justify-center mb-4 ${layout === 'dark' ? 'bg-slate-800 text-slate-500' : 'bg-stone-50 text-stone-300'}`}>
                      <ShoppingBag className="h-10 w-10" />
                    </div>
                    <p className={`text-lg font-medium ${current.subtext}`}>Your list is empty.</p>
                    <p className="text-sm mt-2 opacity-60">Browse products to start a quote.</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className={`-my-6 divide-y ${current.border}`}>
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden ${current.itemBg}`}>
                            <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className={`flex justify-between text-base font-medium ${current.text}`}>
                                <h3 className="font-serif leading-tight pr-4">{item.name}</h3>
                                <p className={layout === 'dark' ? 'text-amber-400' : 'text-emerald-700'}>₹{item.priceWholesale * item.qty}</p>
                              </div>
                              <p className={`mt-1 text-sm ${current.subtext}`}>{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm mt-3">
                              <div className={`flex items-center border rounded-lg ${current.qtyBtn}`}>
                                <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 hover:bg-black/5 rounded-l-lg transition-colors">-</button>
                                <span className="px-2 py-1 font-semibold min-w-[3rem] text-center">{item.qty} {item.unit}</span>
                                <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 hover:bg-black/5 rounded-r-lg transition-colors">+</button>
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

            <div className={`border-t ${current.border} py-6 px-4 sm:px-6 ${layout === 'dark' ? 'bg-slate-900' : 'bg-stone-50/50'}`}>
              <div className={`flex justify-between text-base font-medium ${current.text} mb-2`}>
                <p>Estimated Total</p>
                <p className="text-xl font-serif">₹{totalAmount}</p>
              </div>
              <p className={`text-sm ${current.subtext} mb-6`}>Final price, delivery & taxes confirmed via WhatsApp.</p>
              
              <button
                onClick={handleWhatsAppOrder}
                disabled={cartItems.length === 0}
                className={`w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${current.btn}`}
              >
                <MessageCircle className="h-5 w-5 mr-2" /> Request Quote via WhatsApp
              </button>
              
              <div className="mt-6 flex justify-center text-sm text-center">
                <button type="button" className={`font-medium transition-colors ${current.subtext} hover:${current.text}`} onClick={onClose}>
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