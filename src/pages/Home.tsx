import { JoinUs } from '../components/Hiring';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#f4f5f0] dark:bg-neutral-900 min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-60"
          style={{ backgroundImage: "url(/tree_color.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f5f0]/95 via-[#f4f5f0]/40 to-transparent dark:from-neutral-900/95 dark:via-neutral-900/40 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] p-8 sm:p-12 lg:p-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-neutral-900 dark:text-neutral-100 leading-[1.05] max-w-3xl">
            We build<br />autonomous
            <br />
              intelligence.
          </h1>
         
        </div>
      </div>

      {/* Manifesto */}
      <div className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 leading-[1.5] space-y-6 font-light w-full px-8 sm:px-12 lg:px-16 text-justify hyphens-auto">

      <p>
      Orin Labs is building frontier systems to automate operations. We believe the most promising path to radical abundance is through intelligence that can act, rather than just answer.
      </p>

      <p>
      To achieve this, we combine long-horizon training with new architectures, benchmarks, environments, safety research, and real deployments. Already our agents have been running for years, acting independently in the real world.
      </p>

      <p>
      We are a small group of engineers and researchers working to solve a short list of fundamental societal bottlenecks. If this sounds interesting, please reach out.
      </p>
      </div>

      {/* Join Us */}
      <JoinUs />
    </>
  );
}
