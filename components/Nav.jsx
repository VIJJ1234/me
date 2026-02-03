"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const colors = ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500", "bg-purple-500", "bg-orange-500"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-5 sm:px-10 md:px-20 lg:px-32 transition-all duration-300  ${
        isScrolled ? "backdrop-blur-md bg-gray-900/70 py-3 shadow-lg" : "py-5"
      }`}
    >
      <motion.div
        className="w-full border-b border-blue-900 flex justify-around gap-10 items-center p-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-blue-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Brand Name */}
        <motion.div
          className="font-bold cursor-pointer flex gap-1 transition-transform duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          {["R", "A", "X"].map((char, index) => (
            <motion.span
              key={index}
              className={`sm:hidden ${colors[index]} text-white text-lg px-3 py-1 rounded-full`}
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {char}
            </motion.span>
          ))}

          {["V", "I", "J", "A", "Y"].map((char, index) => (
            <motion.span
              key={index}
              className={`hidden sm:inline ${colors[index]} text-white text-lg md:text-xl px-3 py-1 rounded-full`}
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>



        {/* Social Icons */}
        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/VIJJ1234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition-transform duration-300 hover:scale-110 text-gray-700 hover:text-black"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={30} className="hover:text-blue-500 text-blue-300 transition-colors duration-300" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vijaykumar2219"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition-transform duration-300 hover:scale-110 text-blue-700 hover:text-blue-900"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={30} className="hover:text-blue-500 transition-colors duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
