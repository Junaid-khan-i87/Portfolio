import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import MailIcon from '../components/icons/MailIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('sending');
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, you would handle API errors here and set status to 'error'
        setSubmissionStatus('success');

        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setSubmissionStatus('idle');
        }, 4000);
    };

    return (
        <div className="max-w-2xl mx-auto py-12">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400 tracking-tighter"
            >
                Get in Touch
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 dark:text-slate-400 text-center mb-12"
            >
                I'm excited to hear about your project or just chat about tech! Whether you have a question, a proposal, or just want to say hello, feel free to reach out.
            </motion.p>
            
            <AnimatePresence mode="wait">
            {submissionStatus === 'success' ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 dark:border-white/5 shadow-lg"
                >
                    <CheckCircleIcon className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Thank you!</h3>
                    <p className="text-slate-600 dark:text-slate-400">Your message has been sent successfully. I'll get back to you soon.</p>
                </motion.div>
            ) : (
                <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-white/5 shadow-lg"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full bg-white/20 dark:bg-gray-950/20 border-2 border-slate-300/50 dark:border-slate-700/50 rounded-lg shadow-sm py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full bg-white/20 dark:bg-gray-950/20 border-2 border-slate-300/50 dark:border-slate-700/50 rounded-lg shadow-sm py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={4} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full bg-white/20 dark:bg-gray-950/20 border-2 border-slate-300/50 dark:border-slate-700/50 rounded-lg shadow-sm py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                        ></textarea>
                    </div>
                    <div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={submissionStatus === 'sending'}
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg shadow-violet-500/30 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 focus:ring-violet-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {submissionStatus === 'sending' ? (
                                <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                                </>
                            ) : (
                                "Let's Talk"
                            )}
                        </motion.button>
                    </div>
                </motion.form>
            )}
            </AnimatePresence>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12"
            >
                <h3 className="text-xl font-bold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 dark:from-violet-400 dark:to-teal-400">Or find me on</h3>
                <div className="flex justify-center space-x-8">
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
                        <GithubIcon className="w-8 h-8" />
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
                        <LinkedInIcon className="w-8 h-8" />
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={SOCIAL_LINKS.email} aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
                        <MailIcon className="w-8 h-8" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
