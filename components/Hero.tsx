import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-emerald-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
          alt="Market spices and grains"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-800 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Begum Bazar's Finest <br/>
          <span className="text-orange-400">Wholesale Traders</span>
        </h1>
        <p className="mt-6 text-xl text-emerald-100 max-w-3xl">
          Proprietors Trilok & Om Prakash Ramawath bring you the best market prices for Rice, Pulses, and Spices.
          Direct sourcing for retailers, hotels, and mess suppliers.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-emerald-900 bg-white hover:bg-emerald-50 transition-colors"
          >
            View Price List
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
          >
            Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};