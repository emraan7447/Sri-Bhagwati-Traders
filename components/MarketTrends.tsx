import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MARKET_TRENDS } from '../constants';

export const MarketTrends: React.FC = () => {
  return (
    <section id="trends" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Market Price Trends</h2>
          <p className="mt-4 text-lg text-gray-500">Track the wholesale price fluctuations (₹/kg or L) over the last 6 months to plan your inventory.</p>
        </div>
        
        <div className="h-80 w-full bg-slate-50 rounded-xl p-4 shadow-inner border border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={MARKET_TRENDS}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Line type="monotone" dataKey="Rice" stroke="#059669" activeDot={{ r: 8 }} strokeWidth={2} />
              <Line type="monotone" dataKey="Oil" stroke="#ea580c" strokeWidth={2} />
              <Line type="monotone" dataKey="Pulses" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
