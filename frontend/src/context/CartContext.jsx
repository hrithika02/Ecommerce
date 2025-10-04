import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      if (prev.some((i) => i.name === item.name)) return prev; // already exists
      return [...prev, item];
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  const isInCart = (item) => cartItems.some((i) => i.name === item.name);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
