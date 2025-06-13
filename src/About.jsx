import React from 'react';
import abt_img from './images/about.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center lg:items-start bg-white h-screen text-black w-full px-10 py-20 space-y-10 lg:space-y-0 lg:space-x-10"
    >
      {/* Left Side */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 space-y-5">
        <div className="h-40 w-40 rounded-full bg-gray-200 overflow-hidden shadow-lg">
          <img
            src={abt_img}
            alt="Your Photo"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center lg:text-left text-lg font-light">
          Hi, I’m <span className='font-semibold'>Dr. Kumar B I D<br />
          Professor | Researcher | Developer</span><br />
          Bridging code and cutting-edge research to build transformative digital experiences that solve
           real-world challenges.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full lg:w-2/3 space-y-5">
        <h2 className="text-4xl font-bold border-b-4 border-black w-max">About Me</h2>
        <p className="text-lg font-light leading-relaxed">
          As an academic leader and technical practitioner, I merge rigorous research with practical development to
          engineer transformative solutions. My work advances knowledge frontiers while directly solving real-world
          challenges through code, algorithms, and systems design. Committed to open science and mentorship, I
          cultivate the next generation of innovators through hands-on guidance and interdisciplinary collaboration
          – turning theoretical insights into deployable technologies that create measurable impact.
        </p>
      </div>
    </div>
  );
};

export default About;
