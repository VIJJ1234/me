import { motion } from 'framer-motion';
import { FaBrain } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';
import ProjectCard from './ProjectCard';


const projects = [
  {
    name: 'Hostel Management System',
    image: '/hostel1.jpg',
    techStack: [SiReact, SiExpress, SiNodedotjs, SiMongodb, SiCss3,SiHtml5,],
    github: 'https://github.com/VIJJ1234/Hostel-Management-System',
    live: ''
  },
  {
    name: 'Telemedicine online platform',
    image: '/tele.avif',
    techStack: [SiReact, SiExpress, SiNodedotjs, SiMongodb, SiTailwindcss],
    github: 'https://github.com/VIJJ1234/Telemedicine',
    live: ''
  },
  {
    name: 'Tour Management System',
    image: '/tour.jpg',
    techStack: [SiReact, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress],
    github: 'https://github.com/VIJJ1234/Tour_management/',
    
  },
  {
    name: 'SMARTHEAL-AI',
    image: '/ai.webp',
    techStack: [SiNextdotjs,FaBrain,SiPython, SiJavascript],
    github: 'https://github.com/VIJJ1234/Heal_me',
    live: ''
  },
  {
    name: 'FoodDeliveryApp',
    image: '/food1.png',
    techStack: [SiReact, SiTailwindcss, SiMongodb, SiNodedotjs],
    github: 'https://github.com/VIJJ1234/FoodDeliveryApp',
    live: ''
  },
  // {
  //   name: 'Quora Clone',
  //   image: '/images/quora.jpg',
  //   techStack: [SiReact, SiFirebase, SiTailwindcss],
  //   github: 'https://github.com/Shivkumarrathod/Quora-clone',
  //   live: ''
  // }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      className="py-16"
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-10">
        Projects
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeIn' }}
      >
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
