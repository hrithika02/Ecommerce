// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
  if (!wishlist.some((w) => w.id === item.id)) {
    setWishlist([...wishlist, item]);
  }
};

const removeFromWishlist = (item) => {
  setWishlist(wishlist.filter((w) => w.id !== item.id));
};

  const isInWishlist = (item) => wishlist.some((w) => w.id === item.id);


  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
