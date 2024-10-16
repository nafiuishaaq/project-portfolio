import React from "react";
import { GoLocation } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="p-10 md:p-14">
        <h1 className="text-[40px] md:text-[60px] my-3 font-impara">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border p-10">
            <p className="font-bold font-proxima mb-5 flex items-center gap-1">
              <GoLocation /> Address
            </p>
            <h2 className="font-proxima mb-4">
              CA 12 & 13 Apo Spark Light Mall, Opposite Living Faith Church,
              Durumi, Abuja, FCT, Nigeria
            </h2>

            <p className="font-proxima">+234 703 164 4355</p>
          </div>

          <div className="border p-10">
            <p className="font-bold font-proxima mb-5 flex items-center gap-3">
              <FaRegEnvelope /> Write to us
            </p>
            <button className="font-proxima bg-green-950 px-7 py-2 text-white flex items-center gap-3">
              Contact Us <LiaLongArrowAltRightSolid />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
