'use client';
import React from 'react';
import { ICONS } from './constants';
import Icon from './Icon';

// --- Contact Section ---
const Contact = () => (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800">Get In Touch</h2>
                <p className="text-slate-600 mt-2">This is a demo form. Submissions are not sent.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg shadow-blue-500/10 border border-slate-200">
                <form>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="relative"><Icon path={ICONS.user} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><input type="text" placeholder="Your Name" required className="w-full bg-slate-100 text-slate-800 p-3 pl-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                        <div className="relative"><Icon path={ICONS.mail} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><input type="email" placeholder="Your Email" required className="w-full bg-slate-100 text-slate-800 p-3 pl-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                    </div>
                    <div className="mb-6 relative"><Icon path={ICONS.message} className="w-5 h-5 absolute top-3.5 left-4 text-slate-400"/><textarea placeholder="Your Message" rows={5} required className="w-full bg-slate-100 text-slate-800 p-3 pl-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></div>
                    <div className="text-center"><button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">Send Message</button></div>
                </form>
                {/* Status message removed as it requires client-side state */}
            </div>
        </div>
    </section>
);

export default Contact;