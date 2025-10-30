import React, { lazy, Suspense } from 'react';
// FIX: Import AnimatePresence to resolve 'Cannot find name' error.
import { motion, Variants, SVGMotionProps, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import DockerIcon from '../components/icons/tech/DockerIcon';
import FigmaIcon from '../components/icons/tech/FigmaIcon';
import FirebaseIcon from '../components/icons/tech/FirebaseIcon';
import FramerMotionIcon from '../components/icons/tech/FramerMotionIcon';
import NextjsIcon from '../components/icons/tech/NextjsIcon';
import NodejsIcon from '../components/icons/tech/NodejsIcon';
import PostgresqlIcon from '../components/icons/tech/PostgresqlIcon';
import ReactIcon from '../components/icons/tech/ReactIcon';
import TailwindCssIcon from '../components/icons/tech/TailwindCssIcon';
import TypeScriptIcon from '../components/icons/tech/TypeScriptIcon';
 const LazyGithubContributionGraph = lazy(() => import('../components/GithubContributionGraph'));

const containerVariants = {
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

const titleContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    }
};

const titleWord: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};


const clientLogos = [
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-225.svg', alt: 'Client Logo 1' },
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-289.svg', alt: 'Client Logo 2' },
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-297.svg', alt: 'Client Logo 3' },
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-311.svg', alt: 'Client Logo 4' },
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-325.svg', alt: 'Client Logo 5' },
    { src: 'https://raw.githubusercontent.com/L-DRASS/logo-host/main/logoipsum-327.svg', alt: 'Client Logo 6' },
];

const highlightedSkills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 
    'Framer Motion', 'PostgreSQL', 'Firebase', 'Docker', 'Figma'
];

const techIcons: { [key: string]: React.FC<SVGMotionProps<SVGSVGElement>> } = {
    'React': ReactIcon,
    'TypeScript': TypeScriptIcon,
    'Next.js': NextjsIcon,
    'Node.js': NodejsIcon,
    'Tailwind CSS': TailwindCssIcon,
    'Framer Motion': FramerMotionIcon,
    'PostgreSQL': PostgresqlIcon,
    'Firebase': FirebaseIcon,
    'Docker': DockerIcon,
    'Figma': FigmaIcon,
};

