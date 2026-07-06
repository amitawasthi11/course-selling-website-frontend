import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import adminApi from "../api/adminApi";

function AdminSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await adminApi.post("/admin/signup", formData);

      localStorage.setItem("adminToken", res.data.token);

      toast.success("Admin account created successfully!");

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Signup
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg"
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an admin account?

          <Link
            to="/admin/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default AdminSignup;