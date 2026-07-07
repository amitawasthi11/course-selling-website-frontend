import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await api.get("/user/purchases");
        setPurchases(res.data.purchases || []);
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data?.message ||
            "Failed to fetch purchased courses"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">

      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold">
          My Courses
        </h1>

        <p className="text-gray-500 mt-4">
          Continue learning from your purchased courses.
        </p>
      </div>

      {purchases.length === 0 ? (
        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold">
            No Courses Purchased
          </h2>

          <p className="text-gray-500 mt-4">
            Purchase a course to start learning.
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {purchases.map((purchase) => {
            const course = purchase.courseId;

            return (
              <div
                key={purchase._id}
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

                  <p className="text-gray-500 mt-3">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center mt-6">

                    <h3 className="text-blue-600 text-2xl font-bold">
                      ₹{course.price}
                    </h3>

                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg">
                      ✓ Purchased
                    </span>

                  </div>

                  <button
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                  >
                    Continue Learning
                  </button>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default Purchases;