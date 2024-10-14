import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const PortfolioLayout = () => {
  return (
    <div>
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
