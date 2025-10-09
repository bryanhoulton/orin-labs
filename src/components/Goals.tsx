export function Goals() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Goals</h2>

      {/* Goal 01 - Proactive Agents */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Proactivity
        </h3>
        <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
          The job of a tutor is to <em>push</em>, not <em>be pulled</em>. Tutors
          must be proactive, not reactive. They must be present, understand the
          student, manage families, and plan ahead.
        </p>

        <p className="text-lg text-gray-600 mb-12">
          Learn about{" "}
          <a
            href="https://bryanhoulton1.substack.com/p/building-proactive-ai-agents"
            className="underline text-primary hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            our proactive agents
          </a>
          .
        </p>
      </div>

      {/* Goal 02 - Live Learning */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Active Learning
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Learning is an active process. Tutors need to be present with the
          student via all modalities: voice, video, and interactive UIs.
        </p>
      </div>
    </div>
  );
}
