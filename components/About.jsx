"use client";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

function About  ()  {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="max-h-screen mb-20 flex flex-col md:flex-row items-center justify-around gap-10 px-5 sm:px-10 md:px-20 lg:px-32 mt-[8rem]"
    >
      <motion.div variants={fadeInUp} custom={0.2} className="max-w-lg text-center md:text-left">
        <motion.h1
  variants={fadeInUp}
  custom={0.3}
  className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 animate-pulse"
>
  Trust me, I'm a Backend / Full Stack web Developer
</motion.h1>

<motion.h2
  variants={fadeInUp}
  custom={0.5}
  className="text-2xl font-bold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 transition-all duration-500 hover:scale-105 animate-bounce"
>
  I'm <span className="text-white">VijayKumar</span>
</motion.h2>

<motion.p variants={fadeInUp} custom={0.7} className="mt-4 text-lg text-white">
  Full-Stack / Backend web developer, UI/UX Designer, and Competitive Programmer with a strong passion for solving real-world problems through code and design. I specialize in crafting scalable web applications with seamless user experiences and elegant interfaces.
  Currently diving deep into <span className="font-semibold text-yellow-400">Artificial Intelligence</span> and <span className="font-semibold text-green-400">Machine Learning</span> to build smarter, data-driven solutions that make an impact.
</motion.p>


        <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
  {/* Get Resume Button */}
        <motion.a
          href="/vijay_resume.pdf"
          download="vijay_Resume.pdf"
          variants={fadeInUp}
          custom={0.9}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center w-auto px-5 py-3 rounded-full cursor-pointer text-white font-bold text-lg shadow-lg transition-all duration-500"
          style={{ background: "linear-gradient(45deg, #5865F2, #FF007A, #FFD700)" }}
        >
          <FaDownload className="inline mr-2" /> Get Resume
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/VIJJ1234"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          custom={1.1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center w-auto px-5 py-3 cursor-pointer rounded-full text-white font-bold text-lg shadow-lg transition-all duration-500"
          style={{ background: "linear-gradient(45deg, #333, #444, #555)" }}
        >
          <FaGithub className="text-2xl" />
          <span className="ml-2">GitHub</span>
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/vijaykumar2219"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          custom={1.3}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center w-auto px-5 py-3 cursor-pointer rounded-full text-white font-bold text-lg shadow-lg transition-all duration-500"
          style={{ background: "linear-gradient(45deg, #0077B5, #00A0DC, #0084BF)" }}
        >
          <FaLinkedin className="text-2xl" />
          <span className="ml-2">LinkedIn</span>
        </motion.a>
      </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center"
      >
        <img
          src='/Myphotoo.png'
          alt="vijaykumar"
          className="w-[20rem] h-[20rem] sm:w-[22rem] sm:h-[22rem] md:w-[25rem] md:h-[25rem] rounded-full object-cover shadow-mix-shadow hover:shadow-2xl transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
