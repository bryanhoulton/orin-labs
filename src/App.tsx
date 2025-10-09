import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div
      className="flex flex-col h-fit pt-[50vh]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.85)), url('/fall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="px-8 md:px-16 lg:px-24 z-10">
        <h1 className="text-7xl font-light text-white mb-2 leading-tight">
          Orin Labs
        </h1>
      </div>

      <div className="px-12 z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* Transparent footer */}
      <div className="px-12 z-10">
        <footer className="w-full mt-24 flex flex-col items-center text-white/80 text-sm">
          <hr className="w-full border-t border-white/20 mb-6" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <span className="font-mono tracking-wide">
                © {new Date().getFullYear()} Orin Labs. All rights reserved.
              </span>
              <nav className="flex gap-4 mt-2 md:mt-0">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/mission" className="hover:underline">
                  Mission
                </Link>
                <Link to="/team" className="hover:underline">
                  Team
                </Link>
                <Link to="/research" className="hover:underline">
                  Research
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/orinlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1200 1227"
                  className="inline-block align-middle"
                >
                  <path d="M1199.61 21.5h-276.2L600.01 505.6 276.59 21.5H0l423.13 617.7L0 1205.5h276.59l323.42-484.1 323.4 484.1h276.2L776.48 639.2 1199.61 21.5zm-186.6 1082.1l-412.99-618.1-413.01 618.1H137.6l462.41-692.1 462.39 692.1h-49.39z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/orinlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="inline-block align-middle"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
