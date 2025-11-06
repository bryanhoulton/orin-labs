import { Link } from 'react-router-dom';

export function Goals() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Goals</h2>

      {/* Goal 01 - Proactive Agents */}
      <div>
        <p className="text-xl font-semibold text-gray-900 mb-2">Proactivity</p>
        <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
          The job of a teacher is to <em>push</em>, not <em>be pulled</em>.
          Teaching is proactive, not reactive. Teachers must be present,
          understand the student, manage families, and plan ahead.
        </p>

        <p className="text-lg text-gray-600 mb-12">
          <Link
            to="/research"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            See our research on proactive agents
          </Link>
        </p>
      </div>

      {/* Goal 02 - Live Learning */}
      <div>
        <p className="text-xl font-semibold text-gray-900 mb-2">
          Active Learning
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Learning is an active process. Teachers need to be present with the
          student via all modalities: voice, video, and interactive UIs.
        </p>
      </div>

      {/* Goal 03 - Adaptation */}
      <div>
        <p className="text-xl font-semibold text-gray-900 mb-2">Adaptation</p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          The power of one-on-one learning is the ability to adapt to the
          student's needs. This requires a deep understanding of the student's
          learning style, goals, and progress.
        </p>
      </div>
    </div>
  );
}
