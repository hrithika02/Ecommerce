// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import allProducts from "../data/allproducts";

const ProductPage = () => {
  const { slug } = useParams(); // get product slug from URL
  const product = allProducts.find((p) => p.slug === slug);

  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return <p className="text-center mt-10 text-lg">❌ Product not found</p>;
  }

  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 🖼 Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow"
        />

        {/* 📖 Product Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg">$ {product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          {/* ⭐ Action Buttons */}
          <div className="flex gap-4 mt-4">
            {/* Cart */}
            <button
              className={`px-6 py-2 rounded font-semibold ${
                isInCart(product)
                  ? "bg-red-600 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
              onClick={() =>
                isInCart(product) ? removeFromCart(product) : addToCart(product)
              }
            >
              {isInCart(product) ? "Remove from Cart" : "Add to Cart"}
            </button>

            {/* Wishlist */}
            <button
              className={`px-6 py-2 rounded font-semibold border ${
                isInWishlist(product)
                  ? "border-red-600 text-red-600"
                  : "border-gray-400 text-gray-700 hover:border-gray-600"
              }`}
              onClick={() =>
                isInWishlist(product)
                  ? removeFromWishlist(product)
                  : addToWishlist(product)
              }
            >
              {isInWishlist(product) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          {/* 📋 Product Info Table */}
          {product.details && (
            <table className="mt-6 text-sm text-gray-600">
              <tbody>
                {Object.entries(product.details).map(([key, value]) => (
                  <tr key={key}>
                    <td className="pr-4 font-semibold">{key}:</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
