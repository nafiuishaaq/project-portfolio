import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Button = ({ message, textColor }) => {
  return (
    <div>
      <button
        type="button"
        className={` ${textColor} border py-1 mt-5 px-8 flex justify-center items-center gap-2`}
      >
        {message} <CgArrowLongRight />
      </button>
    </div>
  );
};

export default Button;
