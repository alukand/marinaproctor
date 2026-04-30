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
    <PageTransition className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden sticky top-28">
              <Image
                src="/images/portrait.svg"
                alt="Marina Proctor — Makeup Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          <div>
            <SectionHeading title="About" />

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-text-secondary leading-relaxed">
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
        </div>

        <div className="mt-20 md:mt-28 border-t border-border-subtle pt-16">
          <SectionHeading title="Credits & Resume" />
          <ResumeSection />

          <ScrollReveal className="mt-12">
            <a
              href="#"
              className="inline-block border border-accent-gold text-accent-gold px-6 py-3 text-sm tracking-wider uppercase hover:bg-accent-gold hover:text-bg-primary transition-all duration-300"
            >
              Download Resume (PDF)
            </a>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
