import { Routes, Route, useLocation } from "react-router-dom";

// User
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Purchases from "./pages/Purchases";
import NotFound from "./pages/NotFound";
import ChooseLogin from "./pages/ChooseLogin";
import ChooseSignup from "./pages/ChooseSignup";

// Admin
import AdminSignup from "./admin/AdminSignup";
import AdminNavbar from "./admin/AdminNavbar";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import CreateCourse from "./admin/CreateCourse";
import EditCourse from "./admin/EditCourse";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";

function App() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin") &&
    location.pathname !== "/admin/login" &&
    location.pathname !== "/admin/signup";

  const hideNavbar = [
    "/login",
    "/signup",
    "/login/user",
    "/signup/user",
    "/admin/login",
    "/admin/signup",
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbar &&
        (isAdminRoute ? <AdminNavbar /> : <Navbar />)}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<ChooseLogin />} />
        <Route path="/signup" element={<ChooseSignup />} />

        <Route path="/login/user" element={<Login />} />
        <Route path="/signup/user" element={<Signup />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/purchases"
          element={
            <ProtectedRoute>
              <Purchases />
            </ProtectedRoute>
          }
        />

        {/* Admin Auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* Admin Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/create-course"
          element={
            <AdminProtectedRoute>
              <CreateCourse />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-course/:id"
          element={
            <AdminProtectedRoute>
              <EditCourse />
            </AdminProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;