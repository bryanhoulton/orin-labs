import { Goals } from '../components/Goals';
import { Platforms } from '../components/Platforms';

export default function Home() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        We believe in a world <br /> where AI teaches humans.
      </h4>

      <hr className="my-12" />

      <Goals />

      <hr className="my-12" />

      <Platforms />

      <hr className="my-12" />

      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          We are a small, San Francisco-based team focused on making AI that
          teaches humans.
        </p>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          We are{" "}
          <a
            href="mailto:bryan@acadialearning.org"
            className="text-primary underline"
          >
            hiring engineers
          </a>
          . If you have built realtime AI systems, dynamic memory, or proactive
          agents, we want to talk to you.
        </p>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Learn more about our{" "}
          <a
            href="/mission"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            team and mission
          </a>
          .
        </p>
      </div>
    </>
  );
}
