import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const Works: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const cursorVelocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const springConfig = { stiffness: 500, damping: 60, mass: 1 };
    let animationFrameId: number;

    const animate = () => {
      const targetX = mousePosition.current.x + 20;
      const targetY = mousePosition.current.y + 20;

      const dt = 1 / 60; // Assuming 60fps for stable physics

      // Calculate displacement
      const dx = cursorPosition.current.x - targetX;
      const dy = cursorPosition.current.y - targetY;

      // Calculate spring and damper forces
      const springX = -springConfig.stiffness * dx;
      const springY = -springConfig.stiffness * dy;
      
      const damperX = -springConfig.damping * cursorVelocity.current.x;
      const damperY = -springConfig.damping * cursorVelocity.current.y;

      // Calculate acceleration
      const ax = (springX + damperX) / springConfig.mass;
      const ay = (springY + damperY) / springConfig.mass;

      // Update velocity
      cursorVelocity.current.x += ax * dt;
      cursorVelocity.current.y += ay * dt;

      // Update position
      cursorPosition.current.x += cursorVelocity.current.x * dt;
      cursorPosition.current.y += cursorVelocity.current.y * dt;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed rounded-full bg-black text-white flex items-center justify-center w-24 h-24 text-xl font-semibold pointer-events-none z-50 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: 0,
          top: 0,
        }}
      >
        View
      </div>
      <section id="works" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-16">
            <h2 className="text-2xl font-semibold text-neutral-500 tracking-wide flex-shrink-0">
              <span className="inline-block w-8 h-px bg-neutral-400 align-middle mr-3"></span>
              Selected Works
            </h2>
            <p className="text-[34px] font-normal leading-snug max-w-[700px]">
              Discover a curated selection of works, designed to deliver impact. Each piece showcases my dedication to creativity and exceptional design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => {
                const year = new Date(project.date).getFullYear();
                return (
                  <Link 
                    to={`/work/${project.id}`}
                    key={project.id} 
                    className="group bg-neutral-50 rounded-lg p-3 select-none"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    aria-label={`Details for ${project.title}`}
                  >
                    <div className="rounded-md overflow-hidden relative">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-start p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-xl font-medium">{project.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-2xl font-medium leading-[140%]">{project.title}</h3>
                        <p className="text-sm text-neutral-500 mt-1 text-right">{year}</p>
                    </div>
                  </Link>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;