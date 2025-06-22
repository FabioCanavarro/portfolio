"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { personalInfo } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am an 11th-grade student with a burning passion for the intricate world of computer science. My journey began with a fascination for how software works, which quickly evolved into a hands-on pursuit of building and understanding complex systems. I am particularly drawn to{" "}
        <span className="font-medium">low-level systems programming, artificial intelligence, and compiler design</span>. I find immense satisfaction in the challenge of creating efficient, robust, and elegant solutions from the ground up.
      </p>

      <p>
        When I'm not immersed in code, I enjoy exploring the latest advancements in technology, contributing to open-source projects, and engaging in collaborative research with my peers. I believe in the power of technology to solve real-world problems and am always eager to learn new skills and take on new challenges.
      </p>
    </motion.section>
  );
}
