import { ArrowRight, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "slate-ui";

import { Logo } from "./Logo";

const CONTACT_BUTTON = (
  <a
    href="https://cal.com/bryan-houlton-5uvxqc/orin-labs-contact"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "bg-primary text-white py-1 px-3 rounded-lg hover:bg-primary-400 transition-colors cursor-pointer",
      "flex items-center gap-2 shadow-sm"
    )}
  >
    Contact
    <ArrowRight className="w-4 h-4" />
  </a>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center min-h-screen pt-8 gap-16">
      <nav className="w-full px-8 z-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            Orin Labs
          </h1>
        </Link>

        <div className="flex items-center gap-8">
          {[
            { label: "Initiatives", path: "/#initiatives" },
            { label: "Our Work", path: "/#our-work" },
            { label: "Join Us", path: "/#join-us" },
          ].map((item) => (
            <Link
              to={item.path}
              key={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
            >
              <button className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline cursor-pointer transition-colors">
                {item.label}
              </button>
            </Link>
          ))}

          {CONTACT_BUTTON}
        </div>
      </nav>

      <div className="w-3xl flex-1 flex flex-col gap-32">{children}</div>

      {/* Footer */}
      <footer className="w-full px-8 z-10 flex border-t mt-8 h-96 items-end pb-8 relative overflow-hidden">
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
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Orin Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://x.com/orinlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 transition-colors cursor-pointer"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/orinlabs"
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
