import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const navigate = useNavigate();
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show navbar near the top
    if (currentScrollY < 120) {
      setShowNavbar(true);
    }
    // Hide while scrolling down
    else if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    }
    // Show while scrolling up
    else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
  `transition-all duration-200 ${
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-600 hover:text-blue-600"
  }`;
  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-200 transition-all duration-500 ${
    showNavbar
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0"
  }`}
  style={{
    backgroundColor: "rgba(255,255,255,0.9)",
  }}
>
  

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-slate-800 tracking-tight hover:text-blue-600 transition-colors duration-300"
        >
          Skillora
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-lg">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>

          {token && (
            <NavLink to="/purchases" className={navLinkClass}>
              My Courses
            </NavLink>
          )}

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">

          {token ? (
            <button
              onClick={handleLogout}
             className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-lg transition"
              >
                Signup
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;