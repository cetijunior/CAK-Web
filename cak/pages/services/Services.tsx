import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Offers from './Offers';

const Services: NextPage = () => {
  const [isOffers, setIsOffers] = React.useState(false);

  return (
    <section id='services' className='h-full bg-[#f8edeb] flex justify-center items-center pt-20'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row bg-transparent items-center justify-between p-5' >
            <div className='flex flex-col p-10 gap-4 bg-[#e8e8e8] md:hover:rounded-2xl rounded-xl drop-shadow-2xl'>
              <h1 className='text-[#5d1f20] font-bold text-xl md:text-3xl'>Website Development and Design</h1>
              <p className='mt-6 text-[#381d1d] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! </p>
              <button onClick={() => setIsOffers(true)} className=' inline-block mt-4 rounded-full p-3 w-28 bg-[#8F293A] hover:bg-[#5D1F20] text-white'> Our Offers </button>
            </div>
            <Offers isOpen={isOffers} onClose={() => setIsOffers(false)} />
            <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl'
            />
        </div>
          <div className='flex flex-col  md:flex-row-reverse gap-8 p-5 items-center justify-between '>
          <div className='flex flex-col p-10 gap-4 md:hover:drop-shadow-3xl bg-[#e8e8e8] rounded-xl drop-shadow-2xl drop-s'>
            <h1 className='text-[#5d1f20] font-bold text-xl md:text-3xl'>Website Development and Design</h1>
            <p className='mt-6 text-[#381d1d] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! <br />Cupiditate, quod? Aliquid expedita quidem omnis voluptatem perspiciatis?</p>
          </div>
          <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl max-w-full h-auto'
            />
        </div>
      </div>
    </section>
  )
}

export default Services