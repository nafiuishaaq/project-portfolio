import React from "react";
import Header from "../components/Header";
import hero from "../assets/hero-home.svg";
import chikun from "../assets/chikun.svg";
import balewa from "../assets/balewa.svg";
import degel from "../assets/degel.svg";
import Services from "../components/Services";
import build from "../assets/building.svg";
import consult from "../assets/consult.svg";
import design from "../assets/design.svg";
import svg from "../assets/Frame.svg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const serviceData = [
  {
    image: build,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
  },
  {
    image: consult,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
  },
  {
    image: design,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
  },
  {
    image: build,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
  },
];

const Home = () => {
  return (
    <div>
      <Header textColor="text-gray-500" />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          linearGradient: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 className="absolute text-5xl ml-[1rem] top-[22rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[22rem] lg:w-3/5 lg:leading-[70px]  font-bold text-white">
          Embracing Tradition, Building the future.
        </h1>
      </div>

      <div className="grid grid-cols-1 p-10 md:grid-cols-2 items-center justify-between md:p-14 gap-10">
        <p className="text-[22px]">
          Vernacular Build Limited (VBL) redefines the essence of Building
          Construction and Civil Engineering Infrastructure by recognising the
          interconnectedness of Architecture, Construction, the Environment, and
          Culture. Our approach combines excellence, innovation, and
          cutting-edge technology with a solid commitment to preserving the
          environment and promoting sustainable construction practices.
        </p>

        <div className="flex justify-center">
          <div className="bg-[#221314] w-full h-64"></div>
        </div>
      </div>

      <div className="md:px-14 p-10 pt-2 pb-40">
        <h1 className="text-[40px] md:text-[60px] mb-3">Why VBL?</h1>

        <div className="md:w-4/5 w-full text-[25px]">
          <p className="weight-[400] italic">
            At Vernacular Build Limited, we're driven to expand our influence in
            the Building Construction and Engineering sphere. Our exceptional
            approach and ideas transcend borders, incorporating unique cultural
            elements into projects worldwide. With cutting-edge technology at
            the forefront, we stay ahead of the curve in the evolving
            construction niche.
          </p>
        </div>

        {/* <div className="absolute bottom-[5rem] -left-[10rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[3rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[13rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[23rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[33rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[43rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[53rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[63rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[73rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[83rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[93rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div>
        <div className="absolute bottom-[5rem] left-[103rem] w-[20rem] h-[20rem] rounded-full bg-[#062b26] z-20"></div> */}
      </div>

      <div className="relative">
        <div className="absolute md:-top-6 -top-3 lg:-top-9">
          <img className="w-full h-auto" src={svg} alt="" />
        </div>

        {/* <!-- Projects Section --> */}
        <div className="bg-[#003328]">
          <div className="container text-white p-10 md:p-14">
            {/* <!-- Title --> */}
            <h2 className="text-[40px] md:text-[60px] mb-3">Projects</h2>
            <p className="text-lg mb-8">Featured projects</p>

            {/* <!-- Project Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* <!-- Large Project on the left --> */}
              <div className="lg:col-span-2 relative">
                <img
                  src={balewa}
                  alt="Residential Development"
                  className="w-full h-full object-cover"
                />
                {/* <!-- Overlay Text --> */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">
                    Residential Development along Tafawa Balewa Way Kaduna
                  </h3>
                  <p>Renovation • Kaduna</p>
                </div>
              </div>
              {/* <!-- Two Small Projects on the right --> */}
              <div className="grid grid-rows-2 gap-8">
                {/* <!-- Project 2 --> */}
                <div className="relative">
                  <img
                    src={degel}
                    alt="Residential Development at Degel Road, Kaduna"
                    className="w-full h-full object-cover"
                  />
                  {/* <!-- Overlay Text --> */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">
                      Residential Development at Degel Road, Kaduna
                    </h3>
                    <p>Design & Construction • Kaduna</p>
                  </div>
                </div>
                {/* <!-- Project 3 --> */}
                <div className="relative">
                  <img
                    src={chikun}
                    alt="Proposed Construction of Rigachikun Market"
                    className="w-full h-full object-cover"
                  />
                  {/* <!-- Overlay Text --> */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">
                      Proposed Construction of Rigachikun Market
                    </h3>
                    <p>Consultancy Services • Kaduna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-14">
        <div className="mb-10">
          <h1 className="text-[40px] md:text-[60px] my-3">Our Services</h1>
          <p className="md:w-2/4 text-[25px]">
            We have a well-defined team of experts with vast experience in
            handling multidisciplinary projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceData.map((service, index) => (
            <Services service={service} key={index} />
          ))}
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
