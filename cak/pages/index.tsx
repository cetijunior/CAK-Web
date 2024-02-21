'use client'
import { useEffect, useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./Hero/Hero";
import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Link from "next/link";


export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
    <main className="">
      <Navbar toggle={toggleNav} isNavOpen={isNavOpen} />
      {isNavOpen && (
        <ul className="flex flex-col md:flex-row justify-between items-center bg-emerald-800 text-white p-4">
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
