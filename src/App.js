import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTestimonial from "./components/AddTestimonial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-testimonial" element={<AddTestimonial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
