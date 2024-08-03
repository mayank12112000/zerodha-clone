import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/SignUp";
import SupportPage from "./landing_page/support/SupportPage";
import About from "./landing_page/about/About";
import ProductPage from './landing_page/products/ProductPage';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NoFound";
import PricingPage from './landing_page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
