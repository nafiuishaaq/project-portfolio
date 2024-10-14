import React from "react";
import Header from "./Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();

  const locationData = {
    portfolio: "Portfolio Projects",
    residential: "Residential Development along Tafawa Balewa Way Kaduna",
    building: "Building and Civil Engineering Contractor",
    consultancy: "Consultancy Services",
    construction: "Construction Designs`",
  };

  return (
    <div>
      <div
        class="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${abouthero})`,
        }}
      >
        <Header bgColor="bg-transparent" hoverText="text-red-300" />

        <h1 className="absolute text-5xl ml-[1rem] top-[20rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[17rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          {/* {location.pathname == "building" ? locationData["building"] : ""} */}
          {location.pathname.split("/")[1] == "portfolio"
            ? locationData["portfolio"]
            : location.pathname.split("/")[2] == undefined ||
              location.pathname.split("/")[2] == ""
            ? locationData["building"]
            : location.pathname.split("/")[2] == "consultancy"
            ? locationData["consultancy"]
            : location.pathname.split("/")[2] == "construction"
            ? locationData["construction"]
            : console.log(location.pathname.split("/")[2] == "residential") &&
              locationData["residential"]}
        </h1>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default Hero;
