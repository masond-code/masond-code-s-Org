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
    id: 2,
    title: "Temmy Park Christmas Market",
    date: "Thanksgiving Day → Dec 24",
    time: "Special Holiday Hours",
    location: "Outdoor Parking Lot (Festive Tented Market Area)",
    description: "Experience the magic of our open-air holiday market featuring snow-dusted vendor stalls, red-and-white canopies, and warm golden string lights. Browse handmade gifts and enjoy seasonal treats in a festive outdoor ambiance.",
    image: "https://images.unsplash.com/photo-1543095824-2878b264281d?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=2070&auto=format&fit=crop",
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
    id: 3,
    title: "Holiday Meet & Greets",
    date: "Daily in December",
    time: "12:00 PM - 6:00 PM",
    location: "Floor 2 – Event Court",
    description: "Bring the family for photos and fun! Meet seasonal characters and Temmy-affiliated mascots in our specially designed holiday zone.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop",
    type: "family",
    highlights: [
      "Decorated Photo Zone",
      "Holiday Backdrop",
      "Character Schedule at Guest Services"
    ]
  },
  {
    id: 4,
    title: "Winter Crafts Workshop",
    date: "Saturdays in December",
    time: "2:00 PM - 4:00 PM",
    location: "Floor 1 – Community Room",
    description: "A kid-friendly workshop teaching ornament-making and simple winter crafts. All materials provided free of charge!",
    image: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?q=80&w=2000&auto=format&fit=crop",
    type: "workshop"
  }
];

export const EventsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2000&auto=format&fit=crop" 
            alt="Holiday Events" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-md text-red-100 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            <Sparkles size={14} className="text-amber-300" /> Seasonal Celebration
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            Exciting Events <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-200 to-amber-200">
              All Season Long
            </span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            From massive sales to cozy community markets and exclusive character meet-and-greets, there's something for everyone at Temmy Park Mall.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
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
                {event.type === 'dining' && (
                   <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Reserve a Table
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

                {/* Specialized Content based on Type */}
                {event.type === 'sale' && event.highlights && (
                  <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                      <ShoppingBag size={18} /> Doorbuster Deals Include:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {event.type === 'family' && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                       <h4 className="font-bold text-blue-800 mb-1 flex items-center gap-2">
                        <Users size={18} /> Meet & Greet
                      </h4>
                      <p className="text-sm text-blue-700">Capture magical moments with our holiday cast.</p>
                    </div>
                    <button className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-not-allowed opacity-80">
                      View Schedule (Soon)
                    </button>
                  </div>
                )}
                
                {event.type === 'workshop' && (
                   <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                      <AlertCircle size={16} /> Free entry. First come, first served.
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
