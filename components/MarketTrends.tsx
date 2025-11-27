import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MARKET_TRENDS } from '../constants';

export const MarketTrends: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay rendering slightly to ensure container is ready
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="trends" className="py-24 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-stone-900 font-serif">Market Price Trends</h2>
            <p className="mt-4 text-lg text-stone-500">
              Stay ahead of the market. We track wholesale fluctuations (₹/kg) so you can stock up at the right time.
            </p>
          </div>
        </div>
        
        <div className="h-[450px] w-full bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={MARKET_TRENDS}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#78716c', fontSize: 14 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#78716c', fontSize: 14 }}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: '1px solid #e7e5e4', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
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