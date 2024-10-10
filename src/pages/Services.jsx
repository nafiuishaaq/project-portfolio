import React from "react";
import Header from "../components/Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "../components/Breadcrumb";

const Services = () => {
  return (
    <div className="relative">
      <div
        class="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${abouthero})`,
        }}
      >
        <Header bgColor="bg-transparent" hoverText="text-red-300" />

        <h1 className="absolute text-4xl ml-[1rem] top-[30rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[17rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          Building and Civil Engineering Contractor
        </h1>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default Services;
