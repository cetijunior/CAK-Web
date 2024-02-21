import React from 'react';
import {projects, Project } from './portfolioDb';
import TestimonialsCarousel from '../testimonials/testimonialsCarousel';

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio'>
      <div className="container mx-auto px-4 py-8">
        <h1 className='text-5xl p-5'>Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {projects.map((project: Project) => (
            <div key={project.id} className="bg-emerald-800 rounded-lg shadow-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-50 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-white-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TestimonialsCarousel />
    </section>
     );
};

export default Portfolio;