import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center bg-stone-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-30 scale-105"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
          alt="Begum Bazar Market"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            Begum Bazar, Hyderabad
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-serif">
            Premium Wholesale <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Kirana Supplies</span>
          </h1>
          
          <p className="mt-4 text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
            Direct from the market to your doorstep. Proprietors <strong className="text-white">Trilok & Om Prakash Ramawath</strong> guarantee the best rates for rice, spices, and pulses.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 rounded-full bg-white text-stone-900 font-semibold hover:bg-emerald-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              View Inventory
            </button>
            <button
              onClick={onContactClick}
              className="group px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all flex items-center justify-center shadow-lg shadow-emerald-900/50"
            >
              Contact Sales <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};