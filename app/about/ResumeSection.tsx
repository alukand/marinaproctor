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
    <div className="space-y-10">
      {sections.map((section, sectionIndex) => (
        <ScrollReveal key={section.key} delay={sectionIndex * 0.08}>
          <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
            <h3 className="font-serif text-lg text-text-primary tracking-wide">
              {section.label}
            </h3>
            <div className="space-y-3">
              {resumeData[section.key].map((credit, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                >
                  <div>
                    <span className="text-text-primary text-sm">
                      {credit.title}
                    </span>
                    <span className="text-text-secondary text-sm ml-2">
                      — {credit.role}
                    </span>
                  </div>
                  <span className="text-text-tertiary text-xs tracking-wider shrink-0">
                    {credit.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
