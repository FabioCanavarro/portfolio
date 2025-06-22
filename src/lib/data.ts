import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const personalInfo = {
    name: "Fabio C.",
    title: "Aspiring Computer Scientist & Software Developer",
    bio: "I'm a passionate 11th-grade student with a deep interest in low-level systems, artificial intelligence, and web technologies. I thrive on building complex projects from scratch and leading collaborative research efforts.",
    github: "https://github.com/fabiocanavarro",
    linkedin: "https://linkedin.com/in/fabiocanavarro",
};

export const experiencesData = [
  {
    title: "Head of Web Development",
    location: "Arts&Legend.id",
    description:
      "Leading the development of the organization's web presence using a modern tech stack including Next.js, TypeScript, and Tailwind CSS. Responsible for architecture, development, and team coordination for this non-profit startup.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Lead Researcher",
    location: "Security Innovation Research",
    description:
      "Led a research group to enhance security system performance by combining multiprocessing and neural networks to improve Haarcascade and ArcFace models.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
   {
    title: "System Architect & Group Leader",
    location: "Intelligent Organic Cultivation Project",
    description:
      "Designed and prototyped an automated farming system integrating IoT devices, a web-based monitoring platform, and a novel organic fertilizer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "UnitOS",
    description:
      "A lightweight x86_64 OS kernel built from scratch in Rust. Explores memory management, interrupt handling, and system calls.",
    tags: ["Rust", "Assembly", "x86_64", "OSDev"],
    imageUrl: "/placeholder.png",
    link: "https://github.com/fabiocanavarro/UnitOS",
  },
  {
    title: "FerrisLog",
    description:
      "A high-performance Key-Value store with a custom TCP protocol, using a log-structured engine for persistence.",
    tags: ["Rust", "Networking", "Async", "Sled"],
    imageUrl: "/placeholder.png",
    link: "https://github.com/fabiocanavarro/FerrisLog_Server-Client"
  },
  {
    title: "ChronoDomain",
    description:
      "A Minecraft mod introducing time manipulation. Players can control time for blocks, entities, and entire areas.",
    tags: ["Java", "Minecraft Modding", "Mixin"],
    imageUrl: "/placeholder.png",
    link: "https://github.com/fabiocanavarro/ChronoDomain"
  },
] as const;
