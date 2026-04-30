"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { resumeData } from "@/lib/portfolio-data";

const sections = [
  { key: "film" as const, label: "Film" },
  { key: "television" as const, label: "Television" },
  { key: "commercials" as const, label: "Commercials" },
  { key: "redCarpet" as const, label: "Red Carpet" },
  { key: "editorial" as const, label: "Editorial & Print" },
];

export default function ResumeSection() {
  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <ScrollReveal key={section.key} delay={sectionIndex * 0.08} className="mb-10">
          <h3 className="text-lg font-semibold text-[var(--accent-gold)] mb-4 font-serif tracking-wide">
            {section.label}
          </h3>
          <div>
            {resumeData[section.key].map((credit, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-1 sm:gap-4 py-3 border-b border-[var(--border-subtle)] items-baseline"
              >
                <span className="text-text-primary text-sm">
                  {credit.title}
                </span>
                <span className="text-text-secondary text-sm">
                  {credit.role}
                </span>
                <span className="text-text-tertiary text-xs tracking-wider sm:text-right">
                  {credit.year}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
