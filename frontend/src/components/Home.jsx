import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import rooms from "../data/rooms";
import products from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("furniture");
  const navigate = useNavigate();

  // cart + wishlist from context
  const { cart, addToCart, removeFromCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // helper: check if product is in cart
  const isInCart = (item) => (cart || []).some((p) => p.id === item.id);
  const isInWishlist = (item) => (wishlist || []).some((p) => p.id === item.id);

  return (
    <div className="font-sans text-xs md:text-sm lg:text-base">
      {/* 🎯 Hero Section */}
      <section className="relative bg-gray-100 h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Home Decor Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Transform Your Home</h1>
          <p className="mt-4 text-lg">Modern Furniture & Stylish Decor</p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200" onClick={() => navigate('/newarrivals')}>
            Shop Now
          </button>
        </div>
      </section>

      {/* 🏡 Featured Categories */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Room</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <button
              key={room.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/${room.title.toLowerCase()}`)}
            >
              <img
                src={room.imageUrl}
                alt={room.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center font-semibold">{room.title}</div>
            </button>
          ))}
        </div>
      </section>


      {/* Tabs */}
      <div className="flex bg-gray-300 rounded-full p-1 w-2/3 mx-auto md:w-max ">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === category
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            onClick={() => setActiveTab(category)}
          >
            {category === "furniture"
              ? "Shop Furniture & Decor"
              : "Shop Kitchen & Entertaining"}
          </button>
        ))}
      </div>

      {/* Featured Products */}
      <section className="px-8 py-12 bg-gray-50 rounded-lg mx-4 md:mx-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Featured {activeTab === "furniture" ? "Furniture & Decor" : "Kitchen & Entertaining"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products[activeTab].map((item) => (
            <div
              key={item.id}
              className="border rounded-lg bg-white shadow hover:shadow-lg transition relative group"
            >
              {/* Wishlist Icon */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                onClick={() =>
                  isInWishlist(item) ? removeFromWishlist(item) : addToWishlist(item)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={isInWishlist(item) ? "red" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4 text-gray-600 group-hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
         2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
         C13.09 3.81 14.76 3 16.5 3
         19.58 3 22 5.42 22 8.5
         c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>

              <Link key={item.id} to={`/product/${item.slug}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </Link>
              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">$ {item.price}</p>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-3">
                  <button
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
                    onClick={() =>
                      isInCart(item)
                        ? removeFromCart(item)
                        : addToCart(item)
                    }
                  >
                    {isInCart(item) ? "Remove from Cart" : "Add to Cart"}
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100">
                    🛒 Buy Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
