import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Stats from "../components/Stats";
import api from "../api/axios";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";
import FAQ from "../components/FAQ";


function Home() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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
  } catch (err) {
    console.error(err);

    if (err.response?.status === 409) {
      toast.error("You already purchased this course.");
    } else {
      toast.error(err.response?.data?.message || "Purchase failed.");
    }
  }
};

  useEffect(() => {
    async function fetchCourses() {
      try {
        // const res = await api.get("/user/courses");
        // setCourses(res.data);
        const res = await api.get("/user/courses");

console.log(res.data);

setCourses(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <>
      <Hero />
     <Stats />
      <section className="max-w-7xl mx-auto py-20 px-6">
        <SectionTitle
          title="Featured Courses"
          subtitle="Start learning with our best courses"
        />

        {loading ? (
          <h2 className="text-center text-2xl font-semibold">
            Loading...
          </h2>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                handlePurchase={handlePurchase}
              />
            ))}
          </div>
        )}
      </section>
    <Testimonials />
    <FAQ />
      <Footer />
    </>
  );
}

export default Home;