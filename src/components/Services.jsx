import React from "react";

const Services = ({ service }) => {
  const { image, title, body, button } = service;
  return (
    <div className="border p-4">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{body}</p>
      <button>{button}</button>
    </div>
  );
};

export default Services;
