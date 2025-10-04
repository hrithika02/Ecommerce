// src/pages/Contact.jsx
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
     const res = await axios.post("https://ecommerce-b-745m.onrender.com/api/contact", formData);
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[250px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg md:text-xl">We’d love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-8 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          {success && <p className="text-green-600 mb-4">{success}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border rounded px-3 py-2"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border rounded px-3 py-2 h-32"
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 font-semibold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-4 text-gray-600">
            We’re here to help and answer any question you might have.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Address:</strong> 123 Casa&Aura Street, Chennai, TN, India
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Email:</strong> support@casaandaura.com
            </li>
            <li>
              <strong>Working Hours:</strong> Mon - Sat: 9am - 6pm
            </li>
          </ul>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full max-w-5xl mx-auto h-[400px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.509458344574!2d76.99517431480677!3d11.016844592147135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ba4c3f8a2b%3A0x5c3b5bdf6a1f123!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695212345678!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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

export default Contact;
