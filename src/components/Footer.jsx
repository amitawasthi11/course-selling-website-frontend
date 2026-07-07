import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-400">
            Skillora
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            Learn industry-ready skills with practical,
            project-based courses designed to help you
            land your dream job.
          </p>
        </div>

        {/* Quick Links */}
        <div>

          <h2 className="font-bold text-xl mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link to="/">Home</Link>

            <Link to="/courses">
              Courses
            </Link>

            <Link to="/signup">
              Signup
            </Link>

          </div>

        </div>

        {/* Categories */}
        <div>

          <h2 className="font-bold text-xl mb-4">
            Categories
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <p>Web Development</p>

            <p>Backend</p>

            <p>React</p>

            <p>Node.js</p>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h2 className="font-bold text-xl mb-4">
            Contact
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <p>support@skillora.com</p>

            <p>Lucknow, India</p>

            <p>+91 XXXXX XXXXX</p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-gray-400">

        © 2026 Skillora. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;