'use client';
import React from 'react';
import DevOpsIllustration from './DevOpsIllustration';

// --- About Section ---
const About = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2"><DevOpsIllustration /></div>
                <div className="lg:w-1/2 text-slate-800">
                    <h2 className="text-4xl font-bold mb-4 text-slate-800">About This Project</h2>
                    <p className="text-slate-600 mb-4">This React application was built specifically for demonstration purposes in a tutorial about modern web development workflows. It showcases a clean, responsive design using Tailwind CSS.</p>
                    <p className="text-slate-600 mb-6">The primary goal is to provide a practical example for setting up a CI/CD pipeline using GitHub Actions. This allows developers to see a tangible result of their automated deployment script.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-semibold text-slate-800 rounded-lg group bg-gradient-to-br from-blue-600 to-indigo-600 group-hover:from-blue-600 group-hover:to-indigo-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <span className="relative px-6 py-2.5 transition-all ease-in duration-150 bg-white rounded-md group-hover:bg-opacity-0">
                            View on GitHub
                        </span>
                    </a>
                </div>
            </div>
            </div>
        </section>
);

export default About;