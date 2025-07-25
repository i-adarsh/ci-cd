'use client';
import React from 'react';
import { ICONS } from './constants';
import Icon from './Icon';

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
                        <stop offset="0%" style={{stopColor: '#60a5fa'}} />
                        <stop offset="100%" style={{stopColor: '#a78bfa'}} />
                    </linearGradient>
                     <linearGradient id="packetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'rgb(59, 130, 246)'}} />
                        <stop offset="100%" style={{stopColor: 'rgb(124, 58, 237)'}}/>
                    </linearGradient>
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
                <g transform="translate(80 60)" className="fill-slate-200">
                    <path d="M 0 -20 L 5 -15 L 15 -17 L 15 -8 L 20 0 L 15 8 L 15 17 L 5 15 L 0 20 L -5 15 L -15 17 L -15 8 L -20 0 L -15 -8 L -15 -17 L -5 -15 Z" className="gear-spin"/>
                    <circle r="10"/>
                </g>
                 <g transform="translate(320 180)" className="fill-slate-200">
                    <path d="M 0 -30 L 7 -22 L 22 -25 L 22 -12 L 30 0 L 22 12 L 22 25 L 7 22 L 0 30 L -7 22 L -22 25 L -22 -12 L -30 0 L -22 12 L -22 25 L -7 22 Z" className="gear-spin-reverse"/>
                    <circle r="15"/>
                </g>
                
                {/* Cloud icon */}
                <g transform="translate(330, 80)" className="fill-slate-300">
                     <path d="M51.5,29.94C49.9,18.41,40.38,10,29,10c-7.39,0-13.68,4.32-16.71,10.29C5.1,20.9,0,26.49,0,33.5c0,8.28,6.72,15,15,15H50c7,0,12.5-5.72,12.5-12.5C62.5,33.43,57.73,29.49,51.5,29.94Z"/>
                </g>
            </svg>
        </div>
    );
};

export default DevOpsIllustration;