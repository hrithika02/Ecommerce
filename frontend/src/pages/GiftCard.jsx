// src/pages/GiftCards.jsx
import React from "react";

const giftCards = [
  { id: 1, name: "₹500 Gift Card", value: 500, img: "https://images.unsplash.com/photo-1543349823-729e19b44e31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "₹1000 Gift Card", value: 1000, img: "https://images.unsplash.com/photo-1577398940885-a729dbed5655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "₹2000 Gift Card", value: 2000, img: "https://images.unsplash.com/photo-1543428073-a0f0337eead3?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "₹5000 Gift Card", value: 5000, img: "https://images.unsplash.com/photo-1543342578-b01e1755cc6b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const GiftCards = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[300px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Gift Cards Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Give the Perfect Gift</h2>
          <p className="mt-4 text-lg md:text-xl">Casa&Aura Gift Cards for every occasion</p>
        </div>
      </section>

      {/* Gift Card List - Alternating Layout */}
      <section className="px-8 py-12 space-y-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Available Gift Cards</h2>
        {giftCards.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.name}
              className="w-full md:w-1/2 h-60 object-cover"
            />

            {/* Content */}
            <div className="p-6 md:w-1/2 text-center">
              <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
              <p className="text-gray-600 text-sm mb-4">Value: ₹{card.value}</p>
              <button className="mt-2 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        ))}
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

export default GiftCards;
