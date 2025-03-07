import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">KumarBid</h1>
      <ul className="hidden md:flex gap-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center p-6" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business')" }}>
    <div>
      <h2 className="text-5xl font-bold">Welcome to KumarBid</h2>
      <p className="text-xl mt-4">Your trusted platform for bidding & business solutions</p>
    </div>
  </section>
);

const Services = () => (
  <section className="py-12 text-center">
    <h3 className="text-3xl font-bold">Our Services</h3>
    <div className="grid md:grid-cols-3 gap-6 p-6">
      <div className="p-6 border rounded-lg shadow-md">Bidding Solutions</div>
      <div className="p-6 border rounded-lg shadow-md">Consulting Services</div>
      <div className="p-6 border rounded-lg shadow-md">Market Analysis</div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white text-center p-4">
    <p>&copy; 2025 KumarBid. All rights reserved.</p>
  </footer>
);

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
