import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      
      <main className="">
        <Hero />
        
        <section id="about" className="pt-10 md:pt-16">
          <About />
        </section>
        
        <section id="services" className="pt-10 md:pt-16">
          <Services />
        </section>
        
        <section id="work" className="pt-10 md:pt-16">
          <Work />
        </section>
        
        <section id="contact" className="pt-10 md:pt-16 pb-0">
          <Contact />
        </section>
      </main>
    </div>
  );
}