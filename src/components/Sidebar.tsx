import {
  Link,
  useLocation,
} from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/research", label: "Research" },
    { path: "/team", label: "Team" },
    { path: "/mission", label: "Mission" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed h-full overflow-hidden">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Orin Labs
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-sm font-medium py-2 px-3 rounded transition-colors ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
