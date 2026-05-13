import { ArrowRight, ExternalLink, Link } from 'lucide-react';
import { cn } from 'slate-ui';

type Role = {
  title: string;
  description: string;
  location: string;
};

const roles: Role[] = [
  {
    title: "Research Engineer",
    location: "San Francisco, CA",
  },
  {
    title: "Infrastructure Engineer",
    location: "San Francisco, CA",
  },
  {
    title: "Operations Lead",
    location: "San Francisco, CA"
  },
  {
    title: "[Pitch Yourself]",
    location: "San Francisco, CA"
  }
];

function ContactButton({ className }: { className?: string }) {
  return (
    <a
      href="https://cal.com/bryan-houlton-5uvxqc/orin-labs-contact"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-400 transition-colors cursor-pointer",
        "flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto text-sm sm:text-base",
        className,
      )}
    >
      Contact
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

interface JoinUsProps {
  compact?: boolean;
}

export function JoinUs({ compact = false }: JoinUsProps) {
  return (
    <div
      className="flex flex-col gap-2 sm:gap-8 items-start w-full px-8 sm:px-12 lg:px-16"
      id="join-us"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full">
          <h3 className="text-xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            Open Roles
          </h3>
          <hr className="flex-1 hidden sm:block" />
        </div>
      </div>

      <div className="flex flex-col items-stretch w-full divide-y">
        {roles.map((role) => (
          <a
            key={role.title}
            className={cn(
              "flex items-center justify-between gap-1 flex-1 hover:bg-neutral-100",
              "px-2 -pl-2 py-1 transition-colors group",
              "dark:hover:bg-neutral-800 cursor-pointer",
            )}
            href="mailto:bryan@orinlabs.ai"
          >
              <p className="text-lg text-neutral-900 dark:text-neutral-100 shrink-0 group-hover:text-primary transition-colors">
                {role.title}
              </p>

              <p className="text-base flex items-center gap-2 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors shrink-0 w-fit leading-relaxed">
                {role.location}
                <ExternalLink className='w-3 h-3' />
              </p>
          </a>
        ))}
      </div>
    </div>
  );
}
