import { Goals } from '../components/Goals';
import { Hiring } from '../components/Hiring';

export default function Mission() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        Humanity will be
        <br />
        forever constrained
        <br /> until we can scale{" "}
        <strong className="text-primary">teaching</strong>.
      </h4>

      <hr className="my-12" />

      <Goals />

      <hr className="my-12" />

      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Team</h2>

        <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
          Orin Labs is led by <h6 className="inline">Bryan Houlton</h6> and
          backed by top investors like Max Mullen, as well as angel investors
          from established education companies like Clever.
        </p>

        <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
          We are building a real{" "}
          <a
            href="https://en.wikipedia.org/wiki/The_Diamond_Age"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary-600 transition-colors"
          >
            Illustrated Primer
          </a>{" "}
          for humanity.
        </p>

        <Hiring />
      </div>
    </>
  );
}
