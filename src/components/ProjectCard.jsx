// ProjectCard.js
import React from "react";

const ProjectCard = ({ imageSrc, title, location }) => {
  return (
    <div className="max-w-xs bg-white overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
