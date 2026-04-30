"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-text-primary tracking-wide">
            Let&rsquo;s Work Together
          </h2>
          <p className="mt-4 md:mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Available for film, television, commercial, editorial, and private
            clients in Los Angeles and beyond.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 md:mt-10 border border-accent-gold text-accent-gold px-8 py-3 text-sm tracking-wider uppercase hover:bg-accent-gold hover:text-bg-primary transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
