import React, { useState } from 'react';
import { Product, Category } from '../types';
import { PRODUCTS } from '../constants';
import { Plus } from 'lucide-react';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <h2 className="text-4xl font-bold text-stone-900 font-serif">Wholesale Inventory</h2>
             <p className="mt-3 text-stone-500 max-w-xl">Browse our premium selection of grains, spices, and oils available for bulk purchase.</p>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'All' 
                ? 'bg-stone-900 text-white shadow-lg scale-105' 
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Items
          </button>
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-stone-900 text-white shadow-lg scale-105' 
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-stone-100">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-stone-100">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wide border border-white/50">
                   {product.category}
                 </div>
                 {/* Quick Add Button that appears on hover */}
                 <button 
                   onClick={() => onAddToCart(product)}
                   className="absolute bottom-3 right-3 bg-white text-stone-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                   aria-label="Add to cart"
                 >
                   <Plus className="h-5 w-5" />
                 </button>
              </div>
              
              <div className="px-3 pt-5 pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900 font-serif leading-tight">{product.name}</h3>
                </div>
                <p className="text-stone-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                
                <div className="flex items-end justify-between border-t border-stone-100 pt-4">
                  <div>
                    <p className="text-xs text-stone-400 font-medium mb-1">Wholesale Price</p>
                    <div className="text-2xl font-bold text-emerald-700 font-serif">
                      ₹{product.priceWholesale}<span className="text-sm font-sans font-normal text-stone-500">/{product.unit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-400 line-through decoration-stone-300 mb-1">MRP ₹{product.priceMRP}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};