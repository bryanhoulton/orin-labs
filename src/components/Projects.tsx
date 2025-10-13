type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Duplex Voice Pipelines",
    description:
      "Voice agents that can interrupt, act while speaking, and have a sense of time.",
    link: "mailto:bryan@orinlabs.org",
  },
  {
    title: "Autogenerating Knowledge Graphs",
    description:
      "Realtime knowledge graph generation to track student progress.",
    link: "mailto:bryan@orinlabs.org",
  },
  {
    title: "Generative Learning Interfaces",
    description:
      "Design-constrained UIs, games, and other interfaces created on the fly.",
    link: "mailto:bryan@orinlabs.org",
  },
];

export function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Open Projects
      </h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
        Email bryan@orinlabs.org if you want to work on any of these projects.
      </p>

      {projects.map((project) => (
        <a href={project.link} key={project.title} className="w-full">
          <button
            key={project.title}
            className="flex text-left flex-col items-start gap-1 w-full hover:bg-gray-200 cursor-pointer p-4 md:-mx-4 transition-colors rounded-md group"
          >
            <p className="text-lg font-bold text-gray-900 shrink-0 group-hover:text-primary transition-colors">
              {project.title}
            </p>

            <p className="text-base text-gray-600 group-hover:text-gray-900 transition-colors max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </button>
        </a>
      ))}
    </div>
  );
}
