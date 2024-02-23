import React, { useState } from 'react';
import SpotlightImages from './SpotlightImages'
import AboutCard from '../about/AboutCard'; // Ensure the import path is correct

// Updated images array with online image URLs
export const images = [
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQGna3XZwEDc9Q/profile-displayphoto-shrink_200_200/0/1706391785193?e=1714003200&v=beta&t=nga_rVjFhCk7yRzBlN3IFnUJZMrn22XdUQyZjglXscw',
    alt: 'Team Member 1', name: 'CetiJunior',
    descriptionShort: 'Front- und Backend-Entwickler',
    descriptionLong: 'Ceti ist unser Front- und Backend-Entwickler und Designer. Der ist Co-Founder von CAK Web Solutions und hat eine Leidenschaft für Webentwicklung und Design. Mit mehrere Jahre Erfahrung kann er dabei helfen, Ihre Ideen in die Realität umzusetzen.',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQE-Ea5M_VhX-A/profile-displayphoto-shrink_200_200/0/1702734234182?e=1714003200&v=beta&t=U5Y_tZ5Elgcsa2QVc8_-my11Bpz08Dcrzlqi5sPlbcI',
    alt: 'Team Member 2', name: 'Krenar',
    descriptionShort: 'Front- und Backend-Entwickler und Designer',
    descriptionLong: 'Krenar ist unser Front- und Backend-Entwickler und Designer. Der ist Co-Founder von CAK Web Solutions und ist dafür verantwortlich, mit den Kunden immer im Kontakt zu bleiben und die Projekte zu managen. Mit ihm als Projekt-manager werden Ihre Website zum besten möglichen Stand hergestellt.',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQF_uhnfXUmUtg/profile-displayphoto-shrink_100_100/0/1708170924118?e=1714003200&v=beta&t=JT5-HlHe0R9ZJHrYueY5wEFRDzsA8Jj9dHoRNVfvOSM',
    alt: 'Team Member 3', name: 'Archie',
    descriptionShort: 'Fullstack-Entwickler',
    descriptionLong: 'Archie ist unser Fullstack-Entwickler. Der ist Co-Founder von CAK Web Solutions. Seine Leidenschaft für die Entwicklung, ermöglicht uns und Ihnen eine  benutzerfreundliche und effiziente Website zu erstellen.',
  },
];

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <section id="about" className="bg-[#f8edeb] mx-auto px-8 py-20 min-h-[600px]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#932b2d] text-center mb-8 py-7 font-grimes">Über Uns</h1>
      <p className="text-lg text-[#381d1d] md:text-xl text-center mb-12 font-typewriter font-bold">
      Erfahren Sie mehr über unseren Weg, unser Team und was uns antreibt, außergewöhnliche Dienstleistungen zu erbringen.
      </p>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        <SpotlightImages images={images} onImageClick={handleImageClick} />
      </div>
      <AboutCard isOpen={isModalOpen} onClose={() => setModalOpen(false)} selectedImage={selectedImage} />
      <div className="text-center mt-12">
        <p className="text-[#381d1d] text-lg font-typewriter font-bold">
        Unser Team ist bestrebt, erstklassige, auf die Bedürfnisse unserer Kunden zugeschnittene Dienstleistungen zu erbringen. Erkunden Sie unsere Website und finden Sie heraus, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.
        </p>
      </div>
    </section>
  );
};

export default About;