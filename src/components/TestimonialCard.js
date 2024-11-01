import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 border border-purple-400 text-purple-200">
      <h3 className="text-lg font-semibold text-purple-300">
        {testimonial.name}
      </h3>
      <p className="text-sm text-purple-400">{testimonial.company}</p>
      <p className="text-purple-300">Contact: {testimonial.contact}</p>
      <p className="text-yellow-400">Rating: {testimonial.rating}/5</p>
    </div>
  );
}

export default TestimonialCard;
