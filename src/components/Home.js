import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import the db from firebase.js
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods
import TestimonialCard from "./TestimonialCard"; // Import your testimonial card component
import ownerImage from "../assets/owner.jpeg"; // Add an image in the assets folder

function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialsCollection = collection(db, "testimonials");
      const testimonialsSnapshot = await getDocs(testimonialsCollection);
      const testimonialsList = testimonialsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(testimonialsList);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-purple-400 text-center">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">
        Gokul Priyan S
      </h1>
      <div className="flex justify-center items-center mb-8">
        <img
          src={ownerImage}
          alt="Owner"
          className="w-60 h-60 rounded-full mr-4 border-4 border-purple-400"
        />
        <div className="text-left">
          <p className="text-3xl">
            Full Stack Developer and Web3 Contract Writer.
          </p>
          <br />
          <p>
            Skilled in developing robust applications and secure smart
            contracts,
            <br />
            Passionate about using technology to deliver high-quality client
            solutions.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-purple-300">
        Testimonials
      </h2>

      {/* Grid container for testimonials */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
