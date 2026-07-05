import Button from "./Button";

function CourseCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          React Masterclass
        </h2>

        <p className="text-gray-500 mt-2">
          Become a professional React Developer.
        </p>

        <h3 className="mt-4 text-blue-600 text-2xl font-bold">
          ₹999
        </h3>

        <Button className="w-full mt-5">
          Buy Course
        </Button>

      </div>
    </div>
  );
}

export default CourseCard;