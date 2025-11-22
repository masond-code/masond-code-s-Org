import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Calendar, ArrowRight, Instagram, Facebook, Youtube, Utensils, Film, Layers, Users } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { StoreCard } from './components/StoreCard';
import { AIBackground } from './components/AIBackground';
import { HistoryAbout } from './components/HistoryAbout';
import { EventsPage } from './components/EventsPage';
import { FoodCourt } from './components/FoodCourt';
import { Cinema } from './components/Cinema';
import { Amenities } from './components/Amenities';
import { Community } from './components/Community';
import { MallMap } from './components/MallMap';
import { ContactLeasing } from './components/ContactLeasing';
import { STORE_DATA, CATEGORIES } from './constants';

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activePage, setActivePage] = useState("home");

  const filteredStores = useMemo(() => {
    return STORE_DATA.filter(store => {
      const matchesCategory = activeCategory === "All" || store.category === activeCategory || (activeCategory === "Anchor" && store.category === "Anchor");
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const renderContent = () => {
    switch (activePage) {
      case 'history': return <HistoryAbout />;
      case 'events': return <EventsPage />;
      case 'food-court': return <FoodCourt />;
      case 'cinema': return <Cinema />;
      case 'amenities': return <Amenities />;
      case 'community': return <Community />;
      case 'map': return <MallMap />;
      case 'contact': return <ContactLeasing />;
      default:
        return (
          <>
            {/* HERO SECTION */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?q=80&w=2000&auto=format&fit=crop" 
                  alt="Temmy Park Mall Exterior" 
                  className="w-full h-full object-cover object-center animate-in fade-in duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80"></div>
              </div>

              <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                  Temmy Park Mall
                </h1>
                <p className="text-xl md:text-2xl text-white font-light mb-8">
                  Your Bloxburg shopping destination in Riverside Estates
                </p>
              </div>
            </section>

            {/* HOURS OF OPERATION SECTION (Exact Design Match) */}
            <section className="bg-white py-12 border-b border-slate-200">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">HOURS OF OPERATION</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl text-slate-800">MONDAY–SATURDAY</span>
                    <span className="font-bold text-xl text-slate-800">10AM–9PM</span>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-2">
                     <span className="font-bold text-xl text-slate-800">SUNDAY 12PM–6PM</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-6">Department Store and Restaurant hours may vary.</p>
              </div>
            </section>

            {/* QUICK LINKS ROW */}
            <section className="py-10 bg-slate-50 border-b border-slate-200">
               <div className="max-w-7xl mx-auto px-4">
                 <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {[
                      { icon: <Search size={24} />, label: "Directory", action: () => document.getElementById('directory')?.scrollIntoView({behavior: 'smooth'}) },
                      { icon: <Calendar size={24} />, label: "Events", action: () => setActivePage('events') },
                      { icon: <Layers size={24} />, label: "Mall Map", action: () => setActivePage('map') },
                      { icon: <Film size={24} />, label: "Cinema", action: () => setActivePage('cinema') },
                      { icon: <Utensils size={24} />, label: "Food Court", action: () => setActivePage('food-court') },
                      { icon: <Clock size={24} />, label: "History", action: () => setActivePage('history') },
                    ].map((item, idx) => (
                      <button key={idx} onClick={item.action} className="flex flex-col items-center gap-3 group">
                         <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                            {item.icon}
                         </div>
                         <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600">{item.label}</span>
                      </button>
                    ))}
                 </div>
               </div>
            </section>

            {/* AI GENERATOR SECTION */}
            <AIBackground />

            {/* DIRECTORY SECTION */}
            <section className="py-24 bg-slate-50" id="directory">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Store Directory</h2>
                    <p className="text-slate-500">Explore over {STORE_DATA.length} brands, dining options, and experiences.</p>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="relative w-full md:w-96">
                    <input 
                      type="text" 
                      placeholder="Search stores..." 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-4 top-4 text-slate-400" size={20} />
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex gap-2 min-w-max">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                          activeCategory === cat 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Store Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredStores.map((store, idx) => (
                    <div key={idx} className={`${store.category === 'Anchor' ? 'sm:col-span-2' : 'col-span-1'} h-full`}>
                      <StoreCard store={store} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar onNavigate={setActivePage} currentPage={activePage} />

      {renderContent()}

      {/* FOOTER SECTION */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-white font-black text-2xl mb-4 tracking-tighter uppercase">Temmy Park Mall</h2>
              <p className="text-sm leading-relaxed mb-6">
                Riverside Estates, Bloxburg · Roblox
              </p>
              <div className="flex gap-4">
                 <a href="#" className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800 px-3 py-2 rounded-lg text-xs font-bold">
                   <Instagram size={16}/> Masond1986
                 </a>
                 <a href="#" className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800 px-3 py-2 rounded-lg text-xs font-bold">
                   <Youtube size={16}/> Masond1986Temmyem
                 </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Directory</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setActivePage('home')} className="hover:text-white">Stores</button></li>
                <li><button onClick={() => setActivePage('food-court')} className="hover:text-white">Dining</button></li>
                <li><button onClick={() => setActivePage('cinema')} className="hover:text-white">Cinema</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setActivePage('amenities')} className="hover:text-white">Parking & Wi-Fi</button></li>
                <li><button onClick={() => setActivePage('community')} className="hover:text-white">Community</button></li>
                <li><button onClick={() => setActivePage('contact')} className="hover:text-white">Leasing</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center md:text-left text-xs text-slate-500">
            <p>© 2025–2026 Moonshine Malls Bloxburg · Temmy Park Mall · Bloxburg Plot</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;