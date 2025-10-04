// src/pages/Testimonials.jsx
import React, { useState } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    review:
      "Casa&Aura transformed my living room! The furniture is stylish and of great quality.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rohan Verma",
    review:
      "Amazing customer service and fast delivery. Highly recommend Casa&Aura!",
    img: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Priya Singh",
    review:
      "I loved the modern designs and the attention to detail. Will shop again.",
    img: "https://images.unsplash.com/photo-1682837902128-9aa4e92522d9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Vikram Patel",
    review:
      "High-quality furniture at great prices. The online shopping experience was seamless.",
    img: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) return;

    const newTestimonial = {
      id: testimonials.length + 1,
      name,
      review,
      img: "https://source.unsplash.com/100x100/?face", // fallback random face
    };

    setTestimonials([newTestimonial, ...testimonials]); // add new review at top
    setName("");
    setReview("");
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[250px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Testimonials Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Real reviews from our happy clients
          </p>
        </div>
      </section>

      {/* Add Testimonial Form */}
      <section className="px-8 py-12 bg-white shadow-md rounded max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-bold mb-6 text-center">
          Share Your Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Review"
            className="w-full p-3 border rounded focus:outline-none focus:ring"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Submit Review
          </button>
        </form>
      </section>

      {/* Testimonials Grid */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 text-sm mb-4">"{t.review}"</p>
              <h3 className="font-semibold text-lg">{t.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Casa&Aura?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/free-shipping.png"
              alt="Free Shipping"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On all orders over $100</p>
          </div>
          <div className="text-center">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/return.png"
              alt="Easy Returns"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day hassle-free returns</p>
          </div>
          <div className="text-center">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/customer-support.png"
              alt="24/7 Support"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">We're here to help anytime</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
