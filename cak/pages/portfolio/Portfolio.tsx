import React, { useState } from 'react';
import { projects, Project } from './portfolioDb'; // Adjust the import path as necessary
import TestimonialsCarousel from '../testimonials/testimonialsCarousel';
import ProjectModal from './ProjectModal'; // Adjust the import path as necessary
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='portfolio' className='bg-[#f8edeb]'>
      <div className="container mx-auto px-4 py-20">
        <h1 className='text-4xl md:text-5xl font-bold text-[#932b2d] text-center mb-8 py-7 font-grimes'>Unser Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {projects.map((project: Project) => (
            <div key={project.id} className="bg-[#8f293a] rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <Image src={project.imageUrl} width={200} height={200} alt={project.title} className="w-full h-[600px] object-cover" />
              <div className="p-4">
                <h3 className="text-lg  font-grimes py-3">{project.title}</h3>
                <p className="text-sm text-[#e8e8e8] font-typewriter">{project.description}</p>
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