import { Goals } from '../components/Goals';
import { Hiring } from '../components/Hiring';

export default function Mission() {
  return (
    <>
      <h4 className="text-xl text-gray-900 leading-relaxed mb-6 italic">
        The quality of education is lowering, despite per-student spending
        increasing.
        <br />
        <br />
        Homeschool rates have doubled since the pandemic,
        <br />
        college attendance is falling and costing more,
        <br />
        and parents are spending more on education than ever.
        <br />
        <br />
        The clear bottleneck is the ability to{" "}
        <strong className="text-primary">teach</strong>.
      </h4>

      <hr className="my-12" />

      <Goals />

      <hr className="my-12" />

      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Team</h2>

        <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
          Orin Labs is led by <strong>Bryan Houlton</strong> and backed by top
          investors like Max Mullen, as well as angel investors from established
          education companies like Clever.
        </p>

        <Hiring />
      </div>
    </>
  );
}
