import React from "react";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const ServicesLayout = () => {
  return (
    <div>
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ServicesLayout;
