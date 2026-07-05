
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Purchases from "./pages/Purchases";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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