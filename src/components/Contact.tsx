import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Let's discuss opportunities, collaborations, or just say hello!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
            >
              Contact Information
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="mailto:chandrapalsinghumath18@gmail.com"
                    className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                  >
                    chandrapalsinghumath18@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Available for</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full-time opportunities, Freelance projects</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/Chandrapalumath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-200 group"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandrapal-singh-umath-79b72724a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-200 group"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
                </a>
                <a
                  href="mailto:chandrapalsinghumath18@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-200 group"
                >
                  <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-500" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 