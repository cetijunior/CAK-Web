'use client'
import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Services from "./Services";
import { appWithTranslation } from 'next-i18next';
import 'i18next';


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavOpen]);
  return (
    <main>
      <Navbar toggle={toggleNav} isNavOpen={isNavOpen} />
      {isNavOpen && (
        <ul className="fixed shadow-xl top-20 right-0 z-20 w-50 h-50 flex flex-col space-y-5 rounded-xl md:flex-row items-center bg-[#8b2738] text-white p-9">
          <li><a href="#services" onClick={scrollToSection('#services')} className="font-typewriter font-extrabold drop-shadow-2xl"><p>Services</p></a></li>
          <li><a href="#portfolio" onClick={scrollToSection('#portfolio')} className="font-typewriter font-extrabold drop-shadow-2xl"><p>Portfolio</p></a></li>
          <li><a href="#about" onClick={scrollToSection('#about')} className="font-typewriter font-extrabold drop-shadow-2xl"><p>About Us</p></a></li>
          <li><a href="#contacts" onClick={scrollToSection('#contacts')} className="font-typewriter font-extrabold drop-shadow-2xl"><p>Contacts</p></a></li>
        </ul>
      )}
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}


export default appWithTranslation(Home);