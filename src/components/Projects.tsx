import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Brain, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'QuickCare – NextGen Healthcare',
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/Sumitdz/QuickCare',
      live: '#',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AIoT Conveyor Belt Safety System',
      description: 'Intelligent IoT system using computer vision and sensors to detect safety hazards on industrial conveyor belts.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi'],
      github: 'https://github.com/Chandrapalumath/An-IoT-Based-Safety-System-for-Conveyor-Belt',
      live: '#',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Pothole Detection Model',
      description: 'Advanced pothole detection using various YOLO models with 98% accuracy for road safety and maintenance.',
      technologies: ['Python', 'YOLO', 'Computer Vision', 'Deep Learning'],
      github: 'https://github.com/Chandrapalumath/Pothole-Detection-',
      live: '#',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my latest work, demonstrating expertise in full-stack development, AI/ML, and innovative problem-solving.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Chandrapalumath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 