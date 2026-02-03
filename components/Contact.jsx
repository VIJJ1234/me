"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="max-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg text-center mb-8 text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Feel free to reach out via email or connect on social platforms below.
      </motion.p>

      {/* Email */}
      <motion.a
        href="mailto:vijay221918@gmail.com"
        className="text-sm text-gray-400 hover:text-white mb-6 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <FaEnvelope className="inline mr-2" /> vijay221918@gmail.com
      </motion.a>

      {/* Resume Button */}
      <motion.a
        href="/vijay_resume.pdf"
        download="vijay_Resume.pdf"
        className="px-6 py-3 mb-8 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-blue-500 transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaDownload className="inline mr-2" /> Download Resume
      </motion.a>

      {/* Social Media Links */}
      <motion.div
        className="flex gap-6 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.a
          href="https://github.com/VIJJ1234"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-transform hover:scale-125"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/vijaykumar2219"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform hover:scale-125"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-transform hover:scale-125"
        >
          <FaDiscord />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
