import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/portfolio-data";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading title="Testimonials" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              attribution={t.attribution}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
