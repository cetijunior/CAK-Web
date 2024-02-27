import React, { useState } from 'react';
import { projects, Project } from '../components/portfolioDb'; // Adjust the import path as necessary
import ProjectModal from '../components/ProjectModal'; // Adjust the import path as necessary
import Image from 'next/image';
import TestimonialsCarousel from './testimonialsCarousel';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='portfolio' className='bg-[#f8edeb]'>
      <div className="container mx-auto px-4 py-20">
        <h1 className='text-4xl md:text-5xl font-bold text-[#932b2d] text-center mb-8 py-7 font-grimes'>Unser Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {projects.map((projects) => (
            <div key={projects.id} className="bg-[#8f293a] rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(projects)}>
              <Image src={projects.imageUrl} alt={projects.alt} width={200} height={200} className="w-full h-[600px] object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-grimes py-3">{projects.title}</h3>
                <p className="text-sm text-[#e8e8e8] font-typewriter">{projects.description}</p>
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