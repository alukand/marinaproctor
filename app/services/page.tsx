import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Marina Proctor offers professional makeup artistry for film, television, commercial, editorial, red carpet, and private clients in Los Angeles.",
};

const services = [
  {
    number: "01",
    title: "Film & Television",
    description:
      "On-set makeup design, continuity, and character development. Department head and key artist experience across features, episodic TV, and streaming productions.",
  },
  {
    number: "02",
    title: "Commercial & Advertising",
    description:
      "Beauty, product, and lifestyle commercial work. Campaign shoots for brands and agencies requiring polished, camera-ready results.",
  },
  {
    number: "03",
    title: "Editorial & Print",
    description:
      "Magazine editorials, lookbooks, and creative collaborations with photographers and art directors. Versatile range from natural beauty to high-concept editorial.",
  },
  {
    number: "04",
    title: "Red Carpet & Premieres",
    description:
      "Event-ready glam for talent, press appearances, and industry events. Expertise in creating looks that photograph beautifully under any lighting condition.",
  },
  {
    number: "05",
    title: "Private Clients & Events",
    description:
      "Special occasion makeup for weddings, galas, photoshoots, and personal events. Available for on-location appointments throughout Los Angeles and Southern California.",
  },
  {
    number: "06",
    title: "Auditions & Headshots",
    description:
      "Camera-ready makeup for actors and talent preparing for auditions, casting calls, and professional headshots. Subtle, enhancing looks that let your talent shine.",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition className="pb-20">
      <SectionHeading title="Services" className="mb-16" />

      <div>
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 py-12 border-b border-[var(--border-subtle)]">
              <div>
                <span className="block text-5xl md:text-6xl font-serif text-[var(--accent-gold)] opacity-30 leading-none mb-3">
                  {service.number}
                </span>
                <h3 className="font-serif text-2xl text-text-primary tracking-wide">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-20 text-center mb-20">
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          For rates and availability, please get in touch.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[var(--accent-gold)] text-[var(--bg-primary)] font-medium tracking-wider px-10 py-4 text-sm uppercase hover:bg-[var(--accent-gold-hover)] transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </ScrollReveal>
    </PageTransition>
  );
}
