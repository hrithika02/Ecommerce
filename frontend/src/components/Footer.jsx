// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div className="flex flex-col gap-6">

        <h1 className="text-3xl font-bold mb-3">
            Casa&<span className="text-gray-500">Aura</span>
          </h1>

        <div className="flex flex-col gap-2">
          <Link to="/" className="hover:underline hover:text-pink-400 transition">Home</Link>
          <Link to="/shop" className="hover:underline hover:text-pink-400 transition">Shop</Link>
          <Link to="/about" className="hover:underline hover:text-pink-400 transition">About Us</Link>
          <Link to="/contact" className="hover:underline hover:text-pink-400 transition">Contact Us</Link>
          <Link to="/sale" className="hover:underline hover:text-pink-400 transition">Sale</Link>
        </div>

        </div>

        <div className="flex flex-col items-start md:items-center gap-4">
          <h2 className="text-xl font-semibold mb-2">Join Newsletter</h2>
          <p className="mb-4 text-gray-300">Subscribe to get latest updates and offers.</p>
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <input type="email"  placeholder="Enter your email"  className="w-full px-4 py-2 text-white bg-transparent border-b-2 border-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"/>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-r-lg transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <h2 className="text-xl font-semibold mb-2">Social Media & Contact</h2>
          <div className="flex gap-6 text-2xl">
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
          </div>
          <p className="mt-2 text-gray-400 flex items-center gap-1">
            📧 <span>support@homedecor.com</span>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        2025 Casa&Aura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
