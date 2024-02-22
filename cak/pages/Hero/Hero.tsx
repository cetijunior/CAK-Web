import React from "react";
import Image from "next/image";
import Hero1 from './hero2.png'

const Hero = () => {

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='hero' className="bg-emerald-900 mx-auto px-8 md:flex md:items-center md:justify-between py-12 min-h-[650px] w-auto">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg md:text-xl mb-8">
          Discover our range of services and how we can help you take your project to the next level.
        </p>
        <div className="flex p-9 justify-center md:justify-start">
          <a href="#contacts" onClick={scrollToSection('#contacts')}>
            <p className="inline-block bg-emerald-800 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors">Contact Us</p>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
       <Image src={Hero1} alt="Hero" className=" mix-blend-darken rounded-full max-w-s md:max-w-md lg:max-w-xl xl:max-w-xl" />
      </div>
    </section>
  );
};

export default Hero;
