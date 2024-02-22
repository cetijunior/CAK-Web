import React from 'react';
import { Project } from './portfolioDb'; // Adjust the import path as necessary

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 max-w-md w-full">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="my-4 w-full h-auto object-cover" />
        <p className='text-black'>{project.description}</p>
        <button onClick={onClose} className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-800">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
