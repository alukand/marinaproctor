"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/portrait.svg"
                alt="Marina Proctor — Makeup Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="w-12 h-px bg-accent-gold mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary tracking-wide mb-6">
              About
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Marina Proctor is a professional Makeup Artist for Print, Television
              and Film who partners with photographers, directors and actors to
              achieve the perfect look, whether for a brand or a character.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              With credits spanning every major studio and collaborations with
              acclaimed directors like Lawrence Kasdan and Debra Granik, Marina
              brings over a decade of experience and Midwest work ethic to every
              project.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent-gold text-sm tracking-wider hover:text-accent-gold-hover transition-colors duration-250"
            >
              Read More
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
