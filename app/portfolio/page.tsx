import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Marina Proctor's portfolio spanning film, television, red carpet, editorial, commercial, and beauty makeup artistry.",
};

export default function PortfolioPage() {
  return (
    <PageTransition className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading title="Portfolio" className="mb-16" />
        <PortfolioGrid showFilters />
      </div>
    </PageTransition>
  );
}
