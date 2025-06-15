import { useState, useEffect } from "react";
import hero from './images/Hero_Section_Pic.jpg';
import { motion } from "framer-motion";
import heroResponsive from './images/Hero_Section_Pic_Responsive.jpg'

const wordsArray = ["Professor", "Researcher", "Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
    }, 1000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex h-screen w-screen gap-x-3.5 justify-center items-center bg-cover bg-black px-10 text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div id="hero" className="relative flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-7xl font-bold p-0 m-0">Dr. Kumar B. I. D. 
          <span className="text-purple-300 text-xl p-0"> BE(CSE), M Tech(CSE), Executive MBA(BA & EMS), PhD(CSE)</span>
        </h1>
        {/* <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 2.0 }}
          className="text-4xl lg:text-5xl p-5 font-semibold mt-2"
        >
          {wordsArray[index]}
        </motion.span> */}
        <p className="text-[12px] lg:text-4xl p-5 font-semibold mt-2">PROFESSOR | RESEARCHER | DEVELOPER</p>
        <p className="text-lg lg:text-xl font-light max-w-4xl mt-6">
          Bridging academia and technology through innovative research and hands-on development, 
          I create impactful solutions while advancing knowledge and mentoring future innovators.
        </p>
        {/* <a
          href="#about"
          className="mt-6 px-6 py-3 bg-purple-500 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
        >
          Learn More
        </a> */}
      </div>
    </div>
  );
};

export default Hero;

