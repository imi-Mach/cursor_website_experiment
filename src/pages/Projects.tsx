import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      demoUrl: 'https://demo-ecommerce.com',
      tags: ['Full Stack', 'E-Commerce', 'React'],
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by machine learning. Built with Python, TensorFlow, and a React frontend for seamless user interaction.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      githubUrl: 'https://github.com/yourusername/ai-chat',
      demoUrl: 'https://ai-chat-demo.com',
      tags: ['AI/ML', 'Python', 'React'],
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://task-manager-demo.com',
      tags: ['Full Stack', 'Real-time', 'TypeScript'],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data visualization, location-based forecasts, and interactive charts.',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'PWA'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://weather-dashboard.com',
      tags: ['Frontend', 'Data Visualization', 'API'],
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile fitness application with workout tracking, progress analytics, and social features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'TypeScript'],
      githubUrl: 'https://github.com/yourusername/fitness-app',
      demoUrl: 'https://fitness-app-demo.com',
      tags: ['Mobile', 'React Native', 'Firebase'],
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, animations, and SEO optimization.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      demoUrl: 'https://your-portfolio.com',
      tags: ['Frontend', 'Portfolio', 'React'],
    },
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-accent-blue" />
          <span className="text-gray-600 dark:text-gray-300">Filter by:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-accent-blue text-white'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image Placeholder */}
                         <div className="h-48 bg-gradient-to-br from-accent-orange to-accent-purple rounded-t-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-white opacity-80">
                {project.title.split(' ').map(word => word[0]).join('')}
              </span>
            </div>

            <div className="p-6">
                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-orange transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                                     <span
                     key={tag}
                     className="px-2 py-1 bg-accent-orange/10 text-accent-orange text-xs rounded-full"
                   >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-accent-orange transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-accent-orange transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No projects found for the selected filter.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects; 