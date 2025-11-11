import { useState } from "react";

import { ArrowRight, LinkedinIcon, Menu, TwitterIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "slate-ui";

import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Initiatives", path: "/#initiatives" },
  { label: "Our Work", path: "/#our-work" },
  { label: "Join Us", path: "/#join-us" },
];

function ContactButton({ className }: { className?: string }) {
  return (
    <a
      href="https://cal.com/bryan-houlton-5uvxqc/orin-labs-contact"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-400 transition-colors cursor-pointer",
        "flex items-center w-fit justify-center gap-2 shadow-sm md:w-full text-sm sm:text-base",
        className
      )}
    >
      Contact
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.includes("#")) {
      e.preventDefault();
      const hash = path.split("#")[1];
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center min-h-screen pt-6 sm:pt-8 gap-12 sm:gap-16 px-4 sm:px-6 lg:px-8">
      <nav className="w-full max-w-6xl z-10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="text-primary w-8 h-8" />
            <h1 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
              Orin Labs
            </h1>
          </Link>

          <button
            type="button"
            className="md:hidden rounded-lg border border-neutral-200 dark:border-neutral-700 p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline cursor-pointer transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <ContactButton />
          </div>
        </div>

        <div
          className={cn(
            "md:hidden flex-col gap-4 border-t border-neutral-200 dark:border-neutral-800 mt-4 pt-4",
            isMenuOpen ? "flex" : "hidden"
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <ContactButton />
        </div>
      </nav>

      <div className="w-full max-w-3xl xl:max-w-4xl flex-1 flex flex-col gap-16 sm:gap-24">
        {children}
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl z-10 flex flex-col md:flex-row border-t border-neutral-200 dark:border-neutral-800 mt-12 relative overflow-hidden gap-4 md:gap-6 py-8 md:py-12">
        {/* Masked background layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--neutral-50) 40%, var(--primary-500) 40%)",
            maskImage: "linear-gradient(#fff, #fff), url(/footer.png)",
            WebkitMaskImage: "linear-gradient(#fff, #fff), url(/footer.png)",
            maskSize: "100%, 60%",
            WebkitMaskSize: "100%, 60%",
            maskPosition: "center, right center",
            WebkitMaskPosition: "center, right center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskMode: "luminance",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            // Dark mode override (uses JS to detect prefers-color-scheme)
            ...(window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? {
                  background:
                    "linear-gradient(to right, var(--neutral-900) 40%, var(--primary-700) 40%)",
                }
              : {}),
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Orin Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
            <a
              href="https://x.com/0rinlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 transition-colors cursor-pointer"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/104572054/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 transition-colors cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
