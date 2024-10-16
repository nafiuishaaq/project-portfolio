import React from "react";
import ProjectCard from "../components/ProjectCard";
import PortfolioNav from "../components/PortfolioNav";

// Example images (replace with actual image paths)
import project1 from "../assets/degel.svg";
import project2 from "../assets/chikun.svg";
import project3 from "../assets/balewa.svg";

const projects = [
  {
    imageSrc: project1,
    title: "Residential Development along Tafawa Balewa Way Kaduna",
    location: "Renovation • Kaduna",
  },
  {
    imageSrc: project2,
    title: "Residential Development at Degel Road, Kaduna",
    location: "Renovation • Kaduna",
  },
  {
    imageSrc: project3,
    title: "Proposed Construction of Rigachikun Market",
    location: "Renovation • Kaduna",
  },
];
const ResidentialPage = () => {
  return (
    <div className="flex flex-col items-center mb-28">
      <PortfolioNav />
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-8 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            location={project.location}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ResidentialPage;
