// import { motion } from "framer-motion";
// import { FaGraduationCap, FaResearchgate, FaUserTie, FaIndustry, FaTasks, FaChalkboardTeacher } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     title: "Academic Leadership",
//     description: "Supervising curriculum design, faculty development, and student academic progress.",
//     icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-4xl" />,
//     link: "https://www.google.com",
//   },
//   {
//     title: "Research & Innovation",
//     description: "Encouraging faculty and students in research projects, publications, and funding opportunities.",
//     icon: <FaResearchgate className="text-green-600 dark:text-green-400 text-4xl" />,
//     link: "https://www.google.com",
//   },
//   {
//     title: "Books and Publications",
//     description: "Providing guidance and career advice to students for academic and professional growth.",
//     icon: <FaUserTie className="text-yellow-600 dark:text-yellow-400 text-4xl" />,
//     link: "https://www.walnutpublication.com/author/771537038/?srsltid=AfmBOookOu0S5jrexP01M5KFQ8SoC80ueafTnH9WJZ5_idFR-lK__xy3",
//   },
//   // {
//   //   title: "Industry Collaboration",
//   //   description: "Building partnerships with industries for internships, projects, and knowledge exchange.",
//   //   icon: <FaIndustry className="text-purple-600 dark:text-purple-400 text-4xl" />,
//   //   link: "https://www.google.com",
//   // },
//   // {
//   //   title: "Administrative Management",
//   //   description: "Handling department operations, budgeting, and accreditation compliance.",
//   //   icon: <FaTasks className="text-red-600 dark:text-red-400 text-4xl" />,
//   //   link: "https://www.google.com",
//   // },
//   // {
//   //   title: "Workshops & Seminars",
//   //   description: "Organizing technical workshops, expert lectures, and faculty development programs.",
//   //   icon: <FaChalkboardTeacher className="text-pink-600 dark:text-pink-400 text-4xl" />,
//   //   link: "https://www.google.com",
//   // },
// ];

// const Services = () => {
//   return (
//     <div id="services" className="h-screen flex-col justify-items-center py-12 px-4 sm:px-6 lg:px-12 bg-gray-100 dark:bg-white ">
//       <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-black mb-12">
//         Services
//       </h1>

//       {/* Responsive Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <Link to={service.link}>
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
//           >
//             {/* Icon */}
//             <div className="flex justify-center mb-4">{service.icon}</div>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{service.title}</h3>

//             {/* Description */}
//             <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{service.description}</p>

//             {/* Hover Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-10 transition-all rounded-xl"></div>
//           </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import { motion } from "framer-motion";
import { FaGraduationCap, FaResearchgate, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Academic Leadership",
    description: "Supervising curriculum design, faculty development, and student academic progress.",
    icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400" />,
    link: "https://www.google.com",
  },
  {
    title: "Research & Innovation",
    description: "Encouraging faculty and students in research projects, publications, and funding opportunities.",
    icon: <FaResearchgate className="text-green-600 dark:text-green-400" />,
    link: "https://www.google.com",
  },
  {
    title: "Books and Publications",
    description: "Providing guidance and career advice to students for academic and professional growth.",
    icon: <FaUserTie className="text-yellow-600 dark:text-yellow-400" />,
    link: "https://www.walnutpublication.com/author/771537038/?srsltid=AfmBOookOu0S5jrexP01M5KFQ8SoC80ueafTnH9WJZ5_idFR-lK__xy3",
  },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-100 dark:bg-gray-900 hover:text-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Services
          </h1>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full"
            >
              <Link to={service.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center hover:bg-gray-800 dark:hover:bg-gray-750 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-full">
                    <div className="text-3xl sm:text-4xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;