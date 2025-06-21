import React from 'react';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-slate-800/80 mt-16">
      <div className="container mx-auto text-center text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;