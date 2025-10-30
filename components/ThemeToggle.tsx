
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-14 h-8 rounded-full p-1 flex items-center bg-slate-200 dark:bg-slate-700 relative"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                style={{
                    position: 'absolute',
                    left: theme === 'light' ? '0.25rem' : 'auto',
                    right: theme === 'dark' ? '0.25rem' : 'auto',
                }}
            />
            <div className="w-full flex justify-between items-center px-1.5">
                <SunIcon className="w-4 h-4 text-yellow-500" />
                <MoonIcon className="w-4 h-4 text-slate-400" />
            </div>
        </button>
    );
};

export default ThemeToggle;
