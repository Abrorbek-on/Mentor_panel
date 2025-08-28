import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurslar" element={<Course />} />
        <Route path="/biz-haqimizda" element={<About />} />
        <Route path="/boglanish" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
