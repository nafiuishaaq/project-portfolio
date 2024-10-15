import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PortfolioNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-10">
      <div className="text-[#363636] text-[24px] font-semibold">
        Projects Portfolio
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <Link
          to="/portfolio"
          className={` ${
            isActive("/portfolio") ? "text-[#376B65] border-b-2" : ""
          }`}
        >
          All
        </Link>
        <Link
          to="/portfolio/residential"
          className={
            isActive("/portfolio/residential")
              ? "text-[#376B65] border-b-2"
              : ""
          }
        >
          Residential
        </Link>
        <Link
          to="/portfolio/commercial"
          className={
            isActive("/portfolio/commercial") ? "text-[#376B65] border-b-2" : ""
          }
        >
          Commercial
        </Link>
      </div>
    </div>
  );
};

export default PortfolioNav;
