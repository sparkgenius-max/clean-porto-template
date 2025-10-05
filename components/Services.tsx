import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
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

      <div className="space-y-10">
        {SERVICES.map((service) => (
          <div key={service.id} className="border-t border-neutral-200 pt-10 group">
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
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;