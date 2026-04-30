import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marina Proctor — Makeup Artist · Los Angeles",
    template: "%s | Marina Proctor",
  },
  description:
    "Marina Proctor is a professional Makeup Artist for Print, Television and Film based in Los Angeles. IATSE Local 706 member with credits at Universal, Netflix, Paramount, FOX, and ABC/Sony.",
  keywords: [
    "makeup artist",
    "Los Angeles",
    "film makeup",
    "television makeup",
    "IATSE Local 706",
    "red carpet",
    "editorial makeup",
  ],
  openGraph: {
    title: "Marina Proctor — Makeup Artist · Los Angeles",
    description:
      "Professional Makeup Artist for Print, Television and Film. IATSE Local 706.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
