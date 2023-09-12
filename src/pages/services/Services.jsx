import React from "react";
import ServicesCard from "./components/ServicesCard";
import { services } from "./components/services-data";

const Services = () => {
  return (
    <div className="layout">
      {services.map((d) => (
        <ServicesCard cardClass="" {...d} />
      ))}
    </div>
  );
};

export default Services;
