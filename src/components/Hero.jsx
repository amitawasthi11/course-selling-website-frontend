import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            🚀 Learn From Industry Experts
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
            Learn Skills
            <br />
            That Get You
            <span className="text-blue-400"> Hired.</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            Join thousands of students learning Web Development,
            Backend, React, Node.js and more through premium,
            project-based courses.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/signup"
              className="border border-white hover:bg-white hover:text-black px-7 py-3 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

          </div>

          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                10+
              </h2>

              <p className="text-gray-300">
                Premium Courses
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                500+
              </h2>

              <p className="text-gray-300">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                100%
              </h2>

              <p className="text-gray-300">
                Practical Learning
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Learning"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;