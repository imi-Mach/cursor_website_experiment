import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Maximillian Machado";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/assets/ms-headshot.jpg'}
                  alt="Maximillian Machado"
                  className="w-50 h-50 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="font-mono text-accent-orange">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building interpretable deep learning models.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { path: '/about', label: 'About', icon: ArrowRight },
                { path: '/projects', label: 'Projects', icon: ArrowRight },
                { path: '/fun', label: 'Fun', icon: ArrowRight },
                { path: '/contact', label: 'Contact', icon: ArrowRight },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>{item.label}</span>
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/imi-Mach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/maximillian-machado/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:maximillian.k.machado@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Resume & CV View Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Resume from /resume.pdf */}
            <a
              href="https://drive.google.com/file/d/1xygJjIkD2S79yGy-wO5vncyqmj3seMsd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex justify-center items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>View Resume</span>
            </a>

            {/* CV from Google Drive */}
            <a
              href="https://drive.google.com/file/d/1z0G3Edj7NwNkVOY2S-N0BdxyWPIwwzcH/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex justify-center items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>View CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Code Rain Background Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 opacity-20 animate-code-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            >
              {['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 