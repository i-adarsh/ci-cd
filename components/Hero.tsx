'use client';
import React from 'react';

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

export default Hero;