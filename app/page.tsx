import Hero from "@/components/Hero";
import CredibilityBar from "./sections/CredibilityBar";
import SelectedWork from "./sections/SelectedWork";
import AboutPreview from "./sections/AboutPreview";
import Testimonials from "./sections/Testimonials";
import ContactCTA from "./sections/ContactCTA";

export default function Home() {
  return (
    <div className="full-bleed -mt-[120px]">
      <Hero />
      <CredibilityBar />
      <SelectedWork />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
