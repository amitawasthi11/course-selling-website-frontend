import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import adminApi from "../api/adminApi";

function CreateCourse() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
     const res = await adminApi.post(
  "/admin/create-course",
  {
    ...formData,
    price: Number(formData.price),
  }
);
      toast.success(res.data.message);

      navigate("/admin/dashboard");
    } catch (err) {
  console.log(JSON.stringify(err.response?.data, null, 2));

  toast.error(err.response?.data?.message || "Failed");
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[500px]">

        <h1 className="text-3xl font-bold mb-8">
          Create Course
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Course"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateCourse;