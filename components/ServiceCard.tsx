"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  number,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group border-t border-border-subtle pt-8 pb-8"
    >
      <div className="flex items-start gap-6">
        <span className="text-sm text-accent-gold font-serif tracking-wider mt-1 shrink-0">
          {number}
        </span>
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-text-primary tracking-wide mb-3 group-hover:text-accent-gold transition-colors duration-250">
            {title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
