// "use client";
// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const backend = import.meta.env.VITE_BACKEND_URL;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(`${backend}/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <footer id="contact" className="bg-black text-white py-12 px-6 md:px-10 lg:px-20">
//       <div className="max-w-lg mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>
//           <div>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               rows={4}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className={`w-full px-6 py-3 text-lg font-semibold rounded-md shadow-md transform transition-transform hover:scale-105 ${
//               isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
//             }`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>

//         <div className="mt-6">
//           <a
//             href="https://www.linkedin.com/in/kumar-ichangi-7362472bb/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-lg font-medium text-purple-400 hover:text-purple-500 transition-colors"
//           >
//             Connect on LinkedIn
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Contact;
"use client";
import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backend = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
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
            />
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
            />
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-3 text-lg font-semibold rounded-md shadow-md transform transition-transform hover:scale-105 ${
              isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/kumar-ichangi-7362472bb/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-purple-400 hover:text-purple-500 text-2xl transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-purple-400 hover:text-purple-500 text-2xl transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-purple-400 hover:text-purple-500 text-2xl transition-colors" />
          </a>
          <a href="https://www.facebook.com/kumar.ichangi" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-purple-400 hover:text-purple-500 text-2xl transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
