'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// ProjectCard Component
const ProjectCard = ({ name, image, techStack, github, live }) => {
  const handleCardClick = () => {
    if (github) window.open(github, '_blank');
  };

  const stopPropagation = (e) => e.stopPropagation(); // Prevent bubbling to card

  return (
    <motion.div 
      className="rounded-xl cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2,
      }}
      onClick={handleCardClick}
    >
      <div className="p-5 rounded-xl text-white shadow-lg transition-all duration-300 transform relative w-80 bg-gray-900 hover:shadow-xl">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-3" />
        <h2 className="text-lg font-semibold text-gray-100 mb-2">{name}</h2>
        <div className="flex gap-2 justify-center mt-1 flex-wrap">
          {techStack.map((TechIcon, i) => (
            <TechIcon key={i} className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
          ))}
        </div>
        <div className="flex gap-10 mt-4 border-t w-full justify-center pt-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={stopPropagation} // Prevent parent onClick
            className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
          >
            <FaGithub size={25} />
          </a>
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={stopPropagation} // Prevent parent onClick
              className="text-pink-400 hover:text-pink-600 text-xl transition-colors duration-300"
            >
              <FaExternalLinkAlt size={25} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
