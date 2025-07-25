'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


// --- Main Page Component ---
export default function Page() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Header />
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