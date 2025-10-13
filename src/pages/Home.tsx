import { Link } from 'react-router-dom';

import { Goals } from '../components/Goals';
import { JoinUs } from '../components/Hiring';
import { Platforms } from '../components/Platforms';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        We{" "}
        <Link
          to="/mission"
          className="underline text-primary hover:text-primary-600 transition-colors"
        >
          believe
        </Link>{" "}
        in a world <br /> where AI teaches humans.
      </h4>

      <hr className="my-12" />

      <Goals />

      <hr className="my-12" />

      <Platforms />

      <hr className="my-12" />

      <Projects />

      <hr className="my-12" />

      <JoinUs />
    </>
  );
}
