"use client";
import { motion } from "framer-motion";
import { FaDatabase, FaGitAlt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoPin } from "react-icons/io5";
import { SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPython, SiTailwindcss } from "react-icons/si";


// Skill Data
const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 animate-bounce" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 animate-bounce" /> },
  // { name: "Next.js", icon: <SiNextdotjs className="text-black animate-pulse" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500 animate-bounce" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 animate-bounce" /> },
  
  { name: "Java", icon: <FaJava className="text-red-600 animate-bounce" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 animate-bounce" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 animate-pulse" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 animate-bounce" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-600 animate-pulse" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 animate-pulse" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 animate-pulse" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 animate-bounce" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 animate-bounce" /> },
  // { name: "Solidity", icon: <SiSolidity className="text-yellow-500 animate-bounce" /> },
  
  { name: "HTML", icon: <SiHtml5 className="text-purple-500 animate-bounce" /> },
  { name: "CSS", icon: <SiCss3 className="text-yellow-500 animate-bounce" /> },


];

// Scroll Fade-In Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-10 px-5"
    >
      {/* Title Animation */}
      <motion.h2
        variants={fadeInUp}
        custom={0.2}
        className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        variants={fadeInUp}
        custom={0.3}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center cursor-pointer justify-center w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-800 rounded-lg shadow-lg transition-transform"
            whileHover={{ rotate: -15, x: 5 }} // Desktop hover effect
            whileTap={{ scale: 1.2, rotate: 5 }} // Mobile tap effect
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IoPin className="absolute top-1 right-1 text-red-500 text-sm md:text-lg rotate-12" />
            <div className="text-3xl md:text-4xl">{skill.icon}</div>
            <p className="mt-2 text-sm md:text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
