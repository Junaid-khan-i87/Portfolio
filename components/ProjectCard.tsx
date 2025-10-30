import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import SkillBadge from './SkillBadge';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal();
    }
  };

  return (
    <>
      <motion.div
        layout
        onClick={openModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        data-cursor-hover="true"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(20, 184, 166, 0.2)" }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col group border border-white/10 dark:border-white/5 shadow-lg hover:shadow-2xl h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/70"
      >
        <motion.span
          className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: isHovered ? 0.7 : 0, ease: [0.16, 1, 0.3, 1] }}
        />
        
        <div className="relative overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => <SkillBadge key={tech}>{tech}</SkillBadge>)}
          </div>
          <div className="mt-auto flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-teal-400">
                View Details
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default memo(ProjectCard);