
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 dark:bg-gray-950/30 backdrop-blur-2xl border-t border-white/10 dark:border-white/5 mt-auto relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-slate-500 dark:text-slate-400 order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} JUNAID. All rights reserved.</p>
          <div className="flex space-x-6 order-1 sm:order-2">
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
              <GithubIcon className="w-6 h-6" />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
              <LinkedInIcon className="w-6 h-6" />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.email} aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
              <MailIcon className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6"
        >
            Built with ❤️ using React + Tailwind CSS
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;