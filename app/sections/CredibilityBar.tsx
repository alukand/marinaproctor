"use client";

import { motion } from "framer-motion";

const studios = ["Universal", "Netflix", "Paramount", "FOX", "ABC/Sony"];

export default function CredibilityBar() {
  return (
    <section className="bg-bg-secondary py-8 md:py-10 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {studios.map((studio, i) => (
            <motion.span
              key={studio}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-serif text-sm md:text-base text-text-secondary tracking-[0.15em] uppercase"
            >
              {studio}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
