import { Project, Experience, Research } from './types';

export const personalInfo = {
    name: "Your Name", // Replace with your name
    title: "Aspiring Computer Scientist & Software Developer",
    bio: "I'm a passionate 11th-grade student with a deep interest in low-level systems, artificial intelligence, and web technologies. I thrive on building complex projects from scratch and leading collaborative research efforts.",
    github: "https://github.com/your-username", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/your-username", // Replace with your LinkedIn URL
};

export const projects: Project[] = [
    {
        id: 0,
        title: "UnitOS",
        description: "A lightweight operating system kernel built from the ground up for the x86_64 architecture, exploring the fundamentals of system-level programming.",
        tech: ["Rust", "Assembly", "x86_64"],
        link: "https://github.com/your-username/UnitOS", // Replace
        featured: true,
    },
    {
        id: 1,
        title: "FerrisLog_Server-Client",
        description: "A high-performance Key-Value store with its own custom TCP-based network protocol, utilizing a log-structured engine like Sled for persistence.",
        tech: ["Rust", "Sled", "Networking", "Async"],
        link: "https://github.com/your-username/FerrisLog_Server-Client", // Replace
        featured: true,
    },
    {
        id: 2,
        title: "ChronoDomain",
        description: "A Minecraft mod that introduces time manipulation mechanics, allowing players to control the flow of time for blocks, entities, and entire chunks.",
        tech: ["Java", "Minecraft Modding", "Mixin"],
        link: "https://github.com/your-username/ChronoDomain", // Replace
        featured: true,
    },
    {
        id: 3,
        title: "Agrobiosync",
        description: "An IoT-driven automated farming system featuring a web dashboard and an ESP8266 microcontroller to monitor and manage agricultural tasks.",
        tech: ["C++", "PlatformIO", "NodeMCU", "React", "CSS"],
        link: "https://github.com/your-username/Agrobiosync", // Replace
        featured: false,
    },
    {
        id: 4,
        title: "Iridation",
        description: "A custom assembly language and its assembler, created in Rust. It serves as a foundational step towards developing a future high-level programming language.",
        tech: ["Rust", "Compilers", "Assembly"],
        link: "https://github.com/your-username/Iridation", // Replace
        featured: false,
    },
    {
        id: 5,
        title: "Brain Tumour Segmentation AI",
        description: "A semantic segmentation model using U-Net architecture on TensorFlow to identify brain tumours from the BRATS 2021 dataset.",
        tech: ["Python", "TensorFlow", "Keras", "U-Net"],
        link: "https://github.com/your-username/Brain-Tumour-AI", // Replace
        featured: false,
    },
     {
        id: 6,
        title: "Github Trend Scraper",
        description: "A tool to scrape and analyze trending repositories on GitHub, providing insights into current technology trends. Built with Python and extensible for web use.",
        tech: ["Python", "BeautifulSoup", "Flask", "JavaScript"],
        link: "https://github.com/your-username/GithubWebScraper", // Replace
        featured: false,
    },
    {
        id: 7,
        title: "Automatic Laser Sentry",
        description: "A sentry turret that uses computer vision to detect and target heads with a laser. A multi-language project combining hardware and software.",
        tech: ["Python", "OpenCV", "C#", "C++", "Arduino"],
        link: "https://github.com/your-username/LaserSentry", // Replace
        featured: false,
    },
    {
        id: 8,
        title: "Rusty-portfolio",
        description: "A personal portfolio website built with Rust using the Leptos framework and styled with Tailwind CSS, showcasing the power of Rust for web development.",
        tech: ["Rust", "Leptos", "Tailwind CSS"],
        link: "https://github.com/your-username/rusty-portfolio", // Replace
        featured: false,
    }
];

export const experiences: Experience[] = [
    {
        role: "Head of Web Development",
        company: "Arts&Legend.id",
        period: "May 2025 - Present",
        description: "Leading the development of the organization's web presence using a modern tech stack including Next.js, TypeScript, and Tailwind CSS. Responsible for architecture, development, and team coordination for this non-profit startup."
    }
];

export const researchPapers: Research[] = [
    {
        title: "Security Innovation: Face Detection and Identification as a Security Enabler",
        description: "Enhanced security system performance by combining multiprocessing and neural networks to improve Haarcascade and ArcFace models.",
        role: "Group Leader & Lead Researcher"
    },
    {
        title: "INTELLIGENT ORGANIC CULTIVATION",
        description: "Designed and prototyped an automated farming system integrating IoT devices, a web-based monitoring platform, and a novel organic fertilizer.",
        role: "Group Leader & System Architect"
    }
];