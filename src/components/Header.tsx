'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Research', href: '#research' },
    ];

    const navVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
                scrolled ? 'py-4 bg-black/50 backdrop-blur-lg border-b border-slate-800' : 'py-6'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                <motion.a href="#" className="text-xl font-bold tracking-wider" whileHover={{ scale: 1.05 }}>
                    {personalInfo.name}
                </motion.a>
                
                {/* Desktop Nav */}
                <motion.nav className="hidden md:flex gap-8" variants={navVariants} initial="hidden" animate="visible">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            variants={itemVariants}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.nav>

                {/* Mobile Nav Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="z-50">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-50%" }}
                    className="md:hidden absolute top-0 left-0 w-full h-screen bg-background pt-24 flex flex-col items-center gap-8"
                >
                     {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header;