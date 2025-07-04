import React from 'react';
import Section from './section';
import { researchPapers } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const Research = () => {
    return (
        <Section id="research">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Research & Publications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {researchPapers.map((paper, index) => (
                    <Card key={index} className="glassy-card">
                        <CardHeader>
                            <CardTitle className="text-xl text-slate-100">{paper.title}</CardTitle>
                            <CardDescription className="!mt-1 text-slate-300 font-semibold">{paper.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400">{paper.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Research;