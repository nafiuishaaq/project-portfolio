import React from "react";
import Button from "./Button";
const Services = ({ service }) => {
  const { image, title, body } = service;
  return (
    <div className="border p-4">
      <img src={image} alt="" />
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <Button message="Learn More" />
    </div>
  );
};

export default Services;
