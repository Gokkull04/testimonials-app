import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTestimonial({ addTestimonial }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    rating: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md text-purple-400">
        <h2 className="text-2xl font-bold mb-6 text-purple-300">
          Add a Testimonial
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-purple-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-400 bg-gray-700 rounded-lg text-purple-300 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-300">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-400 bg-gray-700 rounded-lg text-purple-300 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-300">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-400 bg-gray-700 rounded-lg text-purple-300 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-300">Rating (out of 5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-400 bg-gray-700 rounded-lg text-purple-300 focus:outline-none focus:border-purple-500"
              min="1"
              max="5"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTestimonial;
