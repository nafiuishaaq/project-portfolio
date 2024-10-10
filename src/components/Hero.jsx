import React from "react";
import Header from "./Header";
import abouthero from "../assets/about.png";

const Hero = () => {
  return (
    <div>
      <div
        class="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${abouthero})`,
        }}
      >
        <Header />
        <h1 class="absolute text-4xl ml-[1rem] top-[30rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[22rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          Embracing Tradition, Building the future.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
