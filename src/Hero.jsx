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
      className="flex h-screen w-screen gap-x-3.5 justify-items-start bg-cover bg-black px-10 text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div id="hero" className="relative flex flex-col items-start justify-center">
        <h1 className="text-5xl lg:text-7xl font-bold">Dr. Kumar B. I. D.</h1>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl p-5 font-semibold mt-2"
        >
          {wordsArray[index]}
        </motion.span>
        <p className="text-lg lg:text-xl font-light max-w-lg mt-6">
          Building innovative solutions, one line of code at a time. Passionate
          about crafting seamless user experiences and impactful designs.
        </p>
        <a
          href="#about"
          className="mt-6 px-6 py-3 bg-purple-500 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;


// import { useState, useEffect } from "react";
// import hero from './images/Hero_Section_Pic.jpg';
// import { motion } from "framer-motion";
// import heroResponsive from './images/Hero_Section_Pic_Responsive.jpg'

// const wordsArray = ["Professor", "Researcher", "Developer"];
// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
//     }, 1000); 
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div 
//       className="flex h-screen w-screen gap-x-3.5 justify-items-start bg-cover bg-black px-10 text-white
//       bg-[url('./images/Hero_Section_Pic.jpg')] sm:bg-[url('./images/Hero_Section_Pic_Responsive.jpg')]"
//     >
//       <div id="hero" className="relative flex flex-col items-start justify-center">
//         <h1 className="text-5xl lg:text-7xl font-bold">Dr. Kumar B. I. D.</h1>
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl lg:text-5xl p-5 font-semibold mt-2"
//         >
//           {wordsArray[index]}
//         </motion.span>
//         <p className="text-lg lg:text-xl font-light max-w-lg mt-6">
//           Building innovative solutions, one line of code at a time. Passionate
//           about crafting seamless user experiences and impactful designs.
//         </p>
//         <a
//           href="#about"
//           className="mt-6 px-6 py-3 bg-purple-500 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
//         >
//           Learn More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;