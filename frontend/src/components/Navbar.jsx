import React, { useState, useEffect } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../App.css"; // for scrollbar-hide

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white">
      <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 gap-12">
        <div className="hidden items-center gap-2 border rounded-full px-3 py-1 border-gray-300 hover:shadow-md transition w-40 md:flex md:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm sm:text-base bg-transparent w-full placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}/>
          <FaSearch
            className="text-gray-600 cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        {/* Logo */}
        <Link to="/home" className="text-3xl md:text-4xl font-bold text-gray-900 md:pr-20 ">
          Casa&<span className="text-gray-500">Aura</span>
        </Link>

        {/* User Icons */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 text-gray-700 border p-2 rounded-full hover:shadow-md cursor-pointer transition"
            onClick={() => navigate("/user")}
          >
            {username && <span className="text-sm font-medium">{username}</span>}
            <FaUser />
          </div>
          <Link to="/wishlist" className="relative">
            <FaHeart className="w-6 h-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="lg:hidden flex justify-end pt-1 items-center border-b fixed bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md border hover:bg-gray-100 transition"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className="hidden lg:flex bg-white text-sm text-gray-700 border-t border-b px-6 py-2 flex-wrap justify-center gap-6">
        <Link to="/newarrivals" className="hover:text-gray-900 transition">
          New Arrivals
        </Link>
        <Link to="/designservices" className="hover:text-gray-900 transition">
          Design Services
        </Link>
        <Link to="/shopbyroom" className="hover:text-gray-900 transition">
          Shop by Room
        </Link>
        <Link to="/giftcards" className="hover:text-gray-900 transition">
          Gift Cards
        </Link>
        <Link to="/testimonials" className="hover:text-gray-900 transition">
          Testimonials
        </Link>
        <Link to="/aboutus" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>
        <Link
          to="/sale"
          className="text-red-600 font-semibold hover:text-red-500 transition"
        >
          Sale
        </Link>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-xl"
          >
            ✖
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <Link to="/newarrivals" onClick={() => setIsOpen(false)}>
            New Arrivals
          </Link>
          <Link to="/designservices" onClick={() => setIsOpen(false)}>
            Design Services
          </Link>
          <Link to="/shopbyroom" onClick={() => setIsOpen(false)}>
            Shop by Room
          </Link>
          <Link to="/giftcards" onClick={() => setIsOpen(false)}>
            Gift Cards
          </Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link to="/aboutus" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/sale"
            className="text-red-600 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Sale
          </Link>
        </nav>
      </div>

      <div className="bg-black text-white text-md font-semibold px-4 py-3 flex space-x-6 overflow-x-auto scrollbar-hide mx-auto lg:justify-center">
        <Link to="/furniture" className="whitespace-nowrap hover:text-gray-300 transition">Furniture</Link>
        <Link to="/outdoor" className="whitespace-nowrap hover:text-gray-300 transition">Outdoor</Link>
        <Link to="/kitchen" className="whitespace-nowrap hover:text-gray-300 transition">Kitchen & Dining</Link>
        <Link to="/bedding" className="whitespace-nowrap hover:text-gray-300 transition">Bedding</Link>
        <Link to="/bath" className="whitespace-nowrap hover:text-gray-300 transition">Bath</Link>
        <Link to="/decor" className="whitespace-nowrap hover:text-gray-300 transition">Decor & Pillows</Link>
        <Link to="/rugs" className="whitespace-nowrap hover:text-gray-300 transition">Rugs</Link>
        <Link to="/lighting" className="whitespace-nowrap hover:text-gray-300 transition">Lighting</Link>
        <Link to="/wallart" className="whitespace-nowrap hover:text-gray-300 transition">Wall Art & Frames</Link>
        <Link to="/window" className="whitespace-nowrap hover:text-gray-300 transition">Window</Link>
        <Link to="/gifts" className="whitespace-nowrap hover:text-gray-300 transition">Gifts</Link>
        <Link to="/kids" className="whitespace-nowrap hover:text-gray-300 transition">Kids & Teens</Link>
        <Link to="/planner" className="whitespace-nowrap hover:text-gray-300 transition">Planner</Link>
      </div>

    </nav>
  );
};

export default Navbar;
