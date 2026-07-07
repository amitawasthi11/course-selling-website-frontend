// import Button from "./Button";

function CourseCard({ course,handlePurchase,isPurchased,}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={
          course.image ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
        }
        alt={course.title}
        className="h-56 w-full object-cover"
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

        {isPurchased ? (
  <button
    className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-default"
    disabled
  >
    ✓ Purchased
  </button>
) : (
  <button
    onClick={() => handlePurchase(course._id)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
  >
    Buy Course
  </button>
)}
        </div>

      </div>

    </div>
  );
}

export default CourseCard;