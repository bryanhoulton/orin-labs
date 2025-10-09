import {
  Link,
  useLocation,
} from 'react-router-dom';

export function Hiring() {
  return (
    <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
      We are{" "}
      <Link to="/hiring" className="text-primary underline">
        hiring engineers
      </Link>
      . If you have built realtime AI systems, dynamic memory, or proactive
      agents, we want to talk to you.
    </p>
  );
}

export function JoinUs() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Us</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
        We are a small, San Francisco-based research lab focused on making AI
        that teaches humans. We strongly believe that a small, focused team with
        a clear vision can build great things.
      </p>
      <Hiring />
      {location.pathname !== "/mission" && (
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Learn more about our{" "}
          <Link
            to="/team"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            team
          </Link>{" "}
          and{" "}
          <Link
            to="/mission"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            mission
          </Link>
          .
        </p>
      )}
    </div>
  );
}
