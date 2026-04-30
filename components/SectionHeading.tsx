"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${className}`}
    >
      <div className="w-12 h-px bg-accent-gold mb-6" />
      <h2 className="font-serif text-3xl md:text-4xl text-text-primary tracking-wide">
        {title}
      </h2>
    </motion.div>
  );
}
