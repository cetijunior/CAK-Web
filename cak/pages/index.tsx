import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Services from "./Services";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio /> 
      <About />
      <Contact />
    </main>
  );
}
