import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        <Link
          to="/admin/dashboard"
          className="text-2xl font-bold"
        >
          Skillora Admin
        </Link>

        <div className="flex gap-5">

          <Link to="/admin/dashboard">
            Dashboard
          </Link>

          <Link to="/admin/create-course">
            Create Course
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default AdminNavbar;