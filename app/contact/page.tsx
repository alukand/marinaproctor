import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Marina Proctor for film, television, commercial, editorial, and private makeup artistry in Los Angeles.",
};

export default function ContactPage() {
  return (
    <PageTransition className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading title="Get in Touch" className="mb-16" />
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-10">
                Whether you&rsquo;re a production coordinator booking a film, a
                photographer planning a shoot, or a private client preparing for a
                special occasion — I&rsquo;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs text-text-tertiary tracking-wider uppercase mb-1.5">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@marinaproctor.com"
                    className="text-text-primary text-sm hover:text-accent-gold transition-colors duration-250"
                  >
                    hello@marinaproctor.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs text-text-tertiary tracking-wider uppercase mb-1.5">
                    Phone
                  </h3>
                  <a
                    href="tel:+13105550123"
                    className="text-text-primary text-sm hover:text-accent-gold transition-colors duration-250"
                  >
                    (310) 555-0123
                  </a>
                </div>

                <div>
                  <h3 className="text-xs text-text-tertiary tracking-wider uppercase mb-1.5">
                    Instagram
                  </h3>
                  <a
                    href="https://instagram.com/marinaproctor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary text-sm hover:text-accent-gold transition-colors duration-250"
                  >
                    @marinaproctor
                  </a>
                </div>

                <div>
                  <h3 className="text-xs text-text-tertiary tracking-wider uppercase mb-1.5">
                    IMDb
                  </h3>
                  <a
                    href="https://imdb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary text-sm hover:text-accent-gold transition-colors duration-250"
                  >
                    View Profile
                  </a>
                </div>

                <div>
                  <h3 className="text-xs text-text-tertiary tracking-wider uppercase mb-1.5">
                    Location
                  </h3>
                  <p className="text-text-primary text-sm">Los Angeles, CA</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
