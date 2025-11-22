import React from 'react';
import { Calendar, Building2, Info, Star, ArrowRight, Landmark, HardHat, Sparkles } from 'lucide-react';

export const HistoryAbout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      {/* Page Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            History & About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Temmy Park Mall</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            From humble beginnings to Bloxburg’s premier lifestyle destination.
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-slate-800 mb-8 leading-relaxed">
            "More than just a shopping center, Temmy Park Mall is a landmark of Riverside Estates woven into the fabric of our community."
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            For over four decades, this location has served as the gathering place for residents of Bloxburg, Bloxy Acres, and Lakeview Heights. What began as a traditional retail hub has evolved into a modern entertainment destination, proudly bearing the Temmy name—a symbol of fun, style, and innovation.
          </p>
        </div>
      </section>

      {/* Section 2: Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Our Journey</h2>
          
          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-1/2 space-y-16">
            {/* 1982 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-md"></span>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                  <div className="flex items-center gap-2 text-slate-400 mb-2 font-mono text-sm font-bold">
                    <Calendar size={14} /> 1982
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">The Beginning as Emerald Park Mall</h3>
                  <p className="text-slate-600 mb-4">
                    The mall originally opened its doors as <strong>Emerald Park Mall</strong>. It quickly became a staple for the growing suburbs.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1 bg-slate-50 p-3 rounded-lg">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>Saphire Department Store (Now Dillard's)</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>JCPenney (Now Ashley HomeStore)</li>
                    <li className="flex items-center gap-2 font-medium text-blue-600"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>First-ever TemmyStore location</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1990s-2010s */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-md"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 mb-2 font-mono text-sm font-bold">
                  <Landmark size={14} /> 1990s – 2010s
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Growth & Community Presence</h3>
                <p className="text-slate-600">
                  The mall solidified its reputation as a local favorite, attracting shoppers from Sunset Point and The City of Bloxburg. As the surrounding residential areas of Riverside Estates expanded, so did the mall's footprint.
                </p>
              </div>
            </div>

            {/* Early 2024 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md shadow-blue-200"></span>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex items-center gap-2 text-blue-600 mb-2 font-mono text-sm font-bold">
                  <Info size={14} /> Early 2024
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Temmy Company Acquisition</h3>
                <p className="text-slate-600 mb-3">
                  The Temmy Company announced a strategic partial acquisition. As an entertainment brand rather than a developer, Temmy's goal was to refresh the mall's identity and introduce entertainment-based attractions.
                </p>
              </div>
            </div>

            {/* Dec 2024 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-400 border-4 border-white shadow-md"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 text-amber-600 mb-2 font-mono text-sm font-bold">
                  <HardHat size={14} /> December 2024
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Renovation & Temporary Closure</h3>
                <p className="text-slate-600">
                  Acquisition finalized. Large-scale renovations began immediately, focusing on modernizing all three floors, the underground garage, and integrating Temmy-themed zones.
                </p>
              </div>
            </div>

            {/* Nov 2025 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg shadow-indigo-300"></span>
              <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl border border-slate-700 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 text-indigo-300 mb-2 font-mono text-sm font-bold">
                  <Sparkles size={14} /> Late November 2025
                </div>
                <h3 className="text-2xl font-bold mb-3">The Grand Modernization</h3>
                <p className="text-slate-300 mb-4">
                  After a full year of upgrades, the mall officially reopened as <strong>Temmy Park Mall</strong>.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><Star size={12} className="text-indigo-400"/> Modern Interiors</div>
                  <div className="flex items-center gap-2"><Star size={12} className="text-indigo-400"/> Updated Storefronts</div>
                  <div className="flex items-center gap-2"><Star size={12} className="text-indigo-400"/> Expanded Food Court</div>
                  <div className="flex items-center gap-2"><Star size={12} className="text-indigo-400"/> Temmy Experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About Today (Ownership) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-slate-100 md:w-1/3 p-8 flex flex-col justify-center items-center text-center border-r border-slate-200">
            <Building2 size={48} className="text-slate-400 mb-4" />
            <h3 className="font-bold text-lg text-slate-900">Operating Partner</h3>
            <p className="text-slate-500 mt-2 font-medium">Moonshine Malls Bloxburg</p>
          </div>
          <div className="p-8 md:p-12 md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Partnership</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                It is important to note that while the mall bears the iconic Temmy name, <strong>The Temmy Company</strong> serves primarily as a branding and entertainment partner.
              </p>
              <p>
                The mall remains operated by <strong>Moonshine Malls Bloxburg</strong>. This unique partnership allows for the development of branded attractions such as Temmyem World and Temmy Cinema while ensuring top-tier property management.
              </p>
              <p className="font-medium text-slate-900 pt-2">
                Today, Temmy Park Mall stands as a 3-floor hub for fashion, dining, and community events in Riverside Estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Quick Facts */}
      <section className="py-16 bg-slate-900 text-slate-400">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-white font-bold text-2xl mb-10 text-center">Quick Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">1982</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Original Opening</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">2025</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Rebranded</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">3</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Floors</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">UG</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Underground Parking</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};