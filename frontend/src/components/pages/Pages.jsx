import React from "react";
import Header from "../common/header/Header";
import { Route,Routes } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import Budgetracking from "../budgetrack/Budgetracking";
import Payments from "../payment/Payments";
import Newproduct from "../addproduct/Newproduct";
import Product from "../vendors/Product";
import Planner from "../planner/Planner";

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/budgetrack" element={<Budgetracking />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/newproduct" element={<Newproduct />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/planner" element={<Planner />} />


      </Routes>
      <Footer />
    </>
  );
}

export default Pages;
