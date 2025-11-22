import React from 'react';
import { Mail, Phone, Wrench, Briefcase } from 'lucide-react';

export const ContactLeasing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-slate-900 mb-12 text-center">Contact & Leasing</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Leasing Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Leasing Inquiries</h2>
            <p className="text-slate-600 mb-6">
              Join the premier shopping destination in Bloxburg. Moonshine Property Group offers prime retail spaces for brands of all sizes.
            </p>
            <form className="space-y-4">
               <input type="text" placeholder="Brand Name" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500" />
               <input type="email" placeholder="Contact Email" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500" />
               <textarea placeholder="Space Requirements" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 h-32"></textarea>
               <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">Request Leasing Kit</button>
            </form>
          </div>

          {/* Contact / Maintenance Card */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">General Inquiries</h2>
              <p className="text-sm text-slate-500 mb-4">Mall Office Hours: Mon-Fri 9AM - 5PM</p>
              <button className="flex items-center gap-2 text-slate-700 font-bold hover:text-blue-600">
                <Phone size={18} /> (555) 012-3456
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Wrench size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Report Maintenance</h2>
              <p className="text-slate-600 mb-4">
                Spot a spill or a broken light? Let our maintenance team know.
              </p>
              <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                Submit Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};