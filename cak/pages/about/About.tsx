import React, { useState } from 'react';
import SpotlightImages from './SpotlightImages'
import AboutCard from '../about/AboutCard'; // Ensure the import path is correct

// Updated images array with online image URLs
export const images = [
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQGna3XZwEDc9Q/profile-displayphoto-shrink_200_200/0/1706391785193?e=1714003200&v=beta&t=nga_rVjFhCk7yRzBlN3IFnUJZMrn22XdUQyZjglXscw',
    alt: 'Team Member 1', name: 'CetiJunior', description: 'A Cee J is a very good guy, probably the best guy in the world',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQE-Ea5M_VhX-A/profile-displayphoto-shrink_200_200/0/1702734234182?e=1714003200&v=beta&t=U5Y_tZ5Elgcsa2QVc8_-my11Bpz08Dcrzlqi5sPlbcI',
    alt: 'Team Member 2', name: 'Keni', description: 'Keni is a very good guy, probably one of the guys in the world',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4E03AQF_uhnfXUmUtg/profile-displayphoto-shrink_100_100/0/1708170924118?e=1714003200&v=beta&t=JT5-HlHe0R9ZJHrYueY5wEFRDzsA8Jj9dHoRNVfvOSM',
    alt: 'Team Member 3', name: 'Lursi', description: 'Archie is a very good guy, probably one of the guyses guys in the world'
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
    <section id="about" className="bg-emerald-900 mx-auto px-8 py-12 min-h-[600px]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg md:text-xl text-center mb-12">
        Learn more about our journey, our team, and what drives us to deliver exceptional services.
      </p>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        <SpotlightImages images={images} onImageClick={handleImageClick} />
      </div>
      <AboutCard isOpen={isModalOpen} onClose={() => setModalOpen(false)} selectedImage={selectedImage} />
      <div className="text-center mt-12">
        <p className="text-lg">
          Our team is dedicated to providing top-notch services tailored to our clients needs. Explore our site to find out how we can help you achieve your goals.
        </p>
      </div>
    </section>
  );
};

export default About;