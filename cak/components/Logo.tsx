import React from 'react'
import logo from './CAK Web.png'
import Image from 'next/image';

const Logo = () => {

  const scrollToTop = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div>
        <a className="font-fuel text-3xl cursor-pointer hover:drop-shadow-2xl" onClick={scrollToTop}>
          CAK Web Soltuions
        </a>
      </div>
    </>
  )
}

export default Logo