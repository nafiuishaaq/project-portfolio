import React from "react";
import Header from "../components/Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AllProjectList from "../portfolio/AllProjectList";

const Portfolio = () => {
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
          Projects Portfolio
        </h1>
      </div>
      <Breadcrumb />

      <div className="text-center pt-10 text-[#363636] text-[24px] font-semibold">
        Projects Portfolio
      </div>

      <div className="px-14 pt-10">
        <div className="flex justify-center gap-3">
          <Link className="text-[#376B65] border-b-2">All</Link>
          <Link>Residential</Link>
          <Link>Commercial</Link>
        </div>

        <AllProjectList />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
