import React from 'react'

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
      <img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png" alt="logo" 
      width={90}
      height={90}/>
      </a>
    </div>
    </>
  )
}

export default Logo