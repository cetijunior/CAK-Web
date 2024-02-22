import React from 'react'
import logo from './CAK Web.png'
import Image from 'next/image';

const Logo = () => {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div>
        <a onClick={scrollToTop}>
          <Image className='cursor-pointer' src={logo} alt="logo"
            width={90}
            height={90} />
        </a>
      </div>
    </>
  )
}

export default Logo