const testimonials = [
  {
    quote: "Junaid is a web development wizard. He delivered a stunning and performant website that exceeded all our expectations. A true professional and a pleasure to work with.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "The attention to detail and creative solutions brought to our project were outstanding. Our user engagement has skyrocketed since the relaunch. Highly recommended!",
    name: "John Smith",
    title: "Marketing Director, TechSolutions",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
];

const HomePage: React.FC = () => {
  const line1 = "Crafting Digital Experiences,";
  const line2 = "One Line of Code at a Time.";

  return (
    <div className="flex flex-col items-center py-16 sm:py-20 overflow-hidden">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
          <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tighter"
              variants={titleContainer}
              initial="hidden"
              animate="show"
          >
              <span className="block">
                  {line1.split(" ").map((word, index) => (
                      <span key={index} className="inline-block overflow-hidden mr-3 align-bottom pb-2">
                          <motion.span className="inline-block" variants={titleWord}>{word}</motion.span>
                      </span>
                  ))}
              </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-teal-500 dark:from-violet-400 dark:to-teal-400">
                  {line2.split(" ").map((word, index) => (
                      <span key={index} className="inline-block overflow-hidden mr-3 align-bottom pb-2">
                          <motion.span className="inline-block" variants={titleWord}>{word}</motion.span>
                      </span>
                  ))}
              </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="text-md md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8"
          >
              Hi, I'm JUNAID, a Full Stack Developer from Pakistan who turns complex problems into elegant, user-friendly web solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                      to="/projects"
                      className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-violet-500/30"
                  >
                        <motion.span 
                            className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: "200%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "linear",
                                delay: 2
                            }}
                        />
                      <span className="relative">View My Work</span>
                  </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                      to="/contact"
                      className="w-full sm:w-auto flex items-center justify-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl text-slate-800 dark:text-slate-200 font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform shadow-lg border border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-gray-900/50"
                  >
                      Hire Me
                  </Link>
              </motion.div>
          </motion.div>
      </div>
      
      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-5xl mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 dark:border-white/5 text-center"
            >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-600 dark:from-violet-400 dark:to-teal-400">5+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Years of Experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 dark:border-white/5 text-center"
            >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-600 dark:from-violet-400 dark:to-teal-400">50+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Projects Completed</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 dark:border-white/5 text-center"
            >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-600 dark:from-violet-400 dark:to-teal-400">30+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Happy Clients</p>
            </motion.div>
        </div>
      </motion.div>
      
      {/* About Me Snippet */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        className="w-full max-w-6xl mt-20 md:mt-28"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
                <img src="\images\junaid-profile.jpg" alt="JUNAID" className="rounded-2xl shadow-2xl object-cover w-full h-auto" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">A Little About Me</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    I'm a full-stack developer with a passion for building beautiful, functional, and user-centric web applications. I thrive on bridging the gap between design and development to create seamless digital experiences that are both intuitive and delightful to use.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                    <Link to="/about" className="font-semibold text-violet-600 dark:text-teal-400 hover:text-violet-500 dark:hover:text-teal-300 transition-colors duration-300 group inline-flex items-center">
                    More About Me <span className="transition-transform group-hover:translate-x-1 ml-1">&rarr;</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full max-w-4xl mt-20 md:mt-28 text-center"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">
            Technologies I Work With
        </motion.h2>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12"
        >
            {highlightedSkills.map(skill => {
                const Icon = techIcons[skill];
                return Icon ? (
                    <motion.div 
                        key={skill} 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group flex flex-col items-center gap-2 text-center w-20"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/30 dark:bg-gray-900/30 flex items-center justify-center border border-white/10 dark:border-white/5 shadow-md group-hover:shadow-lg group-hover:shadow-violet-500/10 transition-all duration-300 relative overflow-hidden backdrop-blur-lg">
                            <AnimatePresence>
                                <motion.div
                                  whileHover={{ opacity: 1, scale: 1.5 }}
                                  className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 opacity-0 transition-opacity duration-300 blur-md"
                                />
                            </AnimatePresence>
                            <Icon className="h-10 w-10 text-slate-600 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-teal-400 transition-colors duration-300 relative z-10" />
                        </div>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">{skill}</span>
                    </motion.div>
                ) : null;
            })}
        </motion.div>
      </motion.section>
      
      {/* GitHub Activity Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full max-w-6xl mt-20 md:mt-28"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">
            1,300+ Contributions Last Year
        </motion.h2>
        <motion.div variants={itemVariants}>
            <Suspense
              fallback={
                <div className="w-full h-48 rounded-xl bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 animate-pulse" />
              }
            >
              <LazyGithubContributionGraph />
            </Suspense>
        </motion.div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="w-full max-w-6xl mt-20 md:mt-28 text-center"
      >
        <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400"
        >
            Featured Projects
        </motion.h2>
        <motion.p 
            variants={itemVariants}
            className="text-md md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
            I love bringing ideas to life. Here are a few projects I'm proud of. Check out my projects page to see more of my work.
        </motion.p>
        
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
            {PROJECTS.slice(0, 3).map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>

        <motion.div 
            className="mt-12" 
            variants={itemVariants}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
            >
                <Link
                    to="/projects"
                    className="inline-block bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-violet-500/30"
                >
                    View All Projects
                </Link>
            </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Client Logos Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full max-w-6xl mt-20 md:mt-28 text-center"
      >
        <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400"
        >
            Trusted by Leading Companies
        </motion.h2>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center"
        >
            {clientLogos.map((logo, index) => (
                <motion.div key={index} variants={itemVariants} className="flex justify-center">
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 w-auto fill-slate-500 dark:fill-slate-400 text-slate-500 dark:text-slate-400 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>
            ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full max-w-4xl mt-20 md:mt-28"
      >
        <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400"
        >
            What My Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
            <motion.div 
                key={index} 
                variants={itemVariants} 
                className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 dark:border-white/5"
            >
                <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-violet-200" loading="lazy" decoding="async" />
                    <div>
                        <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                    </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic relative pl-4">
                  <span className="absolute left-0 top-0 text-3xl text-violet-300 dark:text-violet-700 font-serif">“</span>
                  {testimonial.quote}
                </p>
            </motion.div>
            ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        className="relative w-full max-w-4xl mt-20 md:mt-28 text-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl py-12 px-8 shadow-2xl border border-white/10 dark:border-white/5 overflow-hidden"
        >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/5 to-teal-500/5 dark:from-violet-900/10 dark:to-teal-900/10" />
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">
            Have an idea or a project in mind?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together.
        </motion.p>
        <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-violet-500/30"
            >
                Let's Talk
            </Link>
            </motion.div>
        </motion.div>
        </motion.section>
    </div>
  );
};

export default HomePage;
