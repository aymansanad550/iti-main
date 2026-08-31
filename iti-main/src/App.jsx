import React from "react";
import BtmHeader from "./components/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import CartPage from "./page/Cart/Cart";
import Cart from "./page/Cart/Cart";
import Search from "./page/search/Search";
import Products from "./page/products/Products";
import Checkout from "./page/checkout/Checkout";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Contact from "./page/contact/Contact";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:slug" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
