import { JoinUs } from '../components/Hiring';
import { OpenRoles } from '../components/OpenRoles';

export default function Hiring() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        We believe in a world <br /> where AI teaches humans.
      </h4>

      <hr className="my-12" />

      <OpenRoles />

      <hr className="my-12" />

      <JoinUs />
    </>
  );
}
