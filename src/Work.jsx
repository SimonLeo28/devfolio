import { motion } from "framer-motion";
// import { FaGraduationCap, FaResearchgate, FaUserTie, FaIndustry, FaTasks, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";

const data =[
    {
      title: "Professor HOD",
      description: "Amruta Institute Of Engineering And Management Sciences",
      link: "https://aiems.edu.in/information-science-and-engineering/"
    },
    {
      title: "Developer",
      description: "Yukti Systems",
      link: "/developer"
    },
    {
      title: "Social Activist",
      description: "Name yet to be updated",
      link: "/activist"
    }
]



const Work = () => {
  return (
    <div id="work" className="h-screen flex-col justify-center items-center mt-10 py-12 px-4 sm:px-6 lg:px-12 bg-gray-100 dark:bg-white">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-black mb-12">
        Works
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((work, index) => (
          <Link to={work.link}>
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{work.title}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{work.description}</p>
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-10 transition-all rounded-xl"></div>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
