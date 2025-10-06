import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS, NAV_LINKS } from '../constants';
import type { Project } from '../types';

interface WorkDetailProps {
  project?: Project;
  allProjects?: Project[];
  onNavigateToProject?: (project: Project) => void;
}

const DetailSection: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-semibold text-neutral-500 tracking-wide">
                <span className="inline-block w-8 h-px bg-neutral-400 align-middle mr-3"></span>
                {title}
            </h2>
        </div>
        <div className="md:col-span-2 lg:col-span-3 text-lg text-neutral-600 space-y-4 leading-relaxed">
            {children}
        </div>
    </div>
);

const WorkDetailPage: React.FC<WorkDetailProps> = ({ project, allProjects = PROJECTS }) => {
  // If project is passed directly, use it; otherwise get from URL params
  const { projectId } = useParams<{projectId: string}>();
  const currentProject = project || allProjects.find(p => p.id === projectId);
  
  if (!currentProject) {
    return (
      <div className="pt-24 pb-12 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }
  
  const currentProjectIndex = allProjects.findIndex(p => p.id === currentProject.id);
  if (currentProjectIndex === -1) {
    return null;
  }
  
  const nextProject = allProjects[(currentProjectIndex + 1) % allProjects.length];

  return (
    <div className="pt-24 pb-12 animate-fade-in bg-white">
        {/* Header/Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link 
              to="/" 
              className="text-xl font-bold"
            >
              Velora
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link} href={`/#${link.toLowerCase()}`} className="text-neutral-600 hover:text-black transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            <button className="md:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
          </div>
        </header>

        {/* Project Header */}
        <header className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-7xl lg:text-8xl font-bold mb-6">{currentProject.title}</h1>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-4">{currentProject.description}</p>
                    <p className="text-neutral-500">{currentProject.date}</p>
                </div>
                <div className="md:col-span-1 md:text-left md:pl-8 pt-4 space-y-4 text-lg">
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Client</p>
                        <p>{currentProject.client}</p>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Role</p>
                        <p>{currentProject.role}</p>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Service</p>
                        <p>{currentProject.service}</p>
                    </div>
                </div>
            </div>
        </header>

        {/* Main Image */}
        <div className="container mx-auto px-6 mb-24">
            <img src={currentProject.imageUrl} alt={currentProject.title} className="w-full h-auto object-cover rounded-2xl"/>
        </div>

        {/* Work Details */}
        {currentProject.workDetails.length > 0 && (
            <DetailSection title="Work Details">
                {currentProject.workDetails.map((p, i) => <p key={i}>{p}</p>)}
                {currentProject.detailImages.length > 2 && (
                    <img 
                        src={currentProject.detailImages[2]} 
                        alt={`${currentProject.title} detail`}
                        className="w-full h-auto object-cover rounded-2xl mt-12"
                    />
                )}
            </DetailSection>
        )}

        {/* Design Solution */}
        {currentProject.designSolution && (
            <DetailSection title="Design Solution">
                <p>{currentProject.designSolution}</p>
                {currentProject.detailImages.length > 1 && (
                    <img 
                        src={currentProject.detailImages[1]} 
                        alt={`${currentProject.title} design solution`}
                        className="w-full h-auto object-cover rounded-2xl mt-12"
                    />
                )}
            </DetailSection>
        )}
        
        {/* Next Project */}
        <section className="container mx-auto px-6 mt-24">
            <Link 
                to={`/work/${nextProject.id}`}
                className="group"
                aria-label={`Next project: ${nextProject.title}`}
            >
                <div className="text-left mb-8">
                    <p className="text-neutral-500 mb-2 uppercase tracking-wider text-sm">Next</p>
                    <h3 className="text-5xl md:text-6xl font-bold mb-4">{nextProject.title}</h3>
                    <p className="text-lg text-neutral-600 max-w-xl">{nextProject.description}</p>
                </div>
                <div className="overflow-hidden rounded-xl">
                    <img 
                        src={nextProject.imageUrl} 
                        alt={nextProject.title} 
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </Link>
        </section>
    </div>
  );
};

export default WorkDetailPage;