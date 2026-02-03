'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const experience = [
  {
    company: 'Kacklewalls Nutrition Pvt Ltd',
    role: 'Full Stack Developer',
    duration: '4 months',
  },
  // {
  //   company: 'OptM Media Solutions Private Limited',
  //   role: 'Full Stack Developer, Team Leader',
  //   duration: '3 months',
  // },
];

const Experience = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      className="py-16 relative"
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center mb-10">
        Experience
      </h2>
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-400 h-full"></div>
        
        {experience.map((job, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full mb-10 relative ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeIn' }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Moving Circle */}
            {hoverIndex === index && (
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-blue-500"
                animate={{ y: 0 }}
                initial={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            )}
            
            <motion.div
              className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-700 w-[45%] relative"
              whileHover={{ scale: 1.02, boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.2)' }}
            >
              <h3 className="text-xl font-semibold text-green-400">{job.company}</h3>
              <p className="text-lg text-blue-300">{job.role}</p>
              <p className="text-sm text-gray-400 mb-3">{job.duration}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;