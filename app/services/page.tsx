import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
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
    <PageTransition className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading title="Services" />

        <div className="max-w-3xl">
          {services.map((service, i) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              delay={i * 0.08}
            />
          ))}
        </div>

        <ScrollReveal className="mt-16 border-t border-border-subtle pt-12">
          <p className="text-text-secondary mb-6">
            For rates and availability, please get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-accent-gold text-accent-gold px-8 py-3 text-sm tracking-wider uppercase hover:bg-accent-gold hover:text-bg-primary transition-all duration-300"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
