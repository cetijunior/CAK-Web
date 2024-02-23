'use client'
import { useEffect, useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./Hero/Hero";
import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import { appWithTranslation } from 'next-i18next';
import 'i18next';


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId) => (e) => {
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
       <ul className="fixed top-35 right-0 w-50 h-50 flex flex-col space-y-4 rounded-xl md:flex-row items-center bg-emerald-800 text-white p-9 z-10">
         <li><a href="#services" onClick={scrollToSection('#services')}><p>Services</p></a></li>
                <li><a href="#portfolio" onClick={scrollToSection('#portfolio')}><p>Portfolio</p></a></li>
                <li><a href="#about" onClick={scrollToSection('#about')}><p>About Us</p></a></li>
                <li><a href="#contacts" onClick={scrollToSection('#contacts')}><p>Contacts</p></a></li>
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