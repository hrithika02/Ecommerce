import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product, showBuyNow = false }) => {
  const { cartItems, addToCart, removeFromCart, isInCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleBuyNow = () => {
    if (!isInCart(product)) addToCart(product);
    // You can add navigation to checkout page here
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <div className="border rounded-lg bg-white shadow hover:shadow-lg transition relative group">
        
        {/* Wishlist Icon */}
        <button
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          onClick={(e) => {
            e.preventDefault(); // prevent link click
            isInWishlist(product) ? removeFromWishlist(product) : addToWishlist(product);
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
          className="w-full h-48 object-cover rounded-t-lg"
        />

        {/* Product Details */}
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">$ {product.price}</p>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button
              className={`flex-1 py-2 rounded text-white ${
                isInCart(product) ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-gray-800"
              }`}
              onClick={(e) => {
                e.preventDefault();
                isInCart(product) ? removeFromCart(product) : addToCart(product);
              }}
            >
              {isInCart(product) ? "Remove" : "Add to Cart"}
            </button>

            {showBuyNow && (
              <button
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleBuyNow();
                }}
              >
                🛒 Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
