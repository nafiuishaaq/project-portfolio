import React from "react";
import Header from "../components/Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("about-vbl");

  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${abouthero})`,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom,  rgba(0, 0, 0, 0.05), #000000",
          }}
          className="absolute bg-black bg-opacity-70 w-full h-[50%] bottom-0 z-1"
        ></div>
        <Header bgColor="bg-transparent" hoverText="text-red-300" />

        <h1 className="absolute text-5xl ml-[1rem] font-impara top-[30rem] sm:text-8xl md:text-7xl md:top-[30rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[17rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          About VBL
        </h1>
      </div>
      <Breadcrumb />

      <div className=" md:grid grid-cols-2 px-10 lg:px-14 py-20">
        <div className="flex flex-col gap-4 font-semibold mb-10 font-proxima">
          <a
            href="#about-vbl"
            onClick={() => handleScroll("about-vbl")}
            className={`relative flex items-center cursor-pointer ${
              activeSection === "about-vbl"
                ? "text-green-600 font-bold"
                : "text-gray-500"
            }`}
          >
            {/* Circle behind the active text */}
            {activeSection === "about-vbl" && (
              <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
            )}
            <span className="ml-6">About VBL</span>
          </a>

          <a
            href="#mission-vision"
            onClick={() => handleScroll("mission-vision")}
            className={`relative flex items-center cursor-pointer ${
              activeSection === "mission-vision"
                ? "text-green-600 font-bold"
                : "text-gray-500"
            }`}
          >
            {activeSection === "mission-vision" && (
              <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
            )}
            <span className="ml-6">Mission & Vision</span>
          </a>

          <a
            href="#core-values"
            onClick={() => handleScroll("core-values")}
            className={`relative flex items-center cursor-pointer ${
              activeSection === "core-values"
                ? "text-green-600 font-bold"
                : "text-gray-500"
            }`}
          >
            {activeSection === "core-values" && (
              <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
            )}
            <span className="ml-6">Our Core Values</span>
          </a>
        </div>

        <div>
          <div className="mb-20" id="about-vbl">
            <h1 className="font-semibold text-3xl md:w-2/4 mb-8 font-impara">
              Embracing Tradition, Building the future.
            </h1>

            <p className="font-proxima">
              Vernacular Build Limited (VBL) redefines the essence of Building
              Construction and Civil Engineering Infrastructure by recognising
              the interconnectedness of Architecture, Construction, the
              Environment, and Culture. Our approach combines excellence,
              innovation, and cutting-edge technology with a solid commitment to
              preserving the environment and promoting sustainable construction
              practices.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-20" id="mission-vision">
            <div className="border-t-2 py-4">
              <h1 className="font-semibold text-3xl w-2/4 mb-8 font-impara">
                Our Purpose
              </h1>
              <p className="font-proxima">
                To lead Nigeria’s construction industry by exemplifying
                innovation, quality, and sustainability, serving clients with
                integrity while nurturing a workplace that attracts the finest
                of professionals.
              </p>
            </div>

            <div className="border-t-2 py-4">
              <h1 className="font-semibold text-3xl w-2/4 mb-8 font-impara">
                Our Mission
              </h1>
              <p className="font-proxima">
                To build quality, eco-friendly structures that harmonize
                innovative designs with cultural heritage, setting new standards
                in construction excellence and sustainability.
              </p>
            </div>

            <div className="border-t-2 py-4" id="core-values">
              <h1 className="font-semibold text-3xl w-2/4 mb-8 font-impara">
                Our Vision
              </h1>
              <p className="font-proxima">
                To redefine the skyline with structures that are landmarks of
                sustainability and cultural resonance, becoming the beacon of
                construction innovation and eco-excellence in the industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-semibold text-3xl w-2/4 mb-8 font-impara">
                Our Core Values
              </h1>
              <p className="font-proxima">
                At VBL, our core values and culture are centered around
                teamwork, respect, commitment, innovation, and environmental
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
