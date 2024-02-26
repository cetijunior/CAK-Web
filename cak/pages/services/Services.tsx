import React from 'react';
import { NextPage } from 'next';
import Offers from './Offers';
import Image from 'next/image';


const Services: NextPage = () => {
  const [isOffers, setIsOffers] = React.useState(false);

  return (
    <section id='services' className='h-full bg-[#f8edeb] flex justify-center items-center pt-20'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row gap-8 p-5 items-center justify-between md:gap-3' >
          <div className='flex flex-col p-10 gap-4 bg-[#e8e8e8] max-w-[550px] md:hover:rounded-2xl rounded-xl drop-shadow-2xl'>
            <h1 className='text-[#5d1f20] font-bold font-grimes text-xl md:text-3xl'>Webseiteentwicklung und Design</h1>
            <p className='mt-6 text-[#381d1d] font-typewriter'>Unsere Angebote im Bereich der Webentwicklung und -gestaltung umfassen maßgeschneiderte Lösungen für moderne und ansprechende Websites.Wir bieten kreative  Designs, benutzerfreundliche Oberflächen und zuverlässige Entwicklungsdienstleistungen, um die Online-Präsenz Ihres Unternehmens optimal zu gestalten und zu verbessern.</p>
            <button onClick={() => setIsOffers(true)} className=' inline-block mt-4 font-typewriter rounded-full p-3 w-44 bg-[#8F293A] hover:bg-[#5D1F20] text-white'> Unsere Angebote </button>
          </div>
          <Offers isOpen={isOffers} onClose={() => setIsOffers(false)} />
          <Image
            src={'/webdev.jpg'}
            width={500}
            height={300}
            className='rounded-xl max-w-full h-auto md:w-[45%] md:max-w-[80%] drop-shadow-2xl'
          />
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-8 p-5 items-center justify-between '>
          <div className='flex flex-col max-w-[550px] p-10 gap-4 md:hover:drop-shadow-3xl bg-[#e8e8e8] rounded-xl drop-shadow-2xl drop-s'>
            <h1 className='text-[#5d1f20] font-bold text-xl md:text-3xl font-grimes'>Veröffentlichen und behalten</h1>
            <p className='mt-6 text-[#381d1d] font-typewriter '>Unser Angebot umfasst die Bereitstellung und kontinuierliche Wartung Ihrer Website. Wir bieten zuverlässiges Hosting, regelmäßige Sicherheitsupdates und technischen Support, um sicherzustellen, dass Ihre Website stets online und reibungslos läuft. Mit unserem Service können Sie sich voll und ganz auf Ihr Geschäft konzentrieren. </p>
          </div>
          <Image
            src={'/webdep.jpg'}
            width={500}
            height={400}
            className='md:w-[45%] rounded-xl max-w-full drop-shadow-2xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Services