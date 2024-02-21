import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Services: NextPage = () => {
  return (
    <section id='services'>
      <div className='h-screen bg-emerald-900'>
        <div className='flex gap-40'>
          <div className='p-10 bg-transparent hover:bg-emerald-700 hover:rounded-xl ml-24' >
            <h1 className='text-white font-bold text-3xl'>Website Development and Design</h1>
            <p className='mt-6 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! </p>
            <div className='mt-8'>
            <Link href='/services/Offers' className='rounded-full p-4 bg-emerald-800 hover:bg-emerald-950'> Our Offers </Link>
            </div>
          </div>
          <div> 
            <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl'
              />
          </div>
        </div>
        <div className='flex gap-40 mt-10'>
          <div className='ml-32'>
          <img 
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
              width={500}
              height={300}
              className='rounded-xl'
              />
          </div>
          <div className='p-10 bg-transparent hover:bg-emerald-700 hover:rounded-xl'>
            <h1 className='text-white font-bold text-3xl'>Website Development and Design</h1>
            <p className='mt-6 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Cumque, enim. Iure labore aspernatur expedita eveniet? <br />Quas assumenda repellendus ab consequatur, cumque provident! <br />Cupiditate, quod? Aliquid expedita quidem omnis voluptatem perspiciatis?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services