// src/pages/AboutUs.jsx
import React from "react";

const teamMembers = [
  { id: 1, name: "Ananya Sharma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1659353215553-044993dcdd39?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Rohan Verma", role: "Head of Design", img: "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Priya Singh", role: "Marketing Lead", img: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Vikram Patel", role: "Customer Support", img: "https://plus.unsplash.com/premium_photo-1705563088246-3673a401ed6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const AboutUs = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[300px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Story & Mission</h2>
          <p className="mt-4 text-lg md:text-xl">Creating stylish, modern homes with passion</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-8 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Casa&Aura started with a simple mission: to transform homes into stylish, comfortable spaces
          that reflect individuality and taste. We carefully curate modern furniture and décor to make
          your home beautiful and functional. Our team of designers and home enthusiasts are dedicated
          to providing the best products and a seamless shopping experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-8 py-12 bg-gray-50 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To bring modern, stylish, and quality home décor to everyone, making homes beautiful and cozy.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be the most trusted and innovative home décor brand, inspiring people to create spaces they love.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Casa&Aura?</h2>
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

export default AboutUs;
