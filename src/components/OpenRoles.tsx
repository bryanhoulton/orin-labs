type Role = {
  title: string;
  description: string;
  link: string;
  location: string;
};

const roles: Role[] = [
  {
    title: "Interactions Engineer",
    description:
      "Building SOTA learning interfaces through voice, video, and interactive UIs.",
    link: "mailto:bryan@acadialearning.org",
    location: "San Francisco, CA",
  },
  {
    title: "Voice Infrastructure Engineer",
    description:
      "Building proactive voice agents that feel present, engaging, and limitless.",
    link: "mailto:bryan@acadialearning.org",
    location: "San Francisco, CA",
  },
  {
    title: "Applied AI Engineer",
    description: "Working on memory systems, proactive agent runtimes, etc.",
    link: "mailto:bryan@acadialearning.org",
    location: "San Francisco, CA",
  },
];

export function OpenRoles() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Open Roles</h2>

      {roles.map((role) => (
        <a href={role.link} key={role.title} className="w-full">
          <button
            key={role.title}
            className="flex text-left flex-col items-start gap-1 w-full hover:bg-gray-200 cursor-pointer p-4 md:-mx-4 transition-colors rounded-md group"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
              <p className="text-lg font-bold text-gray-900 shrink-0 group-hover:text-primary transition-colors">
                {role.title}
              </p>

              <p className="text-base text-gray-400 group-hover:text-gray-600 transition-colors shrink-0 w-fit leading-relaxed">
                {role.location}
              </p>
            </div>

            <p className="text-base text-gray-600 group-hover:text-gray-900 transition-colors max-w-2xl leading-relaxed">
              {role.description}
            </p>
          </button>
        </a>
      ))}
    </div>
  );
}
