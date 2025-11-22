import React from 'react';
import { Wifi, Car, Baby, CreditCard, Info, BatteryCharging, Map, ShieldCheck } from 'lucide-react';

export const Amenities: React.FC = () => {
  const amenities = [
    { icon: <Car size={32} />, title: "Underground Parking", desc: "Safe, weather-protected underground parking garage with elevator access to all floors." },
    { icon: <Wifi size={32} />, title: "Free Wi-Fi", desc: "Stay connected with high-speed complimentary Wi-Fi throughout the entire mall." },
    { icon: <Info size={32} />, title: "Guest Services", desc: "Located on Level 1 near the Main Entrance. Services include directions, lost & found, and gift cards." },
    { icon: <Baby size={32} />, title: "Stroller Rentals", desc: "Available at Guest Services and select entrances for your convenience." },
    { icon: <CreditCard size={32} />, title: "ATM Locations", desc: "ATMs are available on all floors near the restrooms and Food Court." },
    { icon: <ShieldCheck size={32} />, title: "24/7 Security", desc: "Our security team patrols constantly to ensure a safe shopping environment." },
    { icon: <BatteryCharging size={32} />, title: "Charging Lounge", desc: "Relax and recharge your devices in our comfortable seating areas on Level 2." },
    { icon: <Map size={32} />, title: "Interactive Maps", desc: "Digital directories are placed at every major intersection to help you find your way." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Amenities & Services</h1>
          <p className="text-lg text-slate-600">We are dedicated to making your visit to Temmy Park Mall as comfortable and convenient as possible.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex p-4 bg-blue-50 text-blue-600 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Temmyem World</h2>
            <p className="text-indigo-100 max-w-xl">
              Looking for fun? Visit our indoor playground located on Level 3. Perfect for kids to burn off energy while you shop!
            </p>
          </div>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};