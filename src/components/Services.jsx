import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { image, title, body, link } = service;
  return (
    <div className="border p-4">
      <img src={image} alt="" />
      <h2 className="font-bold mb-5 font-proxima">{title}</h2>
      <p className="font-proxima">{body}</p>
      <Link to={link}>
        <Button message="Learn More" />
      </Link>
    </div>
  );
};

export default Services;
