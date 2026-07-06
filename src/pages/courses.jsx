import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CourseSkeleton from "../components/CourseSkeleton";
import api from "../api/axios";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";

function Courses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [purchasedIds, setPurchasedIds] = useState([]);
  const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
  const handlePurchase = async (courseId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first!");
      navigate("/login");
      return;
    }

    try {
      const res = await api.post(`/user/purchase/${courseId}`);

      toast.success(res.data.message);

      // Update UI immediately
      setPurchasedIds((prev) => [...prev, courseId]);
    } catch (err) {
      console.error(err);

      if (err.response?.status === 409) {
        toast.error("You already purchased this course.");
      } else {
        toast.error(
          err.response?.data?.message || "Purchase failed."
        );
      }
    }
  };

useEffect(() => {
  const loadData = async () => {
    try {
      const coursesRes = await api.get("/user/courses");
      setCourses(coursesRes.data);

      const token = localStorage.getItem("token");

      if (token) {
        const purchasesRes = await api.get("/user/purchases");

        const ids = purchasesRes.data.purchases.map(
          (purchase) => purchase.courseId._id
        );

        setPurchasedIds(ids);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);

  const filteredCourses = courses.filter((course) =>
course.title.toLowerCase().includes(search.toLowerCase())
);
  // if (loading) {
  //   return (
  //     <h1 className="text-center text-3xl font-bold mt-20">
  //       Loading...
  //     </h1>
  //   );
  // }
  if (loading) {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <CourseSkeleton key={index} />
      ))}
    </div>
  );
}

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

<div className="mb-10">
  <input
    type="text"
    placeholder="🔍 Search Courses..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border border-slate-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

      <SectionTitle
        title="All Courses"
        subtitle="Choose your next skill and start learning today."
      />

      {filteredCourses.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            No Courses Available
          </h2>

          <p className="text-gray-500 mt-4">
            Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {filteredCourses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              handlePurchase={handlePurchase}
              isPurchased={purchasedIds.includes(course._id)}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Courses;