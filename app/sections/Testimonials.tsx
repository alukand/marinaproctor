import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/portfolio-data";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
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
