// src/pages/Wishlist.jsx
import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, cartItems } = useCart();

  const moveToCart = (item) => {
    if (!cartItems.some((cartItem) => cartItem.name === item.name)) {
      addToCart(item);
    }
    removeFromWishlist(item);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg bg-white shadow hover:shadow-lg transition relative group"
            >
              {/* Wishlist Icon (Remove from wishlist) */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                onClick={() => removeFromWishlist(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.74 0-3.255 1.01-4.001 2.473A4.501 4.501 0 009 3.75C6.515 3.75 4.5 5.765 4.5 8.25c0 7.22 7.5 11.25 7.5 11.25s7.5-4.03 7.5-11.25z"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">$ {item.price}.00</p>

                {/* Move to Cart Button */}
                <button
                  className="flex-1 mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                  onClick={() => moveToCart(item)}
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
