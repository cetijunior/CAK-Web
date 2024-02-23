import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

type OffersProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Offers: React.FC<OffersProps> = ({children, isOpen, onClose}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

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
      transition: 'opacity 0.5s',
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? 'auto' : 'none',
    }}>
      <div style={{
        backgroundColor: '#f8edeb',
        marginTop: '80px',
        width: '1200px',
        height: '550px',
        borderRadius: '8px',
        maxWidth: '100%',
        overflow: 'auto',
        scrollbarWidth: 'none',
        zIndex: 1001,
        transition: 'opacity 0.5s',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}>
        {children}
        <button className="text-white p-2 ml-2 mt-2 bg-[#381d1d] rounded-full" onClick={onClose}><CloseIcon/></button>
        <Card className='ml-2 mr-2 mt-2 md:mx-10 rounded-3xl drop-shadow-2xl overflow-hidden bg-[#e8e8e8]'>
          <CardHeader className='pt-2 px-4 flex-col items-start'>
            <p className='mt-2 text-3xl font-extrabold text-[#5D1F20]'>Our Offer</p>
            <h4 className='ext-xl text-[#5D1F20] font-bold mt-4'>The 4-in-1 Bundle</h4>
          </CardHeader>
            <CardBody className='flex flex-col md:flex-row justify-between items-center md:w-full overflow-y-auto max-h-490'>
              <p className='text-base text-[#381d1d] max-w-xl mb-4 md:mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus id blanditiis quis voluptas quasi molestias assumenda aperiam perferendis veniam? Officia, saepe sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores qui quae ea, temporibus laboriosam, ex mollitia accusantium aspernatur quibusdam aliquam quaerat odit minima illo vel voluptatum facere ipsum aut.Cupiditate ea illum deserunt culpa ducimus aspernatur neque.Quos reprehenderit, voluptate facere dolores praesentium esse dicta quas, saepe eveniet aspernatur, corrupti nesciunt quisquam velit possimus cumque mollitia consequuntur tenetur facilis!</p>
              <Image src='https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png' width={500} height={300} className='rounded-xl max-w-full h-auto'></Image>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Offers