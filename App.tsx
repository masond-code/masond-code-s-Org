import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Calendar, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { StoreCard } from './components/StoreCard';
import { AIBackground } from './components/AIBackground';
import { HistoryAbout } from './components/HistoryAbout';
import { EventsPage } from './components/EventsPage';
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
    if (activePage === 'history') {
      return <HistoryAbout />;
    }
    if (activePage === 'events') {
      return <EventsPage />;
    }
    
    // Home Page Content
    return (
      <>
          {/* HERO SECTION */}
          <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1581264692636-357e1b52d205?q=80&w=2676&auto=format&fit=crop" 
                alt="Mall Atrium" 
                className="w-full h-full object-cover object-center animate-in fade-in duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.3em] mb-8 uppercase shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-700">
                Grand Opening 2025
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight drop-shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-1000 delay-150">
                Delightfully <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-indigo-200 italic font-serif font-medium pr-2">
                  In Style
                </span>
              </h1>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-1000 delay-300">
                The premier shopping destination in Riverside Estates. Discover luxury brands, fine dining, and entertainment in the heart of Bloxburg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-5 fade-in duration-1000 delay-500">
                <a href="#directory" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  View Directory <ArrowRight size={18} />
                </a>
                <a href="#location" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-transform hover:scale-105 shadow-xl">
                  Plan Your Visit
                </a>
              </div>
            </div>
          </section>

          {/* INFO CARDS */}
          <section className="relative z-20 -mt-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-4"><Clock size={24} /></div>
                <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                <p className="text-slate-500 text-sm">Mon-Sun: 8:00 AM - 11:00 PM</p>
                <span className="text-green-600 text-xs font-bold mt-2 bg-green-50 px-2 py-1 rounded">Open Now</span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-full mb-4"><MapPin size={24} /></div>
                <h3 className="font-bold text-lg mb-2">Getting Here</h3>
                <p className="text-slate-500 text-sm">Riverside Estates, Bloxburg</p>
                <a href="#" className="text-blue-600 text-xs font-bold mt-2 hover:underline">View Map</a>
              </div>
              <div 
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer group"
                onClick={() => setActivePage('events')}
              >
                <div className="p-3 bg-orange-50 text-orange-600 rounded-full mb-4 group-hover:bg-orange-100 transition-colors"><Calendar size={24} /></div>
                <h3 className="font-bold text-lg mb-2">Events</h3>
                <p className="text-slate-500 text-sm">Grand Opening & Holidays</p>
                <span className="text-blue-600 text-xs font-bold mt-2 hover:underline">View Calendar</span>
              </div>
            </div>
          </section>

          {/* AI GENERATOR SECTION */}
          <div className="mt-20">
            <AIBackground />
          </div>

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

              {filteredStores.length === 0 && (
                <div className="text-center py-32">
                  <div className="inline-block p-6 rounded-full bg-slate-100 mb-4">
                    <Search size={40} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No stores found</h3>
                  <p className="text-slate-500 mt-2">Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
          </section>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={setActivePage} currentPage={activePage} />

      {renderContent()}

      {/* LOCATION / FOOTER SECTION */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-white font-black text-2xl mb-6 tracking-tighter uppercase">Temmy Park</h2>
              <p className="text-sm leading-relaxed mb-6">
                A Moonshine Malls Bloxburg property. Bringing the community together through style, food, and fun since 2025.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Youtube size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Explore</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }} className="hover:text-white transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dining</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('events'); }} className="hover:text-white transition-colors">Entertainment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Services</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Valet Parking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Wi-Fi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stroller Rental</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Newsletter</h3>
              <p className="text-xs mb-4">Stay updated with the latest offers and events.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm w-full focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500">→</button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2025 Moonshine Malls Bloxburg. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;