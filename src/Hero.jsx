import React from "react";

const Hero = () => {
  return (
    <div className="flex h-screen w-screen gap-x-3.5 justify-items-start bg-black px-10 text-white">
      <div id="hero" className="relative flex flex-col items-start justify-center">
        <h1 className="text-5xl lg:text-7xl font-bold">Dr. Kumar B. I. D.</h1>
        <h2 className="text-3xl lg:text-5xl font-semibold mt-4">D E V E L O P E R</h2>
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
      <img
        src="https://www.shutterstock.com/image-photo/asian-business-man-confident-elegant-260nw-2103131423.jpg"
        alt="Hero Page Image"
        className="h-72 w-72 mt-52 ml-auto rounded-full mr-10"
      />
    </div>
  );
};

export default Hero;
