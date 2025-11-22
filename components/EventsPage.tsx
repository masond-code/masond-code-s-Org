import React from 'react';
import { Calendar, MapPin, Clock, ShoppingBag, Gift, Users, Sparkles, AlertCircle, Star, Coffee, Store, Utensils } from 'lucide-react';

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: 'sale' | 'market' | 'family' | 'workshop' | 'dining';
  highlights?: string[];
  stands?: string[];
}

const EVENTS: EventItem[] = [
  {
    id: 2,
    title: "Temmy Park Christmas Market",
    date: "Thanksgiving Day → Dec 24",
    time: "Special Holiday Hours",
    location: "Outdoor Parking Lot (Festive Tented Market Area)",
    description: "Experience the magic of our open-air holiday market featuring snow-dusted vendor stalls, red-and-white canopies, and warm golden string lights. Browse handmade gifts and enjoy seasonal treats in a festive outdoor ambiance.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop", // Real winter market image
    type: "market",
    stands: [
      "Hickory Farms Holiday Kiosk",
      "Build-Your-Own Hot Chocolate",
      "Peppermint Coffee Stand",
      "Local Handmade Gifts",
      "Seasonal Treats & Candy",
      "Holiday Snack Booths",
      "Gift Wrapping Station",
      "Winter Sweets Kiosk"
    ]
  },
  {
    id: 5,
    title: "Grubhouse Thanksgiving & Christmas Dinner",
    date: "Nov 27 – Dec 25",
    time: "11:00 AM - 10:00 PM",
    location: "Grubhouse (Floor 1, Near Main Entrance)",
    description: "Grubhouse will be one of the only tenants open during Thanksgiving and Christmas. Enjoy a full sit-down holiday meal including roasted turkey, seasonal sides, and warm festive drinks. Perfect for families, travelers, and guests visiting the Christmas Market.",
    image: "https://images.unsplash.com/photo-1574672280602-959b4c56c69b?q=80&w=2069&auto=format&fit=crop", // Real roast turkey dinner image
    type: "dining",
    highlights: [
      "Roasted Turkey Dinner",
      "Seasonal Sides",
      "Holiday Desserts",
      "Warm Festive Drinks",
      "Limited-time Holiday Menu"
    ]
  },
  {
    id: 1,
    title: "Black Friday Sales Extravaganza",
    date: "Friday, Nov 29",
    time: "6:00 AM - 11:00 PM",
    location: "Entire Mall (Floors 1-3)",
    description: "A mall-wide savings event featuring massive discounts from apparel, electronics, specialty stores, and anchor tenants. Don't miss the biggest shopping day of the year!",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    type: "sale",
    highlights: [
      "Target & Dillard's Doorbusters",
      "Ashley HomeStore Furniture Deals",
      "Apple Store Tech Specials",
      "H&M & Aeropostale Fashion Steals",
      "TemmyStore Exclusive Merch Drops"
    ]
  },
  {
    id: 3,
    title: "Holiday Meet & Greets",
    date: "Daily in December",
    time: "12:00 PM - 6:00 PM",
    location: "Floor 2 – Event Court",
    description: "Bring the family for photos and fun! Enjoy a character-free festive atmosphere designed for the perfect holiday photo op.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop",
    type: "family",
    highlights: [
      "Decorated Photo Zone",
      "Holiday Backdrop",
      "Guest Services Info"
    ]
  }
];

export const EventsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-500 pt-20">
      {/* Hero Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2000&auto=format&fit=crop" 
            alt="Holiday Events" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-md text-red-100 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            <Sparkles size={14} className="text-amber-300" /> Seasonal Celebration
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">
            Exciting Events <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-200 to-amber-200">
              All Season Long
            </span>
          </h1>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="grid gap-10">
          {EVENTS.map((event) => (
            <div key={event.id} className="group bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-300">
              {/* Image Side */}
              <div className="lg:w-2/5 relative h-72 lg:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-slate-900 font-bold text-sm shadow-sm flex items-center gap-2">
                  <Calendar size={14} className="text-blue-600" /> {event.date}
                </div>
                {event.type === 'sale' && (
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                    Don't Miss Out!
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-3">
                  <Clock size={16} className="text-blue-500" /> {event.time}
                  <span className="text-slate-300">•</span>
                  <MapPin size={16} className="text-blue-500" /> {event.location}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Rule Alert for Christmas Market */}
                {event.title.includes("Christmas Market") && (
                   <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-sm text-red-800 flex items-start gap-2">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <span>
                          <strong>Holiday Notice:</strong> The Christmas Market opens on Thanksgiving Day. The rest of Temmy Park Mall remains closed on Thanksgiving—only visitors attending the market may enter.
                        </span>
                      </p>
                   </div>
                )}

                {/* Type Specific Render */}
                {event.type === 'dining' && event.highlights && (
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <Utensils size={18} /> Holiday Menu Highlights:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.type === 'market' && event.stands && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                    <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                      <Store size={18} /> Featured Stands:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.stands.map((stand, i) => (
                        <span key={i} className="bg-white border border-emerald-200 text-emerald-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {stand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Owner Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 italic bg-slate-100 inline-block px-4 py-2 rounded-full">
            * Events on this page can only be added or edited by the site owner.
          </p>
        </div>
      </section>
    </div>
  );
};