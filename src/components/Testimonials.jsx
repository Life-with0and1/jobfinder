import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ayush Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "This platform helped me land my dream remote job! The job listings are super relevant.",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "The user interface is clean and easy to use. I applied to 5 jobs within 10 minutes!",
  },
  {
    name: "Ravi Verma",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "I found some of the best backend roles with flexible timing here. Highly recommend it.",
  },
  {
    name: "Neha Patel",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    feedback:
      "As someone looking for a remote data job, this site made it easy to filter and apply.",
  },
];

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-32 md:mx-32 mx-10">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-black mb-10">
        What Our Users Say
      </h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">{testimonials[activeIndex].name}</h3>
        <p className="text-sm text-gray-500 mb-2">{testimonials[activeIndex].role}</p>
        <p className="text-gray-700 text-sm">{testimonials[activeIndex].feedback}</p>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === idx ? "bg-blue-600" : "bg-blue-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
