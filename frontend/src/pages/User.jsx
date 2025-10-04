// src/pages/User.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/"); // Redirect to homepage or login
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          onClick={() => navigate("/orders")}
        >
          Your Orders
        </button>

        <button
          className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          onClick={() => navigate("/address")}
        >
          Your Address
        </button>

        <button
          className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <button
          className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          onClick={() => navigate("/premium")}
        >
          Get Premium
        </button>
      </div>
      <button
          className="p-4 bg-white border border-red-500 text-red-500 w-1/3 h-14 mt-4 mx-auto rounded-lg shadow hover:bg-red-500 hover:text-white transition "
          onClick={handleLogout}
        >
          Logout
        </button>
    </div>
  );
};

export default User;
