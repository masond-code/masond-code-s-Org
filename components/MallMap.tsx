import React, { useState } from 'react';
import { Layers, Car, Search } from 'lucide-react';
import { STORE_DATA } from '../constants';

export const MallMap: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');

  const floors = ['3', '2', '1', 'UG'];
  
  const storesOnFloor = STORE_DATA.filter(s => s.floor === activeFloor || (activeFloor === '3' && s.floor === 'Food Court'));

  const filteredStores = storesOnFloor.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-100 pt-20 flex flex-col">
      <div className="bg-white border-b border-slate-200 py-8 px-4 shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="text-blue-600" /> Interactive Map
          </h1>
          
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Find a store on this floor..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row h-full overflow-hidden max-w-7xl mx-auto w-full p-4 gap-6">
        {/* Floor Selector */}
        <div className="flex md:flex-col gap-2 md:w-24 shrink-0">
          {floors.map(floor => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`flex-1 md:flex-none py-4 rounded-xl font-bold text-lg transition-all shadow-sm border flex flex-col items-center justify-center gap-1 ${
                activeFloor === floor 
                  ? 'bg-blue-600 text-white border-blue-600 scale-105' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {floor === 'UG' ? <Car size={20} /> : <Layers size={20} />}
              <span className="text-sm">{floor === 'UG' ? 'Parking' : `Level ${floor}`}</span>
            </button>
          ))}
        </div>

        {/* Map Visualization Area */}
        <div className="flex-grow bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-12 relative overflow-hidden min-h-[500px]">
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <h2 className="text-3xl font-black text-slate-200 absolute top-6 left-6 pointer-events-none uppercase">
            {activeFloor === 'UG' ? 'Underground Parking' : `Floor ${activeFloor}`}
          </h2>

          {activeFloor === 'UG' ? (
             <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <Car size={64} className="mb-4" />
                <h3 className="text-xl font-bold text-slate-600">Parking Garage</h3>
                <p>Red Zone • Blue Zone • Green Zone</p>
                <p className="text-sm mt-2">Elevator Access to Levels 1, 2, 3</p>
             </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
              {filteredStores.map((store, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-lg border text-center flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer ${
                    store.category === 'Anchor' ? 'bg-slate-100 border-slate-300 col-span-2 row-span-2 aspect-video' : 
                    store.category === 'Food & Drink' ? 'bg-orange-50 border-orange-200' : 
                    'bg-white border-slate-200 hover:border-blue-400'
                  }`}
                >
                  <span className="font-bold text-slate-800 text-sm">{store.name}</span>
                  <span className="text-[10px] text-slate-500 uppercase mt-1">{store.category}</span>
                </div>
              ))}
              {filteredStores.length === 0 && (
                 <div className="col-span-full text-center py-20 text-slate-400">
                   No stores found matching "{searchTerm}" on this floor.
                 </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};