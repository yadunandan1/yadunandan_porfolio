import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBarChart2, FiCode, FiSmartphone, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiBarChart2,
      title: 'Data Analytics',
      description: 'I analyze and interpret complex datasets to support data-driven decisions. Using tools like Excel, Power BI, and Python (Pandas, NumPy, Matplotlib), I transform raw data into meaningful insights and interactive dashboards.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Data Visualization', 'Statistical Analysis', 'Dashboard Creation', 'Insights & Reporting'],
    },
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'I design and develop modern, responsive web applications using HTML, CSS, JavaScript, and React, focusing on clean UI, smooth user experience, and performance optimization.',
      color: 'from-purple-500 to-pink-500',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Clean Code'],
    },
    {
      icon: FiSmartphone,
      title: 'Flutter Development',
      description: 'I build high-performance cross-platform mobile applications with Flutter, ensuring consistent UI and seamless performance across both Android and iOS platforms.',
      color: 'from-green-500 to-emerald-500',
      features: ['Cross-Platform Apps', 'Native Performance', 'Beautiful UI', 'Code Reusability'],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized services combining technical expertise with creative problem-solving to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="card h-full flex flex-col">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                  >
                    Learn More
                    <FiArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.color} text-transparent`} style={{ 
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with modern technology and creative solutions.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
              <FiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
