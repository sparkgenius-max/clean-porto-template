import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const headerHeight = '6rem'; // Approximate height of the fixed header

  return (
    <div className="bg-white">
      <section id="services" className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-16">
          <h2 className="text-2xl font-semibold text-neutral-500 tracking-wide flex-shrink-0">
            <span className="inline-block w-8 h-px bg-neutral-400 align-middle mr-3"></span>
            Services
          </h2>
          <p className="text-[34px] font-normal leading-snug max-w-[700px]">
            From strategy to execution, we offer tailored design solutions to bring your vision to life. I craft designs that make a difference.
          </p>
        </div>

        <div className="relative pb-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="sticky w-full"
              style={{ top: headerHeight }}
            >
              <div
                className="bg-white pt-12 pb-24"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div>
                        <p className="text-neutral-500 mb-2">{service.id}</p>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                    <div className="md:pt-8">
                        <p className="text-neutral-600">{service.description}</p>
                    </div>
                    <div>
                        <div className="bg-neutral-100 rounded-2xl overflow-hidden aspect-video">
                            <img 
                                src={service.imageUrl} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;