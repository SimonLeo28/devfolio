import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TextTransition({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-4xl font-bold">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        {words[index]}
      </motion.span>
    </div>
  );
}