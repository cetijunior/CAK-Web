import React, { useEffect, useState } from 'react';
import { Card, Image } from '@nextui-org/react';
import CloseIcon from '@mui/icons-material/Close';

const AboutCard = ({ isOpen, onClose, selectedImage }) => {
  // State to manage if the component should be rendered
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Effect to handle opening transition
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Start closing transition and wait for it to finish before unrendering
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match this timeout to your CSS transition duration
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  // Dynamic styles for transitions
  const dynamicStyles = {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
  };

  if (!shouldRender) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      ...dynamicStyles, // Apply dynamic styles here
    }}>
      <div style={{
        backgroundColor: '#5d1f20',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1001,
        maxWidth: '80%',
        maxHeight: '80%',
      }}>
        <button style={{ marginLeft: 'auto', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="flex flex-col md:flex-row items-center bg-[#5d1f20] rounded-xl overflow-hidden">
          <Image src={selectedImage.src} alt={selectedImage.alt} className='md:w-[400px] h-auto rounded-l-xl' />
          <div className="flex flex-col justify-center p-4 text-white md:w-1/2">
            <h3 className='text-2xl mb-2 font-grimes'>{selectedImage.name}</h3>
            <p className='text-lg font-typewriter'>{selectedImage.descriptionLong}</p>
            {/* Additional information */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
