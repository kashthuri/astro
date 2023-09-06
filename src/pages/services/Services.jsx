import React from "react";
import ServicesCard from "./components/ServicesCard";
import { services } from "./components/services-data";

const Services = () => {
  return (
    <div className="layout even:flex-row-reverse">
      {services.map((d) => (
        <ServicesCard cardClass="" {...d} />
      ))}
    </div>
  );
};

export default Services;
