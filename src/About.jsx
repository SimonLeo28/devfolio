import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center lg:items-start bg-white text-black w-full px-10 py-20 space-y-10 lg:space-y-0 lg:space-x-10"
    >
      {/* Left Side */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 space-y-5">
        <div className="h-40 w-40 rounded-full bg-gray-200 overflow-hidden shadow-lg">
          <img
            src="https://kumarbid.in/assets/img/testimonial-2.jpg"
            alt="Your Photo"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center lg:text-left text-lg font-light">
          Hi, I’m Dr. Kumar B I D, a passionate developer with a love for crafting
          innovative digital experiences.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full lg:w-2/3 space-y-5">
        <h2 className="text-4xl font-bold border-b-4 border-black w-max">About Me</h2>
        <p className="text-lg font-light leading-relaxed">
          I am a highly motivated and skilled developer with expertise in building
          responsive, user-centric web applications. My journey in development
          combines creativity and technical precision to bring ideas to life. With a
          strong foundation in full-stack technologies and a knack for problem-solving,
          I strive to create impactful solutions that resonate with users. When I’m not
          coding, you can find me exploring new technologies, mentoring aspiring
          developers, or working on side projects that fuel my passion for learning.
        </p>
      </div>
    </div>
  );
};

export default About;
