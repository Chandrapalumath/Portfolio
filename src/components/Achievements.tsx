import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'CodeVita Rank',
      value: '864',
      subtitle: 'Global Rank',
      icon: <Trophy className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'LeetCode Problems',
      value: '500+',
      subtitle: 'Solved',
      icon: <Target className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Academic Excellence',
      value: '9.7',
      subtitle: 'GPA',
      icon: <Award className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
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
    <section id="achievements" className="section-padding">
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
            <span className="gradient-text">Achievements</span> & Recognition
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Milestones and accomplishments that showcase my dedication and expertise.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className={`p-8 bg-gradient-to-br ${achievement.color} text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                  <p className="text-white/80">{achievement.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Strong foundation in Data Structures & Algorithms
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Experience with modern development practices
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Passionate about AI/ML and emerging technologies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Collaborative team player with strong communication skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 