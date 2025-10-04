// src/pages/Sale.jsx
import React from "react";
import newArrivals from "../data/newArrivals"; // your dataset
import ProductCard from "../components/ProductCard"; // use the reusable card

const Sale = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[250px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Sale Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Big Sale on Home Decor</h2>
          <p className="mt-4 text-lg md:text-xl">Grab your favorite furniture at amazing discounts!</p>
        </div>
      </section>

      {/* Sale Products Grid */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Hot Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {newArrivals.map((product) => {
            // Add discounted price dynamically if needed
            const discountedPrice = product.price - (product.discount || 0) * product.price / 100;
            const productWithDiscount = { ...product, price: discountedPrice };

            return (
              <ProductCard
                key={product.id}
                product={productWithDiscount}
                showBuyNow={true} // optional Buy Now button
              />
            );
          })}
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

export default Sale;
