'use client';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [ { name: 'Features', href: '#features' }, { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }];

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DevOps</span>
                        <span className="text-slate-800 dark:text-white">HQ</span>
                    </a>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-6 h-6">
                            <span className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-8 font-medium">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">{link.name}</a>
                        ))}
                    </nav>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden mt-4">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">{link.name}</a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;