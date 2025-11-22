import React from 'react';
import { Store } from '../types';
import { ExternalLink, MapPin } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  // Logic to fetch logo from Clearbit API based on domain, or fallback to placeholder
  const logoUrl = store.domain 
    ? `https://logo.clearbit.com/${store.domain}` 
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(store.name)}&background=random&color=fff&size=128`;

  // Handle potential image error by using fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(store.name)}&background=f3f4f6&color=4b5563&size=128`;
  };

  const renderLogo = () => {
    if (store.customLogoType === 'temmy-store') {
      return (
        <div className="relative flex items-center justify-center p-4">
          <div className="relative bg-[#0099ff] px-6 py-3 rounded-full transform -rotate-2 shadow-sm" style={{ borderRadius: '40% 60% 50% 50% / 50% 60% 40% 50%' }}>
            <span className="font-sans font-semibold text-white text-2xl tracking-tight" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.1)' }}>
              Temmy
              <span className="text-[#ff0066]">Store</span>
            </span>
          </div>
        </div>
      );
    }

    return (
       <img 
          src={logoUrl} 
          alt={`${store.name} Logo`} 
          className="max-h-20 max-w-[80%] object-contain z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm mix-blend-multiply"
          onError={handleImageError}
        />
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
      {/* Header / Logo Area */}
      <div className="h-32 bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-50 to-slate-50 transition-opacity duration-500"></div>
        
        {renderLogo()}
        
        {store.featured && (
          <div className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-amber-200">
            Featured
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
            {store.category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
          {store.name}
        </h3>
        
        {store.description && (
          <p className="text-sm text-slate-500 mb-4 line-clamp-2">
            {store.description}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center text-slate-400 text-sm group-hover:text-blue-600 transition-colors">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            <span className="text-xs font-medium">Level 1</span>
          </span>
          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};