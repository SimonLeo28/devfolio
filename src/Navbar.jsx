import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="text-white text-xl font-bold">D E V P R O F I L E</div>

        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <a href="#hero" className="hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-gray-400 transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <div className="md:hidden text-white cursor-pointer">
          <button
            onClick={() => alert("Implement mobile menu toggle here")}
            className="text-white font-medium"
          >
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
