'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-slate-200 to-slate-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p 
            className="text-lg md:text-xl text-slate-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.p>
        <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={28} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;