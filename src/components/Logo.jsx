import React from "react";
import logo from "../assets/logo.jpeg";

const Logo = () => {
  return (
    <div className="flex h-full w-full items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-light ">
        <img src={logo} alt="" className="" />
      </div>
      <div className="pl-2 font-against tracking-wider text-light">
        KASTHURI <br className="hidden sm:block" /> ASTROLOGY CENTER
      </div>
    </div>
  );
};

export default Logo;
