import React from 'react';
import { ArrowRightIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="mb-20">
          <svg viewBox="0 0 1000 140" className="w-full mb-12" aria-labelledby="footer-heading-title">
            <title id="footer-heading-title">Stay connected</title>
            <text
              x="0"
              y="110"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              className="font-bold fill-current text-[#E3CAA6] animate-color-loop tracking-tighter"
              style={{ fontSize: '130px', fontFamily: 'Inter, sans-serif' }}
            >
              Stay connected
            </text>
          </svg>
          <a href="#" className="flex justify-end items-center gap-2 group text-xl">
            Get in touch
            <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <hr className="border-neutral-800" />

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 py-16">
          <div>
            <h3 className="text-xl font-bold mb-4">Nova</h3>
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