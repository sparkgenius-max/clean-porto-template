
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  // FIX: Changed NodeJS.Timeout to number, which is the correct type for setInterval in the browser.
  const slideIntervalRef = useRef<number | null>(null);

  // Clone the first item to the end to create a seamless loop
  const loopedTestimonials = [...TESTIMONIALS, TESTIMONIALS[0]];
  const CARD_WIDTH = 570;
  const GAP = 30;

  const resetInterval = useCallback(() => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    slideIntervalRef.current = window.setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 5000);
  }, []);

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    resetInterval();
  };

  // Effect to handle the "jump" back to the start for the infinite loop
  useEffect(() => {
    if (currentIndex === TESTIMONIALS.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // This must match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Effect to re-enable transitions after the jump
  useEffect(() => {
    if (!isTransitioning) {
      // A slight delay is needed to ensure the DOM has updated before re-enabling transition
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [resetInterval]);

  return (
    <section id="reviews" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-16 items-start">
          <div className="flex flex-col gap-8 lg:col-span-3">
            <h2 className="text-2xl font-semibold text-neutral-500 tracking-wide flex-shrink-0">
              <span className="inline-block w-8 h-px bg-neutral-400 align-middle mr-3"></span>
              What People Say
            </h2>
            <p className="text-[34px] font-normal leading-snug">
              Worked with numerous brands and professionals, I helped over 100 businesses launch their websites.
            </p>
          </div>

          <div className="w-full lg:col-span-5 lg:col-start-5 pt-12">
            <div className="overflow-hidden">
              <div
                className="flex"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`,
                  transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
                }}
              >
                {loopedTestimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: `${CARD_WIDTH}px` }}>
                    <div className="relative bg-neutral-50 p-12 rounded-lg text-left overflow-hidden">
                        <p className="text-9xl text-neutral-200 font-serif absolute -top-2 left-8 select-none" aria-hidden="true">“</p>
                        <p className="relative z-10 text-3xl font-medium leading-normal mb-12 min-h-[160px]">
                            {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-14 h-14 rounded-full"/>
                            <div>
                                <h4 className="font-bold">{testimonial.author}</h4>
                                <p className="text-neutral-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
                {TESTIMONIALS.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleDotClick(index)} 
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex % TESTIMONIALS.length === index ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
