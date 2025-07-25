'use client';

import React, { useState, useEffect } from 'react';

// Helper component for Icons
const Icon = ({ path, className = "w-6 h-6" }: { path: string, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d={path} />
    </svg>
);

// --- SVG Path Data for Icons ---
const ICONS = {
    menu: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    close: "M6 18L18 6M6 6l12 12",
    rocket: "M15.59,13.41l-1.17,1.17a2,2,0,0,1-2.83,0L3.41,6.41a2,2,0,0,1,0-2.83L4.59,2.41a2,2,0,0,1,2.83,0L15.59,10.58A2,2,0,0,1,15.59,13.41Z M20.59,10.58l-1.17,1.17a2,2,0,0,1-2.83,0L13.41,8.59a2,2,0,0,1,0-2.83L14.59,4.59a2,2,0,0,1,2.83,0L20.59,7.76A2,2,0,0,1,20.59,10.58Z M13.41,20.59l-1.17,1.17a2,2,0,0,1-2.83,0L2.41,14.59a2,2,0,0,1,0-2.83L3.59,10.59a2,2,0,0,1,2.83,0L13.41,17.76A2,2,0,0,1,13.41,20.59Z",
    code: "M9.4,16.6L4.8,12l4.6-4.6L8,6l-6,6l6,6L9.4,16.6z M14.6,16.6l4.6-4.6l-4.6-4.6L16,6l6,6l-6,6L14.6,16.6z",
    cloud: "M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14c0,3.31,2.69,6,6,6h13c2.76,0,5-2.24,5-5C24,12.36,21.95,10.22,19.35,10.04z",
    zap: "M7,2v11h3v9l7-12h-4l4-8H7z",
    user: "M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v2h16v-2C20,15.34,14.67,14,12,14z",
    mail: "M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5l-8-5V6l8,5l8-5V8z",
    message: "M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z",
    moon: "M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
    sun: "M12 18a6 6 0 100-12 6 6 0 000 12zM12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75zM12 5.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 5.25zM18.707 6.707a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM19.5 12a.75.75 0 01.75.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM18.707 18.707a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06zM12 19.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75-.75zM5.293 18.707a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06zM4.5 12a.75.75 0 01-.75-.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 014.5 12zM5.293 6.707a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06z",
};


// --- Animated SVG Illustration ---
const DevOpsIllustration = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
             <style>
                {`
                    @keyframes rotate {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    .gear-spin {
                      transform-origin: center;
                      animation: rotate 20s linear infinite;
                    }
                    .gear-spin-reverse {
                      transform-origin: center;
                      animation: rotate 30s linear infinite reverse;
                    }
                `}
            </style>
            <svg viewBox="0 0 400 300" className="w-full max-w-xl h-auto">
                <defs>
                    <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" className="stop-color-light dark:stop-color-dark-start" />
                        <stop offset="100%" className="stop-color-light-end dark:stop-color-dark-end" />
                    </linearGradient>
                     <linearGradient id="packetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'rgb(59, 130, 246)'}} />
                        <stop offset="100%" style={{stopColor: 'rgb(124, 58, 237)'}}/>
                    </linearGradient>
                    <style>
                      {`
                        .stop-color-light { stop-color: #60a5fa; }
                        .stop-color-light-end { stop-color: #a78bfa; }
                        .dark .stop-color-dark-start { stop-color: #3b82f6; }
                        .dark .stop-color-dark-end { stop-color: #8b5cf6; }
                        .gear-fill { fill: #e5e7eb; }
                        .dark .gear-fill { fill: #4b5563; }
                      `}
                    </style>
                </defs>

                {/* Main pipeline path */}
                <path d="M 20 150 Q 80 50, 200 150 T 380 150" stroke="url(#pipeGradient)" strokeWidth="12" fill="none" strokeLinecap="round"/>

                {/* Animated data packets */}
                <circle r="8" fill="url(#packetGradient)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 20 150 Q 80 50, 200 150 T 380 150" />
                </circle>
                <rect width="12" height="12" rx="3" fill="url(#packetGradient)">
                     <animateMotion dur="8s" begin="2s" repeatCount="indefinite" path="M 20 150 Q 80 50, 200 150 T 380 150" />
                </rect>
                 <polygon points="0,-6 6,6 -6,6" fill="url(#packetGradient)">
                     <animateMotion dur="7s" begin="1s" repeatCount="indefinite" path="M 20 150 Q 80 50, 200 150 T 380 150" />
                </polygon>

                {/* Gears */}
                <g transform="translate(80 60)" className="gear-fill">
                    <path d="M 0 -20 L 5 -15 L 15 -17 L 15 -8 L 20 0 L 15 8 L 15 17 L 5 15 L 0 20 L -5 15 L -15 17 L -15 8 L -20 0 L -15 -8 L -15 -17 L -5 -15 Z" className="gear-spin"/>
                    <circle r="10"/>
                </g>
                 <g transform="translate(320 180)" className="gear-fill">
                    <path d="M 0 -30 L 7 -22 L 22 -25 L 22 -12 L 30 0 L 22 12 L 22 25 L 7 22 L 0 30 L -7 22 L -22 25 L -22 -12 L -30 0 L -22 12 L -22 25 L -7 22 Z" className="gear-spin-reverse"/>
                    <circle r="15"/>
                </g>
                
                {/* Cloud icon */}
                <g transform="translate(330, 80)" className="fill-slate-300 dark:fill-slate-600">
                     <path d="M51.5,29.94C49.9,18.41,40.38,10,29,10c-7.39,0-13.68,4.32-16.71,10.29C5.1,20.9,0,26.49,0,33.5c0,8.28,6.72,15,15,15H50c7,0,12.5-5.72,12.5-12.5C62.5,33.43,57.73,29.49,51.5,29.94Z"/>
                </g>
            </svg>
        </div>
    );
};


