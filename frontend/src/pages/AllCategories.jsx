import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import Category from "../data/Category.js";

const CategoryPage = () => {
  const { category } = useParams();
  const products = Category.filter(p => p.category === category);

  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
