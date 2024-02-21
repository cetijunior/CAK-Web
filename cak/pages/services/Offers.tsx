import React from 'react'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Link from 'next/link';
import { NextPage } from 'next';
import Navbar from '../navbar/Navbar';

const Offers = () => {
  return (
    <div className='h-screen bg-emerald-100'>
      <div className='md:ml-40 mdnpm :flex md:gap-8'>
        <h1 className=' md:mt-10 md:text-lg text-black md:p-2 md:rounded-full bg-blue-400 hover:bg-blue-200 '>Our Services</h1>
        <h3 className='md:mt-10 md:text-lg text-black md:p-2 md:rounded-full '>Take a look at what we have to offer.</h3>
      </div>
      <div className='md:mt-10 md:ml-40 md:mr-40 md:grid-cols-2 md:grid-rows-2 md:grid-flow-row md:grid gap-20 '>
        <div className='md:w-120 md:h-40 bg-blue-200 hover:md:drop-shadow-2xl md:drop-shadow-xl rounded-xl   '>
          <h2 className='md:text-3xl text-center'>Website Development</h2>
          {/* This is the Arrow Icon */}
          <Link href="/Offers">
            <CallMadeRoundedIcon className="md:visible md:mt-20 md:ml-2 bg-black md:w-8 md:h-8 md:rounded-full md:hover:cursor-pointer" />
          </Link>
        </div>
        <div className='md:w-120 md:h-40 bg-blue-200 hover:md:drop-shadow-2xl md:drop-shadow-xl drop-shado rounded-xl'>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
          <Link href="/Offers">
            <CallMadeRoundedIcon className="md:visible md:mt-12 md:ml-2 bg-black md:w-8 md:h-8 md:rounded-full md:hover:cursor-pointer" />
          </Link>
        </div>
        <div className='md:w-120 md:h-40 bg-blue-200 hover:md:drop-shadow-2xl md:drop-shadow-xl drop-shado rounded-xl'>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
          <Link href="/Offers">
            <CallMadeRoundedIcon className="md:visible md:mt-12 md:ml-2 bg-black md:w-8 md:h-8 md:rounded-full md:hover:cursor-pointer" />
          </Link>
        </div>
        <div className='md:w-120 md:h-40 bg-blue-200 hover:md:drop-shadow-2xl md:drop-shadow-xl drop-shado rounded-xl'>
          <h2>Website Development</h2>
          <p>Our team of developers will create a professional website for your business with the latest technology</p>
          <Link href="/Offers">
            <CallMadeRoundedIcon className="md:visible md:mt-12 md:ml-2 bg-black md:w-8 md:h-8 md:rounded-full md:hover:cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Offers