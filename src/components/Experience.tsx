import React from 'react';
import Section from './Section';
import { experiences } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Experience</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="glassy-card">
            <CardHeader>
              <div className="flex justify-between items-baseline">
                <CardTitle className="text-xl text-slate-100">{exp.role}</CardTitle>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
              <CardDescription className="!mt-0 text-slate-300">{exp.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;