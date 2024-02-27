import React, { useState, useEffect } from "react";
import Image from "next/image";
import background1 from '../public/hero.png';

import ButtonSvg from '../public/button.svg'; // Ensure this is the correct path

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint at 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-[#f8edeb] flex flex-col shadow-glow md:flex-row items-center justify-center min-h-screen mx-auto"
    >
      <div className="flex flex-col justify-center text-center md:text-left z-10">
        <h1 className="text-4xl sm:text-8xl p-10 font-fuel font-bold text-[#932b2d] mb-4">
          HERZLICHEN WILKOMMEN!
        </h1>
        <p className="text-xl sm:text-2xl text-[#381d1d] sm:pl-8 sm:p-auto p-4 font-typewriter w-[auto] sm:w-[600px]">
          Entdecken Sie unser Dienstleistungsangebot <br />und erfahren Sie,wie wir Ihnen helfen können, <br /> Ihr Projekt auf die nächste Stufe zu heben.
        </p>
        <div className="flex justify-center md:justify-start">
          <div
            onClick={scrollToSection("#contacts")}
            className="inline-flex items-center animate-pulse justify-center ml-6 cursor-pointer bg-no-repeat bg-center bg-cover hover:rotate-[45deg] transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${ButtonSvg.src})`,
              width: "200px",
              height: "100px",
            }}
          >
            <a href="#contacts" className="text-transparent w-full h-full flex items-center justify-center">
              Contact Us {/* Invisible text for accessibility, now clickable */}
            </a>
          </div>
        </div>
      </div>
      <div className='sm:ml-[-500px] ml-[0px] w-full h-auto'>
        <Image
          src={background1}
          alt="Hero Background"
          layout="responsive"
          width={2000} // These dimensions should match the aspect ratio of your image
          height={1400} // Adjust the height according to the actual image's aspect ratio
          objectFit="cover" // This ensures the image covers the area of the div, you can adjust as necessary
          priority={true}
          className="sm:h-auto sm:rotate-0 sm:w-auto sm:mt-0 mt-[50px]"
        />
      </div>
    </section >
  );
};

export default Hero;
