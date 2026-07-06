import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import adminApi from "../api/adminApi";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <Link
          to="/admin/create-course"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Create Course
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold">
            No Courses Found
          </h2>

          <p className="text-gray-500 mt-3">
            Click "Create Course" to add your first course.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  course.image ||
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                }
                alt={course.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {course.description}
                </p>

                <h3 className="text-blue-600 text-2xl font-bold mt-5">
                  ₹{course.price}
                </h3>

                <div className="flex gap-3 mt-6">
                  <Link
                    to={`/admin/edit-course/${course._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
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