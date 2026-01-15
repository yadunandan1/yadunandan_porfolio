import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      setLoading(false);
      return;
    }

    // Send email using EmailJS
    try {
      await emailjs.send(
        "service_i7dylcb",
        "template_ofwvr13",
        {
          fullName: formData.name,
          email: formData.email,
          phone: formData.mobile,
          subject: formData.subject,
          message: formData.message,
        },
        "WIEXDFlFFPw3VCrN4"
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'adarshy85852@gmail.com',
      link: 'mailto:adarshy85852@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8471015205',
      link: 'tel:+918471015205',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      url: 'https://github.com/yadunandan1',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adarsh-yadav-a504ab372/',
      color: 'hover:text-blue-600',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      url: 'https://x.com/AdarshYada54061',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project, opportunity, or collaboration in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="font-medium text-gray-800 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className={`p-4 glass rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden md:block mt-8"
            >
              <div className="relative w-full h-64 glass rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📧</div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      Let's Work Together
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter the subject"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <a
                  href="mailto:adarshy85852@gmail.com"
                  className="flex-1 btn-outline inline-flex items-center justify-center gap-2"
                >
                  <FiMail className="w-5 h-5" />
                  Email Me
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
