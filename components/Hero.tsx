import React from 'react';
import { ArrowDownIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-6 h-screen grid grid-cols-1 lg:grid-cols-[65fr_35fr] lg:grid-rows-2 items-stretch lg:gap-x-[clamp(6rem,10vw,12.5rem)] gap-y-12 pt-32 pb-12 lg:pt-24">
      {/* 
        Grid layout on lg screens:
        [ EMPTY    ] [ WELCOME  ]
        [ IMG+NAME ] [ SCROLL   ]
        
        On mobile screens, it stacks:
        [ WELCOME ]
        [ IMG+NAME ]
        (Scroll is hidden)
      */}

      {/* Welcome Group (Top Right on LG, First on mobile) */}
      <div className="lg:col-start-2 lg:row-start-1 lg:self-center flex flex-col items-start text-left">
        <div>
          <h1 className="text-7xl font-bold mb-6">Welcome.</h1>
          <p className="text-base text-neutral-500 max-w-md mb-8">
            I craft visually stunning and highly functional designs that elevate brands and create meaningful digital experiences. Let's build something exceptional together.
          </p>
          <a href="#about" className="inline-flex items-center gap-2 group font-medium text-base underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-800 transition-colors">
            About me
            <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
      
      {/* Image + Name (Bottom Left on LG, Second on mobile) */}
      <div className="lg:col-start-1 lg:row-start-2 lg:self-end flex flex-col items-start gap-8">
        <img 
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Modern living room with furniture" 
          className="rounded-2xl w-full object-cover" 
        />
        <h2 className="text-8xl font-bold text-neutral-800">Jane Smith</h2>
      </div>

      {/* Scroll Hint (Bottom Right on LG, hidden on mobile) */}
      <div className="hidden lg:flex lg:col-start-2 lg:row-start-2 items-end justify-end">
        <a href="#works" aria-label="Scroll to see more" className="inline-flex items-center gap-2 text-sm text-neutral-500 group">
          <span>Scroll to see more</span>
          <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </a>
      </div>

    </section>
  );
};

export default Hero;