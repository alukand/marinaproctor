import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-serif text-text-primary text-lg tracking-[0.18em] uppercase hover:text-accent-gold transition-colors duration-250"
            >
              Marina Proctor
            </Link>
            <p className="mt-2 text-sm text-text-tertiary">
              Makeup Artist · Los Angeles
            </p>
            <p className="mt-1 text-xs text-text-tertiary tracking-wider uppercase">
              IATSE Local 706
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <a
              href="mailto:hello@marinaproctor.com"
              className="text-sm text-text-secondary hover:text-accent-gold transition-colors duration-250"
            >
              hello@marinaproctor.com
            </a>

            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/marinaproctor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent-gold transition-colors duration-250"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://imdb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent-gold transition-colors duration-250"
                aria-label="IMDb"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 64 32"
                  fill="currentColor"
                >
                  <rect x="0" y="0" width="64" height="32" rx="4" fill="currentColor" opacity="0.15" />
                  <text
                    x="32"
                    y="22"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    fill="currentColor"
                  >
                    IMDb
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Marina Proctor. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Portfolio", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-xs text-text-tertiary hover:text-text-secondary transition-colors duration-250"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
