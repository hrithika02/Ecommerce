import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import allProducts from "../data/allproducts.js";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");

 const filteredProducts = allProducts.filter((p) =>
  p.name?.toLowerCase().includes(query?.toLowerCase())
);


  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Search results for "{query}"</h2>

      {filteredProducts.length === 0 && <p>No products found.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg bg-white shadow hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/product/${product.slug}`)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
