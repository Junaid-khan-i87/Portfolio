import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaintBrushIcon from '../components/icons/PaintBrushIcon';
import CodeBracketIcon from '../components/icons/CodeBracketIcon';
import ServerStackIcon from '../components/icons/ServerStackIcon';
import BoltIcon from '../components/icons/BoltIcon';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import CheckIcon from '../components/icons/CheckIcon';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const services = [
    {
        icon: <PaintBrushIcon />,
        title: 'Web Design',
        description: 'I design beautiful, user-centric interfaces that captivate your audience and elevate your brand. My focus is on creating intuitive experiences that drive engagement.',
        benefits: [
            "User-centric wireframes & prototypes",
            "High-fidelity mockups in Figma",
            "Designs that boost conversion",
            "Cohesive brand identity experience"
        ],
        theme: 'violet',
    },
    {
        icon: <CodeBracketIcon />,
        title: 'Frontend Development',
        description: 'I transform designs into pixel-perfect, high-performance web applications using React & Next.js. Your site will be fast, responsive, and a joy to use.',
        benefits: [
            "Fast, responsive & accessible websites",
            "Clean, scalable TypeScript code",
            "Fluid animations & interactions",
            "Optimized for Core Web Vitals"
        ],
        theme: 'teal',
    },
    {
        icon: <ServerStackIcon />,
        title: 'Backend Development',
        description: 'I build the powerful, scalable server-side logic your application needs to run smoothly. From APIs to databases, I handle the engine under the hood.',
        benefits: [
            "Secure & scalable Node.js backends",
            "Efficient RESTful or GraphQL APIs",
            "Complex database management",
            "Robust authentication & data integrity"
        ],
        theme: 'violet',
    },
    {
        icon: <BoltIcon />,
        title: 'Website Optimization',
        description: 'I boost your site\'s speed and search engine ranking. A faster, more visible website means more traffic, better retention, and higher conversion rates.',
        benefits: [
            "Lightning-fast load times",
            "Improved Lighthouse scores",
            "On-page SEO implementation",
            "Enhanced user retention & conversion"
        ],
        theme: 'teal',
    },
];

const contentVariants: Variants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] } },
    open: { opacity: 1, height: 'auto', marginTop: '1rem', transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] } }
};

const ServicesPage: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <div className="max-w-4xl mx-auto py-12">
            <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="text-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400 tracking-tighter"
                >
                    What I Can Do For You
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-md md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16"
                >
                    I offer a range of services to help you build and grow your digital presence. From initial design to full-stack development and optimization, I've got you covered.
                </motion.p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        layout
                        transition={{ layout: { duration: 0.3, type: 'spring', stiffness: 300, damping: 25 } }}
                        whileHover={{ y: -5, scale: 1.02, boxShadow: service.theme === 'violet' ? '0 0 25px rgba(139, 92, 246, 0.3)' : '0 0 25px rgba(20, 184, 166, 0.3)' }}
                        className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/10 dark:border-white/5 text-center flex flex-col items-center group"
                    >
                         <div className="relative mb-4">
                            <div className={`absolute -inset-2 rounded-full ${service.theme === 'violet' ? 'bg-violet-500/10' : 'bg-teal-500/10'} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative w-20 h-20 rounded-full bg-white/50 dark:bg-gray-900/50 flex items-center justify-center border border-white/10 dark:border-white/5">
                                {React.cloneElement(service.icon, { className: `w-10 h-10 ${service.theme === 'violet' ? 'text-violet-500' : 'text-teal-500'}` })}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{service.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed min-h-[72px]">{service.description}</p>
                        
                        <motion.button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="mt-6 flex items-center gap-2 font-semibold text-violet-600 dark:text-teal-400 hover:text-violet-500 dark:hover:text-teal-300 transition-colors"
                            aria-expanded={expandedIndex === index}
                        >
                            Learn More
                            <motion.span animate={{ rotate: expandedIndex === index ? 180 : 0 }}>
                                <ChevronDownIcon className="w-4 h-4" />
                            </motion.span>
                        </motion.button>

                        <AnimatePresence initial={false}>
                            {expandedIndex === index && (
                                <motion.section
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={contentVariants}
                                    className="w-full text-left overflow-hidden"
                                >
                                     <ul className="space-y-3 text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckIcon className={`w-5 h-5 mt-1 ${service.theme === 'violet' ? 'text-violet-500' : 'text-teal-500'} shrink-0`} />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="relative w-full mt-20 md:mt-28 text-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl py-12 px-8 shadow-2xl border border-white/10 dark:border-white/5 overflow-hidden"
            >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/5 to-teal-500/5 dark:from-violet-900/10 dark:to-teal-900/10" />
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">
                    Ready to Start a Project?
                </motion.h2>
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                    Let's collaborate to create something outstanding. I'm excited to learn about your ideas and help bring them to life.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-violet-500/30"
                        >
                            Let's Work Together
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default ServicesPage;