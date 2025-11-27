import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const { layout } = useTheme();
  
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Theme-specific styles
  const styles = {
    classic: {
      overlay: 'bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent',
      textAccent: 'text-amber-500',
      badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      primaryBtn: 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/50',
      secondaryBtn: 'bg-white text-stone-900 hover:bg-emerald-50',
      font: 'font-serif'
    },
    modern: {
      overlay: 'bg-gradient-to-tr from-blue-900/90 via-purple-900/50 to-transparent',
      textAccent: 'text-cyan-400',
      badge: 'border-blue-500/30 bg-blue-500/20 text-blue-200 rounded-lg',
      primaryBtn: 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/50 rounded-xl',
      secondaryBtn: 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-xl',
      font: 'font-sans'
    },
    dark: {
      overlay: 'bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950',
      textAccent: 'text-amber-500',
      badge: 'border-amber-500/50 bg-black/50 text-amber-400',
      primaryBtn: 'bg-amber-600 text-black hover:bg-amber-500 shadow-amber-900/50',
      secondaryBtn: 'bg-transparent border border-amber-600/30 text-amber-100 hover:bg-amber-900/20',
      font: 'font-serif'
    }
  };

  const current = styles[layout];

  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 scale-105 animate-fade-in"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
          alt="Begum Bazar Market"
        />
        <div className={`absolute inset-0 ${current.overlay}`} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className={`inline-flex items-center px-3 py-1 border ${current.badge} text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm`}>
            <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${layout === 'modern' ? 'bg-blue-400' : layout === 'dark' ? 'bg-amber-500' : 'bg-emerald-400'}`}></span>
            Begum Bazar, Hyderabad
          </div>
          
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight ${current.font}`}>
            Premium Wholesale <br/>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${layout === 'modern' ? 'from-cyan-300 to-blue-500' : layout === 'dark' ? 'from-amber-200 to-amber-600' : 'from-amber-200 to-amber-500'}`}>
              Kirana Supplies
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
            Direct from the market to your doorstep. Proprietors <strong className="text-white">Trilok & Om Prakash Ramawath</strong> guarantee the best rates since 1933.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
              onClick={scrollToProducts}
              className={`px-8 py-4 font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] ${current.secondaryBtn}`}
            >
              View Inventory
            </button>
            <button
              onClick={onContactClick}
              className={`group px-8 py-4 font-semibold transition-all flex items-center justify-center shadow-lg ${current.primaryBtn}`}
            >
              Contact Sales <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};