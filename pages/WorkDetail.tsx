
import React from 'react';
import type { Project } from '../types';

interface WorkDetailProps {
  project: Project;
  allProjects: Project[];
  onNavigateToProject: (project: Project) => void;
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


const WorkDetail: React.FC<WorkDetailProps> = ({ project, allProjects, onNavigateToProject }) => {
  if (!allProjects || allProjects.length === 0) {
    return null;
  }
  const currentProjectIndex = allProjects.findIndex(p => p.id === project.id);
  if (currentProjectIndex === -1) {
    return null; // Project not found in the list, so don't render anything.
  }
  const nextProject = allProjects[(currentProjectIndex + 1) % allProjects.length];

  return (
    <div className="pt-24 pb-12 animate-fade-in bg-white">
        {/* Project Header */}
        <header className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-7xl lg:text-8xl font-bold mb-6">{project.title}</h1>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-4">{project.description}</p>
                    <p className="text-neutral-500">{project.date}</p>
                </div>
                <div className="md:col-span-1 md:text-left md:pl-8 pt-4 space-y-4 text-lg">
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Client</p>
                        <p>{project.client}</p>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Role</p>
                        <p>{project.role}</p>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Service</p>
                        <p>{project.service}</p>
                    </div>
                </div>
            </div>
        </header>

        {/* Main Image */}
        <div className="container mx-auto px-6 mb-24">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover rounded-2xl"/>
        </div>

        {/* Work Details */}
        {project.workDetails.length > 0 && (
            <DetailSection title="Work Details">
                {project.workDetails.map((p, i) => <p key={i}>{p}</p>)}
                {project.detailImages.length > 2 && (
                    <img 
                        src={project.detailImages[2]} 
                        alt={`${project.title} detail`}
                        className="w-full h-auto object-cover rounded-2xl mt-12"
                    />
                )}
            </DetailSection>
        )}

        {/* Design Solution */}
        {project.designSolution && (
            <DetailSection title="Design Solution">
                <p>{project.designSolution}</p>
                {project.detailImages.length > 1 && (
                    <img 
                        src={project.detailImages[1]} 
                        alt={`${project.title} design solution`}
                        className="w-full h-auto object-cover rounded-2xl mt-12"
                    />
                )}
            </DetailSection>
        )}
        
        {/* Next Project */}
        <section className="container mx-auto px-6 mt-24">
            <div 
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
            </div>
        </section>

    </div>
  );
};

export default WorkDetail;
