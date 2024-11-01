import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center border-b border-purple-300">
      <span className="text-lg font-bold text-purple-400">GP</span>
      <Link
        to="/add-testimonial"
        className="text-lg text-purple-400 hover:text-purple-300"
      >
        Add Testimonials
      </Link>
    </nav>
  );
}

export default Navbar;
