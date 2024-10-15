import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ServicesNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div>
      <div className="flex flex-col gap-4 font-semibold mb-10">
        <Link
          to="/services"
          className={`relative flex items-center ${
            isActive("/services") ? "text-green-600 font-bold" : "text-gray-500"
          }`}
        >
          {/* Circle behind the text */}
          {isActive("/services") && (
            <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
          )}
          <span className="ml-6">
            Building and Civil Engineering Contractor
          </span>
        </Link>

        <Link
          to="/services/consultancy"
          className={`relative flex items-center ${
            isActive("/services/consultancy")
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }`}
        >
          {/* Circle behind the text */}
          {isActive("/services/consultancy") && (
            <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
          )}
          <span className="ml-6">Consultancy Services</span>
        </Link>

        <Link
          to="/services/construction"
          className={`relative flex items-center ${
            isActive("/services/construction")
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }`}
        >
          {/* Circle behind the text */}
          {isActive("/services/construction") && (
            <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
          )}
          <span className="ml-6">Construction Designs</span>
        </Link>

        <Link
          to="/services/project"
          className={`relative flex items-center ${
            isActive("/services/project")
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }`}
        >
          {/* Circle behind the text */}
          {isActive("/services/project") && (
            <span className="absolute left-0 w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
          )}
          <span className="ml-6">Project Management</span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesNav;
