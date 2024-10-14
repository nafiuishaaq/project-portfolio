import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesNav from "../components/ServicesNav";

const ConstructionPage = () => {
  return (
    <div className=" md:grid grid-cols-2 px-10 md:px-14 py-20">
      <ServicesNav />
      <div>
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-8">Construction Designs`</h1>

          <p>
            At VBL, we prioritize culturally diverse and modernistic designs
            that reflect your lifestyle, preferences, and culture. Our team of
            talented architects and designers, with their diverse backgrounds
            and expertise, bring fresh perspectives and innovative ideas to
            every project. We utilize state-of-the-art tools and technologies to
            provide you with realistic 3D previews, ensuring a clear
            understanding of the vision before construction begins. With VBL,
            you can trust that our experienced professionals will deliver
            exceptional designs that exceed your expectations.
          </p>
        </div>

        <FeaturedProjects />
      </div>
    </div>
  );
};

export default ConstructionPage;
