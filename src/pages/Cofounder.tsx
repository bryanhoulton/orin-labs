import RocketshipGrowth from '../components/RocketshipGrowth';

export default function Cofounder() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        If you also{" "}
        <a
          href="/mission"
          className="underline text-primary hover:text-primary-600 transition-colors"
        >
          believe
        </a>{" "}
        in a world <br /> where humans aren't left behind,
      </h4>

      <hr className="my-12" />

      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Be a Cofounder
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          I'm looking for a cofounder who wants to build a generational consumer
          company. We spend{" "}
          <strong className="text-primary">five trillion dollars</strong> every
          year teaching the next generation, and AI is about to turn it upside
          down.
        </p>

        <RocketshipGrowth />

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h3>
        <ul className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed list-disc list-outside ml-6">
          <li className="pl-2">
            Built <span className="text-primary">quant infrastructure</span> for
            retail investors while in college
          </li>
          <li className="pl-2">
            <a
              href="https://www.ycombinator.com/companies/manatee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-600 transition-colors"
            >
              Dropped out to do YC
            </a>{" "}
            and build distributed web-app caching and replay for sales demos
            (acquihired in 2023)
          </li>
          <li className="pl-2">
            Wrote the playbook on{" "}
            <a
              href="/research/proactive-agents"
              className="text-primary underline hover:text-primary-600 transition-colors"
            >
              proactive agents
            </a>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">About You</h3>
        <ul className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed list-disc list-outside ml-6">
          <li className="pl-2">
            You want to build a{" "}
            <span className="text-primary">San Francisco</span>-based company of
            polymaths
          </li>
          <li className="pl-2">
            You are <span className="text-primary">deeply technical</span> with
            experience building application layer systems
          </li>
          <li className="pl-2">
            You want to <span className="text-primary">ruthlessly</span> build a
            fast-growing company
          </li>
          <li className="pl-2">
            You are comfortable with ambiguity, risk, and{" "}
            <span className="text-primary">non-consensus</span> bets
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          If this sounds like you or someone you know, please email{" "}
          <a
            href="mailto:bryan@orinlabs.org"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            bryan@orinlabs.org
          </a>
          . I'm offering a $20,000 referral bonus if you connect me with my
          future cofounder.
        </p>
      </div>
    </>
  );
}
