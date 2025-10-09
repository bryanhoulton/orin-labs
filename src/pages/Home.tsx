import { Goals } from '../components/Goals';
import { JoinUs } from '../components/Hiring';
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

      <JoinUs />
    </>
  );
}
