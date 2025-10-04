// src/pages/ShopByRoom.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const rooms = [
  { name: "Living Room", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/living-room" },
  { name: "Bedroom", img: "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/bedroom" },
  { name: "Kitchen", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/kitchen" },
  { name: "Outdoor", img: "https://images.unsplash.com/photo-1662557499709-a8d7ef6d7d5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/outdoor" },
  { name: "Bathroom", img: "https://plus.unsplash.com/premium_photo-1681487208776-e308bfaa0539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/bathroom" },
  { name: "Office", img: "https://plus.unsplash.com/premium_photo-1680296669146-b6c258cbc62d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/office" },
  { name: "Kids Room", img: "https://plus.unsplash.com/premium_photo-1723618869794-7b9b36d9d150?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/kids-room" },
  { name: "Dining Room", img: "https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/dining-room" },
];

const ShopByRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[300px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Shop by Room Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Find the Perfect Room Setup</h2>
          <p className="mt-4 text-lg md:text-xl">Explore our curated collections for every room in your home</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Browse by Room</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, i) => (
            <div
              key={i}
              onClick={() => navigate(room.path)}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition cursor-pointer"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center font-semibold">{room.name}</div>
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

export default ShopByRoom;
