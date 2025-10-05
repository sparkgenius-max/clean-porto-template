
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import type { Experience } from '../types';
import { ArrowRightIcon, PlusIcon, MinusIcon } from './icons';

const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-6 border-b border-neutral-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-neutral-500">{item.company}</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-neutral-500">{item.period}</p>
                    {isOpen ? <MinusIcon className="w-6 h-6 text-neutral-600" /> : <PlusIcon className="w-6 h-6 text-neutral-400" />}
                </div>
            </button>
            {isOpen && (
                <div className="mt-4 pr-12 text-neutral-600">
                    <p>{item.details}</p>
                </div>
            )}
        </div>
    );
};

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-semibold text-neutral-500 mb-8 tracking-wide">
                  <span className="inline-block w-8 h-px bg-neutral-400 align-middle mr-3"></span>
                  About Me
                </h2>
                <h3 className="text-6xl font-bold mb-6">Jane Smith</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    I specialize in turning complex problems into seamless designs, from research to high-fidelity prototypes. Passionate about usability and design systems, I collaborate with teams to build products that are both beautiful and functional.
                </p>
                <a href="#" className="inline-flex items-center gap-2 group font-semibold">
                  Contact me
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
            <div>
                {EXPERIENCES.map((exp, index) => (
                    <ExperienceItem key={index} item={exp} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default About;
