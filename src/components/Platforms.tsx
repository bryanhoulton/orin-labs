export function Platforms() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Our Platforms
      </h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
        We've been launching age-specific test platforms to evaluate how our
        tutors work with families over long-term learning journeys.
      </p>

      <a
        href="https://acadialearning.org/"
        target="_blank"
        className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:brightness-90"
        rel="noopener noreferrer"
      >
        <img
          src="/acadia.png"
          alt="Acadia Learning"
          className="aspect-square w-64 rounded-lg"
        />
      </a>
      <p className="text-lg text-gray-600 my-6 max-w-2xl leading-relaxed">
        Our first platform is{" "}
        <a
          href="https://acadialearning.org/"
          className="underline text-primary hover:text-primary-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acadia Learning
        </a>
        .
      </p>
    </div>
  );
}
