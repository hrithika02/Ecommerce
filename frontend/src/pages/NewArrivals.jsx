// src/pages/NewArrivals.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import newArrivals from "../data/newArrivals";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const NewArrivals = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInCart = (item) => (cart || []).some((p) => p.id === item.id);
  const isInWishlist = (item) => (wishlist || []).some((p) => p.id === item.id);

  return (
    <div className="font-sans min-h-screen bg-gray-50 m-6
    ">
      {/* Product Grid */}
      <section className="">
        <h2 className="text-2xl font-bold mb-6 mt-10">Latest Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition relative group cursor-pointer"
              onClick={() => navigate(`/product/${product.slug}`)}
            >
              {/* Wishlist Icon */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  isInWishlist(product)
                    ? removeFromWishlist(product)
                    : addToWishlist(product);
                }}
              >
                <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={isInWishlist(product) ? "red" : "none"}
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

              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-52 w-full object-cover rounded mb-3"
              />

              {/* Product Details */}
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500 mb-3">${product.price}</p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  className={`flex-1 py-2 rounded text-white text-sm ${
                    isInCart(product) ? "bg-red-600" : "bg-black"
                  } hover:bg-gray-800`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isInCart(product)
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isInCart(product) ? "Remove" : "Add"}
                </button>

                <button
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded text-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.slug}`);
                  }}
                >
                  Buy
                </button>
              </div>
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

export default NewArrivals;
