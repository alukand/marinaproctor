export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  credit: string;
  image: string;
  aspect: "3:4" | "2:3" | "4:5";
  width: number;
  height: number;
}

export const categories = [
  "All",
  "Film & TV",
  "Red Carpet",
  "Editorial",
  "Commercial",
  "Beauty",
  "Men's Grooming",
] as const;

export type Category = (typeof categories)[number];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Winter's Bone",
    category: "Film & TV",
    credit: "Director: Debra Granik",
    image: "/images/placeholder-1.svg",
    aspect: "3:4",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    title: "Ayelet Zurer — Ben Hur Premiere",
    category: "Red Carpet",
    credit: "Los Angeles, 2016",
    image: "/images/placeholder-2.svg",
    aspect: "2:3",
    width: 600,
    height: 900,
  },
  {
    id: 3,
    title: "Darling Companion",
    category: "Film & TV",
    credit: "Director: Lawrence Kasdan",
    image: "/images/placeholder-3.svg",
    aspect: "4:5",
    width: 600,
    height: 750,
  },
  {
    id: 4,
    title: "Vogue Italia Editorial",
    category: "Editorial",
    credit: "Photographer: Studio Collaboration",
    image: "/images/placeholder-4.svg",
    aspect: "3:4",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    title: "L'Oréal Campaign",
    category: "Commercial",
    credit: "Agency: Creative Partners LA",
    image: "/images/placeholder-5.svg",
    aspect: "2:3",
    width: 600,
    height: 900,
  },
  {
    id: 6,
    title: "Natural Beauty Series",
    category: "Beauty",
    credit: "Photographer: Studio Session",
    image: "/images/placeholder-6.svg",
    aspect: "4:5",
    width: 600,
    height: 750,
  },
  {
    id: 7,
    title: "GQ Grooming Feature",
    category: "Men's Grooming",
    credit: "Editorial Collaboration",
    image: "/images/placeholder-7.svg",
    aspect: "3:4",
    width: 600,
    height: 800,
  },
  {
    id: 8,
    title: "Netflix Original Series",
    category: "Film & TV",
    credit: "Department Head",
    image: "/images/placeholder-8.svg",
    aspect: "2:3",
    width: 600,
    height: 900,
  },
  {
    id: 9,
    title: "SAG Awards Red Carpet",
    category: "Red Carpet",
    credit: "Los Angeles, 2019",
    image: "/images/placeholder-9.svg",
    aspect: "4:5",
    width: 600,
    height: 750,
  },
  {
    id: 10,
    title: "Harper's Bazaar Shoot",
    category: "Editorial",
    credit: "Creative Direction: In-House",
    image: "/images/placeholder-10.svg",
    aspect: "3:4",
    width: 600,
    height: 800,
  },
  {
    id: 11,
    title: "Paramount Feature Film",
    category: "Film & TV",
    credit: "Key Makeup Artist",
    image: "/images/placeholder-11.svg",
    aspect: "2:3",
    width: 600,
    height: 900,
  },
  {
    id: 12,
    title: "Skincare Brand Campaign",
    category: "Beauty",
    credit: "Commercial Production",
    image: "/images/placeholder-12.svg",
    aspect: "4:5",
    width: 600,
    height: 750,
  },
  {
    id: 13,
    title: "ABC Primetime Series",
    category: "Film & TV",
    credit: "ABC/Sony Television",
    image: "/images/placeholder-13.svg",
    aspect: "3:4",
    width: 600,
    height: 800,
  },
  {
    id: 14,
    title: "Men's Health Cover",
    category: "Men's Grooming",
    credit: "Editorial Shoot",
    image: "/images/placeholder-14.svg",
    aspect: "2:3",
    width: 600,
    height: 900,
  },
  {
    id: 15,
    title: "Toyota National Campaign",
    category: "Commercial",
    credit: "Agency: National Ad Campaign",
    image: "/images/placeholder-15.svg",
    aspect: "4:5",
    width: 600,
    height: 750,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Marina's attention to detail and her ability to read the room is unmatched. She elevated every frame.",
    attribution: "Director, Feature Film",
  },
  {
    id: 2,
    quote:
      "She has this rare combination of technical precision and genuine warmth that puts everyone at ease on set.",
    attribution: "Producer, Netflix Original",
  },
  {
    id: 3,
    quote:
      "Working with Marina is effortless. She understands character, story, and light in a way that most artists don't.",
    attribution: "Cinematographer, Paramount Pictures",
  },
];

export const resumeData = {
  film: [
    { title: "Winter's Bone", role: "Key Makeup Artist", year: "2010" },
    { title: "Darling Companion", role: "Department Head", year: "2012" },
    { title: "Paramount Feature", role: "Key Makeup Artist", year: "2018" },
    { title: "Universal Studios Production", role: "Department Head", year: "2020" },
    { title: "Independent Feature", role: "Makeup Designer", year: "2022" },
  ],
  television: [
    { title: "ABC Primetime Series", role: "Key Makeup Artist", year: "2019–2021" },
    { title: "Netflix Original Series", role: "Department Head", year: "2021" },
    { title: "FOX Episodic", role: "Key Makeup Artist", year: "2017–2018" },
    { title: "ABC/Sony Television", role: "Makeup Artist", year: "2016" },
    { title: "Streaming Series", role: "Department Head", year: "2023" },
  ],
  commercials: [
    { title: "Toyota — National Campaign", role: "Key Makeup Artist", year: "2020" },
    { title: "L'Oréal — Product Launch", role: "Lead Makeup Artist", year: "2019" },
    { title: "Skincare Brand — Digital Campaign", role: "Makeup Artist", year: "2021" },
    { title: "Automotive — Super Bowl Spot", role: "Key Makeup Artist", year: "2022" },
  ],
  redCarpet: [
    { title: "SAG Awards", role: "Personal Makeup Artist", year: "2019" },
    { title: "Ben Hur Premiere — Ayelet Zurer", role: "Personal Makeup Artist", year: "2016" },
    { title: "Emmy Awards", role: "Personal Makeup Artist", year: "2021" },
    { title: "Film Festival Premiere", role: "Personal Makeup Artist", year: "2023" },
  ],
  editorial: [
    { title: "Vogue Italia", role: "Makeup Artist", year: "2018" },
    { title: "Harper's Bazaar", role: "Makeup Artist", year: "2020" },
    { title: "GQ Grooming Feature", role: "Lead Grooming Artist", year: "2019" },
    { title: "Men's Health Cover", role: "Grooming Artist", year: "2021" },
  ],
};
