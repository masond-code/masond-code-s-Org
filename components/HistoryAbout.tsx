import React from 'react';
import { Calendar, Building2, Info, Star, ArrowRight, Landmark, HardHat, Sparkles } from 'lucide-react';

export const HistoryAbout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500 pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            History & About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Temmy Park Mall</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            A Moonshine Property Group destination.
          </p>
        </div>
      </section>

      {/* Section 2: Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Historical Timeline</h2>
          
          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-1/2 space-y-16">
            {/* 1982 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-md"></span>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                  <div className="flex items-center gap-2 text-slate-400 mb-2 font-mono text-sm font-bold">
                    <Calendar size={14} /> 1982
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Opened as Emerald Park Mall</h3>
                  <ul className="text-sm text-slate-500 space-y-1 bg-slate-50 p-3 rounded-lg">
                    <li>• Original Anchor: Saphire Department Store (now Dillard's)</li>
                    <li>• Original Anchor: JCPenney (now Ashley HomeStore)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1990s */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-md"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 mb-2 font-mono text-sm font-bold">
                  <Landmark size={14} /> 1990s
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The First TemmyStore</h3>
                <p className="text-slate-600">
                  The very first TemmyStore location in Bloxburg opened here, establishing a long-standing relationship with the community.
                </p>
              </div>
            </div>

            {/* Early 2024 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 text-blue-600 mb-2 font-mono text-sm font-bold">
                  <Info size={14} /> Early 2024
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic Partnership Announced</h3>
                <p className="text-slate-600 mb-3">
                  The Temmy Company announced plans to partially acquire the mall to introduce entertainment branding, while Moonshine Property Group would retain management.
                </p>
              </div>
            </div>

             {/* Jan-Nov 2025 */}
             <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-400 border-4 border-white shadow-md"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 text-amber-600 mb-2 font-mono text-sm font-bold">
                  <HardHat size={14} /> Jan - Nov 2025
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Major Modernization</h3>
                <p className="text-slate-600">
                  Mall closed for extensive renovations. Upgrades included a modern interior overhaul, new underground parking garage, and 3rd floor entertainment additions.
                </p>
              </div>
            </div>

            {/* Late Nov 2025 */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg shadow-indigo-300"></span>
              <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl border border-slate-700">
                <div className="flex items-center gap-2 text-indigo-300 mb-2 font-mono text-sm font-bold">
                  <Sparkles size={14} /> Late November 2025
                </div>
                <h3 className="text-2xl font-bold mb-3">Grand Reopening</h3>
                <p className="text-slate-300 mb-4">
                  Officially reopened as <strong>Temmy Park Mall</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
           <div className="bg-slate-100 md:w-1/3 p-8 flex flex-col justify-center items-center text-center border-r border-slate-200">
            <Building2 size={48} className="text-slate-400 mb-4" />
            <h3 className="font-bold text-lg text-slate-900">Managed By</h3>
            <p className="text-slate-500 mt-2 font-medium">Moonshine Property Group</p>
          </div>
          <div className="p-8 md:p-12 md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Mall Today</h3>
             <p className="text-slate-600 mb-4">
                Temmy Park Mall is <strong>not</strong> fully owned by The Temmy Company. Temmy is an entertainment brand that provides the name, logo, and attractions (like Temmyem World).
              </p>
              <p className="text-slate-600">
                The property is developed and managed by <strong>Moonshine Property Group</strong>. Today, the mall features 3 floors of retail, dining, and entertainment, plus a secure underground parking garage.
              </p>
          </div>
        </div>
      </section>

       {/* Section 4: Quick Facts */}
       <section className="py-16 bg-slate-900 text-slate-400">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-white font-bold text-2xl mb-10 text-center">Quick Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="text-3xl font-bold text-white mb-1">1982</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Original Opening</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Floors</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="text-3xl font-bold text-white mb-1">40+</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Stores</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="text-3xl font-bold text-white mb-1">UG</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Underground Parking</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};