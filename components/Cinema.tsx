import React from 'react';
import { Film, Ticket, Popcorn, Clock } from 'lucide-react';

export const Cinema: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517604931442-71053e3e2c3c?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinema Interior" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            TEMMY CINEMA
          </h1>
          <p className="text-xl font-light">The Ultimate IMAX Experience on Level 3</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Now Playing */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Film className="text-red-500" /> Now Playing
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-4 flex gap-4 hover:bg-slate-750 transition-colors">
                  <div className="w-24 h-36 bg-slate-700 rounded-lg flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Blockbuster Movie Title {i}</h3>
                    <p className="text-slate-400 text-sm mb-4">Action • 2h 15m • PG-13</p>
                    <div className="flex flex-wrap gap-2">
                      {['12:30 PM', '3:45 PM', '7:00 PM', '10:15 PM'].map(time => (
                        <button key={time} className="px-3 py-1 bg-slate-700 rounded hover:bg-red-600 hover:text-white text-sm font-medium transition-colors">
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Concessions */}
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
                <Ticket size={20} /> Ticket Prices
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>Adult (Evening)</span> <span className="font-bold">$14.50</span></li>
                <li className="flex justify-between"><span>Adult (Matinee)</span> <span className="font-bold">$11.50</span></li>
                <li className="flex justify-between"><span>Child (3-12)</span> <span className="font-bold">$9.50</span></li>
                <li className="flex justify-between"><span>Senior (60+)</span> <span className="font-bold">$10.00</span></li>
                <li className="flex justify-between pt-2 border-t border-slate-700 text-red-400"><span>IMAX Surcharge</span> <span className="font-bold">+$5.00</span></li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <Popcorn size={20} /> Concessions
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Visit our concession stand for fresh popcorn, ice-cold sodas, nachos, and assorted candy.
              </p>
              <div className="p-4 bg-slate-700/50 rounded-lg text-center">
                 <span className="block text-lg font-bold text-white">Combo Deal</span>
                 <span className="text-sm text-slate-300">Large Popcorn + 2 Large Drinks</span>
                 <span className="block font-bold text-xl text-green-400 mt-1">$18.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};