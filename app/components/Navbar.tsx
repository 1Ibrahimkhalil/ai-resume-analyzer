
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="navbar flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="shrink-0">
        <p className="text-2xl font-bold text-gradient">ResuAI</p>
      </Link>

      <div className="flex flex-wrap items-center gap-5">
        <NavLink to="/" end className={navLinkClass}>
         Home
        </NavLink>

        <NavLink to="/upload" className={navLinkClass}>
          Upload Resume
        </NavLink>

        <NavLink to="/wipe" className={navLinkClass}>
          Wipe Files
        </NavLink>

        <Link to="/auth" className="primary-button w-fit">
          Authentication
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
