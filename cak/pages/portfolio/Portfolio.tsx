import React, { useState } from 'react';
import { projects, Project } from './portfolioDb'; // Adjust the import path as necessary
import TestimonialsCarousel from '../testimonials/testimonialsCarousel';
import ProjectModal from './ProjectModal'; // Adjust the import path as necessary

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='portfolio' className='bg-emerald-900'>
      <div className="container mx-auto px-4 py-20">
        <h1 className='text-5xl p-5'>Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {projects.map((project: Project) => (
            <div key={project.id} className="bg-emerald-800 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <img src={project.imageUrl} alt={project.title} className="w-full h-50 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-white-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <TestimonialsCarousel />
    </section>
  );
};

export default Portfolio;