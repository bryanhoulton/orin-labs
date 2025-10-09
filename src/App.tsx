import {
  Linkedin,
  Twitter,
} from 'lucide-react';
import {
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Mission from './pages/Mission';

const HEADER = {
  "/": "Orin Labs",
  "/mission": "Mission",
};

function App() {
  const location = useLocation();
  const header = HEADER[location.pathname as keyof typeof HEADER];

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
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 z-10">
        <h1 className="text-6xl sm:text-7xl font-light text-white mb-2 leading-tight">
          {header}
        </h1>
      </div>

      <div className="z-10 md:px-8 lg:px-12">
        <div className="flex-1 w-fit pr-24 bg-gray-100 md:rounded-2xl z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </div>
      </div>

      {/* Transparent footer */}
      <div className="px-12 z-10">
        <footer className="w-full my-24 flex flex-col items-center text-white/80 text-sm">
          <hr className="w-full border-t border-white/20 mb-6" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <span className="font-mono tracking-wide">
                © {new Date().getFullYear()} Orin Labs, Inc. All rights
                reserved.
              </span>
              <nav className="flex gap-4 mt-2 md:mt-0">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/mission" className="hover:underline">
                  Mission
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/bryan_houlton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="inline-block align-middle" />
              </a>
              <a
                href="https://www.linkedin.com/company/learn-with-orin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="inline-block align-middle" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
