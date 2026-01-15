import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiTrendingUp, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FiCode,
      number: 10,
      suffix: '+',
      label: 'Projects Built',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTrendingUp,
      number: 15,
      suffix: '+',
      label: 'Tech Stack',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiAward,
      number: 0,
      suffix: '∞',
      label: 'Problem Solving',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiHeart,
      number: 100,
      suffix: '%',
      label: 'Quality Focus',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi there! I'm <span className="font-semibold gradient-text">Adarsh Yadav</span>, a full-stack developer passionate about creating modern web applications and learning new technologies through practical projects.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on learning and applying full-stack development concepts through hands-on projects, where I work on building user interfaces, writing backend logic, and understanding how complete web applications function end-to-end.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I work with technologies such as <span className="font-semibold text-blue-600 dark:text-purple-400">C, C++, JavaScript, and TypeScript</span> to build user-focused web applications, clean interfaces, and functional backend logic.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image or Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 glass rounded-3xl overflow-hidden">
              {/* Abstract code illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="space-y-4 p-8 w-full">
                    </div> 
              </div>
              <img src="https://iili.io/f8sb537.png" alt="" />
             
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component with Counter Animation
const StatCard = ({ stat, inView, delay }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (inView && stat.suffix !== '∞') {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.number, stat.suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card text-center group"
    >
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-bold gradient-text mb-2">
        {stat.suffix === '∞' ? '∞' : `${count}${stat.suffix}`}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default About;
