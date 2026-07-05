import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-400 font-semibold mb-3">
            Learn Without Limits
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Master Modern Skills <br />
            Build Your Dream Career 🚀
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Learn Web Development, AI, Programming and more from
            industry-level courses.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              Explore Courses
            </Link>

            <Link
              to="/signup"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Learning"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;