import React from "react";
import project1 from "../assets/balewa.svg";
import project2 from "../assets/degel.svg";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Development along Tafawa Balewa Way Kaduna",
      location: "Kaduna",
      type: "Renovation",
      imgSrc: project1, // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Residential Development along Tafawa Balewa Way Kaduna",
      location: "Kaduna",
      type: "Renovation",
      imgSrc: project2, // Replace with the actual image URL
    },
  ];

  return (
    <div className="bg-[#221314] text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm  mt-2">
                {project.type} • {project.location}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#C2957A] text-black px-6 py-2 hover:bg-amber-400 transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
