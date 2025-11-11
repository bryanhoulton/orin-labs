import { useEffect, useRef } from "react";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "slate-ui";

type Initiative = {
  title: string;
  description: string;
};

const initiatives: Initiative[] = [
  {
    title: "Proactivity",
    description:
      "Agents that control when they run, creating truly proactive experiences.",
  },
  {
    title: "Memory",
    description: "Agents that remember temporally, not just facts.",
  },
  {
    title: "Delivery",
    description:
      "Agents trained to curate the perfect instructional experience for you.",
  },
];

type WorkItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
  type: "product" | "research";
};

const workItems: WorkItem[] = [
  {
    title: "Acadia Learning",
    description: "AI tutoring platform that grows with students over time.",
    image: "/book.png",
    link: "https://acadialearning.org",
    type: "product",
  },
  {
    title: "Proactive Agents",
    description:
      "Agents that schedule themselves, wake on events, and remember what matters over time.",
    image: "/plane.png",
    link: "/research/proactive-agents",
    type: "research",
  },
  {
    title: "Conversationality",
    description:
      "Voice agents that run independently, speak first, and handle interruptions naturally.",
    image: "/person.png",
    link: "/research/conversationality",
    type: "research",
  },
];

type Role = {
  title: string;
  description: string;
  location: string;
};

const roles: Role[] = [
  {
    title: "Research Engineer",
    description: "Discovering novel techniques for long-horizon learning.",
    location: "San Francisco, CA",
  },
  {
    title: "Product Engineer",
    description: "Scaling our brands to millions of users.",
    location: "San Francisco, CA",
  },
  {
    title: "Infrastructure Engineer",
    description: "Working on memory systems, proactive agent runtimes, etc.",
    location: "San Francisco, CA",
  },
];

const CONTACT_BUTTON = (
  <a
    href="https://cal.com/bryan-houlton-5uvxqc/orin-labs-contact"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-400 transition-colors cursor-pointer",
      "flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto text-sm sm:text-base"
    )}
  >
    Contact
    <ArrowRight className="w-4 h-4" />
  </a>
);

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Play at half speed
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="bg-primary group shadow-sm rounded-xl relative overflow-hidden lg:-mx-16 min-h-[420px] sm:min-h-[520px] lg:min-h-[70vh]">
        <video
          ref={videoRef}
          src="/tree.mp4"
          autoPlay
          muted
          playsInline
          style={{
            filter: "invert(1) brightness(0.40)",
            translate: "0 48px",
            mixBlendMode: "screen",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative p-8 sm:p-12 lg:p-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-100 flex flex-col gap-1">
            <span>AI that</span>
            <span className="text-white">grows up</span>
            <span>with you</span>
          </h1>
        </div>

        <ArrowDown className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2 sm:left-16 sm:translate-x-0 group-hover:translate-y-2 transition-transform w-6 h-6 text-primary-100" />
      </div>

      {/* Initiatives */}
      <div className="flex flex-col items-start -mt-6" id="initiatives">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-700 dark:text-neutral-300">
            Initiatives
          </h2>

          <hr className="flex-1 hidden sm:block" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 w-full mt-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full py-6 sm:py-8",
                index !== initiatives.length - 1 &&
                  "border-b border-neutral-200 dark:border-neutral-800"
              )}
            >
              <span className="text-neutral-400 dark:text-neutral-600 text-3xl sm:text-4xl font-semibold font-mono shrink-0">
                [{index + 1}]
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {initiative.title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Work */}
      <div className="flex flex-col items-start w-full" id="our-work">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-700 dark:text-neutral-300">
            Our Work
          </h2>
          <hr className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {workItems.map((item) => {
            const content = (
              <div
                className={cn(
                  "group relative flex flex-col aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shadow-sm",
                  "bg-primary hover:shadow-md transition-shadow cursor-pointer"
                )}
              >
                {/* Background image layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    filter: "invert(1) brightness(0.40)",
                    mixBlendMode: "screen",
                  }}
                />

                {/* Content overlay */}
                <div className="relative z-20 flex flex-col gap-1 justify-between h-full p-4 text-white">
                  <p className="text-xs ml-auto bg-primary-100 rounded px-1.5 py-0.5 w-fit capitalize text-primary">
                    {item.type}
                  </p>
                  <h3 className="text-xl font-semibold group-hover:text-primary-50 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );

            if (!item.link) {
              return <div key={item.title}>{content}</div>;
            }

            const isExternalLink = item.link.startsWith("http");

            return isExternalLink ? (
              <a
                href={item.link}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link to={item.link} key={item.title}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Join Us */}
      <div className="flex flex-col gap-6 sm:gap-8 items-start" id="join-us">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-900 dark:text-neutral-100">
            Join Us
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            We are a small, San Francisco-based team focused on building AI to
            teach. We are solving hard and important problems for real people.
          </p>
        </div>

        {CONTACT_BUTTON}

        <div className="flex flex-col items-stretch w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 px-0 sm:px-4 md:px-0">
            Open Roles
          </h2>

          {roles.map((role) => (
            <button
              key={role.title}
              className={cn(
                "flex text-left flex-col items-start gap-1 w-full hover:bg-neutral-200",
                "dark:hover:bg-neutral-800",
                "p-4 sm:p-5 md:-mx-4 transition-colors rounded-md group"
              )}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
                <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 shrink-0 group-hover:text-primary transition-colors">
                  {role.title}
                </p>

                <p className="text-base text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors shrink-0 w-fit leading-relaxed">
                  {role.location}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors max-w-2xl leading-relaxed">
                {role.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
