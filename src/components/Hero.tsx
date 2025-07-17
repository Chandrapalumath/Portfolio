import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
        >
          {/* Profile Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl">
                <img
                  src="/chandrapal.jpg"
                  alt="Chandrapal Singh Umath"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary-400"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-primary-500 dark:text-primary-400 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            >
              <motion.span 
                className="gradient-text"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Chandrapal
              </motion.span>
              <br />
              <motion.span 
                className="text-3xl sm:text-5xl lg:text-6xl"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Singh Umath
              </motion.span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            >
              Full Stack Developer | AI/ML Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about creating innovative solutions and pushing the boundaries of technology. 
              Specializing in full-stack development and artificial intelligence.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 pt-8"
            >
              <motion.a
                href="https://github.com/Chandrapalumath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chandrapal-singh-umath-79b72724a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
              </motion.a>
              <motion.a
                href="mailto:chandrapalsinghumath18@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1SCFkRM6_bAH0XT4S-LKUtDYC8hPkPYse/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-primary-500 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500 rounded-full opacity-50"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  );
};

export default Hero; 