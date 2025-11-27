import React, { createContext, useContext, useState, useEffect } from 'react';
import { LayoutType } from '../types';

interface ThemeContextType {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [layout, setLayout] = useState<LayoutType>('classic');

  useEffect(() => {
    // Apply body background classes based on theme
    const body = document.body;
    body.className = ''; // Reset
    
    if (layout === 'classic') {
      body.classList.add('bg-stone-50', 'text-stone-900', 'antialiased', 'selection:bg-emerald-100', 'selection:text-emerald-900');
    } else if (layout === 'modern') {
      body.classList.add('bg-gray-50', 'text-gray-900', 'antialiased', 'selection:bg-blue-100', 'selection:text-blue-900');
    } else if (layout === 'dark') {
      body.classList.add('bg-slate-950', 'text-slate-100', 'antialiased', 'selection:bg-amber-900', 'selection:text-amber-100');
    }
  }, [layout]);

  return (
    <ThemeContext.Provider value={{ layout, setLayout }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};