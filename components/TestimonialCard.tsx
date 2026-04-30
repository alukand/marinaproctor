"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  attribution,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative bg-bg-secondary p-8 md:p-10"
    >
      <span
        className="absolute top-4 left-6 font-serif text-[80px] md:text-[100px] leading-none text-accent-gold/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="relative z-10 font-serif text-lg md:text-xl text-accent-champagne italic leading-relaxed">
        {quote}
      </p>

      <footer className="mt-6 relative z-10">
        <span className="text-sm text-text-secondary">— {attribution}</span>
      </footer>
    </motion.blockquote>
  );
}
