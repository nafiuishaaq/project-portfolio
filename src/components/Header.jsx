import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <nav class="flex justify-between p-[30px] pt-20 px-[250px]">
        <img src={logo} alt="" width="100px" />
        <div className="flex gap-[50px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
