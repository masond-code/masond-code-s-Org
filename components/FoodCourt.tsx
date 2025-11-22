import React from 'react';
import { Clock, MapPin, Utensils } from 'lucide-react';
import { STORE_DATA } from '../constants';

export const FoodCourt: React.FC = () => {
  const restaurants = STORE_DATA.filter(store => store.category === 'Food & Drink');

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-orange-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">The Food Court</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">From quick bites to sit-down dining, satisfy your cravings at Temmy Park Mall.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((store, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all">
              <div className="h-40 bg-slate-100 relative flex items-center justify-center p-6">
                <img 
                   src={store.domain ? `https://logo.clearbit.com/${store.domain}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(store.name)}&background=random&color=fff&size=128`}
                   alt={store.name} 
                   className="max-h-24 max-w-[70%] object-contain mix-blend-multiply"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-600">
                  Level {store.floor === 'Food Court' ? '3 (Food Court)' : store.floor}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{store.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Clock size={16} /> <span>10:00 AM - 9:00 PM</span>
                </div>
                
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Utensils size={12} /> Popular Items
                  </h4>
                  <p className="text-sm text-slate-600 italic">
                    {store.name === "Starbucks" ? "Pumpkin Spice Latte, Cake Pops" : 
                     store.name === "Crumbl Cookies" ? "Weekly Rotating Flavors" : 
                     store.name === "Chick-fil-A" ? "Spicy Deluxe Sandwich, Waffle Fries" :
                     "Full menu available in-store."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};