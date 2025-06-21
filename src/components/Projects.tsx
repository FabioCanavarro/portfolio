'use client'
import React from 'react';
import Section from './Section';
import { projects } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
        <motion.div variants={itemVariants} className="h-full">
            <Card className="glassy-card h-full flex flex-col transition-all duration-300 hover:border-slate-600 hover:-translate-y-1">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{project.description}</CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );

    return (
        <Section id="projects">
            <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-center text-slate-400 mb-12">Core projects I'm proud to have built.</p>
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {featuredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </motion.div>

            <h3 className="text-2xl font-bold text-center mt-24 mb-12 tracking-tight">More Projects</h3>
             <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {otherProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </motion.div>
        </Section>
    );
};

export default Projects;