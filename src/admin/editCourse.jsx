import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import adminApi from "../api/adminApi";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    isPublished: true,
  });

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const res = await adminApi.get("/admin/courses");

        const course = res.data.courses.find(
          (c) => c._id === id
        );

        if (course) {
          setFormData(course);
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to load course");
      }
    };

    loadCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await adminApi.put(
        `/admin/courses/${id}`,
        formData
      );

      toast.success(res.data.message);

      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update course");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold mb-6">
          Edit Course
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-3 rounded-lg"
          />

          <label className="flex gap-2">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            Published
          </label>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Update Course
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditCourse;