import React from 'react';
import { MapPin, Heart, Users } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20 animate-in fade-in">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Community</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Temmy Park Mall is proud to be the central gathering place for Riverside Estates and the greater Bloxburg area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-slate-100 rounded-2xl p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="text-blue-600" /> Serving Our Neighbors
            </h3>
            <ul className="space-y-4">
              {[
                "Riverside Estates (Primary Location)",
                "Bloxy Acres",
                "Sunset Point",
                "Lakeview Heights",
                "The City of Bloxburg"
              ].map((town, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {town}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Community First</h4>
                <p className="text-slate-600">
                  We host regular events, charity drives, and seasonal celebrations to give back to the residents who make our mall vibrant.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Temmy Collaborations</h4>
                <p className="text-slate-600">
                  Through our partnership with The Temmy Company, we bring exclusive entertainment experiences and pop-up events that you won't find anywhere else in Bloxburg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};