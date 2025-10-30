import React, { useRef } from 'react';
// FIX: Import `Variants` from `framer-motion` to correctly type animation variants.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SKILLS } from '../constants';
import SkillBadge from '../components/SkillBadge';
import CodeBracketIcon from '../components/icons/CodeBracketIcon';
import ServerStackIcon from '../components/icons/ServerStackIcon';
import WrenchScrewdriverIcon from '../components/icons/WrenchScrewdriverIcon';
import PaintBrushIcon from '../components/icons/PaintBrushIcon';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// FIX: Explicitly type `itemVariants` as `Variants` to fix type assignability issues.
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const timelineContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// FIX: Explicitly type `timelineItemVariants` as `Variants` to fix type assignability issues.
const timelineItemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const timeline = [
    {
        year: '2020',
        title: 'Embarking on the Development Journey',
        description: 'Began my foray into web development, building a strong foundation in HTML, CSS, and JavaScript. I spent countless hours learning the core principles of web design and creating my first static websites.',
    },
    {
        year: '2021',
        title: 'Mastering React & Frontend Frameworks',
        description: 'Dived deep into the React ecosystem, learning about component-based architecture, state management with Redux, and building dynamic single-page applications. This year was all about bringing interactivity to my projects.',
    },
    {
        year: '2022',
        title: 'Expanding to Full-Stack Development',
        description: 'Ventured into the backend with Node.js and Express. I learned how to build REST APIs, interact with databases like MongoDB and PostgreSQL, and connect the frontend and backend to create complete, functional MERN-stack applications.',
    },
    {
        year: '2023',
        title: 'Focusing on Scalability and Performance',
        description: 'Adopted TypeScript for type safety and mastered Next.js for server-side rendering and static site generation. My focus shifted to writing clean, scalable code and optimizing applications for performance and SEO.',
    },
    {
        year: '2024',
        title: 'Exploring DevOps and Advanced Animations',
        description: 'Started containerizing applications with Docker and deploying them on platforms like Vercel. I also began exploring advanced front-end animations with Framer Motion to create more engaging and fluid user experiences.',
    },
];

const categoryIcons: { [key: string]: React.ReactElement } = {
    Frontend: <CodeBracketIcon className="w-6 h-6 shrink-0" />,
    Backend: <ServerStackIcon className="w-6 h-6 shrink-0" />,
    'DevOps & Tooling': <WrenchScrewdriverIcon className="w-6 h-6 shrink-0" />,
    Design: <PaintBrushIcon className="w-6 h-6 shrink-0" />,
};

const AboutPage: React.FC = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const timelineRef = useRef(null);
    const { scrollYProgress: timelineScrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end end"]
    });

    return (
        <div className="max-w-4xl mx-auto py-12">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400 tracking-tighter"
            >
                About Me
            </motion.h1>

            <div ref={targetRef} className="relative grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="md:col-span-2"
                    style={{ y: imageY }}
                >
                    <img 
                        src="/images/junaid-profile.jpg" 
                        alt="About me" 
                        className="rounded-2xl shadow-2xl object-cover w-full h-full"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="md:col-span-3"
                >
                    <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 dark:border-white/5 shadow-lg">
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            Hi, I'm JUNAID, a full-stack developer from Pakistan with a passion for building intuitive, high-performance web applications. My journey into tech was driven by a deep curiosity for how digital ideas are brought to life.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            I specialize in modern technologies like React, Next.js, and Node.js. My approach is centered on writing clean, scalable code and designing with the user in mind. I believe the best websites are fast, accessible, and a genuine pleasure to use.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            When I’m not coding, I love exploring the outdoors and staying up-to-date with the latest trends in the tech world. I'm a lifelong learner, always eager to pick up new skills and take on exciting challenges.
                        </p>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link 
                                to="/contact"
                                className="inline-block bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30"
                            >
                                Let's Connect
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* My Journey Section */}
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">My Journey</h2>
                <motion.div 
                    ref={timelineRef}
                    className="relative"
                    variants={timelineContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <svg width="2" className="absolute left-[9px] md:left-[9px] top-0 h-full">
                        <line x1="1" y1="0" x2="1" y2="100%" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="2" />
                        <motion.line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="100%"
                            className="stroke-[url(#gradient)]"
                            strokeWidth="2"
                            style={{ pathLength: timelineScrollYProgress }}
                        />
                         <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {timeline.map((item, index) => (
                        <motion.div key={item.year} className="mb-10 pl-8 relative" variants={timelineItemVariants}>
                             <motion.div 
                                className="absolute flex items-center justify-center w-5 h-5 bg-gradient-to-br from-violet-500 to-teal-500 rounded-full -left-[11px] ring-4 ring-white dark:ring-gray-950"
                                whileInView={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: "all" }}
                             >
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                             </motion.div>
                             <motion.div 
                                whileHover={{ y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-5 rounded-lg border border-white/10 dark:border-white/5 shadow-md"
                             >
                                <time className="block mb-2 text-sm font-semibold leading-none text-violet-600 dark:text-teal-400">{item.year}</time>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-base font-normal text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                             </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div 
                className="mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">My Tech Stack</h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {SKILLS.map((category) => (
                        <motion.div 
                            key={category.title} 
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-white/10 dark:border-white/5 shadow-lg"
                        >
                            <h3 className="flex items-center text-xl font-bold tracking-tight text-violet-600 dark:text-teal-400 mb-4">
                                <span className="mr-3 text-violet-500/80 dark:text-teal-400/80">{categoryIcons[category.title]}</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => (
                                    <SkillBadge key={skill}>{skill}</SkillBadge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutPage;