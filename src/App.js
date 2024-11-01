import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTestimonial from "./components/AddTestimonial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home testimonials={testimonials} />} />
          <Route
            path="/add-testimonial"
            element={<AddTestimonial addTestimonial={addTestimonial} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
