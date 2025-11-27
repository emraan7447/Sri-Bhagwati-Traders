import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Monitor, Moon, Layers } from 'lucide-react';
import { LayoutType } from '../types';

export const LayoutSwitcher: React.FC = () => {
  const { layout, setLayout } = useTheme();

  const themes: { id: LayoutType; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'classic', label: 'Classic', icon: <Layers className="w-4 h-4" />, color: 'bg-emerald-600' },
    { id: 'modern', label: 'Modern', icon: <Monitor className="w-4 h-4" />, color: 'bg-blue-600' },
    { id: 'dark', label: 'Wholesale Dark', icon: <Moon className="w-4 h-4" />, color: 'bg-amber-600' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-2 group">
      <div className="bg-white/90 backdrop-blur shadow-lg border border-gray-200 p-2 rounded-2xl flex flex-col gap-2 transition-all duration-300 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setLayout(theme.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              layout === theme.id 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className={`p-1.5 rounded-full ${theme.color} text-white`}>
              {theme.icon}
            </span>
            {theme.label}
          </button>
        ))}
      </div>
      
      <button className="bg-white text-gray-900 p-4 rounded-full shadow-xl border border-gray-200 hover:scale-105 transition-transform flex items-center gap-2 font-bold">
        <Palette className="h-5 w-5" />
        <span className="text-xs uppercase tracking-wider">Themes</span>
      </button>
    </div>
  );
};