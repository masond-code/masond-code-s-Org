import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // If we are not on home and click an anchor, go home first then scroll
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home');
        // Small timeout to allow render before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Standard anchor scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Page switch
      if (onNavigate) {
        onNavigate(href);
        window.scrollTo(0, 0);
      }
    }
    setIsOpen(false);
  };

  const links = [
    { name: "Directory", href: "#directory" },
    { name: "Events", href: "events" }, // Added Events
    { name: "History", href: "history" },
    { name: "Map", href: "#location" },
    { name: "Visit", href: "#hours" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'glass shadow-sm py-3 text-slate-900' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={(e) => handleNavigation(e, 'home')}
        >
          <div className={`p-2 rounded-xl transition-colors ${scrolled || currentPage !== 'home' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tight leading-none group-hover:text-blue-500 transition-colors">
              TEMMY PARK
            </h1>
            <p className={`text-[0.65rem] font-bold tracking-[0.3em] uppercase ${scrolled || currentPage !== 'home' ? 'text-blue-600' : 'text-blue-200'}`}>
              Mall &bull; Riverside
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => {
            const isActive = (link.href === currentPage) || (currentPage === 'home' && link.href === '#directory' && false); // Simple active check
            const isPageActive = link.name.toLowerCase() === currentPage;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider hover:text-blue-500 transition-colors relative group ${isPageActive ? 'text-blue-600' : ''}`}
                onClick={(e) => handleNavigation(e, link.href)}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${isPageActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top-5 fade-in duration-300 h-screen">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};