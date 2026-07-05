import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          Skillora
        </Link>

        {/* Navigation */}
        <div className="flex gap-8">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/courses" className="hover:text-blue-400">
            Courses
          </Link>

          <Link to="/purchases" className="hover:text-blue-400">
            My Purchases
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded border border-blue-500 hover:bg-blue-500"
          >
            Signup
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;