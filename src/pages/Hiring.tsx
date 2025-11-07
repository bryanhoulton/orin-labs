import { Link } from 'lucide-react';

import { JoinUs } from '../components/Hiring';
import { OpenRoles } from '../components/OpenRoles';
import { Projects } from '../components/Projects';

export default function Hiring() {
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
        in a world <br /> where humans aren't left behind.
      </h4>

      <hr className="my-12" />

      <OpenRoles />

      <hr className="my-12" />

      <Projects />

      <hr className="my-12" />

      <JoinUs />
    </>
  );
}
