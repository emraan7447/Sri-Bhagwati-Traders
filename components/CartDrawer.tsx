import React from 'react';
import { X, Trash2, MessageCircle } from 'lucide-react';
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
    // Using Trilok Ramawath's number as the primary order line
    window.open(`https://wa.me/919346994172?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Order Inquiry Quote</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button onClick={onClose} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">Your quote list is empty.</p>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">₹{item.priceWholesale * item.qty}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center border rounded border-gray-300">
                                <button onClick={() => onUpdateQty(item.id, -1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                <span className="px-2 py-1 font-medium">{item.qty} {item.unit}</span>
                                <button onClick={() => onUpdateQty(item.id, 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                              </div>
                              <button onClick={() => onRemoveItem(item.id)} type="button" className="font-medium text-red-600 hover:text-red-500">
                                <Trash2 className="h-4 w-4" />
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

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Estimated Subtotal</p>
                <p>₹{totalAmount}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated via WhatsApp.</p>
              <div className="mt-6">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={cartItems.length === 0}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="h-5 w-5 mr-2" /> Send Order via WhatsApp
                </button>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{' '}
                  <button type="button" className="text-emerald-600 font-medium hover:text-emerald-500" onClick={onClose}>
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};