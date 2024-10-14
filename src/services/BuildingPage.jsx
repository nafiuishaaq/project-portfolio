import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesNav from "../components/ServicesNav";

const BuildingPage = () => {
  return (
    <div className=" md:grid grid-cols-2 px-10 md:px-14 py-20">
      <ServicesNav />
      <div>
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-8">
            Crafting Spacing and Experience
          </h1>

          <p>
            VBL provides seamless realization of your vision through our general
            contracting and consulting services. Our experienced team of young
            and versatile professionals, with expertise in multiple disciplines
            and vast experience in residential, commercial, hospitality, and
            recreational building, including the construction of civil
            engineering infrastructure, oversees the entire construction
            activity, ensuring strict compliance with budgets and timelines.
            From simple construction to complex high-rise buildings, renovation
            works, and civil and heavy engineering construction, our team
            delivers top-notch quality and exceptional value for your
            investment.
            <span>
              value for your investment. With VBL, you can trust that your
              project will be managed with utmost professionalism and attention
              to detail value for your investment.
            </span>
          </p>
        </div>

        <FeaturedProjects />
      </div>
    </div>
  );
};

export default BuildingPage;
