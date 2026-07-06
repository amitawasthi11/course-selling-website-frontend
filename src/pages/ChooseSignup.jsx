import { Link } from "react-router-dom";

function ChooseSignup() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Choose your account type
        </p>

        <div className="space-y-5">

          <Link
            to="/signup/user"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            👤 User Signup
          </Link>

          <Link
            to="/admin/signup"
            className="block text-center bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            🛡 Admin Signup
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ChooseSignup;