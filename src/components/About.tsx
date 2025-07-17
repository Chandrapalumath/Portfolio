import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Brain, Database, Award, BookOpen, FileText, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'C++', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'React', category: 'Frontend' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Flask', category: 'Backend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
  ];

  const education = [
    {
      year: '2022 - 2026',
      degree: 'B.Tech, Computer Science',
      institution: 'Jaypee University of Engineering and Technology, Guna',
      gpa: 'GPA: 9.7',
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: '2020 - 2022',
      degree: '12th Standard',
      institution: 'Royal Heights Senior Secondary School, Zirapur',
      gpa: 'Percentage: 93.4%',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      year: '2020',
      degree: '10th Standard',
      institution: 'Vijaya Convent High School, Zirapur',
      gpa: 'Percentage: 91%',
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const certifications = [
    {
      name: 'Geodata Processing using Machine Learning and Python',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: 'Data Science Foundation Course by Infosys',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: 'Full Stack Development Bootcamp Certificate',
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  const positions = [
    {
      role: 'Deputy Secretary',
      organization: 'Bitwise Programming Hub',
      icon: <Users className="h-5 w-5" />,
    },
    {
      role: 'Event and Marketing Head',
      organization: 'GFG Student Chapter',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A passionate Full Stack Developer and AI/ML enthusiast with a strong foundation in computer science and a drive for innovation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <GraduationCap className="h-6 w-6 mr-3 text-primary-500" />
              Education Journey
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-primary-500"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <div className="mb-2">
                  <span className="text-sm text-primary-500 font-medium">{edu.year}</span>
                </div>
                <div className="flex items-center mb-2">
                  {edu.icon}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                    {edu.degree}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-primary-500 font-medium">{edu.gpa}</p>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="mt-12"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <FileText className="h-6 w-6 mr-3 text-primary-500" />
                Certifications
              </motion.h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cert.icon}
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Positions and Responsibilities */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="mt-12"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <Users className="h-6 w-6 mr-3 text-primary-500" />
                Positions & Responsibilities
              </motion.h3>

              <div className="space-y-4">
                {positions.map((pos, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      {pos.icon}
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {pos.role}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 ml-8">
                      {pos.organization}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <Code className="h-6 w-6 mr-3 text-primary-500" />
              Skills & Technologies
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  className="p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {skill.category}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-8 space-y-4"
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Brain className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  AI/ML Enthusiast with hands-on experience in TensorFlow
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Database className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Full-stack development with modern technologies
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  500+ LeetCode problems solved
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">9.7</div>
                <div className="text-gray-600 dark:text-gray-400">B.Tech GPA</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">93.4%</div>
                <div className="text-gray-600 dark:text-gray-400">12th Standard</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">91%</div>
                <div className="text-gray-600 dark:text-gray-400">10th Standard</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 