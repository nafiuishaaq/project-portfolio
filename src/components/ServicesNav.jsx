import React from "react";
import { Link } from "react-router-dom";

const ServicesNav = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 font-semibold">
        <Link to="/services">Building and Civil Engineering Contractor</Link>
        <Link to="/services/consultancy">Consultancy Services</Link>
        <Link to="/services/construction">Construction Designs</Link>
        <Link to="/services/project">Project Management</Link>
      </div>
    </div>
  );
};

export default ServicesNav;
