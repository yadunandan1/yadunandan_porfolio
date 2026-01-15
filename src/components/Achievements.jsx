import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiImage } from 'react-icons/fi';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    {
      icon: FiAward,
      title: 'Smart India Hackathon 2025',
      description: 'Winner – Smart India Hackathon 2025 (National Level) for delivering a scalable, real-world tech solution.',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://iili.io/f8tRR24.png' // Yaha apni certificate image ka path add karo: '/path/to/certificate1.jpg'
    },
    {
      icon: FiCode,
      title: 'GeeksforGeeks Recognition',
      description: 'Received GeeksforGeeks Certificate and Goodie Bag in recognition of 160 days of continuous coding, showcasing strong commitment to Competitive Programming and DSA mastery',
      color: 'from-green-500 to-emerald-500',
      image: 'https://iili.io/f8taIN2.png', // Yaha apni certificate image ka path add karo: '/path/to/certificate2.jpg'
      profileLink: 'https://www.geeksforgeeks.org/profile/ady12', // Yaha apni GeeksforGeeks profile link add karo
      logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg'
    },
    {
      icon: FiAward,
      title: 'Techkriti Memory-Based Coding Challenge',
      description: 'First Runner-up – Techkriti Memory-Based Coding Challenge (KIT Varanasi)',
      color: 'from-blue-500 to-purple-500',
      image: 'https://iili.io/f8tuvN1.png' // Yaha apni certificate image ka path add karo: '/path/to/certificate3.jpg'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Recognitions and milestones in my journey</p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                {/* Certificate Image - if available */}
                {achievement.image && (
                  <div className="mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImage(achievement.image)}>
                    <img 
                      src={achievement.image} 
                      alt={`${achievement.title} certificate`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Buttons Container */}
                <div className="flex items-center justify-between gap-4 mt-4">
                  {/* View Certificate Button - if image available */}
                  {achievement.image && (
                    <button
                      onClick={() => setSelectedImage(achievement.image)}
                      className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                    >
                      <FiImage className="w-4 h-4" style={{ 
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        background: `linear-gradient(to right, var(--tw-gradient-stops))`
                      }} />
                      View Certificate
                    </button>
                  )}

                  {/* Profile Link Button - if profileLink available */}
                  {achievement.profileLink && achievement.logo && (
                    <a
                      href={achievement.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 glass rounded-lg hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      title="View Profile"
                    >
                      <img 
                        src={achievement.logo} 
                        alt="Profile Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
