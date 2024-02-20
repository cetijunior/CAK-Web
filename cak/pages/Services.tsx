import React from 'react';
import { NextPage } from 'next';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';


const Services: NextPage = () => {
  return (
    <div className='h-screen bg-white snap-mandatory'>
      <div className='md:ml-40 md:flex md:gap-8'>
        <h1 className=' md:mt-10 md:text-lg text-black md:p-2 md:rounded-full bg-blue-400 hover:bg-blue-200'>Our Services</h1> 
        <h3 className='md:mt-10 md:text-lg text-black md:p-2 md:rounded-full '>Take a look at what we have to offer.</h3>
      </div>
      <div className='md:mt-10 md:ml-40 md:mr-40 md:grid-cols-2 md:grid-rows-2 md:grid-flow-row md:grid gap-20'>
        <div className='md:w-120 md:h-40 bg-blue-200  '>
          <h2>Website Development</h2>
          <p className='md:mt-6'>Our team of developers will create a professional website for your business with the latest technology</p>
            <CallMadeRoundedIcon className='text-white md:mt-8 md:ml-2'/>
          </div>
          <div className='md:w-120 bg-blue-200 '>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
            <CallMadeRoundedIcon className='text-white md:mt-14 md:ml-2'/>
          </div>
          <div className='md:w-120 bg-blue-200 '>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
            <CallMadeRoundedIcon className='text-white md:mt-14 md:ml-2'/>
          </div>
          <div className='md:w-120 bg-blue-200 '>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
            <CallMadeRoundedIcon className='text-white md:mt-14 md:ml-2'/>
          </div>
      </div>
    </div>
  )
}

export default Services