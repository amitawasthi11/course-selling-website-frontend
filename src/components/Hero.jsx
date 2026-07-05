import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learn New Skills <br />
            Build Your Future 🚀
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Explore high-quality courses in Web Development,
            Programming, AI, and much more.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/courses"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/signup"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Learning"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;