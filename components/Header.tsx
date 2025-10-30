import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants, useScroll } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
];

const allNavLinks = [...navLinks, { name: 'Contact', path: '/contact' }];

const menuVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.05,
        },
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
};

const menuItemVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -15 },
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setScrolled(latest > 10);
        });
        return () => unsubscribe();
    }, [scrollY]);


    const activeLinkClass = 'text-violet-500 dark:text-teal-400';
    const inactiveLinkClass = 'text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-teal-400 transition-colors duration-300';

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-white/10' : 'bg-transparent border-b border-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center space-x-2 group">
                            <motion.span 
                                className="bg-gradient-to-br from-violet-500 to-teal-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                            >J</motion.span>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">JUNAID</span>
                                <motion.p 
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-xs text-slate-500 dark:text-slate-400 tracking-wider leading-tight"
                                >
                                    Full Stack Developer
                                </motion.p>
                            </div>
                        </NavLink>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => 
                                        `relative px-3 py-2 rounded-md text-sm font-semibold ${isActive ? activeLinkClass : inactiveLinkClass}`
                                    }
                                >
                                    {link.name}
                                    {link.path === location.pathname && (
                                        <motion.div
                                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-violet-500 to-teal-500"
                                            layoutId="underline"
                                            initial={false}
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NavLink
                                    to="/contact"
                                    className="bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30"
                                >
                                    Contact
                                </NavLink>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Hamburger & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                         <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-violet-500"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {allNavLinks.map((link) => (
                                <motion.div key={link.name} variants={menuItemVariants}>
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) => 
                                            `block px-3 py-2 rounded-md text-base font-semibold ${isActive ? activeLinkClass + ' bg-slate-100 dark:bg-slate-800' : inactiveLinkClass}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;