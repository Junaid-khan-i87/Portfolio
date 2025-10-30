
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const allTech = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.techStack)))];

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.techStack.includes(activeFilter)));
    }
  }, [activeFilter]);

  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400 tracking-tighter"
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-md md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center mb-12"
      >
        I believe that great software is born from a blend of smart strategy, clean code, and user-focused design. Below is a selection of projects where I've put this philosophy into practice.
      </motion.p>
      
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allTech.map(tech => (
          <motion.button
            key={tech}
            variants={itemVariants}
            onClick={() => setActiveFilter(tech)}
            className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden border border-transparent ${
              activeFilter === tech 
              ? 'text-white shadow-md' 
              : 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl text-slate-700 dark:text-slate-300 border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-gray-900/50'
            }`}
          >
            {activeFilter === tech && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-teal-600 -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tech}</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
          Want to see more or collaborate?
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-violet-500/30"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;