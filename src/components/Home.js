import React from "react";
import TestimonialCard from "./TestimonialCard";
import ownerImage from "../assets/owner.jpeg"; // Add an image in the assets folder

function Home({ testimonials }) {
  return (
    <div className="p-6 text-center bg-gray-900 text-purple-400 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">
        Gokul Priyan S
      </h1>
      <div className="flex justify-center items-center mb-8">
        <img
          src={ownerImage}
          alt="Owner"
          className="w-72 h-72 rounded-full mr-4 border-4 border-purple-400"
        />
        <div className="text-left">
          <p className="text-3xl">
            Full Stack Developer and Web3 Contract Writer.
                  </p>
                  <br></br>
          <p>
            Skilled in developing robust applications and secure smart
            contracts,<br></br> I’m passionate about using technology to deliver
            high-quality client solutions.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-purple-300">
        Testimonials
      </h2>

      {/* Grid container for testimonials */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))
        ) : (
          <p className="text-purple-400">
            No testimonials yet. Be the first to add one!
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
