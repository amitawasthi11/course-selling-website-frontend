import { useEffect, useState } from "react";
import api from "../api/axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const res = await api.get("/user/courses");
     console.log("Courses API:", res.data);
console.log("Current URL:", window.location.href);

      setCourses(res.data);
    };

    loadCourses();
  }, []);

  return (
    <div className="p-10">
      <h1>Total Courses: {courses.length}</h1>

      {courses.map((course) => (
        <div key={course._id}>
          <h2>{course.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Courses;