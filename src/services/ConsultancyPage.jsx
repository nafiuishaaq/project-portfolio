import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesNav from "../components/ServicesNav";

const ConsultancyPage = () => {
  return (
    <div className=" md:grid grid-cols-2 px-10 md:px-14 py-20">
      <ServicesNav />
      <div>
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-8">Consultancy Services</h1>

          <p>
            Consult with us for expert advice and innovative solutions
            throughout your project. Our dynamic and knowledgeable team of
            professionals brings a multi-disciplinary approach to every project,
            providing insights and ideas that result in outstanding outcomes. We
            collaborate closely with our clients, ensuring their vision is fully
            understood and integrated into the project. With VBL, you can expect
            excellence and value for your money.
          </p>
        </div>

        <FeaturedProjects />
      </div>
    </div>
  );
};

export default ConsultancyPage;
