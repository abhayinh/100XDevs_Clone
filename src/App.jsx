import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import New_Course from "./Pages/New_Course.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New_Course" element={<New_Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
