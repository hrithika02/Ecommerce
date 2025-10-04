// src/pages/Cart.jsx
import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  // Toggle selection for an item
  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Calculate total only for selected items
  const totalAmount = selectedItems.reduce((sum, item) => sum + Number(item.price), 0);
 console.log("Total Amount:", totalAmount);

  // Buy Now handler
  const handlebuynow = async () => {
  try {
    if (totalAmount <= 0) {
      alert("Please select at least one item!");
      return;
    }
   const localurl = "https://ecommerce-b-4ggf.onrender.com/api/payment";
    const { data } = await axios.post(`${localurl}/orders`, {
      amount: totalAmount,
    });

    if (!data || !data.data) {
      alert("Payment initiation failed! Please try again.");
      return;
    }

    initPayment(data.data); // pass the order object to Razorpay
  } catch (err) {
    console.error("Payment initiation failed:", err);
    alert("Payment initiation failed! Please check console for details.");
  }
};


  // Initialize Razorpay checkout
  const initPayment = (orderData) => {
    if (!window.Razorpay) {
      return alert("Razorpay SDK not loaded. Check index.html for script inclusion.");
    }

    const options = {
      key: "rzp_live_RO4OKwgiVUSpZy", // Replace with your Razorpay Key ID
      amount: orderData.amount,
      currency: orderData.currency,
      description: "Purchase from Casa&Aura",
      order_id: orderData.id,
      handler:async (response) => {
        await axios.post("https://ecommerce-b-4ggf.onrender.com/api/payment/verify", response).then(res=>{
        if(res.data.success){
          alert("Payment Successful!");  
        } else {
          alert("Payment verification failed! Please contact support.");
        }
        }).catch(err=>{
          console.error("Payment verification failed:", err);
        });
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => toggleSelect(item)}
                  className="w-5 h-5"
                />
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">$ {item.price}.00</p>
                </div>
              </div>
              <button
                className="text-red-600 font-semibold hover:text-red-500"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total & Buy */}
          <div className="flex justify-between items-center mt-6 p-4 border-t">
            <h2 className="text-xl font-bold">Total: $ {totalAmount.toFixed(2)}</h2>
            <button
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 disabled:bg-gray-400"
              disabled={selectedItems.length === 0}
              onClick={handlebuynow}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
