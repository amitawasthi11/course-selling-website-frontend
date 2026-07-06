
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Purchases from "./pages/Purchases";
import NotFound from "./pages/NotFound";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import CreateCourse from "./admin/CreateCourse";
import EditCourse from "./admin/EditCourse";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/admin/login" element={<AdminLogin />} />

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
        <Route path="/courses" element={<Courses />} />
       <Route
    path="/purchases"
    element={
        <ProtectedRoute>
            <Purchases />
        </ProtectedRoute>
    }
/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;