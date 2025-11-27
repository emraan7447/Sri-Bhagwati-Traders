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
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Wholesale Inventory</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            All Items
          </button>
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="h-48 w-full overflow-hidden relative group">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                 {/* Badge for savings */}
                 <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                   Save ₹{product.priceMRP - product.priceWholesale}
                 </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">{product.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 flex-1">{product.description}</p>
                
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-500">Wholesale Price</div>
                    <div className="text-xl font-bold text-emerald-700">₹{product.priceWholesale}<span className="text-sm font-normal text-gray-500">/{product.unit}</span></div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-gray-400 line-through">MRP ₹{product.priceMRP}</div>
                    <div className="text-xs font-medium text-orange-600">Min. Order: {product.minOrderQty} {product.unit}</div>
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-md font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add to Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
