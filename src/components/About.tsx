import React from 'react';
import Section from './Section';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">About Me</h2>
      <div className="max-w-3xl mx-auto text-center text-slate-300 leading-relaxed">
        <p>{personalInfo.bio}</p>
      </div>
    </Section>
  );
};

export default About;