import { useEffect, useState } from "react";

import api from "../api/axios";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";

function Home() {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchCourses() {

      try {

        const res = await api.get("/user/courses");

        setCourses(res.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    fetchCourses();

  }, []);

  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">

        <SectionTitle
          title="Featured Courses"
          subtitle="Start learning today"
        />

        {loading ? (

          <h2 className="text-center text-xl">
            Loading...
          </h2>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {courses.map((course) => (

              <CourseCard
                key={course._id}
                course={course}
              />

            ))}

          </div>

        )}

      </section>

      <Footer />

    </>
  );
}

export default Home;