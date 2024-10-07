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

const serviceData = [
  {
    image: build,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
    button: "Learn More",
  },
  {
    image: consult,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
    button: "Learn More",
  },
  {
    image: design,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
    button: "Learn More",
  },
  {
    image: build,
    title: "Building and Civil Engineering Contractor`",
    body: "VBL provides seamless realization of your vision throughour general contracting and consulting services",
    button: "Learn More",
  },
];

const Home = () => {
  return (
    <div class="w-screen">
      <Header />
      <div>
        <img class="relative" src={hero} alt="" />
        <div class="absolute bottom-[350px] md:bottom-[-130px] left-0 top-4/4 w-3/5 md:w-3/5 ">
          <h1 class="text-white ml-[20px] md:ml-[100px] text-1xl md:text-6xl font-bold md:leading-[70px]">
            Embracing Tradition, Building the future.
          </h1>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-between p-14 gap-20">
        <p class="text-[22px]">
          Vernacular Build Limited (VBL) redefines the essence of Building
          Construction and Civil Engineering Infrastructure by recognising the
          interconnectedness of Architecture, Construction, the Environment, and
          Culture. Our approach combines excellence, innovation, and
          cutting-edge technology with a solid commitment to preserving the
          environment and promoting sustainable construction practices.
        </p>

        <div class="flex justify-center">
          <div class="bg-[#221314] w-full h-64"></div>
        </div>
      </div>

      <div className="p-14 h-screen">
        <h1 className="text-[60px] my-3">Why VBL?</h1>

        <div class="w-3/4 text-[25px]">
          <p class="weight-[400] italic">
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

      <div class="relative">
        {/* <!-- Curved Shape (using SVG) --> */}
        {/* <div class="absolute top-0 left-0 right-0 -mt-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#062b26"
              fill-opacity="1"
              d="M0,288L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div> */}

        <div class="absolute left-0 right-0 -mt-8 flex">
          <div class="bg-[red] w-80 h-80 rounded-full z-0"></div>
          <div class="bg-[#062b26] w-80 h-80 rounded-full z-1"></div>
          <div class="bg-[#062b26] w-80 h-80 rounded-full z-2"></div>
          <div class="bg-[#062b26] w-80 h-80 rounded-full z-3"></div>
          <div class="bg-[#062b26] w-80 h-80 rounded-full z-4"></div>
          <div class="bg-[#062b26] w-80 h-80 rounded-full z-6"></div>
        </div>

        {/* <!-- Projects Section --> */}
        <div class="bg-[#062b26] p-12 ">
          <div class="container mx-auto text-white px-4">
            {/* <!-- Title --> */}
            <h2 class="text-4xl font-bold mb-2">Projects</h2>
            <p class="text-lg mb-8">Featured projects</p>

            {/* <!-- Project Grid --> */}
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* <!-- Large Project on the left --> */}
              <div class="lg:col-span-2 relative">
                <img
                  src={balewa}
                  alt="Residential Development"
                  class="w-full h-full object-cover"
                />
                {/* <!-- Overlay Text --> */}
                <div class="absolute bottom-4 left-4 text-white">
                  <h3 class="text-xl font-bold">
                    Residential Development along Tafawa Balewa Way Kaduna
                  </h3>
                  <p>Renovation • Kaduna</p>
                </div>
              </div>
              {/* <!-- Two Small Projects on the right --> */}
              <div class="grid grid-rows-2 gap-8">
                {/* <!-- Project 2 --> */}
                <div class="relative">
                  <img
                    src={degel}
                    alt="Residential Development at Degel Road, Kaduna"
                    class="w-full h-full object-cover"
                  />
                  {/* <!-- Overlay Text --> */}
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-xl font-bold">
                      Residential Development at Degel Road, Kaduna
                    </h3>
                    <p>Design & Construction • Kaduna</p>
                  </div>
                </div>
                {/* <!-- Project 3 --> */}
                <div class="relative">
                  <img
                    src={chikun}
                    alt="Proposed Construction of Rigachikun Market"
                    class="w-full h-full object-cover"
                  />
                  {/* <!-- Overlay Text --> */}
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-xl font-bold">
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

      <div className="h-screen p-14">
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
    </div>
  );
};

export default Home;
