'use client';
import React from 'react';

// --- Header Component ---
const Header = () => {
    // Mobile menu state can be handled in a client component if needed,
    // or with CSS-only techniques for a pure server component.
    // For this demo, we'll keep it simple without mobile interactivity.
    const navLinks = [ { name: 'Features', href: '#features' }, { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }];

    return (
        <header className="bg-white/80 backdrop-blur-md text-slate-600 fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DevOps</span>
                        <span className="text-slate-800">HQ</span>
                    </a>
                    <div className="flex items-center">
                        <nav className="hidden md:flex space-x-8 mr-6 font-medium">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors duration-300">{link.name}</a>
                            ))}
                        </nav>
                        {/* Mobile menu button removed */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;