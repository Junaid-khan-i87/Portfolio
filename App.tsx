import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const pageVariants = {
  initial: {
    clipPath: 'inset(0 100% 0 0)',
  },
  in: {
    clipPath: 'inset(0 0% 0 0)',
  },
  out: {
    clipPath: 'inset(0 0 0 100%)',
  },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: [0.76, 0, 0.24, 1],
  duration: 0.65,
};

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-full min-h-[calc(100vh-20rem)]">
      <motion.div
        className="w-16 h-16 border-4 border-slate-200 dark:border-slate-700 border-t-violet-600 dark:border-t-teal-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
);


const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            onAnimationComplete={() => window.scrollTo(0, 0)}
        >
            {children}
        </motion.div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <CustomCursor />
        <AnimatedBackground />
        <ScrollProgressBar />
        <Header />
        <main className="relative z-10 flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
