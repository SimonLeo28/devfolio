import { motion } from "framer-motion";
import { FaGraduationCap, FaResearchgate, FaUserTie, FaIndustry, FaTasks, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Academic Leadership",
    description: "Supervising curriculum design, faculty development, and student academic progress.",
    icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-4xl" />,
    link: "https://www.google.com",
  },
  {
    title: "Research & Innovation",
    description: "Encouraging faculty and students in research projects, publications, and funding opportunities.",
    icon: <FaResearchgate className="text-green-600 dark:text-green-400 text-4xl" />,
    link: "https://www.google.com",
  },
  {
    title: "Books and Publications",
    description: "Providing guidance and career advice to students for academic and professional growth.",
    icon: <FaUserTie className="text-yellow-600 dark:text-yellow-400 text-4xl" />,
    link: "https://www.walnutpublication.com/author/771537038/?srsltid=AfmBOookOu0S5jrexP01M5KFQ8SoC80ueafTnH9WJZ5_idFR-lK__xy3",
  },
  // {
  //   title: "Industry Collaboration",
  //   description: "Building partnerships with industries for internships, projects, and knowledge exchange.",
  //   icon: <FaIndustry className="text-purple-600 dark:text-purple-400 text-4xl" />,
  //   link: "https://www.google.com",
  // },
  // {
  //   title: "Administrative Management",
  //   description: "Handling department operations, budgeting, and accreditation compliance.",
  //   icon: <FaTasks className="text-red-600 dark:text-red-400 text-4xl" />,
  //   link: "https://www.google.com",
  // },
  // {
  //   title: "Workshops & Seminars",
  //   description: "Organizing technical workshops, expert lectures, and faculty development programs.",
  //   icon: <FaChalkboardTeacher className="text-pink-600 dark:text-pink-400 text-4xl" />,
  //   link: "https://www.google.com",
  // },
];

const Services = () => {
  return (
    <div id="services" className="h-screen flex-col justify-items-center py-12 px-4 sm:px-6 lg:px-12 bg-gray-100 dark:bg-white ">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-black mb-12">
        Services
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.link}>
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{service.description}</p>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-10 transition-all rounded-xl"></div>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
