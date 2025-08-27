import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurslar" element={<Course />} />
        <Route path="/biz-haqimizda" element={<About />} />
        <Route path="/boglanish" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
