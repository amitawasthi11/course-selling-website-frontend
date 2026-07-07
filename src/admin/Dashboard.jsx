import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import adminApi from "../api/adminApi";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await adminApi.get("/admin/courses");
        setCourses(res.data.courses || []);
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data?.message || "Failed to fetch courses"
        );
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await adminApi.delete(`/admin/courses/${id}`);

      setCourses((prev) =>
        prev.filter((course) => course._id !== id)
      );

      toast.success("Course deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to delete course"
      );
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <Link
          to="/admin/create-course"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          + Create Course
        </Link>
      </div>

      {/* Dashboard Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">Total Courses</p>

          <h1 className="text-4xl font-bold mt-2">
            {courses.length}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">Published</p>

          <h1 className="text-4xl font-bold mt-2">
            {courses.filter((c) => c.isPublished).length}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">Revenue</p>

          <h1 className="text-4xl font-bold mt-2">
            ₹
            {courses.reduce(
              (sum, course) => sum + course.price,
              0
            )}
          </h1>
        </div>

      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-3xl font-bold text-gray-700">
            No Courses Found
          </h2>

          <p className="text-gray-500 mt-3">
            Create your first course or try another search.
          </p>

        </div>
      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {filteredCourses.map((course) => (

            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
            >

              <img
                src={
                  course.image ||
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                }
                alt={course.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="text-gray-500 mt-3 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <h3 className="text-blue-600 text-2xl font-bold">
                    ₹{course.price}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {course.isPublished
                      ? "Published"
                      : "Draft"}
                  </span>

                </div>

                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/admin/edit-course/${course._id}`}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded-lg transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteCourse(course._id)
                    }
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Dashboard;