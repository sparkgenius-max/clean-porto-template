
import React from 'react';
import { ArrowRightIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-[#E3CAA6] leading-none mb-12 tracking-tighter">
            Stay connected
          </h2>
          <a href="#" className="flex justify-end items-center gap-2 group text-xl">
            Get in touch
            <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <hr className="border-neutral-800" />
        
        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 py-16">
          <div>
            <h3 className="text-xl font-bold mb-4">Velora</h3>
            <p className="text-neutral-400">123-456-7890</p>
            <p className="text-neutral-400">123 Sakura Street, New York City, NY, USA</p>
          </div>
          <div className="md:text-left">
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#works" className="hover:text-white transition-colors text-lg">Works</a></li>
              <li><a href="#services" className="hover:text-white transition-colors text-lg">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors text-lg">About</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors text-lg">Review</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-800" />
        
        {/* Bottom Section */}
        <div className="pt-8">
            <p className="text-neutral-500">Created by Lunis Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
