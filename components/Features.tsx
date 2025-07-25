'use client';
import React from 'react';
import { ICONS } from './constants';
import Icon from './Icon';

// --- Features Section ---
const FeatureCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="text-white bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl inline-block mb-4 shadow-md"><Icon path={icon} className="w-8 h-8" /></div>
        <h3 className="text-2xl font-bold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

const Features = () => (
    <section id="features" className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800">Why Automate?</h2>
                <p className="text-slate-600 mt-2">Streamline your workflow from development to production.</p>
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

export default Features;