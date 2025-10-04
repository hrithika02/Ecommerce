// src/data/allProducts.js
import products from "./products";
import newArrivals from "./newArrivals";
import Category from "./Category";

const allProducts = [
  ...products.furniture,
  ...products.kitchen,
  ...newArrivals,
  ...Category,
];

export default allProducts;
