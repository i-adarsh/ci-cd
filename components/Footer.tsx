'use client';
import React from 'react';

// --- Footer ---
const Footer = () => (
    <footer className="text-slate-500 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} DevOps HQ. A Demo Project for YouTube.</p>
            <p>Built with React & Tailwind CSS.</p>
        </div>
    </footer>
);

export default Footer;