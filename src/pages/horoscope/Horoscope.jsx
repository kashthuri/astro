import React from "react";
import { Outlet } from "react-router-dom";

const Horoscope = () => {
  return (
    <div className="layout relative top-[80px] m-auto">
      <div>Horoscope</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Horoscope;
