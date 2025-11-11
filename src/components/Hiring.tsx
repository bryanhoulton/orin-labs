import { Link, useLocation, useNavigate } from "react-router-dom";

export function Hiring() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById("join-us");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("join-us");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
      We are{" "}
      <Link
        to="/#join-us"
        onClick={handleHashClick}
        className="text-primary underline"
      >
        hiring engineers
      </Link>
      . If you have built realtime AI systems, dynamic memory, or proactive
      agents, we want to talk to you.
    </p>
  );
}

export function JoinUs() {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Join Us</h2>
      <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
        We are a small, San Francisco-based research lab focused on making AI
        that teaches humans. We are building AI that solves real problems for
        real people.
      </p>
      <Hiring />
    </div>
  );
}
