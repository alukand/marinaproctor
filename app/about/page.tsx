import type { Metadata } from "next";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ResumeSection from "./ResumeSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Marina Proctor — a professional makeup artist for print, television, and film based in Los Angeles. IATSE Local 706 member.",
};

export default function AboutPage() {
  return (
    <PageTransition className="pb-20">
      <SectionHeading title="About" className="mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <ScrollReveal className="lg:col-span-2">
          <div className="relative min-h-[350px] md:min-h-[400px] aspect-[3/4] overflow-hidden">
            <Image
              src="/images/portrait.svg"
              alt="Marina Proctor — Makeup Artist"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-3">
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              Marina Proctor is a professional Makeup Artist for Print,
              Television and Film who partners with photographers, directors
              and actors to achieve the perfect look, whether for a brand or a
              character. After spending over a decade working with boutique
              advertising agencies, photographers and filmmakers in Kansas
              City, Marina brings her Midwest sensibilities and work ethic to
              Los Angeles.
            </p>
            <p>
              Besides working with all the studios like Universal, FOX,
              Netflix, ABC/Sony, Paramount etc., Marina has collaborated with
              notable directors such as Lawrence Kasdan (Darling Companion) and
              Debra Granik (Winter&rsquo;s Bone). Her work has been featured
              in numerous films, TV shows, commercials, advertising campaigns
              and red carpet events.
            </p>
            <p>Marina is a proud member of IATSE Local 706.</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-24">
        <SectionHeading title="Credits & Resume" className="mb-16" />
        <ResumeSection />

        <ScrollReveal className="mt-16">
          <a
            href="#"
            className="inline-block border border-[var(--accent-gold)] text-[var(--accent-gold)] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300"
          >
            Download Resume (PDF)
          </a>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
