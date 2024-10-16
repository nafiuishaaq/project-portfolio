import React from "react";
import Header from "./Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import engineering from "../assets/engineering.png";
import consultancy from "../assets/consultancy.png";
import design from "../assets/designImage.jpeg";

const Hero = () => {
  const location = useLocation();

  const locationData = {
    portfolio: "Projects Portfolio",
    residential: "Residential Development along Tafawa Balewa Way Kaduna",
    commercial: "Proposed Construction of Rigachikun Market",
    building: "Building and Civil Engineering Contractor",
    consultancy: "Consultancy  Services",
    construction: "Construction Designs`",
    project: "Project Management",
  };

  const getHeroImage = () => {
    if (location.pathname === "/services") {
      return engineering;
    } else if (location.pathname === "/services/consultancy") {
      return consultancy;
    } else if (location.pathname === "/services/construction") {
      return design;
    } else {
      return abouthero;
    }
  };

  return (
    <div>
      <div>
        <div
          className="relative h-screen bg-cover bg-center bg-blend-darken"
          style={{
            backgroundImage: `url(${getHeroImage()})`,
          }}
        >
          {/* <div className="relative"></div> */}
          <div
            style={{
              background:
                "linear-gradient(to bottom,  rgba(0, 0, 0, 0.05), #000000",
            }}
            className="absolute bg-black bg-opacity-70 w-full h-[50%] bottom-0"
          ></div>
          <Header bgColor="bg-transparent" hoverText="text-red-300" />

          <h1 className="absolute text-4xl font-impara ml-[1rem] top-[23rem] sm:text-8xl md:text-7xl md:top-[23rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[13rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
            {/* {location.pathname == "building" ? locationData["building"] : ""} */}
            {location.pathname === "/portfolio"
              ? locationData["portfolio"]
              : location.pathname === "/portfolio/residential"
              ? locationData["residential"]
              : location.pathname === "/portfolio/commercial"
              ? locationData["commercial"]
              : location.pathname === "/services"
              ? locationData["building"]
              : location.pathname === "/services/consultancy"
              ? locationData["consultancy"]
              : location.pathname === "/services/construction"
              ? locationData["construction"]
              : location.pathname === "/services/project" &&
                locationData["project"]}
          </h1>
        </div>
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Hero;
