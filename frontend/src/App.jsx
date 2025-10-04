import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import DesignServices from './pages/DesignServices.jsx';
import ShopByRoom from './pages/ShopByRoom.jsx';
import GiftCards from './pages/GiftCard.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Sale from './pages/Sale.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import User from './pages/User.jsx';
import AllCategories from './pages/AllCategories.jsx';
import ProductPage from './pages/ProductPage.jsx';
import products from "./data/products";
import SearchResults from "./pages/SearchResults.jsx"
import Planner from "./pages/Planner.jsx"
import styled from "styled-components";

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  color: #333;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/" || location.pathname === "/signup"; 

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fail" element={<Signup />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/designservices" element={<DesignServices />} />
          <Route path="/shopbyroom" element={<ShopByRoom />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/user" element={<User />} />
          <Route path="/:category" element={<AllCategories />} />
          <Route
  path="/product/:slug"
  element={<ProductPage productsData={products} />}
/>
<Route path="/search" element={<SearchResults />} />
<Route path="/planner" element={<Planner />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
