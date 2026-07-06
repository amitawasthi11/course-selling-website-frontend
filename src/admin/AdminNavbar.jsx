import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/admin/dashboard"
          className="text-2xl font-bold text-blue-400"
        >
          Skillora Admin
        </Link>

        <div className="flex gap-6 items-center">

          <Link
            to="/admin/dashboard"
            className="hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/create-course"
            className="hover:text-blue-400"
          >
            Create Course
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default AdminNavbar;