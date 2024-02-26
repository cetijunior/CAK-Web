import React, { useEffect, useState } from 'react';
import { Project } from './portfolioDb'; // Adjust the import path as necessary
import Image from 'next/image';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(project); // This should log the current project object
    setShowModal(true);
  }, [project]);

  // Enhanced close function that also handles animation
  const handleClose = () => {
    setShowModal(false);
    // Wait for the animation to complete before calling the onClose prop
    setTimeout(onClose, 500); // Match the duration of your transition
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-10 flex justify-center items-center overflow-y-auto pt-20 transition-opacity duration-500"
      style={{ opacity: showModal ? 1 : 0 }}>
      <div className="bg-[#e8e8e8] rounded-lg p-4 max-w-md w-full mx-2 transition-all duration-500 transform"
        style={{ opacity: showModal ? 1 : 0, transform: showModal ? 'scale(1)' : 'scale(0.95)' }}>
        <div className="overflow-y-auto scrollbar-none max-h-[80vh]">
          <h2 className="text-xl text-[#5d1f20] font-bold">{project.title}</h2>
          <Image src={project.imageUrl} alt={project.alt} width={200} height={200} className="my-4 w-full rounded-lg h-auto object-cover" />
          <p className='text-black'>{project.description}</p>
        </div>
        <button onClick={handleClose} className="mt-4 bg-[#8f293a] text-white py-2 px-4 rounded hover:bg-[#6e2230] transition-transform duration-500"
          style={{ opacity: showModal ? 1 : 0, transform: showModal ? 'scale(1)' : 'scale(0.95)' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
