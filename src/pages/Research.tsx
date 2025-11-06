import { Link } from 'react-router-dom';

import { JoinUs } from '../components/Hiring';

interface ResearchPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  path: string;
}

const RESEARCH_POSTS: ResearchPost[] = [
  {
    id: "proactive-agents",
    title: "Building Proactive Agents",
    description:
      "We present a method for building proactive agents that work continuously over time, schedule their own activities, and create workflows dynamically. Unlike traditional agents that only respond to user input, proactive agents actively pursue goals without constant prompting.",
    date: "October 2025",
    author: "Acadia Engineering",
    path: "/research/proactive-agents",
  },
  {
    id: "proactive-voice-agents",
    title: "Building Proactive Voice Agents",
    description:
      "We explore how to build proactive voice agents that work independently of user input. By flipping the traditional voice pipeline, we create agents that can speak first, handle interruptions, and maintain natural conversation flow.",
    date: "January 2025",
    author: "Acadia Engineering",
    path: "/research/proactive-voice-agents",
  },
];

export default function Research() {
  return (
    <div className="grow w-full md:max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Exploring the frontiers of AI agents, autonomous systems, and the
          future of human-computer interaction.
        </p>
            </div>

      {/* Research Posts */}
      <div className="space-y-8">
        {RESEARCH_POSTS.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <Link
              to={post.path}
              className="block group hover:bg-gray-50 -m-4 p-4 rounded-lg transition-colors"
            >
              <div className="flex flex-col space-y-4">
            <div>
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Link
                      to="/hiring"
                      className="text-primary underline hover:no-underline"
                    >
                      {post.author}
                    </Link>
                    <span>•</span>
                    <span>{post.date}</span>
            </div>
          </div>
                <p className="text-gray-700 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  Read more →
            </div>
          </div>
            </Link>
          </article>
        ))}
          </div>

      {/* Empty State for Future Posts */}
      {RESEARCH_POSTS.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-lg mb-4">
            No research posts yet
          </div>
          <p className="text-gray-600">
            Check back soon for our latest research and insights.
          </p>
        </div>
      )}

      <hr className="my-12" />

      <JoinUs />
    </div>
  );
}
