import { useEffect, useRef } from "react";

import Prism from "prismjs";
import { cn } from "slate-ui";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "python",
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden bg-primary-50 dark:bg-primary-900 my-6 border border-primary-200 dark:border-primary-800",
        className
      )}
    >
      {/* Language badge */}
      {language && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-mono uppercase tracking-wide border border-primary-300 dark:border-primary-800">
          {language}
        </div>
      )}

      <pre
        className={cn(
          "!m-0 !bg-transparent overflow-x-auto",
          showLineNumbers && "line-numbers"
        )}
      >
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
