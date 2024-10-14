import React from "react";
import Header from "../components/Header";
import abouthero from "../assets/about.png";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${abouthero})`,
        }}
      >
        <Header bgColor="bg-transparent" hoverText="text-red-300" />

        <h1 className="absolute text-5xl ml-[1rem] top-[30rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[17rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          About VBL
        </h1>
      </div>
      <Breadcrumb />

      <div className=" md:grid grid-cols-2 px-10 lg:px-14 py-20">
        <div className="flex flex-col gap-4 font-semibold mb-10">
          <Link>About VBL</Link>
          <Link>Mission & Vision</Link>
          <Link>Our Core Values</Link>
        </div>

        <div>
          <div className="mb-20">
            <h1 className="font-semibold text-3xl md:w-2/4 mb-8">
              Embracing Tradition, Building the future.
            </h1>

            <p>
              Vernacular Build Limited (VBL) redefines the essence of Building
              Construction and Civil Engineering Infrastructure by recognising
              the interconnectedness of Architecture, Construction, the
              Environment, and Culture. Our approach combines excellence,
              innovation, and cutting-edge technology with a solid commitment to
              preserving the environment and promoting sustainable construction
              practices.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            <div className="border-t-2 py-4">
              <h1 className="font-semibold text-3xl w-2/4 mb-8">Our Purpose</h1>
              <p>
                To lead Nigeria’s construction industry by exemplifying
                innovation, quality, and sustainability, serving clients with
                integrity while nurturing a workplace that attracts the finest
                of professionals.
              </p>
            </div>

            <div className="border-t-2 py-4">
              <h1 className="font-semibold text-3xl w-2/4 mb-8">Our Mission</h1>
              <p>
                To build quality, eco-friendly structures that harmonize
                innovative designs with cultural heritage, setting new standards
                in construction excellence and sustainability.
              </p>
            </div>

            <div className="border-t-2 py-4">
              <h1 className="font-semibold text-3xl w-2/4 mb-8">Our Vision</h1>
              <p>
                To redefine the skyline with structures that are landmarks of
                sustainability and cultural resonance, becoming the beacon of
                construction innovation and eco-excellence in the industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-semibold text-3xl w-2/4 mb-8">
                Our Core Values
              </h1>
              <p>
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
