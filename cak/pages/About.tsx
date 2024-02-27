import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { images, Image as ImageType } from '../components/AboutUsDb'; // Adjust the import path

const About = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile size

  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Call it on mount
    handleResize();

    // Add event listener for subsequent resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (imageId: number) => {
    setSelectedImageId(selectedImageId === imageId ? null : imageId);
  };

  return (
    <section id="about" className="bg-[#f8edeb] mx-auto px-8 py-20 min-h-[600px]">
      <h1 className="text-4xl md:text-5xl font-bold font-grimes text-[#932b2d] text-center mb-8 py-7">Über Uns</h1>
      <p className="text-lg text-[#381d1d] font-typewriter md:text-xl text-center mb-12 font-bold">
        Erfahren Sie mehr über unseren Weg, unser Team und was uns antreibt, außergewöhnliche Dienstleistungen zu erbringen.
      </p>
      <div className='flex flex-wrap justify-center gap-4 items-start'>
        {images.map((image) => (
          <div
            key={image.id}
            className={`cursor-pointer duration-1000 p-4 rounded-2xl max-w-[550px]`}
            onClick={() => handleImageClick(image.id)}
            style={{
              display: 'flex',
              transition: 'max-height 1s ease-in-out',
              overflow: 'hidden',
              maxHeight: selectedImageId === image.id ? '800px' : '400px',
              flexDirection: selectedImageId === image.id || isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8f293a',
            }}
          >
            <Image src={image.src} alt={image.alt} width={400} height={200} className="rounded-xl object-cover" />
            <div className={`pl-4 ${selectedImageId === image.id ? 'block' : 'hidden'} flex overflow-y-auto scrollbar-none flex-col`}>
              <p className="text-[#e8e8e8] font-bold font-grimes text-4xl text-center mt-2">{image.name}</p>
              <p className="text-center font-grimes text-[#f8edeb] text-lg">{image.descriptionShort}</p>
              {selectedImageId === image.id && (
                <p className="text-center text-break text-[#e8e8e8] font-typewriter text-lg mt-2">{image.descriptionLong}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-[#381d1d] text-lg font-typewriter font-bold">
          Unser Team ist bestrebt, erstklassige, auf die Bedürfnisse unserer Kunden zugeschnittene Dienstleistungen zu erbringen. Erkunden Sie unsere Website und finden Sie heraus, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.
        </p>
      </div>
    </section>
  );
};

export default About;
