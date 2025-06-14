// import React from 'react';
// import abt_img from './images/about.jpg'

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="flex flex-col lg:flex-row items-center lg:items-start bg-white h-screen text-black w-full px-10 py-20 space-y-10 lg:space-y-0 lg:space-x-10"
//     >
//       {/* Left Side */}
//       <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 space-y-5">
//         <div className="h-40 w-40 rounded-full bg-gray-200 overflow-hidden shadow-lg">
//           <img
//             src={abt_img}
//             alt="Your Photo"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <p className="text-center lg:text-left text-lg font-light">
//           Hi, I’m <span className='font-semibold'>Dr. Kumar B I D<br />
//           Professor | Researcher | Developer</span><br />
//           Bridging code and cutting-edge research to build transformative digital experiences that solve
//            real-world challenges.
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="flex flex-col w-full lg:w-2/3 space-y-5">
//         <h2 className="text-4xl font-bold border-b-4 border-black w-max">About Me</h2>
//         <p className="text-lg font-light leading-relaxed">
//           As an academic leader and technical practitioner, I merge rigorous research with practical development to
//           engineer transformative solutions. My work advances knowledge frontiers while directly solving real-world
//           challenges through code, algorithms, and systems design. Committed to open science and mentorship, I
//           cultivate the next generation of innovators through hands-on guidance and interdisciplinary collaboration
//           – turning theoretical insights into deployable technologies that create measurable impact.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import abt_img from './images/about.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-white text-black px-4 py-12 md:px-8 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
    >
      {/* Left Side - Profile */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6">
        {/* Profile Image */}
        <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-gray-200 overflow-hidden shadow-lg border-4 border-purple-100">
          <img
            src={abt_img}
            alt="Dr. Kumar B I D"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Short Bio */}
        <div className="text-center lg:text-left space-y-2">
          <p className="text-xl sm:text-2xl font-medium">
            Hi, I'm <span className="font-bold text-purple-600">Dr. Kumar B I D</span>
          </p>
          <p className="text-lg sm:text-xl font-light italic">
            Professor | Researcher | Developer
          </p>
          <p className="text-base sm:text-lg font-light mt-3">
            Bridging code and cutting-edge research to build transformative digital experiences.
          </p>
        </div>
      </div>

      {/* Right Side - Detailed Bio */}
      <div className="w-full lg:w-2/3 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold pb-2 border-b-4 border-purple-600 w-max">
          About Me
        </h2>
        
        <div className="space-y-4">
          <p className="text-base sm:text-lg leading-relaxed">
            As an academic leader and technical practitioner, I merge rigorous research with practical development to engineer transformative solutions. My work advances knowledge frontiers while directly solving real-world challenges through code, algorithms, and systems design.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Committed to open science and mentorship, I cultivate the next generation of innovators through hands-on guidance and interdisciplinary collaboration – turning theoretical insights into deployable technologies that create measurable impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;