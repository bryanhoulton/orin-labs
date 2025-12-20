import { Link } from "react-router-dom";

interface WhitePaperProps {
  title: string;
  authors?: string[];
  date: string;
  abstract: string;
  children: React.ReactNode;
}

export function WhitePaper({
  title,
  authors = ["Orin Labs"],
  date,
  abstract,
  children,
}: WhitePaperProps) {
  return (
    <article className="white-paper">
      {/* Title Block */}
      <header className="mb-12 text-center border-b-2 border-neutral-800 dark:border-neutral-200 pb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400 text-base">
          {authors.map((author, i) => (
            <span key={author}>
              {author === "Orin Labs" ? (
                <Link
                  to="/"
                  className="text-primary hover:underline transition-colors"
                >
                  {author}
                </Link>
              ) : (
                author
              )}
              {i < authors.length - 1 && (
                <span className="text-neutral-400 dark:text-neutral-500">
                  {" "}
                  ·{" "}
                </span>
              )}
            </span>
          ))}
          <span className="text-neutral-400 dark:text-neutral-500 mx-2">|</span>
          <span className="italic">{date}</span>
        </div>
      </header>

      {/* Abstract */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
          Abstract
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg border-l-4 border-primary pl-6 italic">
          {abstract}
        </p>
      </section>

      {/* Content */}
      <div className="white-paper-content">{children}</div>
    </article>
  );
}

interface SectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-baseline gap-3">
        {number && (
          <span className="text-primary font-mono text-lg">{number}.</span>
        )}
        {title}
      </h2>
      <div className="paper-prose">{children}</div>
    </section>
  );
}

interface SubsectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

export function Subsection({ number, title, children }: SubsectionProps) {
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-baseline gap-2">
        {number && (
          <span className="text-primary/70 font-mono text-sm">{number}</span>
        )}
        {title}
      </h3>
      <div className="paper-prose">{children}</div>
    </div>
  );
}

export function KeyTakeaways({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 mb-8">
      <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-4">
        Key Takeaways
      </h3>
      {children}
    </div>
  );
}