// --- Header Component ---
const Header = ({ theme, setTheme }: { theme: string, setTheme: (theme: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [ { name: 'Features', href: '#features' }, { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }];

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DevOps</span>
                        <span className="text-slate-800 dark:text-white">HQ</span>
                    </a>
                    <div className="flex items-center">
                        <nav className="hidden md:flex space-x-8 mr-6 font-medium">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">{link.name}</a>
                            ))}
                        </nav>
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300">
                            <Icon path={theme === 'dark' ? ICONS.sun : ICONS.moon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </button>
                        <div className="md:hidden ml-4">
                            <button onClick={() => setIsOpen(!isOpen)}><Icon path={isOpen ? ICONS.close : ICONS.menu} className="w-6 h-6" /></button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <nav className="mt-4 md:hidden">
                        {navLinks.map(link => (
                             <a key={link.name} href={link.href} className="block py-2 px-4 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded" onClick={() => setIsOpen(false)}>{link.name}</a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

// --- Hero Section ---
const Hero = () => (
    <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-slate-800 dark:text-white">
                    Automate Your Deployments with <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Effortless CI/CD</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
                    This is a demo website for a YouTube tutorial on setting up a GitHub Actions CI/CD pipeline. Push your code, and let automation handle the rest!
                </p>
                <a href="#features" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl shadow-blue-500/40 dark:shadow-blue-500/40">
                    Discover Features
                </a>
            </div>
        </div>
    </section>
);

// --- Features Section ---
const FeatureCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <div className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 dark:shadow-black/20 dark:hover:shadow-white/10 transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 backdrop-blur-sm">
        <div className="text-white bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl inline-block mb-4 shadow-md"><Icon path={icon} className="w-8 h-8" /></div>
        <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{children}</p>
    </div>
);

const Features = () => (
    <section id="features" className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Why Automate?</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Streamline your workflow from development to production.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard icon={ICONS.rocket} title="Fast Deployment">Automatically build and deploy your application on every push to your main branch.</FeatureCard>
                <FeatureCard icon={ICONS.code} title="Consistent Builds">Ensure every deployment is built in a clean, consistent environment, reducing "it works on my machine" issues.</FeatureCard>
                <FeatureCard icon={ICONS.cloud} title="Reliable Infrastructure">Leverage GitHub Actions runners for a reliable and scalable build process without managing your own servers.</FeatureCard>
                <FeatureCard icon={ICONS.zap} title="Instant Rollbacks">Easily revert to previous versions if a deployment introduces a bug, minimizing downtime.</FeatureCard>
            </div>
        </div>
    </section>
);

// --- About Section ---
const About = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2"><DevOpsIllustration /></div>
                <div className="lg:w-1/2 text-slate-800 dark:text-slate-200">
                    <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">About This Project</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">This React application was built specifically for demonstration purposes in a tutorial about modern web development workflows. It showcases a clean, responsive design using Tailwind CSS.</p>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">The primary goal is to provide a practical example for setting up a CI/CD pipeline using GitHub Actions. This allows developers to see a tangible result of their automated deployment script.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-semibold text-slate-800 dark:text-white rounded-lg group bg-gradient-to-br from-blue-600 to-indigo-600 group-hover:from-blue-600 group-hover:to-indigo-600 hover:text-white dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-6 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                            View on GitHub
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

// --- Contact Section ---
const Contact = () => {
    const [status, setStatus] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Thank you for your message! (This is a demo)');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Get In Touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">This is a demo form. Submissions are not sent.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-3xl shadow-lg shadow-blue-500/10 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="relative"><Icon path={ICONS.user} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><input type="text" placeholder="Your Name" required className="w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white p-3 pl-12 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                            <div className="relative"><Icon path={ICONS.mail} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><input type="email" placeholder="Your Email" required className="w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white p-3 pl-12 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                        </div>
                        <div className="mb-6 relative"><Icon path={ICONS.message} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><textarea placeholder="Your Message" rows={5} required className="w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white p-3 pl-12 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></div>
                        <div className="text-center"><button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">Send Message</button></div>
                    </form>
                    {status && <p className="text-center text-green-500 mt-4">{status}</p>}
                </div>
            </div>
        </section>
    );
};

// --- Footer ---
const Footer = () => (
    <footer className="text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} DevOps HQ. A Demo Project for YouTube.</p>
            <p>Built with React & Tailwind CSS.</p>
        </div>
    </footer>
);

// --- Main Page Component ---
export default function Page() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    document.body.className = isDark ? 'bg-slate-950' : 'bg-white';
  }, [theme]);
  
  return (
    <div className="font-sans transition-colors duration-300 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
