'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Cpu, Server, Bot, Code, Gamepad2, Microscope, GitPullRequest, Building, Sparkles } from 'lucide-react';

// --- Background Component ---
const GridBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const background = document.getElementById('interactive-background');
      if (background) {
        // Use CSS custom properties for efficient updates
        background.style.setProperty('--mouse-x', `${clientX}px`);
        background.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx="true" global="true">{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        #interactive-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: #24273a; /* Catppuccin Macchiato Base */
          
          /* The static grid lines using a subtle palette color */
          background-image: 
            repeating-linear-gradient(90deg, rgba(147, 154, 183, 0.1) 0px, rgba(147, 154, 183, 0.1) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(0deg, rgba(147, 154, 183, 0.1) 0px, rgba(147, 154, 183, 0.1) 1px, transparent 1px, transparent 40px);
          
          animation: fadeIn 2s ease-in-out;
        }

        /* The pseudo-element for the glowing effect */
        #interactive-background::before {
          content: '';
          position: absolute;
          inset: 0;
          
          /* The glowing effect that follows the mouse */
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(203, 166, 247, 0.1), /* Soft mauve glow */
            transparent 80%
          );
          transition: background 0.2s ease-out;
        }
      `}</style>
      <div id="interactive-background"></div>
    </>
  );
};


// Helper component for animated text
const AnimatedText = ({ text, el: Wrapper = 'p', className }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Wrapper className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={i}
          style={{ display: 'inline-block', paddingRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </Wrapper>
  );
};


// Main Project Data
const projects = [
  {
    title: "UnitOS",
    description: "An operating system kernel built from scratch that runs on x86_64 systems, exploring the fundamentals of system architecture.",
    tags: ["Rust", "x86_64", "OS Kernel", "Assembly"],
    icon: <Cpu className="w-6 h-6 text-mauve" />,
    link: "https://github.com/FabioCanavarro/UnitOS"
  },
  {
    title: "FerrisLog & Server-Client",
    description: "A persistent, log-structured key-value store in Rust, and a multi-threaded server-client implementation with a custom network protocol.",
    tags: ["Rust", "Distributed Systems", "Networking", "KVS"],
    icon: <Server className="w-6 h-6 text-blue" />,
    link: "https://github.com/FabioCanavarro/FerrisLog_Server-Client"
  },
  {
    title: "Agrobiosync",
    description: "An IoT-based automated farming system with a web dashboard to monitor and control cultivation, powered by an ESP8266.",
    tags: ["C++", "IoT", "ESP8266", "React", "Web Dev"],
    icon: <Sparkles className="w-6 h-6 text-green" />,
    link: "https://github.com/FabioCanavarro/Agrobiosync"
  },
  {
    title: "ChronoDomain",
    description: "A Minecraft mod that introduces time manipulation mechanics for blocks, entities, and entire chunks.",
    tags: ["Java", "Game Modding", "Minecraft"],
    icon: <Gamepad2 className="w-6 h-6 text-flamingo" />,
    link: "https://github.com/FabioCanavarro/ChronoDomain"
  },
  {
    title: "Iridation",
    description: "A custom assembly language created in Rust, designed as a foundational layer for a future programming language.",
    tags: ["Rust", "Compilers", "Assembly"],
    icon: <Code className="w-6 h-6 text-sapphire" />,
    link: "https://github.com/FabioCanavarro/Iridation"
  },
  {
    title: "AI & Computer Vision Projects",
    description: "A collection of projects including face detection (Yunet) and an automated laser sentry, exploring AI and robotics.",
    tags: ["Python", "C++", "C#", "OpenCV", "AI/ML"],
    icon: <Bot className="w-6 h-6 text-red" />,
    link: "https://github.com/FabioCanavarro/"
  },
];

const contributions = [
    {
        repo: "bifrost/bifrost",
        description: "Contributed to an open-source smart lighting system alternative.",
        link: "https://github.com/bifrost-rs/bifrost/pulls/FabioCanavarro"
    },
    {
        repo: "infraust/infraust",
        description: "Submitted a pull request to a high-efficiency Minecraft server host.",
        link: "https://github.com/infraust/infraust/pulls/FabioCanavarro"
    }
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Catppuccin Macchiato color palette
  const colors = {
    base: '#24273a',
    crust: '#1e2030',
    surface0: '#363a4f',
    surface2: '#575b71',
    text: '#cad3f5',
    subtext0: '#a5adce',
    subtext1: '#939ab7',
    mauve: '#cba6f7',
    rosewater: '#f5e0dc',
    flamingo: '#f2cdcd',
    blue: '#89b4fa',
    green: '#a6e3a1',
    sapphire: '#74c7ec',
    red: '#f38ba8'
  };

  return (
    <div className="min-h-screen text-text font-sans antialiased" style={{ backgroundColor: colors.base }}>
      <GridBackground />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* --- Hero Section --- */}
          <section className="text-center mb-20">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mauve via-rosewater to-flamingo"
              variants={itemVariants}
            >
              Fabio Canavarro
            </motion.h1>
            <AnimatedText 
              text="A 16-year-old developer and researcher crafting innovative solutions with code."
              el="h2"
              className="text-lg md:text-xl text-subtext0 mb-8"
            />
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              <a href="https://github.com/FabioCanavarro" target="_blank" rel="noopener noreferrer" className="text-subtext1 hover:text-mauve transition-colors duration-300">
                <Github size={28} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-subtext1 hover:text-blue transition-colors duration-300">
                <Linkedin size={28} />
              </a>
              <a href="mailto:your.email@example.com" className="text-subtext1 hover:text-rosewater transition-colors duration-300">
                <Mail size={28} />
              </a>
            </motion.div>
          </section>

          {/* --- About Section --- */}
          <motion.section 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-rosewater flex items-center"><Sparkles className="w-6 h-6 mr-3"/>About Me</h2>
            <div className="space-y-4 text-subtext0 text-lg leading-relaxed bg-crust/50 p-6 rounded-xl border border-surface0 backdrop-blur-sm shadow-lg shadow-crust/50">
              <p>
                I'm a high school junior with a deep passion for computer science, focusing on systems programming, distributed systems, and the Internet of Things. I thrive on challenges and am constantly exploring new technologies to build efficient and impactful projects.
              </p>
              <p>
                My GitHub contribution graph is a sea of green, a testament to my daily commitment to learning and building. I'm actively involved in the open-source community and believe in the power of collaborative development to drive innovation forward.
              </p>
            </div>
          </motion.section>
          
          {/* --- Experience Section --- */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-flamingo flex items-center"><Building className="w-6 h-6 mr-3"/>Experience</h2>
            <div className="bg-crust/50 p-6 rounded-xl border border-surface0 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-crust/50 hover:border-flamingo/50 hover:shadow-xl hover:shadow-flamingo/10">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-text">Head of Web Development</h3>
                    <span className="text-sm text-subtext1">Present</span>
                </div>
                <p className="text-md text-blue">Arts&Legend.id (Non-Profit)</p>
                <p className="mt-4 text-subtext0">
                    Led the end-to-end development of the organization's official website. Architected and built a modern, responsive platform using Next.js, TypeScript, and Tailwind CSS to support our mission and showcase our work.
                </p>
            </div>
          </motion.section>

          {/* --- Projects Section --- */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-mauve flex items-center"><Cpu className="w-6 h-6 mr-3"/>Featured Projects</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-crust/50 rounded-xl border border-surface0 backdrop-blur-sm overflow-hidden transition-all duration-300 shadow-lg shadow-crust/50 hover:border-mauve/50 hover:shadow-xl hover:shadow-mauve/10 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {project.icon}
                      <h3 className="text-xl font-semibold ml-3 text-text">{project.title}</h3>
                    </div>
                    <p className="text-subtext0 mb-4 h-24">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-crust text-mauve px-2 py-1 rounded-full border border-surface2">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-rosewater hover:text-flamingo transition-colors duration-300 group">
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
          
          {/* --- Open Source Contributions --- */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green flex items-center"><GitPullRequest className="w-6 h-6 mr-3"/>Open Source</h2>
             <div className="space-y-4">
                {contributions.map((contrib, index) => (
                     <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="bg-crust/50 p-4 rounded-xl border border-surface0 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-crust/50 hover:border-green/50 hover:shadow-xl hover:shadow-green/10"
                      >
                        <a href={contrib.link} target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-text group-hover:text-green transition-colors">{contrib.repo}</h3>
                                <ExternalLink className="w-4 h-4 text-subtext1 group-hover:text-green transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                            <p className="text-subtext0 text-sm mt-1">{contrib.description}</p>
                        </a>
                     </motion.div>
                ))}
             </div>
          </motion.section>

        </motion.div>
      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 text-center py-8">
        <p className="text-subtext1 mb-2">Let's connect and build something amazing.</p>
        <a href="mailto:your.email@example.com" className="text-lg text-mauve hover:underline">your.email@example.com</a>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/FabioCanavarro" target="_blank" rel="noopener noreferrer" className="text-subtext1 hover:text-mauve transition-colors duration-300">
            <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-subtext1 hover:text-blue transition-colors duration-300">
            <Linkedin size={24} />
            </a>
        </div>
        <p className="text-sm text-surface2 mt-8">Designed & Built by Fabio Canavarro</p>
      </footer>
    </div>
  );
}

