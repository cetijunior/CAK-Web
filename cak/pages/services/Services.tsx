import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Services: NextPage = () => {
  return (
    <section id='services' className='h-auto bg-emerald-900 flex justify-center items-center p-5'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row bg-transparent items-center justify-between gap-4 p-5' >
            <div className='flex flex-col p-10 gap-4 md:hover:drop-shadow-3xl md:hover:bg-emerald-700 md:hover:rounded-xl bg-emerald-700 rounded-xl drop-shadow-xl md:bg-emerald-900 md:drop-shadow-none'>
              <h1 className='text-white font-bold text-xl md:text-3xl'>Website Development and Design</h1>
              <p className='mt-6 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! </p>
              <Link href='/services/Offers' className=' inline-block mt-4 rounded-full p-3 w-28 bg-emerald-800 hover:bg-emerald-950 text-white'> Our Offers </Link>
            </div>
            <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl'
            />
        </div>
          <div className='flex flex-col-reverse md:flex-row gap-4 p-5 items-center justify-between '>
           <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl max-w-full h-auto'
            />
          <div className='flex flex-col p-10 gap-4 md:hover:drop-shadow-3xl md:hover:bg-emerald-700 md:hover:rounded-xl bg-emerald-700 rounded-xl drop-shadow-xl md:bg-emerald-900 md:drop-shadow-none'>
            <h1 className='text-white font-bold text-xl md:text-3xl'>Website Development and Design</h1>
            <p className='mt-6 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! <br />Cupiditate, quod? Aliquid expedita quidem omnis voluptatem perspiciatis?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services