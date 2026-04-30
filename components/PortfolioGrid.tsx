"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, categories, type Category } from "@/lib/portfolio-data";
import Lightbox from "./Lightbox";

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function PortfolioGrid({ limit, showFilters = false }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    const items =
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);
    return limit ? items.slice(0, limit) : items;
  }, [activeCategory, limit]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
      );
    }
  };
  const nextItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm tracking-wide transition-colors duration-250 pb-1 border-b ${
                activeCategory === cat
                  ? "text-text-primary border-accent-gold"
                  : "text-text-secondary border-transparent hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => openLightbox(index)}
                className="relative group w-full block overflow-hidden cursor-pointer text-left"
                aria-label={`View ${item.title}`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 md:p-5 w-full">
                    <h3 className="font-serif text-base md:text-lg text-text-primary tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={closeLightbox}
        onPrev={prevItem}
        onNext={nextItem}
      />
    </>
  );
}
