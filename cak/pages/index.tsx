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
        <ul className="flex flex-col md:flex-row justify-between items-center bg-emerald-800 text-white p-4">
          <li><Link href="/Services"><p>Services</p></Link></li>
          <li><Link href="/Portfolio"><p>Portfolio</p></Link></li>
          <li><Link href="/About"><p>About Us</p></Link></li>
          <li><Link href="/Contact"><p>Contacts</p></Link></li>
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
