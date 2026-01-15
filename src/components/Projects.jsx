import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const handleNavClick = (e, href) => {
    // Only handle hash links for smooth scrolling
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    // External links will open naturally without preventDefault
  };

  const filters = ['All', 'Web', 'AI', 'Full Stack'];

  const projects = [
    {
      title: 'OceanIQ',
      tagline: 'Deep Data. Smarter Oceans',
      description: 'An AI-powered platform for ocean data analysis and visualization, helping marine researchers make data-driven decisions.',
      tech: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      category: ['AI', 'Web', 'Full Stack'],
      image: 'https://iili.io/fO99EQt.png',
      gradient: 'from-blue-500 to-cyan-500',
      demoLink: '#home',
      githubLink: 'https://github.com/PaarthNo1/OceanIQ',
    },
    {
      title: 'Resume Builder',
      tagline: 'Create Professional Resumes in Minutes',
      description: 'A modern resume builder with multiple templates, real-time preview, and PDF export functionality.',
      tech: ['React', 'Tailwind', 'Node.js','Express.js'],
      category: ['Web', 'Full Stack'],
      image: 'https://iili.io/fO9FcyG.png',
      gradient: 'from-purple-500 to-pink-500',
      demoLink: '#home',
      githubLink: 'https://github.com/PaarthNo1/Resume-Builder',
    },
    {
      title: 'Swiggy Clone',
      tagline: 'Food Delivery Made Simple',
      description: 'A full-featured food delivery application with real-time order tracking, payment integration, and responsive design.',
      tech: ['React', 'Redux', 'Tailwind CSS'],
      category: ['Web', 'Frontend'],
      image: 'https://iili.io/fNyQ08P.png',
      gradient: 'from-orange-500 to-red-500',
      demoLink: '#home',
      githubLink: 'https://github.com/yadunandan1/SwiggyClone_',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work showcasing full-stack development, AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'glass text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full flex flex-col overflow-hidden">
                  {/* Project Image/Icon */}
                  <div className={`relative h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.demoLink}
                        onClick={(e) => handleNavClick(e, project.demoLink)}
                        {...(project.demoLink.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <FiExternalLink className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <FiGithub className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium gradient-text mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        onClick={(e) => handleNavClick(e, project.demoLink)}
                        {...(project.demoLink.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
                      >
                        View
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-purple-500 dark:hover:text-purple-400 transition-all duration-300 text-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yadunandan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
