import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MARKET_TRENDS } from '../constants';
import { useTheme } from '../context/ThemeContext';

export const MarketTrends: React.FC = () => {
  const { layout } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay rendering slightly to ensure container is ready
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    classic: { bg: 'bg-white', text: '#78716c', title: 'text-stone-900', grid: '#f5f5f4' },
    modern: { bg: 'bg-white', text: '#64748b', title: 'text-gray-900', grid: '#f1f5f9' },
    dark: { bg: 'bg-slate-900', text: '#94a3b8', title: 'text-amber-50', grid: '#1e293b' }
  };

  const current = styles[layout];

  return (
    <section id="trends" className={`py-24 border-b transition-colors duration-500 ${layout === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-stone-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className={`text-4xl font-bold font-serif ${current.title}`}>Market Price Trends</h2>
            <p className={`mt-4 text-lg ${layout === 'dark' ? 'text-slate-400' : 'text-stone-500'}`}>
              Stay ahead of the market. We track wholesale fluctuations (₹/kg) so you can stock up at the right time.
            </p>
          </div>
        </div>
        
        <div className={`h-[450px] w-full rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${layout === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-stone-100'}`}>
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={MARKET_TRENDS}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={current.grid} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: current.text, fontSize: 14 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: current.text, fontSize: 14 }}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: layout === 'dark' ? '#0f172a' : '#fff', 
                    borderRadius: '12px', 
                    border: layout === 'dark' ? '1px solid #1e293b' : '1px solid #e7e5e4', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    color: layout === 'dark' ? '#fff' : '#000'
                  }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="Rice" 
                  name="Basmati Rice"
                  stroke="#059669" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#059669', strokeWidth: 0 }} 
                  activeDot={{ r: 6 }}
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="Oil" 
                  name="Sunflower Oil"
                  stroke="#d97706" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#d97706', strokeWidth: 0 }} 
                  activeDot={{ r: 6 }}
                  isAnimationActive={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="Pulses" 
                  name="Toor Dal"
                  stroke="#0ea5e9" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#0ea5e9', strokeWidth: 0 }} 
                  activeDot={{ r: 6 }}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
                <p>Loading market data...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};