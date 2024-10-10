import React from "react";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="p-10 md:p-14">
        <h1 className="text-[40px] md:text-[60px] my-3">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border p-10">
            <p className="font-bold">Address</p>
            <h2>
              CA 12 & 13 Apo Spark Light Mall, Opposite Living Faith Church,
              Durumi, Abuja, FCT, Nigeria
            </h2>

            <p>+234 703 164 4355</p>
          </div>

          <div className="border p-10">
            <p className="font-bold">Write to us</p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
