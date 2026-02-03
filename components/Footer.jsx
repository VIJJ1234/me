'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full  text-white py-6 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-blue-400">Vijay Kumar</h1>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="https://github.com/VIJJ1234" target="_blank">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="p-3 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition"
            >
              <FaGithub size={24} />
            </motion.div>
          </Link>

          <Link href="https://www.linkedin.com/in/vijaykumar2219" target="_blank">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="p-3 bg-blue-600 rounded-full shadow-md hover:bg-blue-500 transition"
            >
              <FaLinkedin size={24} />
            </motion.div>
          </Link>

          <Link href="https://discord.com" target="_blank">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="p-3 bg-indigo-600 rounded-full shadow-md hover:bg-indigo-500 transition"
            >
              <FaDiscord size={24} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
