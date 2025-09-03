import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ProfilePage from "./pages/Profile";
import CategoryPage from "./pages/Category";
import CoursesPage from "./pages/Course";
import Camments from "./pages/Camments";
import Course_Category from "./pages/Course/Category";
import Darslar from "./pages/Course/Darslar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<CategoryPage />} />

        <Route path="/course" element={<CoursesPage />} />
        <Route path="/course/category" element={<Course_Category />} />
        <Route path="/course/darslar" element={<Darslar />} />

        <Route path="/comments" element={<Camments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
