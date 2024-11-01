import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4 shadow-md text-purple-400">
      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
      <p className="text-purple-300">{testimonial.company}</p>
      <p className="text-purple-300">{testimonial.contact}</p>
      <p className="text-yellow-400">Rating: {testimonial.rating}/5</p>
    </div>
  );
}

export default TestimonialCard;
