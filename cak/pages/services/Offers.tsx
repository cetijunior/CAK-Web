import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

type OffersProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Offers: React.FC<OffersProps> = ({ children, isOpen, onClose }) => {
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
        <button className="text-white p-2 ml-2 mt-2 bg-[#381d1d] rounded-full" onClick={onClose}><CloseIcon /></button>
        <Card className='ml-2 mr-2 mt-2 md:mx-10 rounded-3xl drop-shadow-2xl overflow-hidden bg-[#e8e8e8]'>
          <CardHeader className='pt-2 px-4 flex-col items-start'>
            <p className='mt-2 text-4xl font-extrabold text-[#5D1F20] font-grimes '>Unser Angebot</p>
            <h4 className='ext-xl text-[#5D1F20] font-extrabold mt-4 font-typewriter '>Das 4-in-1-Paket</h4>
          </CardHeader>
          <CardBody className='flex flex-col md:flex-row justify-between items-center md:w-full overflow-y-auto max-h-490'>
            <p className='text-base text-[#381d1d] max-w-xl mb-4 md:mb-0 font-typewriter'>CAK Web Solutions präsentiert unser exklusives "4-in-1-Bundle" – eine umfassende Lösung für Ihr Online-Geschäft. Unser Paket umfasst erstklassige Dienstleistungen in den Bereichen Webentwicklung, Webdesign, Bereitstellung und laufende Betreuung in die Gastronomie. Von der Konzeption bis zur Umsetzung bieten wir maßgeschneiderte Webentwicklungslösungen, die Ihre Geschäftsziele unterstützen. Unser erfahrenes Team von Designern und Entwicklern sorgt für ein ansprechendes und benutzerfreundliches Webdesign, das Ihre Marke optimal repräsentiert und Kunden beeindruckt. Sobald Ihre Website entwickelt und gestaltet ist, kümmern wir uns um die reibungslose Bereitstellung auf sicheren Servern und bieten kontinuierliche technische Unterstützung, um sicherzustellen, dass Ihre Website stets online und funktionsfähig ist. Darüber hinaus bieten wir eine langfristige Betreuung, um sicherzustellen, dass Ihre Website stets aktuell bleibt und den sich ändernden Anforderungen Ihres Unternehmens gerecht wird. Vertrauen Sie auf CAK Web Solutions, um Ihr Online-Geschäft zum Erfolg zu führen und Ihre digitale Präsenz zu maximieren.</p>
            <Image src='/webdep.jpg' alt='web img' width={500} height={300} className='rounded-xl max-w-full h-auto'></Image>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Offers