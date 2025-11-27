import React, { useState } from 'react';
import { Product, Category } from '../types';
import { PRODUCTS } from '../constants';
import { Plus, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const { layout } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  }

  // Styles based on theme
  const styles = {
    classic: {
      sectionBg: 'bg-stone-50',
      heading: 'text-stone-900 font-serif',
      subtext: 'text-stone-500',
      filterBtnActive: 'bg-stone-900 text-white shadow-lg',
      filterBtnInactive: 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200',
      card: 'bg-white rounded-3xl p-3 shadow-sm hover:shadow-md border border-stone-100',
      imageContainer: 'rounded-2xl bg-stone-100',
      title: 'text-stone-900 font-serif',
      price: 'text-emerald-700',
      priceLabel: 'text-stone-400',
      addBtn: 'bg-white text-stone-900 hover:bg-emerald-600 hover:text-white',
      badge: 'bg-white/90 text-stone-800'
    },
    modern: {
      sectionBg: 'bg-gray-50',
      heading: 'text-gray-900 font-sans tracking-tight',
      subtext: 'text-gray-500',
      filterBtnActive: 'bg-blue-600 text-white shadow-blue-200 shadow-xl',
      filterBtnInactive: 'bg-white text-gray-600 hover:bg-gray-50 border-none shadow-sm',
      card: 'bg-white rounded-xl p-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-xl overflow-hidden border-none',
      imageContainer: 'rounded-none bg-gray-100 h-56',
      title: 'text-gray-900 font-sans font-bold',
      price: 'text-blue-600',
      priceLabel: 'text-gray-400',
      addBtn: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200',
      badge: 'bg-black/50 backdrop-blur text-white'
    },
    dark: {
      sectionBg: 'bg-slate-950',
      heading: 'text-amber-50 font-serif',
      subtext: 'text-slate-400',
      filterBtnActive: 'bg-amber-600 text-black border border-amber-600',
      filterBtnInactive: 'bg-slate-900 text-amber-100/70 border border-amber-900/30 hover:bg-slate-800',
      card: 'bg-slate-900 rounded-lg p-4 border border-amber-900/20 hover:border-amber-600/50 shadow-none transition-colors',
      imageContainer: 'rounded bg-slate-800 border border-white/5',
      title: 'text-amber-50 font-serif tracking-wide',
      price: 'text-amber-400',
      priceLabel: 'text-slate-500',
      addBtn: 'bg-amber-600 text-black hover:bg-amber-500',
      badge: 'bg-amber-950/80 text-amber-200 border border-amber-900'
    }
  };

  const current = styles[layout];

  return (
    <section id="products" className={`py-24 ${current.sectionBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <h2 className={`text-4xl font-bold ${current.heading}`}>Wholesale Inventory</h2>
             <p className={`mt-3 max-w-xl ${current.subtext}`}>Browse our premium selection of grains, spices, and oils.</p>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'All' ? current.filterBtnActive : current.filterBtnInactive
            }`}
          >
            All Items
          </button>
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat ? current.filterBtnActive : current.filterBtnInactive
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`group ${current.card} transition-all duration-300 relative`}>
              <div className={`relative h-64 w-full overflow-hidden ${current.imageContainer}`}>
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${layout === 'modern' ? 'group-hover:scale-105' : 'group-hover:scale-110'}`} 
                 />
                 <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${current.badge}`}>
                   {product.category}
                 </div>
                 
                 {/* Layout Specific Add Buttons */}
                 {layout === 'classic' && (
                    <button 
                      onClick={() => handleAdd(product)}
                      className={`absolute bottom-3 right-3 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${current.addBtn}`}
                    >
                      {addedId === product.id ? <Check className="h-5 w-5 text-emerald-600" /> : <Plus className="h-5 w-5" />}
                    </button>
                 )}
              </div>
              
              <div className={`${layout === 'modern' ? 'p-5' : 'px-3 pt-5 pb-3'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-bold leading-tight ${current.title}`}>{product.name}</h3>
                </div>
                <p className={`text-sm mb-6 line-clamp-2 ${current.subtext}`}>{product.description}</p>
                
                <div className={`flex items-end justify-between ${layout === 'modern' ? '' : 'border-t'} ${layout === 'dark' ? 'border-amber-900/20' : 'border-stone-100'} pt-4`}>
                  <div>
                    <p className={`text-xs font-medium mb-1 ${current.priceLabel}`}>Wholesale Price</p>
                    <div className={`text-2xl font-bold ${current.price}`}>
                      ₹{product.priceWholesale}<span className={`text-sm font-sans font-normal ${current.priceLabel}`}>/{product.unit}</span>
                    </div>
                  </div>
                  
                  {layout === 'modern' ? (
                    <button 
                      onClick={() => handleAdd(product)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-transform active:scale-95 ${current.addBtn}`}
                    >
                      {addedId === product.id ? (
                        <>Added <Check className="h-4 w-4" /></>
                      ) : (
                        <>Add <Plus className="h-4 w-4" /></>
                      )}
                    </button>
                  ) : (
                    <div className="text-right">
                       <p className={`text-xs line-through decoration-stone-300 mb-1 ${current.priceLabel}`}>MRP ₹{product.priceMRP}</p>
                       {layout === 'dark' && (
                          <button 
                            onClick={() => handleAdd(product)}
                            className={`mt-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-colors ${current.addBtn}`}
                          >
                            {addedId === product.id ? "Added" : "Add to Cart"}
                          </button>
                       )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};