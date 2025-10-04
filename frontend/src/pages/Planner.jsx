// src/pages/Planner.jsx
import React, { useState } from "react";
import newArrivals from "../data/newArrivals";

const Planner = () => {
  const [plannerItems, setPlannerItems] = useState([]);

  // Add/remove item to planner
  const togglePlannerItem = (product) => {
    if (plannerItems.some((item) => item.id === product.id)) {
      setPlannerItems(plannerItems.filter((item) => item.id !== product.id));
    } else {
      setPlannerItems([...plannerItems, product]);
    }
  };

  // Calculate total price
  const totalPrice = plannerItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans px-8 py-12">
      
      {/* Hero Section */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">Room Planner</h1>
        <p className="mt-2 text-gray-600">Add your favorite furniture and plan your perfect room.</p>
      </section>

      {/* Planner List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Planner</h2>
        {plannerItems.length === 0 ? (
          <p className="text-gray-500">No items in your planner yet.</p>
        ) : (
          <ul className="space-y-2">
            {plannerItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <span>{item.name} - ₹{item.price}</span>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                  onClick={() => togglePlannerItem(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {plannerItems.length > 0 && (
          <div className="mt-4 font-semibold text-lg">Total: ₹{totalPrice}</div>
        )}
      </section>

      {/* Available Items */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Items</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newArrivals.map((item) => {
            const inPlanner = plannerItems.some((p) => p.id === item.id);
            return (
              <li
                key={item.id}
                className="flex flex-col justify-between bg-white p-3 rounded shadow"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">₹{item.price}</span>
                <button
                  className={`mt-2 py-1 rounded text-white ${
                    inPlanner ? "bg-red-600 hover:bg-red-500" : "bg-black hover:bg-gray-800"
                  }`}
                  onClick={() => togglePlannerItem(item)}
                >
                  {inPlanner ? "Remove" : "Add"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

    </div>
  );
};

export default Planner;
