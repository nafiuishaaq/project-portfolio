import React from "react";
import { Link } from "react-router-dom";

const PortfolioNav = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-10">
      <div className="text-[#363636] text-[24px] font-semibold">
        Projects Portfolio
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <Link to="/portfolio" className="text-[#376B65] border-b-2">
          All
        </Link>
        <Link to="/portfolio/residential">Residential</Link>
        <Link to="/portfolio/commercial">Commercial</Link>
      </div>
    </div>
  );
};

export default PortfolioNav;
