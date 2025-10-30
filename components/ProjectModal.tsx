import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';
import SkillBadge from './SkillBadge';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import GithubIcon from './icons/GithubIcon';
import CloseIcon from './icons/CloseIcon';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Backdrop animation
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Modal animation: slide up and fade in
const modalVariants: Variants = {
  hidden: { y: "5%", opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 } 
  },
  exit: { 
    y: "5%", 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.2 } 
  }
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Effect to handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Effect to handle 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-8 backdrop-blur-lg"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        className="bg-slate-50/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl w-full max-w-4xl max-h-full flex flex-col shadow-2xl border border-white/10 dark:border-white/5"
        style={{
          maxHeight: 'calc(100vh - 4rem)' // Ensures modal doesn't get cut off
        }}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 flex items-center justify-between gap-4 p-4 sm:p-5 border-b border-slate-200/50 dark:border-slate-800/50">
          <h2 className="flex-1 min-w-0 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white truncate tracking-tight">{project.title}</h2>
          <motion.button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-300/70 dark:hover:bg-slate-700/70 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
            aria-label="Close project details"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
           >
            <CloseIcon className="w-6 h-6" />
           </motion.button>
        </header>

        <div className="flex-grow overflow-y-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Left Column: Image and Content */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-violet-500 pl-3 tracking-tight">
                    Project Overview
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {(project.challenges && project.challenges.length > 0) || (project.solutions && project.solutions.length > 0) ? (
                  <div className="flex flex-col gap-8">
                    {project.challenges && project.challenges.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-violet-500 pl-3 tracking-tight">Challenges</h3>
                        <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed pl-2">
                          {project.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                        </ul>
                      </div>
                    )}

                    {project.solutions && project.solutions.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-violet-500 pl-3 tracking-tight">Solutions</h3>
                        <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed pl-2">
                          {project.solutions.map((solution, index) => <li key={index}>{solution}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white/30 dark:bg-gray-800/30 p-5 rounded-lg border border-white/10 dark:border-white/5 lg:sticky top-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 tracking-tight">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => <SkillBadge key={tech}>{tech}</SkillBadge>)}
                </div>
                
                <hr className="border-slate-200/50 dark:border-slate-700/50 my-6" />

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 tracking-tight">Project Links</h3>
                <div className="flex flex-col space-y-3">
                    {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-gray-900 focus:ring-violet-500 transition-all shadow-md"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLinkIcon className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                    )}
                    {project.githubUrl && (
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/50 hover:bg-slate-300/70 dark:bg-slate-700/50 dark:hover:bg-slate-600/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-gray-900 focus:ring-violet-500 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <GithubIcon className="w-4 h-4" />
                            Source Code
                        </motion.a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="flex-shrink-0 flex items-center justify-end p-4 border-t border-slate-200/50 dark:border-slate-800/50">
            <motion.button
                onClick={onClose}
                className="px-4 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/50 hover:bg-slate-300/70 dark:bg-slate-700/50 dark:hover:bg-slate-600/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-gray-900 focus:ring-violet-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Close
            </motion.button>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;