import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPurchases = async () => {
      try {
        const res = await api.get("/user/purchases");

        setPurchases(res.data.purchases || []);
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data?.message || "Failed to fetch purchases"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPurchases();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        My Purchases
      </h1>

      {purchases.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold">
            No purchased courses yet.
          </h2>
          <p className="text-gray-500 mt-2">
            Buy a course to see it here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {purchases.map((purchase) => {
            const course = purchase.courseId;

            return (
              <div
                key={purchase._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
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

                  <div className="flex justify-between items-center mt-6">
                    <h3 className="text-blue-600 text-2xl font-bold">
                      ₹{course.price}
                    </h3>

                    <button
                      disabled
                      className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                    >
                      ✓ Purchased
                    </button>
                  </div>
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