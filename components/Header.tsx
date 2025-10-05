
import React from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="/" 
          className="text-xl font-bold"
        >
          Velora
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-neutral-600 hover:text-black transition-colors">
              {link}
            </a>
          ))}
           <a href="#" className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-neutral-800 transition-colors">
            Use Template
          </a>
        </nav>
        <button className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
