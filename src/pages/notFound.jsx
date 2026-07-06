import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const res = await api.get("/user/purchases");

      setPurchases(res.data.purchases);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch purchased courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-10">
        My Purchases
      </h1>

      {purchases.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          You haven't purchased any courses yet.
        </h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {purchases.map((purchase) => {
            const course = purchase.courseId;

            return (
              <div
                key={purchase._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
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

                  <div className="flex justify-between items-center mt-5">

                    <h3 className="text-blue-600 text-2xl font-bold">
                      ₹{course.price}
                    </h3>

                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-default"
                    >
                      Purchased ✓
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