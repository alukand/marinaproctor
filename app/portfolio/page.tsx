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
    <PageTransition className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading title="Portfolio" />
        <PortfolioGrid showFilters />
      </div>
    </PageTransition>
  );
}
