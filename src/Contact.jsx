"use client";
import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import locimg from "./images/location.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const link = "https://maps.app.goo.gl/McEQVH7ehtvGoXH8A";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const backend = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Contact Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-purple-400">Contact Details</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">kumarbid@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300">+91 7892438079</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-gray-300">Mon-Fri: 9AM - 5PM</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-2xl text-purple-400">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kumar-ichangi-7362472bb/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://github.com/kumarbid" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/kumar.ichangi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Get In Touch</h2>
          {submitSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              Message sent successfully!
            </div>
          )}
          {submitError && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 font-semibold rounded-md transition-all ${
                isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Column 4: Location & Social */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-purple-400">Visit Us</h3>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0 text-xl" />
            <div>
              <p className="text-gray-300">
                66/1 , 2nd Main Road,<br />
                Muneshwara Temple Street, Bhrundhavan Layout , Padmanabhanagar <br />
                Bengaluru 560070<br />
                Karnataka, INDIA.
              </p>
            </div>
          </div>
          
          <div className="pt-2">
            <Link to={link}>
              <img 
                src={locimg} 
                alt="Location Map" 
                className="w-full h-40 object-cover rounded-lg hover:shadow-lg transition-transform transform hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;